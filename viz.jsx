/* global React */
/* ============================================================
   Loyoly Benchmark — KPI visualization components
   ============================================================
   Variants exposed via Tweaks:
     - "ring"   : full circular progress ring (default)
     - "gauge"  : 180° half-gauge with a benchmark notch
     - "arc"    : thin 240° arc, more editorial

   Plus shared atoms:
     - GrowthBar     : horizontal bar with %
     - RoiNumber     : large number + sparkline + trend arrow
     - SparklineArea : tiny SVG sparkline
   ============================================================ */

const { useEffect, useRef, useState, useMemo } = React;

const ACCENT = "var(--blue-primary)";
const TRACK  = "var(--pampas-200)";
const TRACK_DARK = "rgba(255,255,255,0.10)";
const ACCENT_SOFT = "var(--blue-secondary)";

// ---------- useReducedMotion -------------------------------------------------
function useReducedMotion() {
  const [r, setR] = useState(() =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setR(mq.matches);
    mq.addEventListener && mq.addEventListener("change", fn);
    return () => mq.removeEventListener && mq.removeEventListener("change", fn);
  }, []);
  return r;
}

// ---------- useAnimatedNumber ------------------------------------------------
// useAnimatedNumber: smooth count-up. Falls back to instant value if rAF
// is throttled/blocked in the host environment (e.g. some preview iframes).
function useAnimatedNumber(target, { duration = 800, delay = 0 } = {}) {
  const reduce = useReducedMotion();
  const [v, setV] = useState(target);  // default to target so display is correct without animation
  useEffect(() => {
    if (reduce) { setV(target); return; }
    let raf, start, ticked = false;
    setV(0);
    const tick = (t) => {
      ticked = true;
      if (!start) start = t;
      const elapsed = t - start - delay;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(eased * target);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // Safety net: if rAF never fires within 200ms, just snap to target.
    const safety = setTimeout(() => { if (!ticked) setV(target); }, 200);
    return () => { cancelAnimationFrame(raf); clearTimeout(safety); };
  }, [target, duration, delay, reduce]);
  return v;
}

// ---------- useInView --------------------------------------------------------
function useInView(opts = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
    }, opts);
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen];
}

// ============================================================================
// RATE VIZ — rings / gauges / arcs
// ============================================================================

/**
 * RateRing — full circle progress ring (0..100)
 * Props: value, max=100, size=120, stroke=10, label, benchmark, dark, accent
 */
function RateRing({ value, max = 100, size = 116, stroke = 9, dark = false, accent = ACCENT, benchmark = null, format }) {
  const animated = useAnimatedNumber(value, { duration: 900 });
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  const pct = Math.min(1, Math.max(0, animated / max));
  const dash = C * pct;
  const benchPct = benchmark != null ? Math.min(1, Math.max(0, benchmark / max)) : null;
  const benchAngle = benchPct != null ? benchPct * 360 - 90 : null;
  const benchX = benchPct != null ? size/2 + r * Math.cos(benchAngle * Math.PI/180) : null;
  const benchY = benchPct != null ? size/2 + r * Math.sin(benchAngle * Math.PI/180) : null;
  const valueText = format ? format(animated) : (animated.toFixed(1) + "%");
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={dark ? TRACK_DARK : TRACK} strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={accent} strokeWidth={stroke}
              strokeLinecap="round"
              transform={`rotate(-90 ${size/2} ${size/2})`}
              strokeDasharray={`${dash} ${C}`} />
      {benchPct != null && (
        <g>
          <circle cx={benchX} cy={benchY} r={stroke/2 + 2}
                  fill={dark ? "#171411" : "var(--bg-raised)"} />
          <circle cx={benchX} cy={benchY} r={3} fill={dark ? "#fff" : "var(--pampas-700)"} />
        </g>
      )}
      <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="central"
            fontFamily="var(--font-display)" fontWeight="600"
            fontSize={size * 0.22}
            fill={dark ? "#fff" : "var(--fg)"}>
        {valueText}
      </text>
    </svg>
  );
}

/**
 * RateGauge — 180° semicircle, with benchmark notch on the arc
 */
function RateGauge({ value, max = 100, size = 140, stroke = 11, dark = false, accent = ACCENT, benchmark = null, format }) {
  const animated = useAnimatedNumber(value, { duration: 900 });
  const w = size, h = size * 0.62;
  const cx = w/2, cy = h - 6;
  const r = (w - stroke - 4) / 2;
  // arc 180° — from (cx-r, cy) to (cx+r, cy)
  const pct = Math.min(1, Math.max(0, animated / max));
  const sweepEnd = Math.PI - Math.PI * pct;  // angle from horizontal
  const tx = cx + r * Math.cos(sweepEnd);
  const ty = cy - r * Math.sin(sweepEnd);
  const largeArc = pct > 0.5 ? 1 : 0;
  const benchPct = benchmark != null ? Math.min(1, Math.max(0, benchmark / max)) : null;
  let benchX, benchY;
  if (benchPct != null) {
    const a = Math.PI - Math.PI * benchPct;
    benchX = cx + r * Math.cos(a);
    benchY = cy - r * Math.sin(a);
  }
  const valueText = format ? format(animated) : (animated.toFixed(1) + "%");
  return (
    <svg width={w} height={h + 4} viewBox={`0 0 ${w} ${h + 4}`} style={{ display: "block" }}>
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
            fill="none" stroke={dark ? TRACK_DARK : TRACK} strokeWidth={stroke} strokeLinecap="round" />
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 ${largeArc} 1 ${tx} ${ty}`}
            fill="none" stroke={accent} strokeWidth={stroke} strokeLinecap="round" />
      {benchPct != null && (
        <g>
          <circle cx={benchX} cy={benchY} r={stroke/2 + 2.5}
                  fill={dark ? "#171411" : "var(--bg-raised)"} />
          <circle cx={benchX} cy={benchY} r={3} fill={dark ? "#fff" : "var(--pampas-700)"} />
        </g>
      )}
      <text x={cx} y={cy - 8} textAnchor="middle"
            fontFamily="var(--font-display)" fontWeight="600"
            fontSize={size * 0.22}
            fill={dark ? "#fff" : "var(--fg)"}>
        {valueText}
      </text>
    </svg>
  );
}

/**
 * RateArc — thin 240° arc, more editorial
 */
function RateArc({ value, max = 100, size = 124, stroke = 6, dark = false, accent = ACCENT, benchmark = null, format }) {
  const animated = useAnimatedNumber(value, { duration: 900 });
  const w = size, h = size;
  const cx = w/2, cy = h/2;
  const r = (size - stroke - 4) / 2;
  // 240° arc spanning from -210° to +30° around the centre
  const startAngle = 150 * Math.PI/180;  // start at bottom-left
  const sweep = 240 * Math.PI/180;
  const pct = Math.min(1, Math.max(0, animated / max));
  const a0 = startAngle;
  const a1 = startAngle + sweep;
  const ap = startAngle + sweep * pct;
  const polar = (a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  const [x0, y0] = polar(a0);
  const [xe, ye] = polar(a1);
  const [xp, yp] = polar(ap);
  const large = sweep > Math.PI ? 1 : 0;
  const largeP = sweep * pct > Math.PI ? 1 : 0;
  const benchPct = benchmark != null ? Math.min(1, Math.max(0, benchmark / max)) : null;
  let bx, by;
  if (benchPct != null) {
    [bx, by] = polar(startAngle + sweep * benchPct);
  }
  const valueText = format ? format(animated) : (animated.toFixed(1) + "%");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }}>
      <path d={`M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${xe} ${ye}`}
            fill="none" stroke={dark ? TRACK_DARK : TRACK} strokeWidth={stroke} strokeLinecap="round" />
      <path d={`M ${x0} ${y0} A ${r} ${r} 0 ${largeP} 1 ${xp} ${yp}`}
            fill="none" stroke={accent} strokeWidth={stroke} strokeLinecap="round" />
      {benchPct != null && (
        <line x1={cx + (r - 8) * Math.cos(startAngle + sweep * benchPct)}
              y1={cy + (r - 8) * Math.sin(startAngle + sweep * benchPct)}
              x2={cx + (r + 8) * Math.cos(startAngle + sweep * benchPct)}
              y2={cy + (r + 8) * Math.sin(startAngle + sweep * benchPct)}
              stroke={dark ? "#fff" : "var(--pampas-700)"} strokeWidth="1.5" />
      )}
      <text x={cx} y={cy - 2} textAnchor="middle" dominantBaseline="central"
            fontFamily="var(--font-display)" fontWeight="600"
            fontSize={size * 0.24}
            fill={dark ? "#fff" : "var(--fg)"}>
        {valueText}
      </text>
      <text x={cx} y={cy + size * 0.18} textAnchor="middle"
            fontFamily="var(--font-body)" fontWeight="500"
            fontSize="10" letterSpacing="0.08em"
            fill={dark ? "var(--pampas-300)" : "var(--fg-faint)"}>
        of members
      </text>
    </svg>
  );
}

// One entry point — picks the variant.
function RateViz({ variant = "ring", ...props }) {
  if (variant === "gauge") return <RateGauge {...props} />;
  if (variant === "arc") return <RateArc {...props} />;
  return <RateRing {...props} />;
}

// ============================================================================
// GROWTH BAR
// ============================================================================

/**
 * GrowthBar — horizontal bar showing a growth % (e.g. +24.8%)
 * Uses a 0..maxScale axis (default 40%). Benchmark drawn as a vertical notch.
 */
function GrowthBar({ value, benchmark = null, max = 40, dark = false, accent = ACCENT, height = 14 }) {
  const animated = useAnimatedNumber(value, { duration: 850 });
  const pct = Math.min(1, Math.max(0, animated / max));
  const benchPct = benchmark != null ? Math.min(1, Math.max(0, benchmark / max)) : null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      <div style={{
        position: "relative", width: "100%", height,
        background: dark ? "rgba(255,255,255,0.08)" : "var(--pampas-100)",
        borderRadius: 999, overflow: "visible"
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: (pct * 100) + "%",
          background: accent, borderRadius: 999,
          transition: "background 200ms ease"
        }} />
        {benchPct != null && (
          <div style={{
            position: "absolute", left: `calc(${benchPct * 100}% - 1px)`,
            top: -3, bottom: -3, width: 2,
            background: dark ? "rgba(255,255,255,0.55)" : "var(--pampas-700)",
            borderRadius: 2
          }} title={`Benchmark: +${benchmark}%`} />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{
          fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600,
          color: dark ? "#fff" : "var(--fg)", letterSpacing: "-0.02em"
        }}>+{animated.toFixed(1)}%</span>
        {benchmark != null && (
          <span style={{
            fontSize: 11, fontFamily: "var(--font-body)",
            color: dark ? "var(--pampas-300)" : "var(--fg-faint)"
          }}>
            avg +{benchmark.toFixed(1)}%
          </span>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// SPARKLINE
// ============================================================================

function SparklineArea({ data, w = 96, h = 30, dark = false, accent = ACCENT }) {
  const pts = useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    return data.map((v, i) => {
      const x = (i / (data.length - 1)) * (w - 2) + 1;
      const y = h - 2 - ((v - min) / range) * (h - 6);
      return [x, y];
    });
  }, [data, w, h]);
  const path = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0] + " " + p[1]).join(" ");
  const area = path + ` L ${pts[pts.length-1][0]} ${h} L ${pts[0][0]} ${h} Z`;
  const id = "spark-" + Math.random().toString(36).slice(2, 7);
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={path} fill="none" stroke={accent} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={pts[pts.length-1][0]} cy={pts[pts.length-1][1]} r="2.5" fill={accent} />
    </svg>
  );
}

// ============================================================================
// ROI display
// ============================================================================
function RoiNumber({ value, benchmark = null, sparkData, dark = false, accent = ACCENT, size = "lg" }) {
  const animated = useAnimatedNumber(value, { duration: 900 });
  const big = size === "lg";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: big ? 8 : 4 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 600,
          fontSize: big ? 52 : 34, letterSpacing: "-0.03em", lineHeight: 1,
          color: dark ? "#fff" : "var(--fg)"
        }}>{animated.toFixed(1)}<span style={{ fontSize: big ? 28 : 20, color: accent, marginLeft: 2 }}>×</span></span>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          padding: "3px 8px", borderRadius: 999,
          background: dark ? "rgba(20,240,200,0.14)" : "color-mix(in srgb, var(--blue-tertiary) 80%, white)",
          color: accent, fontSize: 11, fontWeight: 600
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 7 L5 3 L8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          revenue
        </span>
      </div>
      {sparkData && <SparklineArea data={sparkData} w={big ? 140 : 96} h={big ? 36 : 24} dark={dark} accent={accent} />}
      {benchmark != null && (
        <div style={{ fontSize: 11, color: dark ? "var(--pampas-300)" : "var(--fg-faint)" }}>
          cross-sector avg {benchmark.toFixed(1)}×
        </div>
      )}
    </div>
  );
}

// ============================================================================
// DELTA BADGE
// ============================================================================
function DeltaBadge({ delta, type = "rate", ptsLabel = "pts" }) {
  if (delta == null || isNaN(delta)) return null;
  const positive = delta >= 0;
  const fmt = type === "roi"
    ? (positive ? "+" : "") + delta.toFixed(1) + "×"
    : (positive ? "+" : "") + delta.toFixed(1) + " " + ptsLabel;
  return (
    <span className={`bm-delta ${positive ? "is-up" : "is-down"}`}>
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
        {positive
          ? <path d="M1.5 6 L4.5 2.5 L7.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          : <path d="M1.5 3 L4.5 6.5 L7.5 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>}
      </svg>
      {fmt}
    </span>
  );
}

// ============================================================================
// expose
// ============================================================================
Object.assign(window, {
  RateViz, RateRing, RateGauge, RateArc,
  GrowthBar, SparklineArea, RoiNumber, DeltaBadge,
  useAnimatedNumber, useReducedMotion, useInView
});
