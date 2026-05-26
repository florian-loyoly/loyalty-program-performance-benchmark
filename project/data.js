/* =============================================================
   Loyoly Benchmark 2026 — Mock data (English canonical)
   ─────────────────────────────────────────────────────────────
   Plausible figures modeled on Loyoly's positioning + public
   loyalty-program benchmarks. Read-only; in production this
   would be served by /api/global, /api/sectors, /api/kpis.

   STRING TRANSLATIONS for fr / es live in i18n.js (overlay).
   This file is the canonical structure + EN strings.
   ============================================================= */
(function () {
  // ---- KPI metadata --------------------------------------------------------
  // type: "rate" → 0-100 %, "growth" → uplift %, "roi" → multiplier
  // defaultViz: "ring" | "gauge" | "arc" (visual variety across KPIs)
  const KPIS = [
    {
      id: "activation_rate",
      name: "Activation rate",
      short: "Activation",
      category: "Transactional",
      type: "rate",
      defaultViz: "ring",
      unit: "%",
      definition: "Activation rate measures how quickly your loyalty program turns sign-ups into engaged members. It captures the share of opted-in customers who complete at least one earning or redeeming action within their first 30 days. A strong activation rate is the foundation of every metric downstream — members who never activate cannot earn, redeem, or refer.",
      formula: "Active members (30d) ÷ Enrolled members",
      formulaParts: { num: "Active members (30d)", denom: "Enrolled members" },
      tips: [
        { title: "Guided welcome mission",   body: "Trigger a guided welcome mission within the first 48 hours post-signup." },
        { title: "Reward the first action",   body: "Reward the very first action (review, follow, profile completion) with bonus points." },
        { title: "Show tier proximity",       body: "Use a progress bar showing tier proximity to nudge a second action." }
      ]
    },
    {
      id: "points_usage_rate",
      name: "Points usage rate",
      short: "Points usage",
      category: "Transactional",
      type: "rate",
      defaultViz: "gauge",
      unit: "%",
      definition: "Points usage rate reveals whether the points you award actually translate into behaviour change. It compares points spent against points issued over a rolling 12-month window. Low usage signals a hidden liability on your balance sheet — and unspent points mean members don't see enough value in the rewards catalog.",
      formula: "Points redeemed ÷ Points issued",
      formulaParts: { num: "Points redeemed", denom: "Points issued" },
      tips: [
        { title: "Soft expiration policy",       body: "Set a soft 12-month expiration with a 30-day reminder email." },
        { title: "Low-threshold micro-rewards",   body: "Offer instant micro-rewards (free shipping, sample) at low point thresholds." },
        { title: "Surface balance in the cart",   body: "Surface the points balance in the cart, not only in the account page." }
      ]
    },
    {
      id: "redemption_rate",
      name: "Reward redemption rate",
      short: "Redemption",
      category: "Transactional",
      type: "rate",
      defaultViz: "arc",
      unit: "%",
      definition: "Reward redemption rate is the moment of truth for any loyalty program — when an earned benefit becomes a real-world action. It tracks the share of active members who claim at least one reward over a 90-day window. High redemption correlates strongly with retention; the act of redeeming itself reinforces a member's identification with the brand.",
      formula: "Members with a redemption (90d) ÷ Active members",
      formulaParts: { num: "Members with redemption (90d)", denom: "Active members" },
      tips: [
        { title: "Lower the first threshold",     body: "Lower the entry-level reward threshold so first-time redemption feels reachable." },
        { title: "Diversify the catalogue",        body: "Add reward variety: discounts, products, donations, exclusive drops." },
        { title: "'Reward ready' push",            body: "Send a personalised 'reward ready' push when a member crosses a threshold." }
      ]
    },
    {
      id: "referral_conversion",
      name: "Referral conversion rate",
      short: "Referral CVR",
      category: "Referral",
      type: "rate",
      defaultViz: "gauge",
      unit: "%",
      definition: "Referral conversion rate captures the efficiency of your word-of-mouth engine. It measures how many of the referral links members share end up converting into a paying first-time customer. A healthy referral CVR is one of the cheapest acquisition channels available — every conversion comes with an implicit endorsement and a built-in retention boost.",
      formula: "Referred orders ÷ Referral shares",
      formulaParts: { num: "Referred orders", denom: "Referral shares" },
      tips: [
        { title: "Double-sided rewards",        body: "Double-sided rewards (referrer + referee) outperform one-sided by ~2×." },
        { title: "Pre-populate share messages",  body: "Pre-populate share messages — friction kills referral conversion." },
        { title: "Add social proof",             body: "Show social proof (\"127 friends joined this month\") on the share screen." }
      ]
    },
    {
      id: "new_customer_rate",
      name: "New customer rate (from referrals)",
      short: "New from referral",
      category: "Referral",
      type: "rate",
      defaultViz: "arc",
      unit: "%",
      definition: "This indicator shows how much of your new-customer acquisition comes from existing members, versus paid and organic channels. It is a direct measure of program-driven growth, and one of the strongest predictors of long-term unit economics: referred customers tend to have higher LTV and lower churn than the average new buyer.",
      formula: "Referred new customers ÷ Total new customers",
      formulaParts: { num: "Referred new customers", denom: "Total new customers" },
      tips: [
        { title: "Promote post-purchase",   body: "Promote referral inside post-purchase emails — that's when intent peaks." },
        { title: "Layer onto VIP tiers",    body: "Layer referral on top of VIP tiers: higher tier → higher reward." },
        { title: "A/B test the reward type",body: "A/B test reward type (% off vs. fixed {currency} vs. points) per cohort." }
      ]
    },
    {
      id: "participation_rate",
      name: "Participation rate",
      short: "Participation",
      category: "Relational",
      type: "rate",
      defaultViz: "ring",
      unit: "%",
      definition: "Participation rate measures the depth of engagement — the share of members who complete at least one optional mission per quarter. Where activation captures the first action, participation captures the loop. A high participation rate signals a program that lives beyond points and discounts: a place where customers come back for the experience itself.",
      formula: "Members completing ≥1 mission ÷ Total members",
      formulaParts: { num: "Members with ≥1 mission", denom: "Total members" },
      tips: [
        { title: "Rotate missions monthly",  body: "Rotate missions monthly — novelty drives a +18% lift in participation." },
        { title: "Mix mission types",        body: "Mix social, content, and purchase missions so every persona has a path." },
        { title: "'Wrapped' recap email",    body: "Recap completed missions in a 'wrapped' email to reinforce identity." }
      ]
    },
    {
      id: "ltv_growth",
      name: "LTV growth",
      short: "LTV growth",
      category: "Business",
      type: "growth",
      defaultViz: "bar",
      unit: "%",
      definition: "LTV growth quantifies how much more a loyalty member is worth over 12 months versus a comparable non-member cohort. It is the single most important indicator of program health because it ties every action — earning, redeeming, missions, referrals — back to a concrete revenue outcome. Strong LTV growth pays for the entire program many times over.",
      formula: "(LTV_members − LTV_non-members) ÷ LTV_non-members",
      formulaParts: { num: "LTV(members) − LTV(non-members)", denom: "LTV(non-members)" },
      tips: [
        { title: "Experiential VIP tiers",      body: "VIP tiers with experiential rewards beat pure-discount tiers on retention." },
        { title: "Personalised next mission",   body: "Trigger a personalised 'next best mission' after each purchase." },
        { title: "Win-back at 60 / 90 / 120 days", body: "Win-back missions at 60 / 90 / 120 days catch the lapse before it sets." }
      ]
    },
    {
      id: "aov_growth",
      name: "AOV growth",
      short: "AOV growth",
      category: "Business",
      type: "growth",
      defaultViz: "bar",
      unit: "%",
      definition: "AOV growth tracks the basket-size uplift when a member redeems points at checkout, versus their own non-redemption baskets. It captures the program's ability to push members up a basket tier without eroding margin. A strong AOV growth signal validates the reward thresholds you've designed and the bundles offered in the catalogue.",
      formula: "(AOV_with_redemption − AOV_without) ÷ AOV_without",
      formulaParts: { num: "AOV(with redemption) − AOV(without)", denom: "AOV(without)" },
      tips: [
        { title: "Cap point-discount value",     body: "Cap point-discount value so redemption pushes members up a basket tier." },
        { title: "Bonus mission above median",   body: "Offer a bonus-point mission on baskets above the AOV median." },
        { title: "Bundle rewards beat flat",     body: "Bundle rewards (e.g. free gift over {currency}X) outperform flat discounts." }
      ]
    },
    {
      id: "orders_growth",
      name: "Orders growth",
      short: "Orders growth",
      category: "Business",
      type: "growth",
      defaultViz: "bar",
      unit: "%",
      definition: "Orders growth measures the increase in purchase frequency among members versus a comparable non-member cohort over 12 months. It reveals whether the program closes the time gap between purchases — through reminders, missions and tier incentives that pull a member back into the funnel before they would have returned naturally. It is the most direct frequency-side counterpart to AOV growth.",
      formula: "(Orders_per_member − Orders_per_non-member) ÷ Orders_per_non-member",
      formulaParts: { num: "Orders/member − Orders/non-member", denom: "Orders/non-member" },
      tips: [
        { title: "Anniversary missions",       body: "Birthday and anniversary missions create natural re-purchase triggers." },
        { title: "Tier expiration timers",     body: "Tier expiration timers (\"keep your VIP status\") accelerate the next order." },
        { title: "Cross-sell mission rewards", body: "Cross-sell mission rewards tied to a complementary product category." }
      ]
    },
    {
      id: "roi",
      name: "ROI",
      short: "ROI",
      category: "Business",
      type: "roi",
      defaultViz: "number",
      unit: "×",
      definition: "ROI measures the direct profitability of the loyalty program. It is the ultimate indicator for assessing the economic performance of a relationship strategy: it reflects the program's ability to convert customer engagement into measurable revenue. A good ROI demonstrates that, beyond the connection created with the community, the program generates profitable and sustainable growth.",
      formula: "(Incremental revenue − Program cost) ÷ Program cost",
      formulaParts: { num: "Incremental revenue − Program cost", denom: "Program cost" },
      tips: [
        { title: "Attribute incrementally",      body: "Attribute incrementally — exclude organic repeat buyers from the numerator." },
        { title: "Shift to mission rewards",     body: "Shift budget from blanket discounts to mission rewards (10× higher ROI)." },
        { title: "Measure quarterly",            body: "Measure quarterly — most programs hit positive ROI by month 5." }
      ]
    }
  ];

  // ---- Sectors -------------------------------------------------------------
  // `clients` is a representative-brand strip shown in the industry intro.
  // (Placeholder URLs/labels; in production these would link to live programs.)
  const SECTORS = [
    {
      id: "fashion",
      name: "Fashion & Apparel",
      short: "Fashion",
      icon: "shirt",
      brands: 112,
      intro: "Fashion brands lean on tiered loyalty to drive repeat purchases between seasonal drops. Members redeem early-access perks and VIP previews more than discounts — making participation high, but redemption value modest.",
      clients: [
        { name: "Maison Lune",  initials: "ML", color: "#2B251F" },
        { name: "Atelier 14",   initials: "A14", color: "#917F65" },
        { name: "North Wool",   initials: "NW", color: "#1F52D8" },
        { name: "Rive Gauche",  initials: "RG", color: "#0F0F0F" },
        { name: "Bloom & Co.",  initials: "BC", color: "#F74F9E" }
      ],
      kpis: {
        activation_rate: 42.1, points_usage_rate: 27.4, redemption_rate: 21.8,
        referral_conversion: 10.6, new_customer_rate: 7.9, participation_rate: 36.2,
        ltv_growth: 24.8, aov_growth: 13.1, orders_growth: 14.2, roi: 4.9
      },
      mission_impact: { aov: [78, 86, 94, 108, 121], ltv: [100, 132, 168, 211, 248], orders: [100, 118, 141, 172, 198] }
    },
    {
      id: "beauty",
      name: "Beauty & Wellness",
      short: "Beauty",
      icon: "sparkles",
      brands: 98,
      intro: "Beauty has the most mature loyalty playbooks. Members are highly engaged, redemption is frequent, and UGC missions (reviews, before/after) carry as much weight as point earning.",
      clients: [
        { name: "Glow Studio",  initials: "GS", color: "#F74F9E" },
        { name: "Pure Botanics", initials: "PB", color: "#10A370" },
        { name: "Velvet & Co",  initials: "VC", color: "#2B251F" },
        { name: "Aurora Skin",  initials: "AS", color: "#FEC229" },
        { name: "Onde",         initials: "ON", color: "#2965FE" }
      ],
      kpis: {
        activation_rate: 48.6, points_usage_rate: 31.9, redemption_rate: 26.4,
        referral_conversion: 13.8, new_customer_rate: 9.7, participation_rate: 41.5,
        ltv_growth: 28.3, aov_growth: 14.6, orders_growth: 18.4, roi: 5.8
      },
      mission_impact: { aov: [62, 71, 82, 96, 112], ltv: [100, 148, 194, 256, 312], orders: [100, 124, 152, 188, 224] }
    },
    {
      id: "food",
      name: "Food & Beverage",
      short: "Food",
      icon: "coffee",
      brands: 71,
      intro: "High-frequency category — small baskets, fast repurchase. Activation and points usage are excellent, but redemption value caps AOV uplift compared to other sectors.",
      clients: [
        { name: "Tartine",      initials: "TA", color: "#917F65" },
        { name: "Maison Café",  initials: "MC", color: "#52473C" },
        { name: "Le Tasting",   initials: "LT", color: "#2B251F" },
        { name: "Sip & Co.",    initials: "SC", color: "#FEC229" }
      ],
      kpis: {
        activation_rate: 44.3, points_usage_rate: 34.7, redemption_rate: 22.9,
        referral_conversion: 11.2, new_customer_rate: 8.1, participation_rate: 33.8,
        ltv_growth: 19.7, aov_growth: 7.4, orders_growth: 22.6, roi: 4.1
      },
      mission_impact: { aov: [22, 24, 26, 29, 32], ltv: [100, 138, 172, 214, 252], orders: [100, 132, 168, 211, 256] }
    },
    {
      id: "health",
      name: "Health & Supplements",
      short: "Health",
      icon: "leaf",
      brands: 64,
      intro: "Subscription-friendly category with the strongest LTV uplift. Members reactivate quickly via win-back missions; referral plays a bigger role than category average.",
      clients: [
        { name: "Vital",        initials: "VI", color: "#10A370" },
        { name: "Pure Source",  initials: "PS", color: "#2965FE" },
        { name: "Daily Ritual", initials: "DR", color: "#FEC229" },
        { name: "Nourish",      initials: "NO", color: "#52473C" }
      ],
      kpis: {
        activation_rate: 39.7, points_usage_rate: 22.1, redemption_rate: 16.4,
        referral_conversion: 14.9, new_customer_rate: 11.2, participation_rate: 28.6,
        ltv_growth: 31.4, aov_growth: 12.8, orders_growth: 16.9, roi: 5.3
      },
      mission_impact: { aov: [54, 59, 66, 74, 83], ltv: [100, 162, 224, 298, 372], orders: [100, 119, 142, 168, 194] }
    },
    {
      id: "home",
      name: "Home & Decoration",
      short: "Home",
      icon: "home",
      brands: 58,
      intro: "Long purchase cycles change the loyalty math. AOV growth is strong but participation and redemption lag — members forget the program between purchases, so re-engagement missions are critical.",
      clients: [
        { name: "Atelier Lin",  initials: "AL", color: "#917F65" },
        { name: "Maison Quai",  initials: "MQ", color: "#2B251F" },
        { name: "Form & Fold",  initials: "FF", color: "#52473C" },
        { name: "Habitat 9",    initials: "H9", color: "#1F52D8" }
      ],
      kpis: {
        activation_rate: 31.2, points_usage_rate: 18.6, redemption_rate: 12.7,
        referral_conversion: 9.4, new_customer_rate: 6.8, participation_rate: 22.1,
        ltv_growth: 17.9, aov_growth: 18.2, orders_growth: 8.7, roi: 3.8
      },
      mission_impact: { aov: [145, 168, 198, 234, 276], ltv: [100, 121, 144, 169, 196], orders: [100, 112, 128, 146, 164] }
    },
    {
      id: "petcare",
      name: "Petcare",
      short: "Petcare",
      icon: "pawprint",
      brands: 49,
      intro: "Petcare members are emotionally invested and convert friends fastest of any sector. Referral CVR is the strongest signal — pet parents talk to other pet parents.",
      clients: [
        { name: "Pawhouse",     initials: "PH", color: "#FEC229" },
        { name: "Tales & Co",   initials: "TC", color: "#917F65" },
        { name: "Nuzzle",       initials: "NZ", color: "#F74F9E" },
        { name: "Bowl",         initials: "BO", color: "#2965FE" }
      ],
      kpis: {
        activation_rate: 41.8, points_usage_rate: 26.3, redemption_rate: 19.4,
        referral_conversion: 17.2, new_customer_rate: 12.6, participation_rate: 34.7,
        ltv_growth: 25.6, aov_growth: 10.9, orders_growth: 17.3, roi: 5.1
      },
      mission_impact: { aov: [38, 42, 47, 53, 59], ltv: [100, 142, 188, 246, 304], orders: [100, 126, 156, 192, 228] }
    },
    {
      id: "sports",
      name: "Sports & Fitness",
      short: "Sports",
      icon: "dumbbell",
      brands: 52,
      intro: "Highly community-driven. Participation in mission-based programs is the highest of any sector, but margin compression keeps ROI behind beauty and health.",
      clients: [
        { name: "Track Lab",    initials: "TL", color: "#2B251F" },
        { name: "Outdoor 360",  initials: "O3", color: "#1F52D8" },
        { name: "Pulse",        initials: "PU", color: "#10A370" },
        { name: "Set & Co",     initials: "SC", color: "#FEC229" }
      ],
      kpis: {
        activation_rate: 37.4, points_usage_rate: 23.8, redemption_rate: 17.2,
        referral_conversion: 11.8, new_customer_rate: 8.3, participation_rate: 38.4,
        ltv_growth: 21.6, aov_growth: 9.7, orders_growth: 11.4, roi: 3.6
      },
      mission_impact: { aov: [68, 74, 82, 92, 103], ltv: [100, 128, 158, 192, 224], orders: [100, 122, 148, 178, 208] }
    }
  ];

  // ---- Categories ----------------------------------------------------------
  const CATEGORIES = [
    { id: "Transactional", label: "Transactional", blurb: "How members earn and spend in your program." },
    { id: "Referral",      label: "Referral",      blurb: "How members bring in new customers." },
    { id: "Relational",    label: "Relational",    blurb: "How deep the engagement loop runs." },
    { id: "Business",      label: "Business impact", blurb: "What the program does to revenue." }
  ];

  // ---- Global cross-sector averages ---------------------------------------
  const GLOBAL = (() => {
    const out = {};
    KPIS.forEach(k => {
      const vals = SECTORS.map(s => s.kpis[k.id]).filter(v => typeof v === "number");
      out[k.id] = +(vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
    });
    return out;
  })();

  const TOTAL_BRANDS = SECTORS.reduce((sum, s) => sum + s.brands, 0);

  // helpers (lang-agnostic; "pts" label is translated at call site via t())
  function classify(value, avg) {
    const delta = value - avg;
    if (Math.abs(delta) < (avg * 0.04)) return { tone: "neutral", delta };
    if (delta > 0) return { tone: "above", delta };
    return { tone: "below", delta };
  }
  function formatValue(kpi, v) {
    if (v == null || isNaN(v)) return "—";
    if (kpi.type === "roi") return v.toFixed(1) + "×";
    if (kpi.type === "growth") return "+" + v.toFixed(1) + "%";
    return v.toFixed(1) + "%";
  }
  function formatDelta(kpi, d, ptsLabel = "pts") {
    if (d == null || isNaN(d)) return "—";
    const sign = d >= 0 ? "+" : "";
    if (kpi.type === "roi") return sign + d.toFixed(1) + "×";
    return sign + d.toFixed(1) + " " + ptsLabel;
  }

  // Apply currency token to a string (replace {currency} → € / £ / etc.)
  function applyCurrency(str, currency) {
    if (typeof str !== "string") return str;
    return str.split("{currency}").join(currency);
  }

  // localize(lang, currency) returns a single-language data bundle.
  // If i18n.js loaded, merge translations. Otherwise return EN.
  function localize(lang, currency) {
    const I18N = window.LOYOLY_I18N || {};
    const tr = (I18N[lang]) || null;
    const cur = currency || "€";

    const localizeKpi = (k) => {
      const overlay = tr && tr.kpis && tr.kpis[k.id] || {};
      const tips = (overlay.tips || k.tips).map((t, i) => {
        // backward-compat: overlay may give a string (legacy) OR an object
        if (typeof t === "string") return { title: k.tips[i] && k.tips[i].title || "", body: applyCurrency(t, cur) };
        return { title: t.title || "", body: applyCurrency(t.body || "", cur) };
      });
      const fp = overlay.formulaParts || k.formulaParts;
      const formulaParts = fp ? { num: fp.num || "", denom: fp.denom || "" } : null;
      return { ...k,
        name:       overlay.name       || k.name,
        short:      overlay.short      || k.short,
        definition: overlay.definition || k.definition,
        formula:    overlay.formula    || k.formula,
        formulaParts,
        tips
      };
    };
    const localizeSector = (s) => {
      const overlay = tr && tr.sectors && tr.sectors[s.id] || {};
      return { ...s,
        name:  overlay.name  || s.name,
        short: overlay.short || s.short,
        intro: overlay.intro || s.intro
      };
    };
    const localizeCategory = (c) => {
      const overlay = tr && tr.categories && tr.categories[c.id] || {};
      return { ...c,
        label: overlay.label || c.label,
        blurb: overlay.blurb || c.blurb
      };
    };
    return {
      KPIS: KPIS.map(localizeKpi),
      SECTORS: SECTORS.map(localizeSector),
      CATEGORIES: CATEGORIES.map(localizeCategory),
      GLOBAL,
      TOTAL_BRANDS
    };
  }

  window.LOYOLY_DATA = {
    KPIS, SECTORS, CATEGORIES, GLOBAL, TOTAL_BRANDS,
    classify, formatValue, formatDelta,
    localize
  };
})();
