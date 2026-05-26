/* global React, ReactDOM, OverviewView, IndustryView, KpiView, BenchmarkPanel, Icon, LangContext */
/* global TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSelect, TweakToggle */
/* ============================================================
   Loyoly Benchmark — App shell
   ============================================================ */
const { useState, useEffect, useMemo, useCallback } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vizOverride": "auto",
  "formulaStyle": "visual",
  "density": "comfortable",
  "darkMode": false,
  "primaryAccent": "blue"
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  blue:   "#2965FE",
  yellow: "#FEC229",
  pink:   "#F74F9E",
  green:  "#10A370"
};

const LANG_KEY = "loyoly-benchmark-lang";
const LOCALES = (window.LOYOLY_I18N && window.LOYOLY_I18N.locales) || [
  { id: "en", short: "EN", currency: "£" }
];

function App() {
  const [view, setView] = useState("overview");
  const [sectorId, setSectorId] = useState("beauty");
  const [kpiId, setKpiId] = useState("roi");
  const [bmOpen, setBmOpen] = useState(false);
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem(LANG_KEY) || "en"; } catch (e) { return "en"; }
  });
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => { try { localStorage.setItem(LANG_KEY, lang); } catch(e) {} }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--blue-primary", ACCENT_MAP[t.primaryAccent] || ACCENT_MAP.blue);
    return () => root.style.removeProperty("--blue-primary");
  }, [t.primaryAccent]);

  // Build the localized data bundle + helpers, memoized per language
  const langCtx = useMemo(() => {
    const currency = (LOCALES.find(l => l.id === lang) || { currency: "€" }).currency;
    const data = window.LOYOLY_DATA.localize(lang, currency);
    const ptsLabel = (window.LOYOLY_I18N[lang] && window.LOYOLY_I18N[lang].ui && window.LOYOLY_I18N[lang].ui.pts) || "pts";
    const tFn = (key, vars) => window.LOYOLY_T(lang, key, vars);
    return {
      lang, currency, data,
      t: tFn,
      classify: window.LOYOLY_DATA.classify,
      formatValue: window.LOYOLY_DATA.formatValue,
      formatDelta: (k, d) => window.LOYOLY_DATA.formatDelta(k, d, ptsLabel)
    };
  }, [lang]);

  return (
    <LangContext.Provider value={langCtx}>
      <div className="bm-app" data-theme={t.darkMode ? "dark" : "light"} data-density={t.density}>
        <Nav view={view} setView={setView} dark={t.darkMode}
             lang={lang} setLang={setLang} />

        <main className="bm-main" key={view}>
          {view === "overview" && (
            <OverviewView
              goTo={setView}
              goToKpi={(kid) => { setKpiId(kid); setView("kpi"); }}
              openBenchmark={() => setBmOpen(true)}
              vizOverride={t.vizOverride}
              formulaStyle={t.formulaStyle}
              dark={t.darkMode}
            />
          )}
          {view === "industry" && (
            <IndustryView
              openBenchmark={() => setBmOpen(true)}
              vizOverride={t.vizOverride}
              formulaStyle={t.formulaStyle}
              dark={t.darkMode}
              sectorId={sectorId}
              setSectorId={setSectorId}
            />
          )}
          {view === "kpi" && (
            <KpiView
              openBenchmark={() => setBmOpen(true)}
              dark={t.darkMode}
              kpiId={kpiId}
              setKpiId={setKpiId}
              vizOverride={t.vizOverride}
              formulaStyle={t.formulaStyle}
              goToIndustry={(sid) => { setSectorId(sid); setView("industry"); }}
            />
          )}
        </main>

        <Footer />

        <BenchmarkPanel
          open={bmOpen}
          onClose={() => setBmOpen(false)}
          dark={t.darkMode}
          initialSector={view === "industry" ? sectorId : null}
          goToKpi={(kid) => { setBmOpen(false); setKpiId(kid); setView("kpi"); }}
        />

        <TweaksPanel title="Tweaks">
          <TweakSection label="Visualization">
            <TweakRadio label="Rate KPI viz"
                        value={t.vizOverride}
                        options={["auto", "ring", "gauge", "arc"]}
                        onChange={v => setTweak('vizOverride', v)} />
            <TweakRadio label="Formula style"
                        value={t.formulaStyle}
                        options={["visual", "code"]}
                        onChange={v => setTweak('formulaStyle', v)} />
            <TweakRadio label="Density"
                        value={t.density}
                        options={["comfortable", "compact"]}
                        onChange={v => setTweak('density', v)} />
          </TweakSection>
          <TweakSection label="Theme">
            <TweakToggle label="Dark mode"
                         value={t.darkMode}
                         onChange={v => setTweak('darkMode', v)} />
            <TweakSelect label="Primary accent"
                         value={t.primaryAccent}
                         options={[
                           { value: "blue",   label: "Electric blue" },
                           { value: "yellow", label: "Soft yellow" },
                           { value: "pink",   label: "Hot pink" },
                           { value: "green",  label: "Teal-green" }
                         ]}
                         onChange={v => setTweak('primaryAccent', v)} />
          </TweakSection>
        </TweaksPanel>
      </div>
    </LangContext.Provider>
  );
}

function Nav({ view, setView, dark, lang, setLang }) {
  const ctx = React.useContext(LangContext);
  const tT = ctx ? ctx.t : (k) => k;
  const tabs = [
    { id: "overview", label: tT("nav_overview_label"), sub: tT("nav_overview_sub") },
    { id: "industry", label: tT("nav_industry_label"), sub: tT("nav_industry_sub") },
    { id: "kpi",      label: tT("nav_kpi_label"),      sub: tT("nav_kpi_sub") }
  ];
  return (
    <nav className="bm-nav" aria-label="Primary">
      <div className="bm-nav__logo">
        <img src={dark ? "assets/logo-loyoly-white.svg" : "assets/logo-loyoly.svg"} alt="Loyoly" />
        <span className="bm-nav__title">{tT("nav_subtitle")}</span>
      </div>
      <div className="bm-nav__tabs">
        {tabs.map(tab => (
          <button key={tab.id}
                  className="bm-nav__tab"
                  aria-current={view === tab.id}
                  onClick={() => setView(tab.id)}>
            <span className="bm-nav__tab-label">{tab.label}</span>
            <span className="bm-nav__tab-sub">{tab.sub}</span>
          </button>
        ))}
      </div>
      <div className="bm-nav__spacer" />
      <span className="bm-nav__updated">
        <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: 999,
                       background: "#10A370", marginRight: 6, verticalAlign: "middle" }}></span>
        {tT("nav_updated")}
      </span>
      <LangSwitcher lang={lang} setLang={setLang} />
    </nav>
  );
}

function LangSwitcher({ lang, setLang }) {
  return (
    <div className="bm-langswitch" role="group" aria-label="Language">
      <Icon name="globe" size={13} />
      {LOCALES.map(l => (
        <button key={l.id}
                className="bm-langswitch__btn"
                aria-current={l.id === lang}
                onClick={() => setLang(l.id)}
                title={`${l.label} · ${l.currency}`}>
          {l.short}
          <span className="bm-langswitch__cur">{l.currency}</span>
        </button>
      ))}
    </div>
  );
}

function Footer() {
  const ctx = React.useContext(LangContext);
  const tT = ctx ? ctx.t : (k) => k;
  return (
    <footer className="bm-footer">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src="assets/logo-loyoly.svg" alt="Loyoly" />
        <span>{tT("footer_caption")}</span>
      </div>
      <div>{tT("footer_meta")}</div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
