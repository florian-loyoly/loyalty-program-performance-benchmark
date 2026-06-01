/* global React, RateViz, GrowthBar, RoiNumber, SparklineArea, DeltaBadge, useInView */
/* ============================================================
   Loyoly Benchmark — Views (Overview / Industry / KPI)
   Uses LangContext for i18n + localized data.
   ============================================================ */
const { useState, useMemo, useEffect, useRef, createContext, useContext } = React;

const LangContext = createContext(null);
window.LangContext = LangContext;

// Helper hook
function useLang() { return useContext(LangContext); }

// ---------- Small icon set ----------
function Icon({ name, size = 16 }) {
  const c = "currentColor";
  const sw = 1.5;
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: c, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "shirt":    return <svg {...common}><path d="M4 7l4-3 2 2h4l2-2 4 3-2 4-2-1v10H8V10L6 11z"/></svg>;
    case "sparkles": return <svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/><circle cx="12" cy="12" r="2.5"/></svg>;
    case "coffee":   return <svg {...common}><path d="M4 8h12v6a4 4 0 01-4 4H8a4 4 0 01-4-4V8z"/><path d="M16 9h2a3 3 0 010 6h-2"/><path d="M7 3v2M10 3v2M13 3v2"/></svg>;
    case "leaf":     return <svg {...common}><path d="M5 19c0-7 5-12 14-13-1 9-6 14-14 13z"/><path d="M5 19l7-7"/></svg>;
    case "home":     return <svg {...common}><path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/></svg>;
    case "pawprint": return <svg {...common}><circle cx="6" cy="11" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="11" r="2"/><path d="M8 18c0-2.5 2-4 4-4s4 1.5 4 4-1.5 3-4 3-4-.5-4-3z"/></svg>;
    case "dumbbell": return <svg {...common}><path d="M3 9v6M5 7v10M9 6v12M15 6v12M19 7v10M21 9v6"/><path d="M9 12h6"/></svg>;
    case "zap":        return <svg {...common}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
    case "coins":      return <svg {...common}><circle cx="8" cy="14" r="5"/><path d="M10.3 9A5 5 0 1 1 16 14.7"/><circle cx="16" cy="10" r="5"/></svg>;
    case "gift":       return <svg {...common}><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>;
    case "share-2":    return <svg {...common}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>;
    case "user-plus":  return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg>;
    case "users":      return <svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "trending-up": return <svg {...common}><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg>;
    case "shopping-cart": return <svg {...common}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
    case "package":    return <svg {...common}><path d="m16.5 9.4-9-5.19"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05"/><path d="M12 22.08V12"/></svg>;
    case "arrow-right": return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case "arrow-up-right": return <svg {...common}><path d="M7 17 17 7M8 7h9v9"/></svg>;
    case "download": return <svg {...common}><path d="M12 4v12M7 11l5 5 5-5M4 20h16"/></svg>;
    case "x":        return <svg {...common}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case "info":     return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M12 12v4"/></svg>;
    case "target":   return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill={c}/></svg>;
    case "chart":    return <svg {...common}><path d="M4 4v16h16"/><path d="M8 14l4-4 3 3 5-6"/></svg>;
    case "grid":     return <svg {...common}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
    case "globe":    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>;
    case "external": return <svg {...common}><path d="M7 17 17 7M8 7h9v9"/></svg>;
    default: return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

const KPI_ICONS = {
  activation_rate:      "zap",
  points_usage_rate:    "coins",
  redemption_rate:      "gift",
  referral_conversion:  "share-2",
  new_customer_rate:    "user-plus",
  participation_rate:   "users",
  ltv_growth:           "trending-up",
  aov_growth:           "shopping-cart",
  orders_growth:        "package",
  roi:                  "target",
};

// resolve which viz to render for a KPI given the user's variant choice
function resolveViz(kpi, override) {
  if (override === "auto" || !override) return kpi.defaultViz || "ring";
  // ratesonly variants override only the rate viz; growth/roi keep their natives
  if (kpi.type === "rate") return override;
  return kpi.defaultViz || "bar";
}

// ============================================================================
// VISUAL FORMULA — large legible math, alternative to <code> style
// ============================================================================
function VisualFormula({ kpi }) {
  const { t } = useLang();
  const p = kpi.formulaParts;
  if (!p) {
    return (
      <div className="bm-card__formula">
        <span className="bm-card__formula-lbl">{t("kv_formula_lbl")}</span>
        <code>{kpi.formula}</code>
      </div>
    );
  }
  return (
    <div className="bm-formula-vis" role="img" aria-label={kpi.formula}>
      <div className="bm-formula-vis__lbl">{t("kv_formula_lbl")}</div>
      <div className="bm-formula-vis__frac">
        <div className="bm-formula-vis__num">{p.num}</div>
        <div className="bm-formula-vis__bar"></div>
        <div className="bm-formula-vis__denom">{p.denom}</div>
      </div>
    </div>
  );
}

// ============================================================================
// KPI CARD
// ============================================================================
function KpiCard({ kpi, value, benchmark, vizOverride, formulaStyle = "visual", showDelta = true, index = 0, dark, onClick }) {
  const { t, formatValue, classify } = useLang();
  const v = value;
  const cmp = (benchmark != null) ? classify(v, benchmark) : null;
  const variant = resolveViz(kpi, vizOverride);

  let body;
  if (kpi.type === "rate") {
    body = <RateViz variant={variant} value={v} benchmark={benchmark != null && showDelta ? benchmark : null} dark={dark} />;
  } else if (kpi.type === "growth") {
    body = <GrowthBar value={v} benchmark={benchmark} max={Math.max(40, Math.ceil(v / 5) * 5 + 5)} dark={dark} />;
  } else if (kpi.type === "roi") {
    const spark = [v * 0.55, v * 0.7, v * 0.78, v * 0.9, v];
    body = <RoiNumber value={v} benchmark={benchmark} sparkData={spark} dark={dark} size="md" />;
  }

  const clickable = !!onClick;
  const formula = (
    <div className="bm-card__formula-q">
      <b>{t("kv_formula_lbl")}</b>
      <code>{kpi.formula}</code>
    </div>
  );

  return (
    <div className={"bm-card" + (clickable ? " bm-card--clickable" : "")}
         style={{ "--stagger": (index * 70) + "ms" }}
         onClick={onClick}
         role={clickable ? "button" : undefined}
         tabIndex={clickable ? 0 : undefined}
         onKeyDown={clickable ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } } : undefined}>
      <div className="bm-card__head">
        <div className="bm-card__title">
          <span className="bm-card__ic"><Icon name={KPI_ICONS[kpi.id] || "grid"} size={15} /></span>
          {kpi.type === "rate" ? t("kpi_nav_" + kpi.id) : (kpi.short || kpi.name)}
        </div>
        {showDelta && cmp && (
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 10, color: "var(--fg-faint)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>vs. {t("card_avg_prefix")}</span>
            <DeltaBadge delta={cmp.delta} type={kpi.type} ptsLabel={t("pts")} />
          </div>
        )}
      </div>
      <p className="bm-card__def">{kpi.definition.split(". ")[0] + "."}</p>
      <div className="bm-card__body">{body}</div>
      {formula}
      {clickable && (
        <div className="bm-card__open">
          <span>{t("card_view_kpi")}</span>
          <Icon name="arrow-right" size={11} />
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MISSION IMPACT CHART
// ============================================================================
function MissionImpactChart({ data, dark }) {
  const { t } = useLang();
  const W = 720, H = 240;
  const padding = { l: 40, r: 24, t: 24, b: 36 };
  const innerW = W - padding.l - padding.r;
  const innerH = H - padding.t - padding.b;
  const series = [
    { id: "ltv",    name: t("mc_series_ltv"),    color: "var(--blue-primary)", data: data.ltv },
    { id: "orders", name: t("mc_series_orders"), color: "var(--pampas-700)",   data: data.orders },
    { id: "aov",    name: t("mc_series_aov"),    color: "var(--yellow-primary)", data: data.aov.map(v => (v / data.aov[0]) * 100) }
  ];
  const allVals = series.flatMap(s => s.data);
  const yMax = Math.ceil(Math.max(...allVals) / 50) * 50;
  const yMin = 80;
  const x = (i) => padding.l + (i / 4) * innerW;
  const y = (v) => padding.t + (1 - (v - yMin) / (yMax - yMin)) * innerH;
  const yTicks = useMemo(() => {
    const step = Math.ceil((yMax - yMin) / 4 / 25) * 25;
    const out = [];
    for (let v = yMin; v <= yMax; v += step) out.push(v);
    return out;
  }, [yMin, yMax]);

  const [ref, seen] = useInView();
  const [hover, setHover] = useState(null);
  // Fallback: trigger reveal on mount in case IntersectionObserver doesn't fire
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);
  const reveal = (seen || mounted) ? 1 : 0;
  const labelMission = (i) => i === 1 ? t("mc_axis_mission_one") : t("mc_axis_mission_n");

  return (
    <div className="bm-chart-card">
      <div className="bm-chart-card__head">
        <div>
          <div className="bm-eyebrow" style={{ marginBottom: 6 }}>{t("mc_eyebrow")}</div>
          <h3 className="bm-h3" style={{ fontSize: 20 }}>{t("mc_title")}</h3>
          <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: "6px 0 0", maxWidth: "52ch" }}>{t("mc_body")}</p>
        </div>
        <div className="bm-chart-legend">
          {series.map(s => <span key={s.id}><i style={{ background: s.color }}></i>{s.name}</span>)}
        </div>
      </div>
      <div ref={ref} style={{ position: "relative" }}>
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
          {yTicks.map(v => (
            <g key={v}>
              <line x1={padding.l} y1={y(v)} x2={W - padding.r} y2={y(v)}
                    stroke={dark ? "rgba(255,255,255,0.08)" : "var(--pampas-200)"} strokeWidth="1" strokeDasharray={v === 100 ? "" : "2 4"} />
              <text x={padding.l - 8} y={y(v) + 3} textAnchor="end"
                    fontSize="10" fill={dark ? "var(--pampas-400)" : "var(--fg-faint)"} fontFamily="var(--font-body)">{v}</text>
            </g>
          ))}
          {[0,1,2,3,4].map(i => (
            <text key={i} x={x(i)} y={H - 12} textAnchor="middle"
                  fontSize="11" fill={dark ? "var(--pampas-300)" : "var(--fg-muted)"} fontFamily="var(--font-body)">
              {i} {labelMission(i)}
            </text>
          ))}
          {series.map((s, si) => {
            const pts = s.data.map((v, i) => `${x(i)},${y(v)}`).join(" ");
            return (
              <g key={s.id} style={{
                opacity: reveal,
                transform: reveal ? "none" : "translateY(8px)",
                transition: `opacity 600ms ${si*120}ms ease, transform 600ms ${si*120}ms ease`
              }}>
                <polyline points={pts} fill="none" stroke={s.color} strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round" />
                {s.data.map((v, i) => (
                  <circle key={i} cx={x(i)} cy={y(v)} r="3.5" fill={dark ? "#1A1611" : "#fff"} stroke={s.color} strokeWidth="2" />
                ))}
              </g>
            );
          })}
          {[0,1,2,3,4].map(i => (
            <rect key={i} x={x(i) - innerW/8} y={padding.t} width={innerW/4} height={innerH}
                  fill="transparent"
                  onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} />
          ))}
          {hover != null && (
            <line x1={x(hover)} y1={padding.t} x2={x(hover)} y2={H - padding.b}
                  stroke={dark ? "rgba(255,255,255,0.18)" : "var(--pampas-300)"} strokeWidth="1" strokeDasharray="2 3" />
          )}
        </svg>
        {hover != null && (
          <div style={{
            position: "absolute",
            left: `calc(${(x(hover) / W) * 100}% - 90px)`, top: 0,
            width: 180, padding: "10px 12px",
            background: dark ? "#0F0F0F" : "var(--pampas-950)", color: "#fff",
            borderRadius: 8, boxShadow: "var(--shadow-pop)",
            fontSize: 12, pointerEvents: "none"
          }}>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>{hover} {labelMission(hover)}</div>
            {series.map(s => (
              <div key={s.id} style={{ display: "flex", justifyContent: "space-between", padding: "2px 0", color: "var(--pampas-200)" }}>
                <span><i style={{ display: "inline-block", width: 8, height: 8, borderRadius: 999, background: s.color, marginRight: 6 }}></i>{s.name}</span>
                <strong style={{ color: "#fff" }}>{Math.round(s.data[hover])}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// CLIENT LOGO STRIP (per sector — uses Loyoly logo as placeholder)
// ============================================================================
function ClientStrip({ sector }) {
  const { t } = useLang();
  return (
    <div className="bm-clients">
      <div className="bm-clients__head">
        <div className="bm-eyebrow">{t("iv_clients_eyebrow")}</div>
        <p>{t("iv_clients_body")}</p>
      </div>
      <ul className="bm-clients__list">
        {sector.clients.map((c, i) => (
          <li key={i}>
            <a className="bm-clients__item"
               href={c.url || "https://loyoly.io"}
               target="_blank" rel="noopener noreferrer"
               title={c.name}>
              <img src={c.logo} alt={c.name} className="bm-clients__logo" />
              <span className="bm-clients__hint"><Icon name="external" size={10} /></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// OVERVIEW VIEW
// ============================================================================
function OverviewView({ goTo, goToKpi, openBenchmark, vizOverride, formulaStyle, dark }) {
  const { t, data } = useLang();
  const { KPIS, SECTORS, GLOBAL, TOTAL_BRANDS } = data;

  return (
    <div className="bm-container">
      {/* Hero B — data-forward + wayfinding index */}
      <header className="bm-hero bm-hero--index">
        <div className="bm-hero__main">
          <div className="bm-eyebrow bm-hero__kicker">
            {t("hero_pill")} · 2026
          </div>
          <h1 className="bm-h1">
            {t("hero_h1_pre")}<br/><span style={{ color: "var(--blue-primary)" }}>{t("hero_h1_post")}</span>
          </h1>
          <p className="bm-lead" style={{ marginTop: 20, fontSize: 17 }}>{t("hero_lead", { n: TOTAL_BRANDS })}</p>
          <div style={{ display: "flex", gap: 10, marginTop: 26 }}>
            <button className="bm-btn bm-btn--primary bm-btn--lg" onClick={openBenchmark}>
              {t("benchmark_cta")}
              <Icon name="arrow-right" size={14} />
            </button>
            <button className="bm-btn bm-btn--secondary bm-btn--lg" onClick={() => goTo("industry")}>
              {t("hero_secondary_cta")}
            </button>
          </div>
        </div>
        <nav className="bm-hero__index" aria-label="Jump to a section">
          <button className="bm-hero__index-item" onClick={() => {
            const el = document.getElementById("bm-cross");
            if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top: y, behavior: "smooth" }); }
          }}>
            <span className="bm-hero__index-num">01</span>
            <span><span className="bm-hero__index-t">{t("nav_overview_label")}</span><span className="bm-hero__index-s">{t("nav_overview_sub")}</span></span>
            <span className="bm-hero__index-arrow"><Icon name="arrow-right" size={16} /></span>
          </button>
          <button className="bm-hero__index-item" onClick={() => goTo("industry")}>
            <span className="bm-hero__index-num">02</span>
            <span><span className="bm-hero__index-t">{t("nav_industry_label")}</span><span className="bm-hero__index-s">{t("nav_industry_sub")}</span></span>
            <span className="bm-hero__index-arrow"><Icon name="arrow-right" size={16} /></span>
          </button>
          <button className="bm-hero__index-item" onClick={() => goTo("kpi")}>
            <span className="bm-hero__index-num">03</span>
            <span><span className="bm-hero__index-t">{t("nav_kpi_label")}</span><span className="bm-hero__index-s">{t("nav_kpi_sub")}</span></span>
            <span className="bm-hero__index-arrow"><Icon name="arrow-right" size={16} /></span>
          </button>
        </nav>
      </header>

      {/* TWO WAYS IN */}
      <div className="bm-section-head">
        <div className="bm-section-head__left">
          <div className="bm-numhead">
            <span className="bm-numhead__n">01</span>
            <span className="bm-numhead__lbl">{t("sec01_eyebrow").replace(/^\s*\d+\s*[—–-]\s*/, "")}</span>
            <span className="bm-numhead__rule"></span>
          </div>
          <h2 className="bm-h2">{t("sec01_title")}</h2>
          <p style={{ marginTop: 10 }}>{t("sec01_lead")}</p>
        </div>
      </div>
      <div className="bm-entries bm-entries--prominent">
        <EntryCard
          letter="A"
          tone="yellow"
          eyebrow={t("entry_a_eyebrow")}
          title={t("entry_a_title")}
          body={t("entry_a_body", { n: SECTORS.filter(s => s.id !== "other").length })}
          cta={t("entry_a_open")}
          chips={SECTORS.map(s => ({ icon: s.icon, label: s.short }))}
          onClick={() => goTo("industry")}
        />
        <EntryCard
          letter="B"
          tone="blue"
          eyebrow={t("entry_b_eyebrow")}
          title={t("entry_b_title")}
          body={t("entry_b_body", { n: SECTORS.length })}
          cta={t("entry_b_open")}
          chips={KPIS.slice(0, 6).map(k => ({ label: k.short || k.name }))}
          chipsMore={KPIS.length - 6 > 0 ? t("entry_more", { n: KPIS.length - 6 }) : null}
          onClick={() => goTo("kpi")}
        />
      </div>

      {/* CROSS-SECTOR AVERAGES */}
      <div className="bm-section-head" id="bm-cross">
        <div className="bm-section-head__left">
          <div className="bm-numhead">
            <span className="bm-numhead__n">02</span>
            <span className="bm-numhead__lbl">{t("sec02_eyebrow").replace(/^\s*\d+\s*[—–-]\s*/, "")}</span>
            <span className="bm-numhead__rule"></span>
          </div>
          <h2 className="bm-h2">{t("sec02_title_a")}<br/>{t("sec02_title_b")}</h2>
          <p style={{ marginTop: 10 }}>{t("sec02_lead")}</p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span className="bm-chip">{t("chip_rates")}</span>
          <span className="bm-chip">{t("chip_growth")}</span>
          <span className="bm-chip">{t("chip_roi")}</span>
        </div>
      </div>
      {/* BENCHMARK BANNER */}
      <div className="bm-banner">
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--pampas-950)",
                        fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10,
                        opacity: 0.7 }}>
            <Icon name="target" size={14} /> {t("banner_eyebrow")}
          </div>
          <h2>{t("banner_title")}</h2>
          <p>{t("banner_body")}</p>
        </div>
        <div className="bm-banner__cta">
          <button className="bm-btn bm-btn--primary bm-btn--lg" onClick={openBenchmark}>
            {t("benchmark_cta")}<Icon name="arrow-right" size={14} />
          </button>
        </div>
      </div>

      <div className="bm-kpi-grid">
        {KPIS.map((k, i) => (
          <KpiCard key={k.id} kpi={k} value={GLOBAL[k.id]} benchmark={null}
                   showDelta={false} index={i} vizOverride={vizOverride} formulaStyle={formulaStyle} dark={dark}
                   onClick={() => goToKpi(k.id)} />
        ))}
      </div>

      <Methodology />
    </div>
  );
}

// ─── EntryCard — strong clickable affordance (Florian: "on comprend pas") ───
function EntryCard({ letter, eyebrow, title, body, cta, chips, chipsMore, onClick, tone }) {
  return (
    <button className={"bm-entry" + (tone ? ` bm-entry--${tone}` : "")} onClick={onClick}>
      <div className="bm-entry__topline">
        <span className="bm-entry__num">{letter}</span>
        <div className="bm-entry__eyebrow">{eyebrow}</div>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="bm-entry__preview">
        {chips.map((c, i) => (
          <span key={i} className="bm-chip">
            {c.icon && <Icon name={c.icon} size={12} />}
            {c.label}
          </span>
        ))}
        {chipsMore && <span className="bm-chip">{chipsMore}</span>}
      </div>
      <span className="bm-entry__cta">
        {cta}
        <Icon name="arrow-right" size={14} />
      </span>
    </button>
  );
}

function Methodology() {
  const { t } = useLang();
  return (
    <section className="bm-methodology">
      <div className="bm-methodology__head">
        <div className="bm-eyebrow" style={{ marginBottom: 6 }}>{t("meth_eyebrow")}</div>
        <h3 className="bm-h3" style={{ fontSize: 22 }}>{t("meth_title")}</h3>
      </div>
      <div className="bm-methodology__body">
        <p>{t("meth_intro")}</p>
        <div className="bm-methodology__cols">
          <div>
            <div className="bm-methodology__lbl">{t("meth_op_lbl")}</div>
            <p dangerouslySetInnerHTML={{ __html: t("meth_op_body") }} />
          </div>
          <div>
            <div className="bm-methodology__lbl">{t("meth_lt_lbl")}</div>
            <p dangerouslySetInnerHTML={{ __html: t("meth_lt_body") }} />
          </div>
          <div>
            <div className="bm-methodology__lbl">{t("meth_smp_lbl")}</div>
            <p dangerouslySetInnerHTML={{ __html: t("meth_smp_body") }} />
          </div>
        </div>
        <p style={{ marginTop: 16, fontSize: 13, color: "var(--fg-muted)" }}>{t("meth_footer")}</p>
      </div>
    </section>
  );
}

// ============================================================================
// INDUSTRY VIEW
// ============================================================================
function IndustryView({ openBenchmark, vizOverride, formulaStyle, dark, sectorId, setSectorId }) {
  const { t, data } = useLang();
  const { KPIS, SECTORS, GLOBAL, CATEGORIES } = data;
  const sector = SECTORS.find(s => s.id === sectorId) || SECTORS[0];
  const [exporting, setExporting] = useState(false);
  const handleExport = () => {
    if (exporting) return;
    setExporting(true);
    setTimeout(() => { setExporting(false); if (window._showToast) window._showToast("Export ready — downloading…"); }, 1400);
  };

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [sectorId]);

  return (
    <div className="bm-container">
      <div className="bm-actionbar">
        <div>
          <div className="bm-eyebrow" style={{ marginBottom: 6 }}>{t("iv_eyebrow")}</div>
          <h2 className="bm-h2" style={{ fontSize: 28 }}>{t("iv_title")}</h2>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className={"bm-btn bm-btn--secondary" + (exporting ? " is-loading" : "")} onClick={handleExport}>
            <Icon name="download" size={14} /> {t("export_btn")}
          </button>
          <button className="bm-btn bm-btn--primary" onClick={openBenchmark}>
            {t("benchmark_cta")}
          </button>
        </div>
      </div>

      <div className="bm-industry">
        <nav className="bm-rail" aria-label="Sectors">
          {SECTORS.filter(s => s.id !== "other").map(s => (
            <button key={s.id}
                    className="bm-rail__btn"
                    aria-current={s.id === sector.id}
                    onClick={() => setSectorId(s.id)}>
              <Icon name={s.icon} size={16} />
              <span>{s.short}</span>
            </button>
          ))}
        </nav>

        <div>
          {/* Intro: sector name + intro, client strip replaces minicards */}
          <div className="bm-iv__intro" key={sector.id}>
            <div className="bm-iv__intro-text">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8,
                            padding: "5px 10px", borderRadius: 999,
                            background: dark ? "rgba(41,101,254,0.18)" : "var(--blue-tertiary)",
                            color: "var(--blue-primary)", fontSize: 12, fontWeight: 600, marginBottom: 12 }}>
                <Icon name={sector.icon} size={14} /> {t("iv_sector_overview")}
              </div>
              <h2 className="bm-h2" style={{ fontSize: 28 }}>{sector.name}</h2>
              {sector.intro.split("\n").map((para, i) => (
                <p key={i} style={{ marginTop: i > 0 ? 10 : 0 }}>{para}</p>
              ))}
            </div>
            {sector.clients && sector.clients.length > 0 && <ClientStrip sector={sector} />}
          </div>

          <div className="bm-iv__categories" key={"grid-" + sector.id}>
            {CATEGORIES.map((cat, ci) => {
              const items = KPIS.filter(k => k.category === cat.id);
              if (items.length === 0) return null;
              return (
                <section key={cat.id} className={"bm-iv__cat" + (cat.id === "Relational" ? " bm-iv__cat--relational" : cat.id === "Referral" ? " bm-iv__cat--referral" : cat.id === "Business" ? " bm-iv__cat--business" : "")}>
                  <div className="bm-iv__cat-head">
                    <span className="bm-iv__cat-num">{String(ci + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="bm-iv__cat-title">{cat.label}</h3>
                      <p className="bm-iv__cat-blurb">{cat.blurb}</p>
                    </div>
                    <span className="bm-iv__cat-count">{t("iv_kpis_count", { n: items.length })}</span>
                  </div>
                  <div className="bm-kpi-grid">
                    {items.map((k, i) => (
                      <KpiCard key={k.id} kpi={k} value={sector.kpis[k.id]} benchmark={GLOBAL[k.id]}
                               index={i} vizOverride={vizOverride} formulaStyle={formulaStyle} dark={dark} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// KPI VIEW
// ============================================================================
function KpiView({ openBenchmark, dark, kpiId, setKpiId, vizOverride, formulaStyle, insightsLayout = "split", goToIndustry }) {
  const { t, data, formatValue, classify } = useLang();
  const { KPIS, SECTORS, GLOBAL, CATEGORIES } = data;
  const [exporting, setExporting] = useState(false);
  const handleExport = () => {
    if (exporting) return;
    setExporting(true);
    setTimeout(() => { setExporting(false); if (window._showToast) window._showToast("Export ready — downloading…"); }, 1400);
  };
  const kpi = KPIS.find(k => k.id === kpiId) || KPIS[0];
  const avg = GLOBAL[kpi.id];
  const rankingSectors = SECTORS.filter(s => s.id !== "other");
  const allVals = rankingSectors.map(s => s.kpis[kpi.id]).concat([avg]).filter(v => typeof v === "number");
  const max = Math.max(...allVals);
  const axisMax = (kpi.type === "roi") ? Math.ceil(max + 1) : Math.ceil(max / 5) * 5 + 5;
  const sorted = [...rankingSectors].sort((a, b) => (b.kpis[kpi.id] || 0) - (a.kpis[kpi.id] || 0));
  const avgPct = (avg / axisMax) * 100;

  return (
    <div className="bm-container">
      <div className="bm-actionbar">
        <div>
          <div className="bm-eyebrow" style={{ marginBottom: 6 }}>{t("kv_eyebrow")}</div>
          <h2 className="bm-h2" style={{ fontSize: 28 }}>{t("kv_title")}</h2>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className={"bm-btn bm-btn--secondary" + (exporting ? " is-loading" : "")} onClick={handleExport}>
            <Icon name="download" size={14} /> {t("export_btn")}
          </button>
          <button className="bm-btn bm-btn--primary" onClick={openBenchmark}>
            {t("benchmark_cta")}
          </button>
        </div>
      </div>

      <div className="bm-kpiv">
        <nav className="bm-rail bm-kpiv__rail" aria-label="KPIs">
          {(CATEGORIES || []).map(cat => {
            const catKpis = KPIS.filter(k => k.category === cat.id);
            if (catKpis.length === 0) return null;
            return (
              <React.Fragment key={cat.id}>
                <div className="bm-rail__group">{cat.label}</div>
                {catKpis.map(k => (
                  <button key={k.id}
                          className="bm-rail__btn"
                          aria-current={k.id === kpi.id}
                          onClick={() => setKpiId(k.id)}>
                    <Icon name={KPI_ICONS[k.id] || "grid"} size={14} />
                    <span>{k.type === "rate" ? t("kpi_nav_" + k.id) : (k.short || k.name)}</span>
                    <span className="vmini">{formatValue(k, GLOBAL[k.id])}</span>
                  </button>
                ))}
              </React.Fragment>
            );
          })}
        </nav>

        <div key={kpi.id}>
          {/* KPI HERO — longer definition fully visible */}
          <div className="bm-kpi-hero">
            <div>
              <div className="bm-eyebrow" style={{ marginBottom: 8 }}>{t("kv_definition_lbl")}</div>
              <h2 className="bm-h2" style={{ fontSize: 28, marginBottom: 14 }}>{kpi.name}</h2>
              <p className="bm-kpi-hero__def" style={{ fontSize: 13 }}>{kpi.definition}</p>
              {formulaStyle === "code" ? (
                <div className="bm-kpi-hero__formula">
                  <strong style={{ marginRight: 8, color: "var(--fg-faint)" }}>{t("kv_formula_lbl")}</strong>{kpi.formula}
                </div>
              ) : (
                <div className="bm-kpi-hero__formula">
                  <strong style={{ marginRight: 8, color: "var(--fg-faint)" }}>{t("kv_formula_lbl")}</strong>{kpi.formula}
                </div>
              )}
            </div>
            <div className="bm-kpi-hero__hero-num">
              <div className="bm-eyebrow">{t("kv_cross_avg")}</div>
              {kpi.type === "rate" && <RateViz variant={resolveViz(kpi, vizOverride)} value={avg} dark={dark} size={140} />}
              {kpi.type === "growth" && <GrowthBar value={avg} max={Math.ceil(avg/5)*5+5} dark={dark} />}
              {kpi.type === "roi" && <RoiNumber value={avg} sparkData={[avg*0.4, avg*0.6, avg*0.75, avg*0.9, avg]} dark={dark} size="lg" />}
            </div>
          </div>

          {/* SECTOR COMPARE — single continuous avg line */}
          <div className="bm-compare">
            <div className="bm-compare__head">
              <div>
                <div className="bm-eyebrow" style={{ marginBottom: 6 }}>{t("kv_ranking_eyebrow")}</div>
                <h3 className="bm-h3">{t("kv_ranking_title", { kpi: kpi.name })}</h3>
              </div>
              <div className="bm-compare__legend">
                <span><i style={{ display: "inline-block", width: 14, height: 8, borderRadius: 999, background: "var(--blue-primary)" }}></i>{t("kv_legend_sector")}</span>
                <span><i style={{ display: "inline-block", width: 0, height: 14, borderLeft: "2px dashed var(--pampas-700)" }}></i>{t("kv_legend_avg")}</span>
              </div>
            </div>

            {/* Body wraps rows + the single continuous avg overlay line */}
            <div className="bm-compare__body">
              <div className="bm-compare__avg-overlay"
                   style={{ left: `calc(196px + (100% - 312px) * ${avgPct / 100})` }}>
                <span className="bm-compare__avg-overlay-label">{t("kv_avg_short")} {formatValue(kpi, avg)}</span>
              </div>
              {sorted.map((s, idx) => {
                const v = s.kpis[kpi.id];
                const pct = (v / axisMax) * 100;
                const cmp = classify(v, avg);
                return (
                  <CompareRow key={s.id} sector={s} value={v} pct={pct} cmp={cmp} kpi={kpi} index={idx} goToIndustry={goToIndustry} />
                );
              })}
            </div>

            <div className="bm-compare__axis">
              <span>0</span>
              <span>{Math.round(axisMax/4)}</span>
              <span>{Math.round(axisMax/2)}</span>
              <span>{Math.round(axisMax*0.75)}</span>
              <span>{Math.round(axisMax)}{kpi.type === "roi" ? "×" : "%"}</span>
            </div>
          </div>

          {/* INSIGHTS */}
          {kpi.insights && (
            <InsightsSection kpi={kpi} sorted={sorted} formatValue={formatValue} t={t} dark={dark} layout={insightsLayout} />
          )}

          <div className="bm-section-head" style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
            <div className="bm-section-head__left">
              <div className="bm-eyebrow" style={{ marginBottom: 8 }}>{t("kv_tips_eyebrow")}</div>
              <h3 className="bm-h3">{t("kv_tips_title", { kpi: kpi.short || kpi.name })}</h3>
            </div>
          </div>
          <div className="bm-tips">
            {kpi.tips.map((tip, i) => {
              const obj = (typeof tip === "string") ? { title: "", body: tip } : tip;
              return (
                <article key={i} className="bm-tip">
                  <span className="bm-tip__num">{i + 1}</span>
                  {obj.title && <h3 className="bm-tip__title">{obj.title}</h3>}
                  <p>{obj.body}</p>
                  <a className="bm-tip__cta" href="https://loyoly.io" target="_blank" rel="noopener noreferrer">
                    {t("kv_tip_cta")} <Icon name="arrow-right" size={11} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function CompareRow({ sector, value, pct, cmp, kpi, index, goToIndustry }) {
  const { formatValue, formatDelta, t, data } = useLang();
  const [hover, setHover] = useState(false);
  const [w, setW] = useState(0);
  useEffect(() => { const id = setTimeout(() => setW(pct), 40); return () => clearTimeout(id); }, [pct]);
  const avg = data.GLOBAL[kpi.id];
  const delta = value - avg;
  return (
    <div className="bm-compare__row"
         style={{ animationDelay: (index * 50) + "ms" }}>
      <button className="bm-compare__name bm-compare__name--link"
              onClick={() => goToIndustry && goToIndustry(sector.id)}
              title={`View ${sector.name} in By Industry`}>
        <Icon name={sector.icon} size={14} />
        {sector.name}
      </button>
      <div className="bm-compare__bar-wrap"
           style={{ cursor: goToIndustry ? "pointer" : "default" }}
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
           onClick={() => goToIndustry && goToIndustry(sector.id)}>
        <div className="bm-compare__bar-track" />
        <div className="bm-compare__bar-fill"
             style={{
               width: `${w}%`,
               background: cmp.tone === "above" ? "var(--blue-primary)" : cmp.tone === "below" ? "var(--pampas-500)" : "var(--pampas-600)",
               opacity: hover ? 1 : 0.9,
               transition: `width 820ms cubic-bezier(0.2,0.8,0.2,1) ${index * 55}ms, opacity 150ms, background 200ms, transform 200ms cubic-bezier(0.2,0.8,0.2,1), filter 200ms`
             }}
        />
        {hover && (
          <div className="bm-compare__bar-tooltip">
            <strong>{formatValue(kpi, value)}</strong>
            <span>{delta >= 0 ? "+" : ""}{formatDelta(kpi.id, delta)} vs avg</span>
          </div>
        )}
      </div>
      <div className="bm-compare__value">
        <span className="bm-compare__value-num">{formatValue(kpi, value)}</span>
        <DeltaBadge delta={delta} type={kpi.type} ptsLabel={t("pts")} />
      </div>
    </div>
  );
}

// ============================================================================
// INSIGHTS SECTION — "What the data says" (3 switchable layouts)
// ============================================================================
function InsightsSection({ kpi, sorted, formatValue, t, dark, layout = "split" }) {
  const paras = (kpi.insights || "").split("\n").map(s => s.trim()).filter(Boolean);
  const leadPara = paras[0] || "";
  const lagPara = paras[1] || paras[0] || "";
  const top = sorted && sorted[0];
  const bottom = sorted && sorted[sorted.length - 1];
  const topVal = top ? formatValue(kpi, top.kpis[kpi.id]) : "";
  const botVal = bottom ? formatValue(kpi, bottom.kpis[kpi.id]) : "";

  const Header = (
    <div className="bm-insights__head">
      <div className="bm-eyebrow" style={{ marginBottom: 8 }}>{t("kv_insights_eyebrow")}</div>
      <h3 className="bm-h3">{t("kv_insights_title", { kpi: kpi.short || kpi.name })}</h3>
    </div>
  );

  let body;
  if (layout === "panel") {
    body = (
      <div className="bm-insights-panel">
        {paras.map((para, i) => (
          <p key={i} style={{ margin: i > 0 ? "10px 0 0" : 0 }}>{para}</p>
        ))}
      </div>
    );
  } else if (layout === "editorial") {
    body = (
      <div className="bm-insights-ed">
        <div className="bm-insights-ed__pills">
          {top && <span className="bm-ipill bm-ipill--up"><Icon name="trending-up" size={13} />{top.name}<b>{topVal}</b></span>}
          {bottom && <span className="bm-ipill bm-ipill--down"><Icon name="trending-up" size={13} />{bottom.name}<b>{botVal}</b></span>}
        </div>
        {paras.map((para, i) => (
          <p key={i} style={{ margin: i > 0 ? "12px 0 0" : 0 }}>{para}</p>
        ))}
      </div>
    );
  } else {
    // split (default): leader vs laggard cards
    body = (
      <div className="bm-insights-split">
        <article className="bm-insight bm-insight--up">
          <div className="bm-insight__head">
            <span className="bm-insight__icon"><Icon name="trending-up" size={15} /></span>
            <div className="bm-insight__meta">
              <div className="bm-insight__tag">{t("insights_leader")}</div>
              <div className="bm-insight__sector">{top && <Icon name={top.icon} size={14} />}{top && top.name}</div>
            </div>
            <span className="bm-insight__val">{topVal}</span>
          </div>
          <p className="bm-insight__body">{leadPara}</p>
        </article>
        <article className="bm-insight bm-insight--down">
          <div className="bm-insight__head">
            <span className="bm-insight__icon"><Icon name="trending-up" size={15} /></span>
            <div className="bm-insight__meta">
              <div className="bm-insight__tag">{t("insights_laggard")}</div>
              <div className="bm-insight__sector">{bottom && <Icon name={bottom.icon} size={14} />}{bottom && bottom.name}</div>
            </div>
            <span className="bm-insight__val">{botVal}</span>
          </div>
          <p className="bm-insight__body">{lagPara}</p>
        </article>
      </div>
    );
  }

  return (
    <section className="bm-insights">
      <div style={{ height: "1px", backgroundColor: "var(--border)", margin: "32px 0 24px" }} />
      {Header}
      {body}
    </section>
  );
}

Object.assign(window, {
  OverviewView, IndustryView, KpiView, Icon, LangContext, useLang,
  resolveViz, ClientStrip, EntryCard, Methodology, MissionImpactChart, KpiCard,
  InsightsSection
});
