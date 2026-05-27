/* global React, RateViz, GrowthBar, RoiNumber, DeltaBadge, Icon, useLang */
/* ============================================================
   Loyoly Benchmark — "Benchmark Your Brand" side panel
   3 steps: 1) pick industry  2) enter values  3) see results
   ============================================================ */
const { useState: bpUseState, useEffect: bpUseEffect } = React;

function BenchmarkPanel({ open, onClose, dark, initialSector = null, goToKpi }) {
  const { t, data, classify, formatValue, formatDelta } = useLang();
  const { KPIS, SECTORS } = data;
  const [step, setStep]   = bpUseState(1);
  const [sectorId, setSectorId] = bpUseState(initialSector || (SECTORS[0] && SECTORS[0].id));
  const [values, setValues]     = bpUseState({});
  const [shareCopied, setShareCopied] = bpUseState(false);
  const [exporting, setExporting] = bpUseState(false);

  const handleShare = () => {
    try { navigator.clipboard.writeText(window.location.href); } catch(e) {}
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2200);
  };

  const handleExport = () => {
    if (exporting) return;
    setExporting(true);
    setTimeout(() => {
      setExporting(false);
      if (window._showToast) window._showToast("Export ready — downloading…");
    }, 1400);
  };

  bpUseEffect(() => {
    if (open) document.body.classList.add("bm-locked");
    else      document.body.classList.remove("bm-locked");
    return () => document.body.classList.remove("bm-locked");
  }, [open]);

  bpUseEffect(() => {
    if (open) {
      setStep(1);
      if (initialSector) setSectorId(initialSector);
    }
  }, [open]);

  bpUseEffect(() => {
    if (step === 2) {
      const next = {};
      KPIS.forEach(k => {
        next[k.id] = values[k.id] != null ? values[k.id] : "";
      });
      setValues(next);
    }
  }, [step, sectorId]);

  const sector = SECTORS.find(s => s.id === sectorId) || SECTORS[0];
  const filledCount = KPIS.filter(k => values[k.id] !== "" && values[k.id] != null).length;
  const canCompute  = filledCount >= 3;

  return (
    <React.Fragment>
      <div className={"bm-panel-overlay " + (open ? "is-open" : "")} onClick={onClose} />
      <aside className={"bm-panel " + (open ? "is-open" : "")} role="dialog" aria-label={t("bp_title")}>
        <div className="bm-panel__head">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6,
                          fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
                          color: "var(--blue-primary)", marginBottom: 6 }}>
              <Icon name="target" size={12} /> {t("bp_eyebrow")}
            </div>
            <h3 className="bm-h3" style={{ fontSize: 20 }}>{t("bp_title")}</h3>
            <p style={{ fontSize: 12, color: "var(--fg-faint)", margin: "4px 0 0" }}>
              {t("bp_step_of", { n: step })}: {step === 1 ? t("bp_step_1") : step === 2 ? t("bp_step_2") : t("bp_step_3")}
            </p>
          </div>
          <button className="bm-panel__close" onClick={onClose} aria-label="Close">
            <Icon name="x" size={16} />
          </button>
        </div>

        <div className="bm-steps">
          {[1,2,3].map(n => <span key={n} className={step >= n ? "is-active" : ""}></span>)}
        </div>

        <div className="bm-panel__body">
          {step === 1 && <Step1 sector={sector} sectorId={sectorId} setSectorId={setSectorId} />}
          {step === 2 && <Step2 sector={sector} values={values} setValues={setValues} filledCount={filledCount} total={KPIS.length} />}
          {step === 3 && <Step3 sector={sector} values={values} dark={dark} goToKpi={goToKpi} onEditKpi={() => setStep(2)} />}
        </div>

        {step === 3 && (
          <a className="bm-panel__expert-cta"
             href="https://loyoly.io/demo"
             target="_blank"
             rel="noopener noreferrer">
            <strong>Want help closing the gap?</strong>
            <span>Talk to a Loyoly expert <Icon name="arrow-right" size={11} /></span>
          </a>
        )}

        <div className="bm-panel__foot">
          {step > 1
            ? <button className="bm-btn bm-btn--ghost" onClick={() => setStep(step - 1)}>{t("bp_back")}</button>
            : <span style={{ fontSize: 11, color: "var(--fg-faint)" }}>{t("bp_no_account")}</span>
          }
          {step === 1 && <button className="bm-btn bm-btn--primary" onClick={() => setStep(2)}>{t("bp_continue")} <Icon name="arrow-right" size={12} /></button>}
          {step === 2 && (
            <button className="bm-btn bm-btn--primary" disabled={!canCompute}
                    style={{ opacity: canCompute ? 1 : 0.5, cursor: canCompute ? "pointer" : "not-allowed" }}
                    onClick={() => setStep(3)}>
              {t("bp_see_results")} <Icon name="arrow-right" size={12} />
            </button>
          )}
          {step === 3 && (
            <div style={{ display: "flex", gap: 8 }}>
              <button className="bm-btn bm-btn--ghost" onClick={handleShare} title="Copy link to share">
                <Icon name="external" size={14} /> {shareCopied ? "Copied!" : "Share"}
              </button>
              <button className={"bm-btn bm-btn--primary" + (exporting ? " is-loading" : "")} onClick={handleExport}>
                <Icon name="download" size={14} /> {t("export_btn")}
              </button>
            </div>
          )}
        </div>
      </aside>
    </React.Fragment>
  );
}

// ── Step 1 ───────────────────────────────────────────────────────────
function Step1({ sector, sectorId, setSectorId }) {
  const { t, data } = useLang();
  const { SECTORS } = data;
  return (
    <div>
      <p style={{ fontSize: 14, color: "var(--fg-muted)", margin: "0 0 16px", lineHeight: 1.55 }}>
        {t("bp_step1_lead", { n: sector.brands })}
      </p>
      <div className="bm-sector-grid">
        {SECTORS.map(s => (
          <button key={s.id}
                  aria-pressed={s.id === sectorId}
                  onClick={() => setSectorId(s.id)}>
            <Icon name={s.icon} size={14} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
              <span style={{ fontWeight: 500 }}>{s.short}</span>
              <small style={{ fontSize: 11, opacity: 0.7 }}>{s.brands} {t("bp_step1_brands")}</small>
            </div>
          </button>
        ))}
      </div>
      <div style={{ background: "var(--pampas-100)", borderRadius: 8, padding: 14,
                    fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.5 }}>
        <strong style={{ color: "var(--fg)" }}>{sector.name}</strong>: {sector.intro}
      </div>
    </div>
  );
}

// ── Step 2 ───────────────────────────────────────────────────────────
function Step2({ sector, values, setValues, filledCount, total }) {
  const { t, data } = useLang();
  const { KPIS } = data;
  const minReached = filledCount >= 3;
  return (
    <div>
      <p style={{ fontSize: 14, color: "var(--fg-muted)", margin: "0 0 8px", lineHeight: 1.55 }}>
        {t("bp_step2_lead")}
      </p>
      <p style={{ fontSize: 12, color: "var(--fg-faint)", margin: "0 0 12px" }}
         dangerouslySetInnerHTML={{ __html: t("bp_step2_placeholder", { sector: `<strong>${sector.short}</strong>` }) }}/>
      <div className="bm-step-counter">
        <span><span className="bm-step-counter__num">{filledCount}</span>/{total} KPIs entered</span>
        {minReached && <span className="bm-step-counter__ok">✓ Minimum reached</span>}
      </div>
      {KPIS.map(k => (
        <div key={k.id} className="bm-input-row">
          <label>
            {k.short || k.name}
            <small>{k.definition.split(".")[0]}.</small>
          </label>
          <input
            type="number" step="0.1" min="0"
            className="bm-input"
            placeholder={String(sector.kpis[k.id])}
            value={values[k.id] ?? ""}
            onChange={e => setValues({ ...values, [k.id]: e.target.value === "" ? "" : parseFloat(e.target.value) })}
          />
          <span className="unit">{k.unit}</span>
        </div>
      ))}
    </div>
  );
}

// ── Step 3 ───────────────────────────────────────────────────────────
function Step3({ sector, values, dark, goToKpi, onEditKpi }) {
  const { t, data, formatValue } = useLang();
  const { KPIS } = data;
  const filled = KPIS.filter(k => values[k.id] != null && values[k.id] !== "");
  const above  = filled.filter(k => values[k.id] > sector.kpis[k.id]).length;
  const ratio  = filled.length > 0 ? above / filled.length : 0;
  const headline = ratio >= 0.66
    ? { title: t("bp_step3_good"), body: t("bp_step3_good_body", { sector: sector.short, a: above, b: filled.length }), tone: "good" }
    : ratio >= 0.33
    ? { title: t("bp_step3_ok"),   body: t("bp_step3_ok_body",   { a: above, b: filled.length }), tone: "ok" }
    : { title: t("bp_step3_bad"),  body: t("bp_step3_bad_body",  { sector: sector.short }), tone: "bad" };

  return (
    <div>
      <div style={{
        padding: "16px 18px", borderRadius: 8,
        background: headline.tone === "good"
          ? "color-mix(in srgb, #10A370 8%, var(--bg-raised))"
          : headline.tone === "bad"
          ? "color-mix(in srgb, #E14444 8%, var(--bg-raised))"
          : "var(--pampas-100)",
        border: "1px solid " + (headline.tone === "good" ? "color-mix(in srgb, #10A370 30%, transparent)"
                              : headline.tone === "bad" ? "color-mix(in srgb, #E14444 30%, transparent)"
                              : "var(--border)"),
        marginBottom: 18
      }}>
        <div className="bm-eyebrow" style={{ marginBottom: 6 }}>{t("bp_step3_verdict")}</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22,
                     letterSpacing: "-0.015em", margin: "0 0 6px",
                     color: dark ? "#fff" : "var(--fg)" }}>{headline.title}</h3>
        <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: 0, lineHeight: 1.55 }}>{headline.body}</p>
      </div>

      {KPIS.map(k => {
        const v = values[k.id];
        if (v == null || v === "") {
          return (
            <div key={k.id} className="bm-result-row" style={{ opacity: 0.55 }}>
              <div className="bm-result-row__name">
                {k.short || k.name}
                <small>
                  {t("bp_not_entered")} —{" "}
                  <button className="bm-result-add-link" onClick={() => onEditKpi && onEditKpi(k.id)}>
                    Add this KPI <Icon name="arrow-right" size={10} />
                  </button>
                </small>
              </div>
              <div style={{ fontSize: 12, color: "var(--fg-faint)" }}>—</div>
            </div>
          );
        }
        const bench = sector.kpis[k.id];
        const delta = v - bench;
        const positive = delta >= 0;
        const max = k.type === "roi" ? Math.max(v, bench) * 1.3 : Math.max(40, Math.max(v, bench) * 1.3);
        return (
          <div key={k.id} className="bm-result-row">
            <div className="bm-result-row__name">
              <button className="bm-result-kpi-link" onClick={() => goToKpi && goToKpi(k.id)}>
                {k.short || k.name}
                <Icon name="arrow-right" size={10} />
              </button>
              <small>{t("bp_you_vs_avg", { you: formatValue(k, v), avg: formatValue(k, bench) })}</small>
            </div>
            <div className="bm-result-row__vals">
              <DeltaBadge delta={delta} type={k.type} ptsLabel={t("pts")} />
            </div>
            <div className="bm-result-row__bar-row">
              <div className="bm-result-bar">
                <div className="bm-result-bar__user"
                     style={{ width: `${Math.min(100, (v / max) * 100)}%`,
                              background: positive ? "var(--blue-primary)" : "#B12B2B" }} />
                <div className="bm-result-bar__avg" style={{ left: `${(bench / max) * 100}%` }} />
              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
}

Object.assign(window, { BenchmarkPanel });
