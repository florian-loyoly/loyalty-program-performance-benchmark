#!/usr/bin/env node
/**
 * sync-sheet.js — Sync benchmark KPIs from Google Sheets → data.js
 * Usage: node sync-sheet.js
 */

const https = require("https");
const fs    = require("fs");
const path  = require("path");

// ── Config ────────────────────────────────────────────────────────────────────
const SHEET_ID = "1vQfsPx-gR_dEMkdXTR_3iKRG5b0Jzrg48oK7EhtGmvQ";
const API_KEY  = "AIzaSyBMDRhZmWKSerBuuyxTSf65lFA9_9dM1j0";
const TAB_SECTORS = "Tableau croisé dynamique 1";
const TAB_GLOBAL  = "Tableau croisé dynamique 2";

// Sheet sector names → data.js sector IDs
const SECTOR_MAP = {
  "Beauty & Wellness":  "beauty",
  "Fashion & Apparel":  "fashion",
  "Food & Beverages":   "food",
  "Health & Supplements": "health",
  "Home & Decoration":  "home",
  "Petcare":            "petcare",
  "Sports & Fitness":   "sports",
};

// Sheet KPI labels → data.js KPI IDs
const KPI_MAP = {
  "AVERAGE de Activation Rate":        "activation_rate",
  "AVERAGE de Points usage rate":      "points_usage_rate",
  "AVERAGE de Reward redemption rate": "redemption_rate",
  "AVERAGE de Referral Conversion Rate": "referral_conversion",
  "AVERAGE de New clients rate":       "new_customer_rate",
  "AVERAGE de Participation rate":     "participation_rate",
  "AVERAGE de AOV growth":             "aov_growth",
  "AVERAGE de Order growth":           "orders_growth",
  "AVERAGE de LTV growth":             "ltv_growth",
  "AVERAGE de ROI":                    "roi",
};

// ── Fetch ─────────────────────────────────────────────────────────────────────
function fetchSheet(tab) {
  return new Promise((resolve, reject) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(tab)}?key=${API_KEY}`;
    https.get(url, res => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on("error", reject);
  });
}

// ── Parse ─────────────────────────────────────────────────────────────────────
function parseFloat_fr(str) {
  // French locale uses comma as decimal separator
  return parseFloat(str.replace(",", "."));
}

function parsePivot(rows) {
  const result = {};
  let currentSector = null;

  for (const row of rows) {
    const col0 = (row[0] || "").trim();
    const col1 = (row[1] || "").trim();
    const col2 = (row[2] || "").trim();

    // New sector row
    if (col0 && SECTOR_MAP[col0]) {
      currentSector = SECTOR_MAP[col0];
      result[currentSector] = {};
      // First KPI is on the same row as the sector name
      if (col1 && KPI_MAP[col1] && col2) {
        result[currentSector][KPI_MAP[col1]] = parseFloat_fr(col2);
      }
    } else if (currentSector && col1 && KPI_MAP[col1] && col2) {
      result[currentSector][KPI_MAP[col1]] = parseFloat_fr(col2);
    }
    // Skip "Total général" and header rows
  }

  return result;
}

// ── Update data.js ────────────────────────────────────────────────────────────
function updateDataJs(sectorKpis) {
  const filePath = path.join(__dirname, "data.js");
  let content = fs.readFileSync(filePath, "utf8");

  let updatedCount = 0;

  for (const [sectorId, kpis] of Object.entries(sectorKpis)) {
    // Build the new kpis block (two lines, matches existing format)
    const ids1 = ["activation_rate","points_usage_rate","redemption_rate","referral_conversion","new_customer_rate","participation_rate"];
    const ids2 = ["aov_growth","orders_growth","ltv_growth","roi"];
    const line1 = ids1.map(k => `${k}: ${kpis[k] ?? "?"}`).join(", ");
    const line2 = ids2.map(k => `${k}: ${kpis[k] ?? "?"}`).join(", ");
    const newKpisBlock = `      kpis: {\n        ${line1},\n        ${line2}\n      },`;

    // Find the sector block: locate id: "sectorId", then find the next kpis: { ... },
    const idMarker = `id: "${sectorId}"`;
    const idPos = content.indexOf(idMarker);
    if (idPos === -1) { console.warn(`  ⚠ Sector id not found: ${sectorId}`); continue; }

    const kpisStart = content.indexOf("      kpis: {", idPos);
    if (kpisStart === -1) { console.warn(`  ⚠ kpis block not found for: ${sectorId}`); continue; }

    const kpisEnd = content.indexOf("      },", kpisStart) + "      },".length;
    if (kpisEnd === -1) { console.warn(`  ⚠ kpis closing not found for: ${sectorId}`); continue; }

    content = content.slice(0, kpisStart) + newKpisBlock + content.slice(kpisEnd);
    updatedCount++;
  }

  fs.writeFileSync(filePath, content, "utf8");
  return updatedCount;
}

// ── Update GLOBAL in data.js ──────────────────────────────────────────────────
function updateGlobal(globalKpis) {
  const filePath = path.join(__dirname, "data.js");
  let content = fs.readFileSync(filePath, "utf8");

  const ids1 = ["activation_rate","points_usage_rate","redemption_rate","referral_conversion","new_customer_rate","participation_rate"];
  const ids2 = ["aov_growth","orders_growth","ltv_growth","roi"];
  const line1 = ids1.map(k => `${k}: ${globalKpis[k] ?? "?"}`).join(", ");
  const line2 = ids2.map(k => `${k}: ${globalKpis[k] ?? "?"}`).join(", ");
  const newBlock = `  // ---- Global cross-sector averages (sourced from Google Sheet pivot table) --\n  const GLOBAL = {\n    ${line1},\n    ${line2}\n  };`;

  const pattern = /  \/\/ ---- Global cross-sector averages[\s\S]*?const GLOBAL = \{[\s\S]*?\};/m;
  const updated = content.replace(pattern, newBlock);

  if (updated === content) { console.warn("  ⚠ Could not update GLOBAL"); return false; }
  fs.writeFileSync(filePath, updated, "utf8");
  return true;
}

// ── Parse pivot 2 (global averages, one row per KPI) ─────────────────────────
function parseGlobal(rows) {
  const result = {};
  for (const row of rows) {
    const label = (row[0] || "").trim();
    const value = (row[1] || "").trim();
    if (KPI_MAP[label] && value) {
      result[KPI_MAP[label]] = parseFloat_fr(value);
    }
  }
  return result;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  // Sector KPIs
  console.log(`Fetching: ${TAB_SECTORS}…`);
  const sheet1 = await fetchSheet(TAB_SECTORS);
  const sectorKpis = parsePivot(sheet1.values || []);
  const sectors = Object.keys(sectorKpis);
  console.log(`Found data for: ${sectors.join(", ")}`);

  // Global averages
  console.log(`Fetching: ${TAB_GLOBAL}…`);
  const sheet2 = await fetchSheet(TAB_GLOBAL);
  const globalKpis = parseGlobal(sheet2.values || []);
  console.log(`Global KPIs: ${Object.entries(globalKpis).map(([k,v])=>`${k}=${v}`).join("  ")}`);

  console.log("\nUpdating data.js…");
  const count = updateDataJs(sectorKpis);
  console.log(`✓ Updated ${count}/${sectors.length} sectors`);
  const ok = updateGlobal(globalKpis);
  console.log(ok ? "✓ Updated GLOBAL averages" : "✗ GLOBAL update failed");

  console.log("\nNext step: review with `git diff data.js`, then push to GitHub.");
}

main().catch(err => { console.error("Error:", err.message); process.exit(1); });
