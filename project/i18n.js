/* =============================================================
   Loyoly Benchmark — i18n overlays
   ─────────────────────────────────────────────────────────────
   Three locales: en (UK), fr, es.
   Currency by locale: en → £, fr → €, es → €.
   UI strings live under ui.<lang>.<key>.
   Domain strings (KPIs, sectors, categories) overlay data.js.
   ============================================================= */
window.LOYOLY_I18N = {
  // ─────────────────────── LOCALES METADATA ──────────────────────
  locales: [
    { id: "en", label: "English",   short: "EN", currency: "£", region: "UK" },
    { id: "fr", label: "Français",  short: "FR", currency: "€", region: "FR" },
    { id: "es", label: "Español",   short: "ES", currency: "€", region: "ES" }
  ],

  // ─────────────────────── FRENCH ───────────────────────────────
  fr: {
    ui: {
      nav_overview_label: "Vue d'ensemble",
      nav_overview_sub:   "Moyennes inter-secteurs",
      nav_industry_label: "Par industrie",
      nav_industry_sub:   "Comparer 7 secteurs",
      nav_kpi_label:      "Par KPI",
      nav_kpi_sub:        "Classer sur une métrique",
      nav_updated:        "Mis à jour en mai 2026",
      nav_subtitle:       "Benchmark Loyauté 2026",
      benchmark_cta:      "Comparer votre marque",

      footer_caption:     "Source : Loyoly Loyalty Benchmark 2026 — loyoly.io",
      footer_meta:        "500+ marques · 7 industries · 10 KPI · Méthodologie disponible sur demande",

      hero_pill:          "Intelligence loyauté",
      hero_h1_pre:        "L'état de l'engagement post-achat,",
      hero_h1_mid:        "en",
      hero_h1_post:       "KPI",
      hero_lead:          "Benchmarks loyauté inter-secteurs issus de {n}+ marchands Loyoly, ventilés par industrie et par KPI. Comparez votre programme à celui de vos pairs en moins d'une minute.",
      hero_secondary_cta: "Explorer le rapport",

      sec01_eyebrow:      "01 — Deux entrées",
      sec01_title:        "Lisez le rapport à votre façon.",
      sec01_lead:         "Tranchez le même jeu de données par secteur ou par KPI. Chaque carte et étiquette ci-dessous est un raccourci vers la bonne vue.",
      entry_a_eyebrow:    "Par industrie",
      entry_a_title:      "Voir la performance de votre secteur.",
      entry_a_body:       "Choisissez l'une des {n} verticales et visualisez les 10 KPI côte-à-côte avec la moyenne inter-secteurs, plus les courbes d'impact des missions.",
      entry_a_open:       "Ouvrir la vue industrie",
      entry_b_eyebrow:    "Par KPI",
      entry_b_title:      "Classez les secteurs sur la métrique qui compte.",
      entry_b_body:       "Choisissez un KPI et comparez instantanément les 7 secteurs à la moyenne inter-secteurs — avec trois actions concrètes pour faire monter le chiffre.",
      entry_b_open:       "Ouvrir la vue KPI",
      entry_more:         "+ {n} de plus",

      sec02_eyebrow:      "02 — Moyennes inter-secteurs",
      sec02_title_a:      "À quoi ressemble un programme",
      sec02_title_b:      "de loyauté moyen en 2026.",
      sec02_lead:         "Cliquez sur une carte pour ouvrir l'analyse complète du KPI — classement par secteur + trois conseils concrets pour faire monter le chiffre.",
      chip_rates:         "Taux : 0–100 %",
      chip_growth:        "Croissance : % de gain",
      chip_roi:           "ROI : multiplicateur ×",

      banner_eyebrow:     "Outil gratuit",
      banner_title:       "Comment votre programme se positionne-t-il ?",
      banner_body:        "Choisissez votre industrie, entrez vos chiffres, voyez l'écart à la moyenne sectorielle — le tout dans votre navigateur, rien n'est stocké.",

      meth_eyebrow:       "03 — Méthodologie",
      meth_title:         "Comment ce benchmark a été construit.",
      meth_intro:         "Les données présentées dans ce benchmark proviennent d'un panel de marques clientes de la plateforme Loyoly, représentant différents secteurs e-commerce. L'analyse repose sur l'observation des performances réelles enregistrées pendant les périodes de référence, selon la nature des indicateurs étudiés.",
      meth_op_lbl:        "Indicateurs opérationnels",
      meth_op_body:       "Le taux d'activation, le taux d'utilisation des points et des récompenses, ainsi que les indicateurs de parrainage ont été calculés sur les <strong>30 derniers jours</strong>. Cette fenêtre reflète les dynamiques récentes d'activation et d'interaction des membres.",
      meth_lt_lbl:        "Indicateurs long terme",
      meth_lt_body:       "La LTV, l'AOV, le nombre moyen de commandes et le taux d'engagement ont été mesurés sur <strong>90 jours</strong> pour assurer une lecture stable des comportements et de la rentabilité associés à la loyauté.",
      meth_smp_lbl:       "Échantillonnage",
      meth_smp_body:      "Les résultats sont des moyennes sectorielles, calculées à partir de <strong>cohortes clients homogènes</strong> au sein de chaque secteur. Aucune pondération par taille d'entreprise ou volume de ventes n'a été appliquée.",
      meth_footer:        "Toutes les analyses visent à offrir une lecture comparative et objective des performances moyennes, permettant aux marques de comparer leurs propres résultats aux standards du marché.",

      iv_eyebrow:         "Vue par industrie",
      iv_title:           "Benchmark par secteur.",
      iv_clients_eyebrow: "Marques sondées",
      iv_clients_body:    "Quelques programmes représentatifs de ce secteur (panel anonymisé).",
      iv_kpi_count:       "{n} KPI",
      iv_kpis_count:      "{n} KPI",
      iv_see_program:     "Voir le programme",

      kv_eyebrow:         "Vue par KPI",
      kv_title:           "Comparer les secteurs, un KPI à la fois.",
      kv_definition_lbl:  "Définition",
      kv_formula_lbl:     "Formule",
      kv_cross_avg:       "Moyenne inter-secteurs",
      kv_ranking_eyebrow: "Classement sectoriel",
      kv_ranking_title:   "{kpi} — par secteur",
      kv_legend_sector:   "Valeur sectorielle",
      kv_legend_avg:      "Moyenne inter-secteurs",
      kv_avg_short:       "Moyenne",
      kv_tips_eyebrow:    "Comment l'améliorer",
      kv_tips_title:      "Trois actions qui font bouger {kpi}.",

      mc_eyebrow:         "Gain d'engagement",
      mc_title:           "Impact des missions complétées",
      mc_body:            "Comment LTV, commandes et AOV (base 100 à zéro mission) progressent quand les membres complètent davantage de missions d'engagement.",
      mc_series_ltv:      "Indice LTV",
      mc_series_orders:   "Indice commandes",
      mc_series_aov:      "Indice AOV",
      mc_axis_mission_one:"mission",
      mc_axis_mission_n:  "missions",

      card_sub_rate:      "part des membres",
      card_sub_growth:    "vs. non-membres",
      card_sub_roi:       "revenu incrémental",
      card_avg_prefix:    "moy.",
      card_view_kpi:      "Voir le KPI",

      pts:                "pts",
      export_btn:         "Exporter",
      export_alert:       "Export PNG bientôt disponible — ceci est un prototype statique.",

      bp_eyebrow:         "Outil gratuit",
      bp_title:           "Comparer votre marque",
      bp_step_of:         "Étape {n} sur 3",
      bp_step_1:          "choisissez votre industrie",
      bp_step_2:          "saisissez vos chiffres",
      bp_step_3:          "résultats",
      bp_back:            "← Retour",
      bp_continue:        "Continuer",
      bp_see_results:     "Voir mes résultats",
      bp_edit:            "Modifier les chiffres",
      bp_no_account:      "Aucun compte requis. Rien n'est stocké.",
      bp_step1_lead:      "Choisissez le secteur le plus proche. Nous comparerons vos chiffres aux {n} marques de ce secteur.",
      bp_step1_brands:    "marques",
      bp_step2_lead:      "Saisissez ce que vous connaissez — laissez le reste vide. Il faut au moins 3 valeurs pour calculer des écarts pertinents.",
      bp_step2_placeholder:"Placeholder = benchmark sectoriel {sector}.",
      bp_step3_verdict:   "Verdict",
      bp_step3_good:      "En avance sur votre secteur.",
      bp_step3_good_body: "Vous surperformez le benchmark {sector} sur {a} des {b} KPI renseignés.",
      bp_step3_ok:        "Signaux mixtes.",
      bp_step3_ok_body:   "Vous êtes en avance sur {a} des {b} KPI et en retrait sur les autres — marge claire pour faire monter les plus faibles.",
      bp_step3_bad:       "Beaucoup de potentiel à débloquer.",
      bp_step3_bad_body:  "La plupart de vos KPI se situent sous la moyenne sectorielle {sector}. Même de petits gains se cumuleront — consultez la vue KPI pour les leviers les plus forts.",
      bp_you_vs_avg:      "vous {you} vs. moy. {avg}",
      bp_not_entered:     "non renseigné"
    },
    kpis: {
      activation_rate: {
        name: "Taux d'activation",
        short: "Activation",
        definition: "Le taux d'activation mesure la vitesse à laquelle votre programme de loyauté transforme les inscriptions en membres engagés. Il capture la part des clients opt-in qui complètent au moins une action de gain ou d'utilisation dans les 30 premiers jours. Un fort taux d'activation est le socle de tous les KPI suivants — un membre qui ne s'active jamais ne peut ni gagner, ni utiliser, ni parrainer.",
        formula: "Membres actifs (30j) ÷ Membres inscrits",
        formulaParts: { num: "Membres actifs (30j)", denom: "Membres inscrits" },
        tips: [
          { title: "Mission de bienvenue guidée", body: "Déclenchez une mission de bienvenue guidée dans les 48 premières heures." },
          { title: "Récompenser la première action", body: "Récompensez la toute première action (avis, suivi, profil complété) par des points bonus." },
          { title: "Afficher la proximité du palier", body: "Affichez une barre de progression vers le palier supérieur pour pousser à une deuxième action." }
        ]
      },
      points_usage_rate: {
        name: "Taux d'utilisation des points",
        short: "Utilisation des points",
        definition: "Le taux d'utilisation des points indique si les points que vous distribuez se traduisent réellement en changement de comportement. Il compare les points dépensés aux points émis sur une fenêtre glissante de 12 mois. Une faible utilisation signale un passif caché au bilan — et des points non dépensés veulent dire que les membres ne perçoivent pas assez de valeur dans le catalogue.",
        formula: "Points utilisés ÷ Points émis",
        formulaParts: { num: "Points utilisés", denom: "Points émis" },
        tips: [
          { title: "Expiration douce des points", body: "Mettez une expiration douce à 12 mois avec un rappel email 30 jours avant." },
          { title: "Micro-récompenses à bas seuil", body: "Proposez des micro-récompenses instantanées (livraison gratuite, échantillon) à bas seuils." },
          { title: "Solde de points dans le panier", body: "Affichez le solde de points dans le panier, pas seulement dans le compte client." }
        ]
      },
      redemption_rate: {
        name: "Taux d'utilisation des récompenses",
        short: "Utilisation",
        definition: "Le taux d'utilisation des récompenses est le moment de vérité de tout programme — quand un avantage acquis devient une action réelle. Il suit la part des membres actifs qui réclament au moins une récompense sur 90 jours. Une forte utilisation corrèle fortement avec la rétention ; l'acte d'utilisation renforce lui-même l'identification du membre à la marque.",
        formula: "Membres ayant utilisé une récompense (90j) ÷ Membres actifs",
        formulaParts: { num: "Membres avec utilisation (90j)", denom: "Membres actifs" },
        tips: [
          { title: "Abaisser le premier seuil", body: "Abaissez le seuil de la première récompense pour rendre le premier usage atteignable." },
          { title: "Diversifier le catalogue", body: "Diversifiez les récompenses : remises, produits, dons, drops exclusifs." },
          { title: "Push « récompense prête »", body: "Envoyez une notification personnalisée « récompense prête » quand un seuil est franchi." }
        ]
      },
      referral_conversion: {
        name: "Taux de conversion du parrainage",
        short: "Conversion parrainage",
        definition: "Le taux de conversion du parrainage capture l'efficacité de votre moteur de bouche-à-oreille. Il mesure combien de liens de parrainage partagés par les membres aboutissent à un premier client payant. Un CVR de parrainage sain est l'un des canaux d'acquisition les moins chers — chaque conversion arrive avec une recommandation implicite et un boost de rétention intégré.",
        formula: "Commandes parrainées ÷ Partages de parrainage",
        formulaParts: { num: "Commandes parrainées", denom: "Partages de parrainage" },
        tips: [
          { title: "Récompenses bilatérales", body: "Les récompenses bilatérales (parrain + filleul) surperforment d'environ 2× les unilatérales." },
          { title: "Pré-remplir les messages", body: "Pré-remplissez les messages de partage — la friction tue la conversion." },
          { title: "Ajouter de la preuve sociale", body: "Affichez la preuve sociale (« 127 amis ont rejoint ce mois-ci ») sur l'écran de partage." }
        ]
      },
      new_customer_rate: {
        name: "Taux de nouveaux clients (issus du parrainage)",
        short: "Nouveaux du parrainage",
        definition: "Cet indicateur montre quelle part de votre acquisition de nouveaux clients vient de membres existants, par opposition aux canaux payants et organiques. C'est une mesure directe de la croissance pilotée par le programme, et l'un des plus forts prédicteurs de l'économie unitaire long terme : les clients parrainés ont une LTV plus élevée et un churn plus bas que la moyenne.",
        formula: "Nouveaux clients parrainés ÷ Total nouveaux clients",
        formulaParts: { num: "Nouveaux clients parrainés", denom: "Total nouveaux clients" },
        tips: [
          { title: "Promouvoir en post-achat", body: "Promouvez le parrainage dans les emails post-achat — c'est le pic d'intention." },
          { title: "Combiner aux tiers VIP", body: "Combinez parrainage et tiers VIP : tier plus élevé → récompense plus forte." },
          { title: "A/B tester le type de récompense", body: "A/B testez le type de récompense (% off vs. {currency} fixe vs. points) par cohorte." }
        ]
      },
      participation_rate: {
        name: "Taux de participation",
        short: "Participation",
        definition: "Le taux de participation mesure la profondeur d'engagement — la part des membres qui complètent au moins une mission optionnelle par trimestre. Là où l'activation capture la première action, la participation capture la boucle. Un fort taux de participation signale un programme qui vit au-delà des points et des remises : un lieu où le client revient pour l'expérience elle-même.",
        formula: "Membres ayant complété ≥1 mission ÷ Total membres",
        formulaParts: { num: "Membres avec ≥1 mission", denom: "Total membres" },
        tips: [
          { title: "Renouveler chaque mois", body: "Renouvelez les missions chaque mois — la nouveauté apporte +18 % de participation." },
          { title: "Mixer les types de missions", body: "Mixez missions sociales, contenus et achat pour que chaque persona ait un chemin." },
          { title: "Email « wrapped »", body: "Récapitulez les missions complétées dans un email « wrapped » pour renforcer l'identité." }
        ]
      },
      ltv_growth: {
        name: "Croissance LTV",
        short: "Croissance LTV",
        definition: "La croissance LTV quantifie combien un membre du programme vaut en plus sur 12 mois face à une cohorte comparable de non-membres. C'est l'indicateur le plus important de la santé du programme car il relie chaque action — gagner, utiliser, missions, parrainages — à un résultat de revenu concret. Une forte croissance LTV finance le programme largement.",
        formula: "(LTV_membres − LTV_non-membres) ÷ LTV_non-membres",
        formulaParts: { num: "LTV(membres) − LTV(non-membres)", denom: "LTV(non-membres)" },
        tips: [
          { title: "Tiers VIP expérientiels", body: "Les tiers VIP avec récompenses expérientielles battent les tiers purement promo sur la rétention." },
          { title: "Mission suivante personnalisée", body: "Déclenchez une « meilleure prochaine mission » personnalisée après chaque achat." },
          { title: "Win-back à 60 / 90 / 120 jours", body: "Les missions de win-back à 60 / 90 / 120 jours rattrapent la lassitude avant qu'elle s'installe." }
        ]
      },
      aov_growth: {
        name: "Croissance AOV",
        short: "Croissance AOV",
        definition: "La croissance AOV suit le gain de taille de panier quand un membre utilise des points au checkout, vs. ses propres paniers sans utilisation. Elle capture la capacité du programme à faire monter le membre d'un palier de panier sans éroder la marge. Un fort signal de croissance AOV valide les seuils de récompense conçus et les bundles du catalogue.",
        formula: "(AOV_avec_usage − AOV_sans) ÷ AOV_sans",
        formulaParts: { num: "AOV(avec usage) − AOV(sans)", denom: "AOV(sans)" },
        tips: [
          { title: "Plafonner la valeur des points", body: "Plafonnez la valeur de réduction-points pour pousser au palier de panier supérieur." },
          { title: "Mission bonus au-dessus de la médiane", body: "Proposez une mission à points bonus sur les paniers au-dessus de la médiane AOV." },
          { title: "Bundles > remises plates", body: "Les récompenses-bundle (ex. cadeau offert au-delà de {currency}X) surperforment les remises plates." }
        ]
      },
      orders_growth: {
        name: "Croissance des commandes",
        short: "Croissance commandes",
        definition: "La croissance des commandes mesure l'augmentation de la fréquence d'achat des membres vs. une cohorte comparable de non-membres sur 12 mois. Elle révèle si le programme réussit à raccourcir le délai entre deux achats — via rappels, missions et incitations par palier qui ramènent le membre dans le tunnel avant qu'il ne revienne naturellement. C'est la contrepartie fréquence directe de la croissance AOV.",
        formula: "(Commandes_par_membre − Commandes_par_non_membre) ÷ Commandes_par_non_membre",
        formulaParts: { num: "Commandes/membre − Commandes/non-membre", denom: "Commandes/non-membre" },
        tips: [
          { title: "Missions anniversaires", body: "Les missions anniversaire (naissance + ancienneté) créent des déclencheurs naturels de re-achat." },
          { title: "Compteurs d'expiration de tier", body: "Les compteurs d'expiration de tier (« gardez votre statut VIP ») accélèrent la commande suivante." },
          { title: "Récompenses de cross-sell", body: "Les récompenses de mission cross-sell vers une catégorie complémentaire augmentent la fréquence." }
        ]
      },
      roi: {
        name: "ROI",
        short: "ROI",
        definition: "Le ROI mesure la rentabilité directe du programme de fidélité. C'est l'indicateur ultime pour évaluer la performance économique d'une stratégie relationnelle : il reflète la capacité du programme à convertir l'engagement client en revenu mesurable. Un bon ROI démontre que, au-delà du lien créé avec la communauté, le programme génère une croissance rentable et durable.",
        formula: "(Revenu incrémental − Coût du programme) ÷ Coût du programme",
        formulaParts: { num: "Revenu incrémental − Coût du programme", denom: "Coût du programme" },
        tips: [
          { title: "Attribution incrémentale", body: "Attribuez l'incrémental — exclure les ré-acheteurs organiques du numérateur." },
          { title: "Vers les missions, pas les remises", body: "Déplacez le budget des remises générales vers les récompenses de mission (10× plus de ROI)." },
          { title: "Mesurer trimestriellement", body: "Mesurez trimestriellement — la plupart des programmes atteignent un ROI positif au mois 5." }
        ]
      }
    },
    sectors: {
      fashion: { name: "Mode & Habillement", short: "Mode", intro: "Les marques de mode s'appuient sur la loyauté par paliers pour pousser le rachat entre les drops saisonniers. Les membres préfèrent les avant-premières VIP aux remises — la participation est élevée mais la valeur des utilisations modérée." },
      beauty:  { name: "Beauté & Bien-être", short: "Beauté", intro: "La beauté détient les playbooks de loyauté les plus matures. Les membres sont fortement engagés, les utilisations fréquentes, et les missions UGC (avis, before/after) pèsent autant que le gain de points." },
      food:    { name: "Alimentation & Boissons", short: "Alimentation", intro: "Catégorie à forte fréquence — petits paniers, rachat rapide. L'activation et l'utilisation des points sont excellentes, mais la valeur d'utilisation plafonne le gain AOV face aux autres secteurs." },
      health:  { name: "Santé & Compléments", short: "Santé", intro: "Catégorie naturellement orientée abonnement, avec la plus forte croissance LTV. Les membres se réactivent vite via les missions de win-back ; le parrainage joue un rôle plus important que la moyenne." },
      home:    { name: "Maison & Décoration", short: "Maison", intro: "Les cycles d'achat longs changent la math de la loyauté. La croissance AOV est forte mais la participation et l'utilisation sont en retard — les membres oublient le programme entre deux achats, ce qui rend les missions de ré-engagement critiques." },
      petcare: { name: "Animaux", short: "Animaux", intro: "Les membres petcare sont émotionnellement investis et convertissent leurs amis plus vite que tout autre secteur. Le CVR parrainage est le signal le plus fort — les propriétaires d'animaux parlent à d'autres propriétaires." },
      sports:  { name: "Sport & Fitness", short: "Sport", intro: "Très orienté communauté. La participation aux programmes par missions est la plus haute de tous les secteurs, mais la pression sur les marges maintient le ROI derrière la beauté et la santé." }
    },
    categories: {
      Transactional: { label: "Transactionnel", blurb: "Comment les membres gagnent et utilisent dans votre programme." },
      Referral:      { label: "Parrainage",     blurb: "Comment les membres apportent de nouveaux clients." },
      Relational:    { label: "Relationnel",    blurb: "Quelle profondeur prend la boucle d'engagement." },
      Business:      { label: "Impact business",blurb: "Ce que le programme fait au revenu." }
    }
  },

  // ─────────────────────── SPANISH ──────────────────────────────
  es: {
    ui: {
      nav_overview_label: "Visión general",
      nav_overview_sub:   "Promedios entre sectores",
      nav_industry_label: "Por industria",
      nav_industry_sub:   "Comparar 7 sectores",
      nav_kpi_label:      "Por KPI",
      nav_kpi_sub:        "Ranking de una métrica",
      nav_updated:        "Actualizado en mayo de 2026",
      nav_subtitle:       "Benchmark de Lealtad 2026",
      benchmark_cta:      "Compara tu marca",

      footer_caption:     "Fuente: Loyoly Loyalty Benchmark 2026 — loyoly.io",
      footer_meta:        "500+ marcas · 7 industrias · 10 KPI · Metodología disponible bajo solicitud",

      hero_pill:          "Inteligencia de lealtad",
      hero_h1_pre:        "El estado del engagement post-compra,",
      hero_h1_mid:        "en",
      hero_h1_post:       "KPI",
      hero_lead:          "Benchmarks de lealtad entre sectores a partir de {n}+ marcas Loyoly, desglosados por industria y por KPI. Compara tu programa con tus pares en menos de un minuto.",
      hero_secondary_cta: "Explorar el informe",

      sec01_eyebrow:      "01 — Dos entradas",
      sec01_title:        "Lee el informe a tu manera.",
      sec01_lead:         "Corta el mismo dataset por sector o por KPI. Cada tarjeta y etiqueta es un atajo a la vista correcta.",
      entry_a_eyebrow:    "Por industria",
      entry_a_title:      "Mira cómo va tu sector.",
      entry_a_body:       "Elige una de las {n} verticales y mira los 10 KPI lado a lado con el promedio entre sectores, además de las curvas de impacto de las misiones.",
      entry_a_open:       "Abrir la vista de industria",
      entry_b_eyebrow:    "Por KPI",
      entry_b_title:      "Ranquea los sectores en la métrica que importa.",
      entry_b_body:       "Elige un KPI y compara al instante los 7 sectores con el promedio entre sectores — con tres acciones concretas para subir el número.",
      entry_b_open:       "Abrir la vista de KPI",
      entry_more:         "+ {n} más",

      sec02_eyebrow:      "02 — Promedios entre sectores",
      sec02_title_a:      "Cómo se ve un programa",
      sec02_title_b:      "de lealtad promedio en 2026.",
      sec02_lead:         "Haz clic en cualquier tarjeta para abrir el desglose completo del KPI — ranking por sector + tres consejos concretos para subir el número.",
      chip_rates:         "Tasas: 0–100 %",
      chip_growth:        "Crecimiento: % de uplift",
      chip_roi:           "ROI: multiplicador ×",

      banner_eyebrow:     "Herramienta gratuita",
      banner_title:       "¿Cómo se compara tu programa?",
      banner_body:        "Elige tu industria, introduce tus números, observa la brecha con el promedio sectorial — todo en tu navegador, nada se almacena.",

      meth_eyebrow:       "03 — Metodología",
      meth_title:         "Cómo se construyó este benchmark.",
      meth_intro:         "Los datos presentados en este benchmark provienen de un panel de marcas clientes de la plataforma Loyoly, representando diversos sectores de eCommerce. El análisis se basa en la observación del desempeño real registrado durante los períodos de referencia, según la naturaleza de los indicadores estudiados.",
      meth_op_lbl:        "Indicadores operativos",
      meth_op_body:       "La tasa de activación, la tasa de uso de puntos y recompensas, y los indicadores de referidos fueron calculados sobre los <strong>últimos 30 días</strong>. Esta ventana refleja la activación reciente y las dinámicas de interacción.",
      meth_lt_lbl:        "Indicadores de largo plazo",
      meth_lt_body:       "LTV, AOV, número promedio de pedidos y la tasa de engagement fueron medidos sobre <strong>90 días</strong> para asegurar una lectura estable de los comportamientos y la rentabilidad asociados a la lealtad.",
      meth_smp_lbl:       "Muestreo",
      meth_smp_body:      "Los resultados son promedios sectoriales, calculados a partir de <strong>cohortes de clientes homogéneas</strong> dentro de cada sector. No se aplicó ponderación por tamaño de empresa ni volumen de ventas.",
      meth_footer:        "Todos los análisis buscan ofrecer una lectura comparativa y objetiva del desempeño promedio, permitiendo a las marcas comparar sus propios resultados con los estándares del mercado.",

      iv_eyebrow:         "Vista por industria",
      iv_title:           "Benchmark por sector.",
      iv_clients_eyebrow: "Marcas analizadas",
      iv_clients_body:    "Algunos programas representativos de este sector (panel anonimizado).",
      iv_kpi_count:       "{n} KPI",
      iv_kpis_count:      "{n} KPI",
      iv_see_program:     "Ver el programa",

      kv_eyebrow:         "Vista por KPI",
      kv_title:           "Compara sectores, un KPI a la vez.",
      kv_definition_lbl:  "Definición",
      kv_formula_lbl:     "Fórmula",
      kv_cross_avg:       "Promedio entre sectores",
      kv_ranking_eyebrow: "Ranking sectorial",
      kv_ranking_title:   "{kpi} — por sector",
      kv_legend_sector:   "Valor del sector",
      kv_legend_avg:      "Promedio entre sectores",
      kv_avg_short:       "Promedio",
      kv_tips_eyebrow:    "Cómo mejorarlo",
      kv_tips_title:      "Tres acciones que mueven {kpi}.",

      mc_eyebrow:         "Uplift de engagement",
      mc_title:           "Impacto de las misiones completadas",
      mc_body:            "Cómo LTV, pedidos y AOV (indexados a 100 en cero misiones) crecen cuando los miembros completan más misiones de engagement.",
      mc_series_ltv:      "Índice LTV",
      mc_series_orders:   "Índice pedidos",
      mc_series_aov:      "Índice AOV",
      mc_axis_mission_one:"misión",
      mc_axis_mission_n:  "misiones",

      card_sub_rate:      "porcentaje de miembros",
      card_sub_growth:    "vs. no miembros",
      card_sub_roi:       "ingresos incrementales",
      card_avg_prefix:    "prom.",
      card_view_kpi:      "Ver KPI",

      pts:                "pts",
      export_btn:         "Exportar",
      export_alert:       "Exportación PNG próximamente — este es un prototipo estático.",

      bp_eyebrow:         "Herramienta gratuita",
      bp_title:           "Compara tu marca",
      bp_step_of:         "Paso {n} de 3",
      bp_step_1:          "elige tu industria",
      bp_step_2:          "introduce tus números",
      bp_step_3:          "resultados",
      bp_back:            "← Volver",
      bp_continue:        "Continuar",
      bp_see_results:     "Ver mis resultados",
      bp_edit:            "Editar los números",
      bp_no_account:      "Sin cuenta. Nada se almacena.",
      bp_step1_lead:      "Elige el sector más cercano. Compararemos tus números con las {n} marcas de ese sector.",
      bp_step1_brands:    "marcas",
      bp_step2_lead:      "Introduce lo que conozcas — deja el resto en blanco. Necesitamos al menos 3 para calcular comparaciones significativas.",
      bp_step2_placeholder:"Placeholder = benchmark sectorial {sector}.",
      bp_step3_verdict:   "Veredicto",
      bp_step3_good:      "Por delante de tu sector.",
      bp_step3_good_body: "Superas el benchmark {sector} en {a} de los {b} KPI reportados.",
      bp_step3_ok:        "Señales mixtas.",
      bp_step3_ok_body:   "Estás por delante en {a} de {b} KPI y por detrás en los demás — margen claro para subir los débiles.",
      bp_step3_bad:       "Mucho potencial por desbloquear.",
      bp_step3_bad_body:  "La mayoría de tus KPI están por debajo del promedio sectorial {sector}. Incluso pequeños uplifts se acumulan — consulta la vista KPI para los mayores leverages.",
      bp_you_vs_avg:      "tú {you} vs. prom. {avg}",
      bp_not_entered:     "no introducido"
    },
    kpis: {
      activation_rate: {
        name: "Tasa de activación",
        short: "Activación",
        definition: "La tasa de activación mide qué tan rápido tu programa de lealtad convierte los registros en miembros engaged. Captura el porcentaje de clientes opt-in que completan al menos una acción de ganar o canjear durante sus primeros 30 días. Una activación fuerte es el cimiento de toda métrica downstream — miembros que nunca se activan no pueden ganar, canjear ni referir.",
        formula: "Miembros activos (30d) ÷ Miembros inscritos",
        formulaParts: { num: "Miembros activos (30d)", denom: "Miembros inscritos" },
        tips: [
          { title: "Misión de bienvenida guiada", body: "Activa una misión de bienvenida guiada en las primeras 48 horas." },
          { title: "Recompensar la primera acción", body: "Recompensa la primera acción (reseña, follow, perfil completo) con puntos bonus." },
          { title: "Mostrar la proximidad al tier", body: "Usa una barra de progreso hacia el próximo tier para empujar la segunda acción." }
        ]
      },
      points_usage_rate: {
        name: "Tasa de uso de puntos",
        short: "Uso de puntos",
        definition: "La tasa de uso de puntos revela si los puntos que otorgas se traducen realmente en cambio de comportamiento. Compara puntos gastados con puntos emitidos en una ventana móvil de 12 meses. Un uso bajo señala un pasivo oculto en el balance — y los puntos sin usar significan que los miembros no ven suficiente valor en el catálogo de recompensas.",
        formula: "Puntos canjeados ÷ Puntos emitidos",
        formulaParts: { num: "Puntos canjeados", denom: "Puntos emitidos" },
        tips: [
          { title: "Expiración blanda de puntos", body: "Aplica una expiración blanda a 12 meses con un email recordatorio a 30 días." },
          { title: "Micro-recompensas de bajo umbral", body: "Ofrece micro-recompensas instantáneas (envío gratis, muestra) en umbrales bajos." },
          { title: "Saldo de puntos en el carrito", body: "Muestra el saldo de puntos en el carrito, no solo en la página de cuenta." }
        ]
      },
      redemption_rate: {
        name: "Tasa de canje de recompensas",
        short: "Canje",
        definition: "La tasa de canje de recompensas es el momento de verdad de cualquier programa — cuando un beneficio ganado se convierte en una acción real. Rastrea el porcentaje de miembros activos que canjean al menos una recompensa en una ventana de 90 días. Un canje alto correlaciona fuertemente con la retención; el propio acto de canjear refuerza la identificación del miembro con la marca.",
        formula: "Miembros con canje (90d) ÷ Miembros activos",
        formulaParts: { num: "Miembros con canje (90d)", denom: "Miembros activos" },
        tips: [
          { title: "Bajar el primer umbral", body: "Baja el umbral de la recompensa de entrada para que el primer canje se sienta alcanzable." },
          { title: "Diversificar el catálogo", body: "Añade variedad: descuentos, productos, donaciones, drops exclusivos." },
          { title: "Push «recompensa lista»", body: "Envía un push personalizado «recompensa lista» cuando un miembro cruza un umbral." }
        ]
      },
      referral_conversion: {
        name: "Tasa de conversión de referidos",
        short: "CVR referidos",
        definition: "La tasa de conversión de referidos captura la eficiencia de tu motor de boca a boca. Mide cuántos de los enlaces de referidos que comparten los miembros terminan convirtiéndose en un primer cliente pagador. Un CVR de referidos saludable es uno de los canales de adquisición más baratos — cada conversión viene con un endorsement implícito y un boost de retención incorporado.",
        formula: "Pedidos referidos ÷ Compartidos de referidos",
        formulaParts: { num: "Pedidos referidos", denom: "Compartidos de referidos" },
        tips: [
          { title: "Recompensas bilaterales", body: "Las recompensas bilaterales (referrer + referee) superan a las unilaterales ~2×." },
          { title: "Pre-rellenar mensajes", body: "Pre-llena los mensajes de compartir — la fricción mata la conversión." },
          { title: "Añadir prueba social", body: "Muestra prueba social («127 amigos se unieron este mes») en la pantalla de compartir." }
        ]
      },
      new_customer_rate: {
        name: "Tasa de nuevos clientes (desde referidos)",
        short: "Nuevos por referido",
        definition: "Este indicador muestra qué parte de tu adquisición de nuevos clientes viene de miembros existentes, frente a canales pagos y orgánicos. Es una medida directa del crecimiento impulsado por el programa, y uno de los predictores más fuertes de la economía unitaria de largo plazo: los clientes referidos suelen tener mayor LTV y menor churn.",
        formula: "Nuevos clientes referidos ÷ Total nuevos clientes",
        formulaParts: { num: "Nuevos clientes referidos", denom: "Total nuevos clientes" },
        tips: [
          { title: "Promover en post-compra", body: "Promueve el referido en emails post-compra — ahí la intención llega al pico." },
          { title: "Combinar con tiers VIP", body: "Combina referidos con tiers VIP: tier mayor → recompensa mayor." },
          { title: "A/B testar el tipo de recompensa", body: "A/B testa el tipo de recompensa (% off vs. {currency} fijo vs. puntos) por cohorte." }
        ]
      },
      participation_rate: {
        name: "Tasa de participación",
        short: "Participación",
        definition: "La tasa de participación mide la profundidad del engagement — el porcentaje de miembros que completan al menos una misión opcional por trimestre. Donde la activación captura la primera acción, la participación captura el loop. Una participación alta señala un programa que vive más allá de los puntos y descuentos: un lugar al que los clientes regresan por la experiencia misma.",
        formula: "Miembros con ≥1 misión ÷ Total miembros",
        formulaParts: { num: "Miembros con ≥1 misión", denom: "Total miembros" },
        tips: [
          { title: "Rotar misiones cada mes", body: "Rota misiones cada mes — la novedad aporta +18 % de participación." },
          { title: "Mezclar tipos de misiones", body: "Mezcla misiones sociales, de contenido y de compra para que cada persona tenga su camino." },
          { title: "Email \"wrapped\"", body: "Recapitula misiones completadas en un email \"wrapped\" para reforzar la identidad." }
        ]
      },
      ltv_growth: {
        name: "Crecimiento de LTV",
        short: "Crecimiento LTV",
        definition: "El crecimiento de LTV cuantifica cuánto vale más un miembro del programa en 12 meses frente a una cohorte comparable de no miembros. Es el indicador más importante de la salud del programa porque liga cada acción — ganar, canjear, misiones, referidos — a un resultado de ingresos concreto. Un crecimiento LTV fuerte financia el programa muchas veces.",
        formula: "(LTV_miembros − LTV_no-miembros) ÷ LTV_no-miembros",
        formulaParts: { num: "LTV(miembros) − LTV(no-miembros)", denom: "LTV(no-miembros)" },
        tips: [
          { title: "Tiers VIP experienciales", body: "Los tiers VIP con recompensas experienciales superan a los puramente promo en retención." },
          { title: "Próxima misión personalizada", body: "Dispara una «próxima mejor misión» personalizada tras cada compra." },
          { title: "Win-back a 60 / 90 / 120 días", body: "Misiones de win-back a 60 / 90 / 120 días capturan el lapse antes que se asiente." }
        ]
      },
      aov_growth: {
        name: "Crecimiento de AOV",
        short: "Crecimiento AOV",
        definition: "El crecimiento de AOV rastrea el uplift de tamaño de carrito cuando un miembro canjea puntos en el checkout, frente a sus propios carritos sin canje. Captura la capacidad del programa para subir al miembro a un tier de carrito superior sin erosionar margen. Una señal fuerte valida los umbrales de recompensa diseñados y los bundles del catálogo.",
        formula: "(AOV_con_canje − AOV_sin) ÷ AOV_sin",
        formulaParts: { num: "AOV(con canje) − AOV(sin)", denom: "AOV(sin)" },
        tips: [
          { title: "Limitar descuento por puntos", body: "Limita el descuento-puntos para empujar al miembro al siguiente tier de carrito." },
          { title: "Misión bonus sobre la mediana", body: "Ofrece una misión de puntos bonus en carritos sobre la mediana AOV." },
          { title: "Bundles > descuentos planos", body: "Bundles (ej. regalo gratis sobre {currency}X) superan a los descuentos planos." }
        ]
      },
      orders_growth: {
        name: "Crecimiento de pedidos",
        short: "Crecimiento pedidos",
        definition: "El crecimiento de pedidos mide el aumento en frecuencia de compra entre miembros frente a no miembros en 12 meses. Revela si el programa logra cerrar la brecha temporal entre compras — mediante recordatorios, misiones e incentivos por tier que traen al miembro de vuelta al funnel antes que regresaría naturalmente. Es la contraparte directa de frecuencia al crecimiento AOV.",
        formula: "(Pedidos_miembro − Pedidos_no_miembro) ÷ Pedidos_no_miembro",
        formulaParts: { num: "Pedidos/miembro − Pedidos/no-miembro", denom: "Pedidos/no-miembro" },
        tips: [
          { title: "Misiones de aniversario", body: "Misiones de cumpleaños y aniversario crean disparadores naturales de recompra." },
          { title: "Temporizadores de expiración de tier", body: "Temporizadores de expiración de tier («mantén tu estatus VIP») aceleran el próximo pedido." },
          { title: "Recompensas de cross-sell", body: "Recompensas de misión cross-sell ligadas a una categoría complementaria." }
        ]
      },
      roi: {
        name: "ROI",
        short: "ROI",
        definition: "El ROI mide la rentabilidad directa del programa de lealtad. Es el indicador definitivo para evaluar el desempeño económico de una estrategia relacional: refleja la capacidad del programa de convertir el engagement del cliente en ingresos medibles. Un buen ROI demuestra que, más allá del vínculo creado con la comunidad, el programa genera crecimiento rentable y sostenible.",
        formula: "(Ingresos incrementales − Coste del programa) ÷ Coste del programa",
        formulaParts: { num: "Ingresos incrementales − Coste del programa", denom: "Coste del programa" },
        tips: [
          { title: "Atribución incremental", body: "Atribuye incrementalmente — excluye recompradores orgánicos del numerador." },
          { title: "Hacia misiones, no descuentos", body: "Mueve presupuesto de descuentos planos a recompensas de misión (10× más ROI)." },
          { title: "Medir trimestralmente", body: "Mide trimestralmente — la mayoría de programas alcanza ROI positivo al mes 5." }
        ]
      }
    },
    sectors: {
      fashion: { name: "Moda & Ropa", short: "Moda", intro: "Las marcas de moda se apoyan en lealtad por tiers para impulsar la recompra entre drops de temporada. Los miembros prefieren accesos anticipados VIP a los descuentos — la participación es alta pero el valor del canje es moderado." },
      beauty:  { name: "Belleza & Wellness", short: "Belleza", intro: "Belleza tiene los playbooks de lealtad más maduros. Los miembros están muy engaged, el canje es frecuente, y las misiones UGC (reseñas, before/after) pesan tanto como ganar puntos." },
      food:    { name: "Alimentos & Bebidas", short: "Alimentos", intro: "Categoría de alta frecuencia — carritos pequeños, recompra rápida. La activación y el uso de puntos son excelentes, pero el valor de canje pone tope al uplift de AOV frente a otros sectores." },
      health:  { name: "Salud & Suplementos", short: "Salud", intro: "Categoría amigable a suscripción con el mayor uplift de LTV. Los miembros se reactivan rápido vía misiones de win-back; el referido juega un rol mayor que el promedio." },
      home:    { name: "Hogar & Decoración", short: "Hogar", intro: "Los ciclos de compra largos cambian la matemática de la lealtad. El crecimiento AOV es fuerte pero la participación y el canje se retrasan — los miembros olvidan el programa entre compras, por lo que las misiones de re-engagement son críticas." },
      petcare: { name: "Mascotas", short: "Mascotas", intro: "Los miembros petcare están emocionalmente comprometidos y convierten amigos más rápido que cualquier sector. El CVR de referidos es la señal más fuerte — los dueños de mascotas hablan a otros dueños." },
      sports:  { name: "Deporte & Fitness", short: "Deporte", intro: "Muy orientado a comunidad. La participación en programas por misiones es la más alta de todos los sectores, pero la compresión de margen mantiene el ROI detrás de belleza y salud." }
    },
    categories: {
      Transactional: { label: "Transaccional", blurb: "Cómo los miembros ganan y gastan en tu programa." },
      Referral:      { label: "Referidos",     blurb: "Cómo los miembros traen nuevos clientes." },
      Relational:    { label: "Relacional",    blurb: "Qué profundidad alcanza el loop de engagement." },
      Business:      { label: "Impacto de negocio", blurb: "Qué hace el programa al ingreso." }
    }
  },

  // ─────────────────────── ENGLISH (UK) ─────────────────────────
  // English KPI / sector / category strings fall through to data.js
  // (canonical EN). We only override UI chrome here.
  en: {
    ui: {
      nav_overview_label: "Overview",
      nav_overview_sub:   "Cross-sector averages",
      nav_industry_label: "By industry",
      nav_industry_sub:   "Compare 7 sectors",
      nav_kpi_label:      "By KPI",
      nav_kpi_sub:        "Rank on one metric",
      nav_updated:        "Updated May 2026",
      nav_subtitle:       "Loyalty Benchmark 2026",
      benchmark_cta:      "Benchmark your brand",

      footer_caption:     "Source: Loyoly Loyalty Benchmark 2026 — loyoly.io",
      footer_meta:        "500+ brands · 7 industries · 10 KPIs · Methodology available on request",

      hero_pill:          "Loyalty intelligence",
      hero_h1_pre:        "The state of post-purchase",
      hero_h1_mid:        "engagement, in",
      hero_h1_post:       "KPIs",
      hero_lead:          "Cross-sector loyalty benchmarks from {n}+ Loyoly merchants, broken down by industry and KPI. Compare your programme against your peers in under a minute.",
      hero_secondary_cta: "Explore the report",

      sec01_eyebrow:      "01 — Two ways in",
      sec01_title:        "Read the report your way.",
      sec01_lead:         "Slice the same dataset by sector or by KPI. Every card and label below is a shortcut into the right view.",
      entry_a_eyebrow:    "By industry",
      entry_a_title:      "See how your sector performs.",
      entry_a_body:       "Pick one of {n} verticals and view all 10 KPIs side-by-side with the cross-sector average, plus mission-impact curves.",
      entry_a_open:       "Open industry view",
      entry_b_eyebrow:    "By KPI",
      entry_b_title:      "Rank sectors on the metric that matters most.",
      entry_b_body:       "Pick a KPI and instantly compare all 7 sectors against the cross-sector average — with three actionable tips to lift the number.",
      entry_b_open:       "Open KPI view",
      entry_more:         "+ {n} more",

      sec02_eyebrow:      "02 — Cross-sector averages",
      sec02_title_a:      "What an average loyalty",
      sec02_title_b:      "programme looks like in 2026.",
      sec02_lead:         "Click any card to open the full KPI breakdown — ranking by sector + three concrete tips to lift the number.",
      chip_rates:         "Rates: 0–100 %",
      chip_growth:        "Growth: % uplift",
      chip_roi:           "ROI: × multiplier",

      banner_eyebrow:     "Free tool",
      banner_title:       "How does your programme compare?",
      banner_body:        "Pick your industry, enter your numbers, see the gap to the sector average — all in your browser, nothing stored.",

      meth_eyebrow:       "03 — Methodology",
      meth_title:         "How this benchmark was built.",
      meth_intro:         "The data presented in this benchmark comes from a panel of brands that are customers of the Loyoly platform, representing various eCommerce sectors. The analysis is based on the observation of actual performance recorded during the reference periods, depending on the nature of the indicators studied.",
      meth_op_lbl:        "Operational indicators",
      meth_op_body:       "Activation rate, points and rewards usage rate, and referral indicators were calculated over the <strong>last 30 days</strong>. This window reflects recent member activation and interaction dynamics.",
      meth_lt_lbl:        "Long-term indicators",
      meth_lt_body:       "LTV, AOV, average number of orders, and engagement rate were measured over a <strong>90-day period</strong> to ensure a stable reading of the behaviours and profitability associated with loyalty.",
      meth_smp_lbl:       "Sampling",
      meth_smp_body:      "Results are sector averages, calculated from <strong>homogeneous customer cohorts</strong> within each sector. No weighting by company size or sales volume was applied.",
      meth_footer:        "All analyses aim to provide a comparative and objective reading of average performance, enabling brands to benchmark their own results against market standards.",

      iv_eyebrow:         "Industry view",
      iv_title:           "Benchmark by sector.",
      iv_clients_eyebrow: "Brands sampled",
      iv_clients_body:    "A few representative programmes from this sector (anonymised panel).",
      iv_kpi_count:       "{n} KPI",
      iv_kpis_count:      "{n} KPIs",
      iv_see_program:     "See programme",

      kv_eyebrow:         "KPI view",
      kv_title:           "Compare sectors, one KPI at a time.",
      kv_definition_lbl:  "Definition",
      kv_formula_lbl:     "Formula",
      kv_cross_avg:       "Cross-sector average",
      kv_ranking_eyebrow: "Sector ranking",
      kv_ranking_title:   "{kpi} — by sector",
      kv_legend_sector:   "Sector value",
      kv_legend_avg:      "Cross-sector average",
      kv_avg_short:       "Average",
      kv_tips_eyebrow:    "How to improve it",
      kv_tips_title:      "Three actions that move {kpi}.",

      mc_eyebrow:         "Engagement uplift",
      mc_title:           "Impact of missions completed",
      mc_body:            "How LTV, orders, and AOV (indexed to 100 at zero missions) grow as members complete more engagement missions.",
      mc_series_ltv:      "LTV index",
      mc_series_orders:   "Orders index",
      mc_series_aov:      "AOV index",
      mc_axis_mission_one:"mission",
      mc_axis_mission_n:  "missions",

      card_sub_rate:      "share of members",
      card_sub_growth:    "vs. non-members",
      card_sub_roi:       "incremental revenue",
      card_avg_prefix:    "avg",
      card_view_kpi:      "View KPI",

      pts:                "pts",
      export_btn:         "Export",
      export_alert:       "PNG export coming soon — this is a static prototype.",

      bp_eyebrow:         "Free tool",
      bp_title:           "Benchmark your brand",
      bp_step_of:         "Step {n} of 3",
      bp_step_1:          "pick your industry",
      bp_step_2:          "enter your numbers",
      bp_step_3:          "results",
      bp_back:            "← Back",
      bp_continue:        "Continue",
      bp_see_results:     "See my results",
      bp_edit:            "Edit numbers",
      bp_no_account:      "No account needed. Nothing stored.",
      bp_step1_lead:      "Pick the closest match. We'll compare your numbers against the {n} brands in that sector.",
      bp_step1_brands:    "brands",
      bp_step2_lead:      "Enter what you know — leave the rest blank. We need at least 3 to compute meaningful comparisons.",
      bp_step2_placeholder:"Placeholder = {sector} sector benchmark.",
      bp_step3_verdict:   "Verdict",
      bp_step3_good:      "Ahead of your sector.",
      bp_step3_good_body: "You're outperforming the {sector} benchmark on {a} of {b} reported KPIs.",
      bp_step3_ok:        "Mixed signals.",
      bp_step3_ok_body:   "You're ahead on {a} of {b} KPIs and behind on the others — clear room to lift the weak ones.",
      bp_step3_bad:       "Big upside to unlock.",
      bp_step3_bad_body:  "Most of your KPIs sit below the {sector} sector average. Even small lifts will compound — see the KPI view for the highest-leverage moves.",
      bp_you_vs_avg:      "you {you} vs. avg {avg}",
      bp_not_entered:     "not entered"
    }
  }
};

// ─────────────────────── helpers ────────────────────────────────
window.LOYOLY_T = function (lang, key, vars) {
  const I = window.LOYOLY_I18N;
  const dict = (I[lang] && I[lang].ui) || I.en.ui;
  let s = dict[key] != null ? dict[key] : (I.en.ui[key] != null ? I.en.ui[key] : key);
  if (vars && typeof s === "string") {
    Object.keys(vars).forEach(k => { s = s.split("{" + k + "}").join(vars[k]); });
  }
  return s;
};

window.LOYOLY_CURRENCY = function (lang) {
  const l = (window.LOYOLY_I18N.locales).find(x => x.id === lang);
  return l ? l.currency : "€";
};
