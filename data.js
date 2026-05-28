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
      definition: "The activation rate measures the proportion of orders that include a reward earned through the program. This is the benchmark indicator for assessing your customers' actual adoption of the loyalty program. A good rate reflects a clear perception of the programme's value: your members understand the benefits, use them and naturally integrate them into their post-purchase journey.",
      formula: "(Orders with reward used / Total order volume) × 100",
      formulaParts: { num: "Orders with reward used", denom: "Total order volume" },
      tips: [
        { title: "Build a varied range of rewards",   body: "Build a varied range of rewards, tailored to different customer profiles (vouchers, exclusive access, charitable donations, etc.)." },
        { title: "Simplify access to first tiers",    body: "Simplify access to the first tiers to quickly trigger initial activation and create a reflex to use the program." },
        { title: "Make the program omnipresent",      body: "Make the program omnipresent in your ecosystem: home page, customer account, post-purchase email, social media, checkout." }
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "points_usage_rate",
      name: "Points usage rate",
      short: "Points usage",
      category: "Transactional",
      type: "rate",
      defaultViz: "gauge",
      unit: "%",
      definition: "The points usage rate measures the proportion of credited points that are actually spent by your customers. This is a key indicator of your program's liquidity and the perceived value of your rewards. A good rate reflects a smooth journey and benefits that are attractive enough to encourage your members to take action. It is a true barometer of the effectiveness of your engagement mechanism.",
      formula: "(Points used / Points earned) × 100",
      formulaParts: { num: "Points used", denom: "Points earned" },
      tips: [
        { title: "Make first rewards achievable",       body: "Make your first rewards achievable from the very first purchases to create an immediate reflex to use the programme." },
        { title: "Set up automated reminders",          body: "Set up automated reminders of points balances via email, text message or WhatsApp to keep members engaged." },
        { title: "Create a controlled sense of urgency", body: "Create a controlled sense of urgency with limited-time bonuses to stimulate spending." }
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "redemption_rate",
      name: "Rewards redemption rate",
      short: "Redemption",
      category: "Transactional",
      type: "rate",
      defaultViz: "arc",
      unit: "%",
      definition: "The reward redemption rate measures the proportion of claimed benefits that are actually used by customers. This is a key indicator of the actual activation of the program and the perceived value of the benefits offered. A good rate reflects a smooth, understandable and motivating experience, while a low rate often signals a lack of clarity, visibility or overly restrictive terms of use.",
      formula: "(Used rewards / Claimed rewards) × 100",
      formulaParts: { num: "Used rewards", denom: "Claimed rewards" },
      tips: [
        { title: "Automate multi-channel reminders", body: "Automate multi-channel reminders (email, SMS, WhatsApp, push notifications) to encourage your customers to use their rewards before they expire." },
        { title: "Simplify terms and conditions",    body: "Simplify the terms and conditions of use: fewer restrictions = more activation." },
        { title: "Position rewards at key moments",  body: "Position rewards at key moments in the purchase journey: in emails, customer accounts or at checkout." }
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "referral_conversion",
      name: "Referral conversion rate",
      short: "Referral CVR",
      category: "Referral",
      type: "rate",
      defaultViz: "gauge",
      unit: "%",
      definition: "The referral conversion rate measures the proportion of referrals who make a first purchase after receiving an invitation or referral code. It assesses your brand's ability to convert a referral into an actual acquisition. A good rate reflects a clear promise, a well-positioned advantage and a frictionless purchasing journey for the referred customer.",
      formula: "(Number of referrals who made a purchase / Total number of referrals invited) × 100",
      formulaParts: { num: "Referrals who made a purchase", denom: "Total referrals invited" },
      tips: [
        { title: "Take care of the referral experience", body: "Take care of the referral experience: from clicking on the link to making a purchase, the journey must be smooth, mobile-first and friction-free." },
        { title: "Integrate referrals into CRM flows",   body: "Integrate referrals into your CRM flows: post-purchase emails, customer area, thank you page, etc. to multiply natural entry points." },
        { title: "Reach out to inactive referrals",      body: "Reach out to inactive referrals via an automated sequence (email, SMS or WhatsApp) before the code expires to maximise conversion." },
        { title: "Test different incentives",            body: "Test different incentives (vouchers, discounts, loyalty points) to identify the most effective lever based on your average order value." }
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "new_customer_rate",
      name: "New customer rate (from referrals)",
      short: "New from referral",
      category: "Referral",
      type: "rate",
      defaultViz: "arc",
      unit: "%",
      definition: "The new customer rate measures the proportion of buyers acquired through referral, relative to the total number of new customers over a given period. It highlights the program's ability to generate organic growth and turn your satisfied customers into genuine acquisition channels. A good rate reflects an active community, a well-integrated referral experience and a marginal acquisition cost of almost zero, all of which are major assets for a profitable growth strategy.",
      formula: "(New customers via referral / Total new customers) × 100",
      formulaParts: { num: "New customers via referral", denom: "Total new customers" },
      tips: [
        { title: "Personalise the referral message", body: "Personalise the referral message: an authentic tone, coming from the referrer, generates more trust than purely promotional communication." },
        { title: "Make sharing easy",                body: "Make sharing easy (copy-and-paste links, email, SMS, etc.) to remove barriers to spontaneous recommendations." },
        { title: "Regularly promote your program",   body: "Regularly promote your program with double bonus campaigns, community challenges or seasonal activations to maintain virality." }
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "participation_rate",
      name: "Participation rate",
      short: "Participation",
      category: "Relational",
      type: "rate",
      defaultViz: "ring",
      unit: "%",
      definition: "The participation rate refers to the proportion of customers who completed at least one engagement mechanism during the period observed. It reflects the relational vitality of your program and your brand's ability to create interactions beyond the purchase. A good rate shows that your customers do more than just consume: they participate, share, give their opinions and contribute to your brand's organic visibility. A true indicator of community performance.",
      formula: "(Number of clients who completed a mission / Total number of active customers) × 100",
      formulaParts: { num: "Clients who completed a mission", denom: "Total active customers" },
      tips: [
        { title: "Diversify engagement mechanisms",     body: "Diversify engagement mechanisms: opt-in, reviews, UGC, social interactions, surveys, etc." },
        { title: "Make engagement mechanisms visible",  body: "Make engagement mechanisms visible and accessible throughout the customer journey: in emails, loyalty accounts, etc." },
        { title: "Gamify the experience",               body: "Gamify the experience with symbolic rewards or temporary bonuses to boost long-term participation." },
        { title: "Regularly promote your program",      body: "Regularly promote your program around key events (new products, events, seasonal campaigns) to renew interest." }
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
      formula: "(Additional revenue generated / Total program cost (tool + rewards)) × 100",
      formulaParts: { num: "Additional revenue generated", denom: "Total program cost (tool + rewards)" },
      tips: [
        { title: "Optimise the rewards/margin mix",    body: "Optimise the rewards/margin mix: focus on benefits with high perceived value and low operational costs (e.g. exclusive access, dedicated after-sales service, etc.)." },
        { title: "Segment your promotional efforts",   body: "Segment your promotional efforts: focus incentives on your highest-potential segments (top spenders, VIPs, dormant customers to reactivate)." },
        { title: "Use data to drive your campaigns",   body: "Use data to drive your campaigns: use engagement signals (unused points, unconsumed rewards, thresholds almost reached) to trigger targeted and profitable reminders." }
      ],
      insights: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        { name: "We Are Jolies",   logo: "assets/logos/wearejolies.webp",       url: "https://wearejolies.com/pages/programme-de-fidelite" },
        { name: "SAAJ",            logo: "assets/logos/saaj.png",               url: "https://saajparis.fr/pages/le-club-saaj" },
        { name: "Make My Lemonade",logo: "assets/logos/Make My Lemonade.png",   url: "https://www.makemylemonade.com/pages/fidelite" },
        { name: "Pétrone",         logo: "assets/logos/petrone.png",            url: "https://petroneparis.fr/pages/fidelite-parrainage" },
        { name: "Serge Blanco",    logo: "assets/logos/serge-blanco.webp",      url: "https://sergeblanco.com/pages/fidelite-parrainage" },
        { name: "PXP",             logo: "assets/logos/pxp.png",                url: "https://www.projectxparis.com/pages/fidelite-et-parrainage" }
      ],
      kpis: {
        activation_rate: 4.7, points_usage_rate: 8.2, redemption_rate: 44.4, referral_conversion: 35, new_customer_rate: 0.6, participation_rate: 5.9,
        aov_growth: 20.5, orders_growth: 147.2, ltv_growth: 195, roi: 20.6
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
        { name: "La Belle Boucle", logo: "assets/logos/la-belle-boucle.webp", url: "https://labelleboucle.fr/pages/programme-fideliboucles" },
        { name: "Aime",            logo: "assets/logos/aime.png",             url: "https://aime.co/pages/programme-fidelite" },
        { name: "Pomponne",        logo: "assets/logos/pomponne.avif",        url: "https://www.pomponne-makeup.com/pages/fidelite-parrainage" },
        { name: "La Crème Libre",  logo: "assets/logos/lacremelibre.webp",   url: "https://lacremelibre.com/pages/fidelite-parrainage" },
        { name: "Demain Beauty",   logo: "assets/logos/demain-beauty.webp",  url: "https://demainbeauty.com/pages/fidelite-parrainage" },
        { name: "Nubiance",        logo: "assets/logos/nubiance.png",         url: "https://nubiance.fr/pages/programme-de-fidelite-parrainage" }
      ],
      kpis: {
        activation_rate: 5.7, points_usage_rate: 10, redemption_rate: 48.5, referral_conversion: 35.8, new_customer_rate: 0.6, participation_rate: 13.3,
        aov_growth: 11, orders_growth: 120.8, ltv_growth: 141.7, roi: 13.3
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
        { name: "Capsme",      logo: "assets/logos/capsme.avif",      url: "https://www.capsme.fr/pages/fidelite-parrainage" },
        { name: "Hydrology",   logo: "assets/logos/hydrology.png",    url: "https://hydrology.fr/pages/programme-de-fidelite" },
        { name: "Irasshai",    logo: "assets/logos/iRASSHAi.webp",    url: "https://irasshai.co/pages/programme-de-fidelite-irasshai" },
        { name: "Archie",      logo: "assets/logos/myarchie.webp",    url: "https://myarchie.co/pages/communaute" },
        { name: "Ma Tchatcha", logo: "assets/logos/ma-tchatcha.webp", url: "https://ma-tchatcha.com/pages/fidelite-et-parrainage" },
        { name: "Féroce",      logo: "assets/logos/feroce.webp",      url: "https://feroce.food/pages/fidelite-parrainage-1" }
      ],
      kpis: {
        activation_rate: 4.9, points_usage_rate: 17.4, redemption_rate: 44.8, referral_conversion: 35.9, new_customer_rate: 0.6, participation_rate: 9.2,
        aov_growth: 19.7, orders_growth: 102.8, ltv_growth: 147.9, roi: 8.9
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
        { name: "Epycure",      logo: "assets/logos/epycure.png",        url: "https://epycure.com/pages/fidelite-parrainage" },
        { name: "The Smilist",  logo: "assets/logos/thesmilist.webp",    url: "https://thesmilist.co/pages/rewards" },
        { name: "Dijo",         logo: "assets/logos/dijo.png",           url: "https://www.dijo.fr/pages/fid_loyoly" },
        { name: "Nutri&Co",     logo: "assets/logos/nutrico.png",        url: "https://nutriandco.com/fr/fidelite-et-parrainage" },
        { name: "Hydratis",     logo: "assets/logos/Hydratis logo.png",  url: "https://www.hydratis.co/pages/fidelite-parrainage" },
        { name: "Novoma",       logo: "assets/logos/novoma.webp",        url: "https://novoma.com/pages/club-fidelite-novoma" }
      ],
      kpis: {
        activation_rate: 4, points_usage_rate: 7.6, redemption_rate: 47, referral_conversion: 38.5, new_customer_rate: 0.6, participation_rate: 18.8,
        aov_growth: 28.7, orders_growth: 87.6, ltv_growth: 144, roi: 19.1
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
        { name: "Atma",               logo: "assets/logos/atma.webp",                url: "https://atmakitchenware.fr/pages/la-brigade-du-kiff" },
        { name: "Ma Petite Chaise",   logo: "assets/logos/ma-petite-chaise.webp",    url: "https://www.mapetitechaise.com/content/111-Fidelite" },
        { name: "Céladon Paris",      logo: "assets/logos/celadon.avif",             url: "https://celadon-paris.com/pages/fidelite-parrainage-celadon-paris" },
        { name: "Cigoire",            logo: "assets/logos/cigoire.webp",             url: "https://cigoire.com/pages/fidelite-parrainage" },
        { name: "Emily's Pillow",     logo: "assets/logos/emilys-pillow.png",        url: "https://emilyspillow.com/pages/fidelite-parrainage" },
        { name: "La Bourse aux Livres", logo: "assets/logos/la-bourse-aux-livres.webp", url: "https://labourseauxlivres.fr/pages/gagner-des-cadeaux" }
      ],
      kpis: {
        activation_rate: 4.7, points_usage_rate: 9, redemption_rate: 38.8, referral_conversion: 44.1, new_customer_rate: 0.9, participation_rate: 1.7,
        aov_growth: 34, orders_growth: 143.4, ltv_growth: 263.5, roi: 25.8
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
        { name: "Pro-Nutrition",          logo: "assets/logos/pro-nutrition.webp",           url: "https://www.pro-nutrition.fr/pages/fidelite-parrainage" },
        { name: "Dexter & Mango",         logo: "assets/logos/dexter-et-mango.webp",         url: "https://dexter-et-mango.fr/pages/fidelite-parrainage" },
        { name: "France Croquettes",      logo: "assets/logos/france-croquettes.avif",       url: "https://francecroquettes.com/pages/club-fidelite" },
        { name: "Nourrir Comme la Nature",logo: "assets/logos/nourrir-comme-la-nature.webp", url: "https://www.nourrircommelanature.com/pages/fidelite" },
        { name: "Bande de Canailles",     logo: "assets/logos/bande-de-canailles.webp",      url: "https://bande-de-canailles.com/pages/page_fidelite" },
        { name: "Toutou Vert",            logo: "assets/logos/toutou-vert.png",              url: "https://toutouvert.com/pages/fidelite" }
      ],
      kpis: {
        activation_rate: 5.5, points_usage_rate: 15.1, redemption_rate: 47.4, referral_conversion: 42.2, new_customer_rate: 0.8, participation_rate: 10.3,
        aov_growth: 8.7, orders_growth: 112.1, ltv_growth: 134.7, roi: 34.3
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
        { name: "Venum",          logo: "assets/logos/venum.svg",        url: "https://fr.venum.com/pages/venum-club" },
        { name: "Un Bon Maillot", logo: "assets/logos/unbonmaillot.png", url: "https://unbonmaillot.com/pages/ubm-football-club" },
        { name: "Ritmic",         logo: "assets/logos/ritmic.png",       url: "https://www.ritmic.co/pages/programme-de-fidelite" },
        { name: "PowerGym",       logo: "assets/logos/powergym.png",     url: "https://www.powergym.fr/pages/fidelite-parrainage" },
        { name: "SmartWorkout",   logo: "assets/logos/smartworkout.png", url: "https://smartworkout-pro.com/pages/parrainage" },
        { name: "Ohlala",         logo: "assets/logos/ohlala.webp",      url: "https://ohlala-equestrian.com/fr/pages/programme-de-fidelite-ohlala" }
      ],
      kpis: {
        activation_rate: 4.8, points_usage_rate: 9.8, redemption_rate: 43.9, referral_conversion: 37.1, new_customer_rate: 0.7, participation_rate: 9.8,
        aov_growth: 21.1, orders_growth: 121.5, ltv_growth: 175.4, roi: 20.1
      },
      mission_impact: { aov: [68, 74, 82, 92, 103], ltv: [100, 128, 158, 192, 224], orders: [100, 122, 148, 178, 208] }
    }
  ];

  // ---- Categories ----------------------------------------------------------
  const CATEGORIES = [
    { id: "Transactional", label: "Transactional", blurb: "How members earn and spend in your program." },
    { id: "Referral",      label: "Referral",      blurb: "How members bring in new customers." },
    { id: "Relational",    label: "Engagement",    blurb: "How deep the engagement loop runs." },
    { id: "Business",      label: "Business impact", blurb: "What the program does to revenue." }
  ];

  // ---- Global cross-sector averages (sourced from Google Sheet pivot table) --
  const GLOBAL = {
    activation_rate: 4.8, points_usage_rate: 9.8, redemption_rate: 43.9, referral_conversion: 37.1, new_customer_rate: 0.7, participation_rate: 9.8,
    aov_growth: 21.1, orders_growth: 121.5, ltv_growth: 175.4, roi: 20.1
  };

  SECTORS.push({
    id: "other",
    name: "Other",
    short: "Other",
    icon: "layers",
    brands: 0,
    intro: "No specific sector matches your business model. Your brand will be compared against cross-sector averages, calculated across all 600+ brands in the panel. This is the most neutral reference point available.",
    clients: [],
    kpis: { ...GLOBAL },
    mission_impact: { aov: [], ltv: [], orders: [] }
  });

  const TOTAL_BRANDS = SECTORS.reduce((sum, s) => sum + (s.brands || 0), 0);

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
