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
      definition: "Activation rate tracks how quickly new enrollees make their first meaningful interaction with your program. It is the first signal of program health: a low rate means members sign up but never engage, wasting acquisition budget. Improving activation compounds across all downstream KPIs, since only activated members can redeem, refer, or complete missions.",
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
      definition: "Points usage rate measures the share of issued points that members actually redeem, revealing whether your reward currency is perceived as valuable. It is a direct indicator of reward relevance: low usage often signals thresholds that are too high or rewards too generic to motivate action. Closing the gap between points earned and points spent is one of the fastest levers to lift member engagement.",
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
      definition: "Reward redemption rate measures the share of active members who cash in at least one reward within a 90-day window. It is the clearest proof that your program creates real perceived value, not just theoretical point accumulation. High redemption drives both satisfaction and repeat purchase, making it a leading indicator of LTV growth.",
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
      definition: "Referral CVR measures how many of the shares made by your members result in a completed order. It is the efficiency metric for your word-of-mouth strategy: a low CVR means you generate sharing activity but fail to convert it into revenue. Optimizing the referral landing experience and the incentive structure on both sides directly moves this number.",
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
      definition: "New from referral measures the share of all new customers in a period who were brought in by loyalty program members. It quantifies your member base as an acquisition channel, sitting alongside paid and organic. Brands with a high new-from-referral rate reduce paid acquisition costs and improve new-customer quality, since referred customers convert faster and retain longer.",
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
      definition: "Participation rate tracks the share of members who go beyond points accumulation to complete at least one optional mission per quarter. It is the strongest predictor of long-term retention: members who engage with missions build a habit loop that makes them significantly harder to churn. A rising participation rate signals that your program has moved from transactional to genuinely relational.",
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
      definition: "LTV growth measures the revenue delta between loyalty members and a matched cohort of non-members over 12 months. It is the foundational proof of loyalty ROI: the difference between a program that drives real incremental value and one that simply rewards customers who would have bought anyway. Tracking LTV growth by cohort controls for selection bias and reveals the true causal impact of program membership.",
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
      definition: "AOV growth measures how much larger a member's basket is on orders where they apply a reward, compared to their own non-redemption orders. It is the most direct measure of checkout-level impact: a high AOV growth rate means your rewards pull forward spend, not just reward spend that was already committed. Setting a minimum cart threshold for reward redemption is the primary structural lever to drive this metric.",
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
      definition: "Orders growth tracks how much more frequently loyalty members purchase compared to a matched non-member cohort over 12 months. It is the purest indicator of whether loyalty membership changes actual buying behaviour, independent of basket size. Combined with LTV growth, it lets brands decompose their program's revenue impact into a frequency component and an AOV component.",
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
      definition: "ROI measures the net revenue generated by the loyalty program relative to its total cost. It is the definitive business case metric: it tells leadership whether the program creates incremental value or simply subsidizes existing customer behaviour. A program with a strong ROI converts member engagement into sustainable, measurable revenue growth.",
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
      brands: 130,
      intro: "Fashion & Apparel brands use loyalty to bridge the gaps between seasonal cycles and maintain purchase intent between drops. Members respond more to early access and VIP experiences than to discounts, generating strong participation but modest redemption value. The main challenge is keeping members engaged during off-peak periods through continuous program activity and exclusive pre-launch experiences.",
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
      brands: 118,
      intro: "Beauty & Wellness stands out for its naturally high purchase frequency and the emotional connection brands build with their customers. Loyalty programs in this sector activate fast and generate strong transactional engagement. The real lever lies in sustaining that momentum: turning engaged members into consistent repeat buyers through continuous program activity and personalized post-purchase experiences.",
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
      brands: 84,
      intro: "Food & Beverage benefits from the highest natural purchase frequency across all sectors, driving fast activation and strong points usage. Small basket sizes limit AOV uplift, but the volume of transactions makes loyalty programs highly efficient at building durable purchase habits. The opportunity lies in using that frequency as a lever to deepen engagement through missions and content.",
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
      brands: 76,
      intro: "Health & Supplements records the strongest LTV uplift of any sector, driven by subscription-compatible purchase patterns and a high degree of trust between brands and customers. Members reactivate quickly through win-back missions, and referral plays a structurally larger role than in other categories. The lever to activate is converting product satisfaction into active word-of-mouth, supported by a strong referral program.",
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
      brands: 68,
      intro: "Home & Decoration operates on long purchase cycles that fundamentally reshape the loyalty dynamic. AOV growth at redemption is strong, but low transaction frequency causes members to disengage between purchases, pulling down participation and redemption rates. Re-engagement missions are the primary mechanism to keep the program alive between buying moments.",
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
      brands: 58,
      intro: "Petcare stands out for the strongest referral conversion of any sector, driven by the emotional bond between pet owners that naturally fuels word-of-mouth. Members are highly motivated and show strong brand loyalty, but program engagement depends on how well brands activate that community energy through missions and shared experiences. Pet parents talk to other pet parents: referral is the growth lever to prioritize.",
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
      brands: 66,
      intro: "Sports & Fitness generates the highest mission participation of any sector, reflecting a community-oriented audience that responds naturally to challenges and collective goals. Loyalty programs work best here when built around identity and shared progress rather than purely transactional rewards. Margin pressure limits ROI relative to other sectors, but the depth of engagement creates a strong foundation for long-term retention.",
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
