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

      footer_caption:     "Source : Loyoly Loyalty Benchmark 2026 - loyoly.io",
      footer_meta:        "600+ marques · 7 secteurs · 10 KPI · Méthodologie disponible sur demande",

      hero_pill:          "Intelligence loyauté",
      hero_h1_pre:        "Benchmark 2026 des",
      hero_h1_mid:        "",
      hero_h1_post:       "programmes de fidélité",
      hero_lead:          "KPIs réels issus de {n}+ marchands Loyoly, ventilés par secteur et par métrique. Positionnez votre programme en moins d'une minute.",
      hero_secondary_cta: "Explorer les données",

      sec01_eyebrow:      "01 — DEUX ENTRÉES",
      sec01_title:        "Deux vues. Un seul jeu de données.",
      sec01_lead:         "Analysez les données par secteur ou par KPI. Chaque carte et étiquette ci-dessous est un raccourci direct vers la bonne vue.",
      entry_a_eyebrow:    "PAR INDUSTRIE",
      entry_a_title:      "Mesurez la performance de votre secteur.",
      entry_a_body:       "Choisissez l'une des {n} verticales et visualisez les 10 KPI côte-à-côte avec la moyenne inter-secteurs, plus les courbes d'impact des missions.",
      entry_a_open:       "Ouvrir la vue industrie",
      entry_b_eyebrow:    "PAR KPI",
      entry_b_title:      "Classez les secteurs sur la métrique qui compte.",
      entry_b_body:       "Choisissez un KPI et comparez instantanément les 7 secteurs à la moyenne inter-secteurs, avec trois actions concrètes pour faire progresser le chiffre.",
      entry_b_open:       "Ouvrir la vue KPI",
      entry_more:         "+ {n} de plus",

      sec02_eyebrow:      "02 — MOYENNES INTER-SECTEURS",
      sec02_title_a:      "À quoi ressemble un programme de fidélité",
      sec02_title_b:      "en moyenne en 2026.",
      sec02_lead:         "Cliquez sur une carte pour ouvrir l'analyse complète du KPI : classement par secteur et trois conseils concrets pour faire progresser le chiffre.",
      chip_rates:         "Taux : 0-100 %",
      chip_growth:        "Croissance : % de gain",
      chip_roi:           "ROI : multiplicateur x",

      banner_eyebrow:     "OUTIL GRATUIT",
      banner_title:       "Comment votre programme se positionne-t-il ?",
      banner_body:        "Choisissez votre secteur, entrez vos chiffres, visualisez l'écart à la moyenne sectorielle. Tout dans votre navigateur, rien n'est stocké.",

      meth_eyebrow:       "03 — MÉTHODOLOGIE",
      meth_title:         "Comment ce benchmark a été construit.",
      meth_intro:         "Ce benchmark s'appuie sur les données de 600+ marques utilisant la plateforme Loyoly, couvrant plusieurs secteurs e-commerce. Tous les chiffres reflètent des performances réelles enregistrées pendant les périodes de référence correspondantes.",
      meth_op_lbl:        "INDICATEURS OPÉRATIONNELS",
      meth_op_body:       "Le taux d'activation, l'utilisation des points et des récompenses, ainsi que les indicateurs de parrainage ont été calculés sur les <strong>30 derniers jours</strong>. Cette fenêtre reflète les dynamiques récentes d'activation et d'interaction des membres.",
      meth_lt_lbl:        "INDICATEURS LONG TERME",
      meth_lt_body:       "La LTV, l'AOV, le nombre moyen de commandes et le taux d'engagement ont été mesurés sur <strong>365 jours</strong> pour assurer une lecture stable des comportements et de la rentabilité du programme.",
      meth_smp_lbl:       "ÉCHANTILLONNAGE",
      meth_smp_body:      "Tous les chiffres sont des moyennes sectorielles, calculées à partir de <strong>cohortes clients homogènes</strong> au sein de chaque secteur. Aucune pondération par taille d'entreprise ou volume de ventes n'a été appliquée.",
      meth_footer:        "Ces analyses offrent une lecture comparative et objective des performances moyennes, permettant aux marques de situer leurs résultats par rapport aux standards du marché.",

      iv_eyebrow:         "VUE PAR INDUSTRIE",
      iv_title:           "Benchmark par secteur.",
      iv_sector_overview: "Sector Overview",
      iv_clients_eyebrow: "MARQUES SONDÉES",
      iv_clients_body:    "Quelques programmes représentatifs de ce secteur (panel anonymisé).",
      iv_kpi_count:       "{n} KPI",
      iv_kpis_count:      "{n} KPI",
      iv_see_program:     "Voir le programme",

      kv_eyebrow:         "VUE PAR KPI",
      kv_title:           "Comparez les secteurs, un KPI à la fois.",
      kpi_nav_activation_rate:    "Taux d'activation",
      kpi_nav_points_usage_rate:  "Taux d'utilisation des points",
      kpi_nav_redemption_rate:    "Taux d'utilisation des récompenses",
      kpi_nav_referral_conversion:"Taux de conversion parrainage",
      kpi_nav_new_customer_rate:  "Taux de nouveaux clients",
      kpi_nav_participation_rate: "Taux de participation",
      kv_definition_lbl:  "DÉFINITION",
      kv_formula_lbl:     "FORMULE",
      kv_cross_avg:       "MOYENNE INTER-SECTEURS",
      kv_ranking_eyebrow: "CLASSEMENT PAR SECTEUR",
      kv_ranking_title:   "{kpi} par secteur",
      kv_legend_sector:   "Valeur secteur",
      kv_legend_avg:      "Moyenne inter-secteurs",
      kv_avg_short:       "Moyenne",
      kv_tips_eyebrow:    "Comment l'améliorer",
      kv_tips_title:      "Trois actions qui font bouger {kpi}.",

      mc_eyebrow:         "UPLIFT D'ENGAGEMENT",
      mc_title:           "Impact des missions complétées.",
      mc_body:            "Comment LTV, commandes et AOV (indexés à 100 à zéro mission) progressent quand les membres complètent davantage de missions d'engagement.",
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
      export_alert:       "Export PNG bientôt disponible. Ceci est un prototype statique.",

      bp_eyebrow:         "OUTIL GRATUIT",
      bp_title:           "Comparer votre marque",
      bp_step_of:         "Étape {n} sur 3",
      bp_step_1:          "choisissez votre secteur",
      bp_step_2:          "entrez vos chiffres",
      bp_step_3:          "résultats",
      bp_back:            "← Retour",
      bp_continue:        "Continuer",
      bp_see_results:     "Voir mes résultats",
      bp_edit:            "Modifier les chiffres",
      bp_no_account:      "Aucun compte requis. Rien n'est stocké.",
      bp_step1_lead:      "Sélectionnez le secteur le plus proche. Nous comparerons vos chiffres aux marques de ce secteur.",
      bp_step1_brands:    "marques",
      bp_step2_lead:      "Renseignez ce que vous savez et laissez le reste vide. Il faut au minimum 3 KPI pour calculer des comparaisons pertinentes.",
      bp_step2_placeholder:"Placeholder = benchmark sectoriel {sector}.",
      bp_step3_verdict:   "VERDICT",
      bp_step3_good:      "Au-dessus de la moyenne du secteur.",
      bp_step3_good_body: "La plupart de vos KPI sont au-dessus de la moyenne du secteur {sector}. Consultez la vue KPI pour voir où pousser davantage et quelles métriques ont encore une marge de progression.",
      bp_step3_ok:        "Résultats mixtes, des écarts clairs à combler.",
      bp_step3_ok_body:   "Certains KPI sont en avance, d'autres à la traîne. Utilisez la vue KPI pour prioriser les métriques présentant le plus grand écart avec la moyenne du secteur {sector}.",
      bp_step3_bad:       "Un fort potentiel à activer.",
      bp_step3_bad_body:  "La plupart de vos KPI sont inférieurs à la moyenne du secteur {sector}. Des gains modestes se cumulent rapidement. Consultez la vue KPI pour identifier vos leviers prioritaires.",
      bp_you_vs_avg:      "vous {you} vs. moy. {avg}",
      bp_not_entered:     "non renseigné"
    },
    kpis: {
      activation_rate: {
        name: "Taux d'activation",
        short: "Activation",
        definition: "Le taux d'activation mesure la vitesse à laquelle les nouveaux inscrits ont leur première interaction significative avec votre programme. C'est le premier signal de santé du programme : un taux faible signifie que les membres s'inscrivent sans jamais s'engager, gaspillant le budget d'acquisition. Améliorer l'activation a un effet multiplicateur sur tous les KPI aval, car seuls les membres activés peuvent utiliser des récompenses, parrainer ou compléter des missions.",
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
        definition: "Le taux d'utilisation des points mesure la part des points émis que les membres utilisent réellement, révélant si votre monnaie de récompense est perçue comme précieuse. C'est un indicateur direct de pertinence des récompenses : une faible utilisation signale souvent des seuils trop élevés ou des récompenses trop génériques pour motiver l'action. Réduire l'écart entre les points gagnés et les points dépensés est l'un des leviers les plus rapides pour augmenter l'engagement.",
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
        definition: "Le taux d'utilisation des récompenses mesure la part des membres actifs qui utilisent au moins une récompense sur une fenêtre de 90 jours. C'est la preuve la plus claire que votre programme crée une valeur perçue réelle, et pas seulement une accumulation théorique de points. Une forte utilisation stimule à la fois la satisfaction et le réachat, en faisant un indicateur avancé de la croissance LTV.",
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
        definition: "Le taux de conversion du parrainage mesure combien des partages effectués par vos membres se traduisent par une commande passée. C'est la métrique d'efficacité de votre stratégie de bouche-à-oreille : un faible CVR signifie que vous générez de l'activité de partage sans la convertir en chiffre d'affaires. Optimiser l'expérience de landing du parrainage et la structure d'incitation des deux côtés fait directement progresser ce chiffre.",
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
        definition: "Nouveaux via parrainage mesure la part de tous les nouveaux clients d'une période qui ont été amenés par des membres du programme de fidélité. Ce chiffre quantifie votre base de membres en tant que canal d'acquisition, au même titre que les canaux payants et organiques. Les marques avec un taux élevé réduisent leurs coûts d'acquisition payante et améliorent la qualité des nouveaux clients, car les filleuls convertissent plus vite et sont plus fidèles.",
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
        definition: "Le taux de participation mesure la part des membres qui vont au-delà de l'accumulation de points pour compléter au moins une mission optionnelle par trimestre. C'est le meilleur prédicteur de la rétention à long terme : les membres qui s'engagent dans les missions créent une boucle d'habitude qui les rend bien plus difficiles à perdre. Un taux de participation en hausse signale que votre programme est passé du transactionnel au vraiment relationnel.",
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
        definition: "La croissance LTV mesure le delta de revenus entre les membres du programme de fidélité et une cohorte comparable de non-membres sur 12 mois. C'est la preuve fondamentale du ROI de la fidélité : la différence entre un programme qui génère une valeur incrémentale réelle et un autre qui récompense simplement des clients qui auraient acheté de toute façon. Suivre la croissance LTV par cohorte contrôle le biais de sélection et révèle l'impact causal réel de l'adhésion au programme.",
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
        definition: "La croissance AOV mesure combien le panier d'un membre est plus élevé sur les commandes où il utilise une récompense, par rapport à ses propres commandes sans utilisation. C'est la mesure la plus directe de l'impact au moment du paiement : un fort taux de croissance AOV signifie que vos récompenses tirent la dépense vers le haut, et ne récompensent pas simplement une dépense déjà engagée. Fixer un seuil de panier minimum pour l'utilisation des récompenses est le principal levier structurel pour faire progresser cette métrique.",
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
        definition: "La croissance des commandes mesure à quelle fréquence les membres du programme achètent davantage par rapport à une cohorte comparable de non-membres sur 12 mois. C'est l'indicateur le plus pur pour savoir si l'adhésion au programme de fidélité modifie réellement le comportement d'achat, indépendamment de la taille du panier. Combinée avec la croissance LTV, elle permet aux marques de décomposer l'impact revenus de leur programme en une composante fréquence et une composante AOV.",
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
        definition: "Le ROI mesure les revenus nets générés par le programme de fidélité par rapport à son coût total. C'est la métrique de business case définitive : elle indique à la direction si le programme crée une valeur incrémentale ou subventionne simplement le comportement existant des clients. Un programme avec un ROI solide convertit l'engagement des membres en croissance de revenus durable et mesurable.",
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
      fashion: { name: "Mode & Prêt-à-porter", short: "Mode", intro: "Les marques Mode & Prêt-à-porter utilisent la fidélité pour maintenir l'intention d'achat entre les cycles saisonniers et les drops. Les membres répondent davantage aux avantages early access et aux expériences VIP qu'aux remises, ce qui génère une forte participation mais une valeur de rachat modeste. Le défi principal est de maintenir l'engagement des membres hors saison grâce à une animation continue et des expériences exclusives en avant-première." },
      beauty:  { name: "Beauté & Bien-être", short: "Beauté", intro: "La Beauté & Bien-être se distingue par une fréquence d'achat naturellement élevée et un lien émotionnel fort entre les marques et leurs clients. Les programmes de fidélité s'y activent rapidement et génèrent un engagement transactionnel solide. Le vrai levier réside dans la durée : transformer des membres engagés en acheteurs réguliers grâce à une animation continue et des expériences post-achat personnalisées." },
      food:    { name: "Alimentation & Boissons", short: "Alimentation", intro: "L'Alimentation & Boissons bénéficie de la fréquence d'achat naturelle la plus élevée de tous les secteurs, ce qui favorise une activation rapide et une forte utilisation des points. La faible valeur des paniers limite la croissance de l'AOV, mais le volume de transactions rend les programmes de fidélité très efficaces pour ancrer des habitudes d'achat durables. Le potentiel réside dans l'utilisation de cette fréquence comme levier pour approfondir l'engagement via des missions et du contenu." },
      health:  { name: "Santé & Compléments", short: "Santé", intro: "La Santé & Compléments enregistre la plus forte croissance LTV de tous les secteurs, portée par des schémas d'achat compatibles avec l'abonnement et un niveau de confiance élevé entre les marques et leurs clients. Les membres se réactivent rapidement via des missions de reconquête, et le parrainage joue un rôle structurellement plus important que dans les autres catégories. Le levier à activer est de transformer la satisfaction produit en bouche-à-oreille actif, soutenu par un programme de parrainage solide." },
      home:    { name: "Maison & Décoration", short: "Maison", intro: "La Maison & Décoration fonctionne sur de longs cycles d'achat qui modifient fondamentalement la dynamique de fidélité. La croissance de l'AOV est solide, mais la faible fréquence des transactions entraîne un désengagement des membres entre les achats, pesant sur les taux de participation et d'utilisation. Les missions de réengagement constituent le mécanisme principal pour maintenir le programme vivant entre les moments d'achat." },
      petcare: { name: "Animaux de Compagnie", short: "Animaux", intro: "Les Animaux de Compagnie se distinguent par la meilleure conversion de parrainage de tous les secteurs, portée par le lien émotionnel entre propriétaires d'animaux qui alimente naturellement le bouche-à-oreille. Les membres sont très motivés et font preuve d'une forte fidélité à la marque, mais l'engagement dans le programme dépend de la capacité des marques à activer cette énergie communautaire via des missions et des expériences partagées. Les propriétaires d'animaux parlent entre eux : le parrainage est le levier de croissance à prioriser." },
      sports:  { name: "Sport & Fitness", short: "Sport", intro: "Le Sport & Fitness génère la plus forte participation aux missions de tous les secteurs, reflétant une audience orientée communauté qui répond naturellement aux défis et aux objectifs collectifs. Les programmes de fidélité fonctionnent mieux ici lorsqu'ils sont construits autour de l'identité et du progrès partagé plutôt que de simples récompenses transactionnelles. La pression sur les marges limite le ROI par rapport aux autres secteurs, mais la profondeur d'engagement crée une base solide pour la rétention à long terme." }
    },
    categories: {
      Transactional: { label: "Transactionnel", blurb: "Comment les membres gagnent et utilisent dans votre programme." },
      Referral:      { label: "Parrainage",     blurb: "Comment les membres attirent de nouveaux clients." },
      Relational:    { label: "Engagement",    blurb: "Quelle est la profondeur de la boucle d'engagement." },
      Business:      { label: "Impact business", blurb: "Ce que le programme fait au chiffre d'affaires." }
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

      footer_caption:     "Fuente: Loyoly Loyalty Benchmark 2026 - loyoly.io",
      footer_meta:        "600+ marcas · 7 sectores · 10 KPIs · Metodología disponible bajo solicitud",

      hero_pill:          "Inteligencia de lealtad",
      hero_h1_pre:        "Benchmark 2026 de",
      hero_h1_mid:        "",
      hero_h1_post:       "programas de lealtad",
      hero_lead:          "KPIs reales de {n}+ marcas Loyoly, desglosados por sector y por métrica. Descubre dónde se sitúa tu programa en menos de un minuto.",
      hero_secondary_cta: "Explorar los datos",

      sec01_eyebrow:      "01 — DOS ENTRADAS",
      sec01_title:        "Dos vistas. Un solo dataset.",
      sec01_lead:         "Analiza los datos por sector o por KPI. Cada tarjeta y etiqueta es un acceso directo a la vista correcta.",
      entry_a_eyebrow:    "POR INDUSTRIA",
      entry_a_title:      "Mira cómo rinde tu sector.",
      entry_a_body:       "Elige una de las {n} verticales y visualiza los 10 KPIs junto a la media intersectorial, con las curvas de impacto de las misiones.",
      entry_a_open:       "Abrir vista por industria",
      entry_b_eyebrow:    "POR KPI",
      entry_b_title:      "Clasifica los sectores por la métrica que más importa.",
      entry_b_body:       "Elige un KPI y compara al instante los 7 sectores con la media intersectorial, con tres acciones concretas para mejorar el número.",
      entry_b_open:       "Abrir vista por KPI",
      entry_more:         "+ {n} más",

      sec02_eyebrow:      "02 — PROMEDIOS ENTRE SECTORES",
      sec02_title_a:      "Cómo es un programa de lealtad",
      sec02_title_b:      "promedio en 2026.",
      sec02_lead:         "Haz clic en cualquier tarjeta para abrir el desglose completo del KPI: ranking por sector y tres consejos concretos para mejorar el número.",
      chip_rates:         "Tasas: 0-100 %",
      chip_growth:        "Crecimiento: % de uplift",
      chip_roi:           "ROI: multiplicador x",

      banner_eyebrow:     "HERRAMIENTA GRATUITA",
      banner_title:       "¿Cómo se posiciona tu programa?",
      banner_body:        "Elige tu sector, introduce tus cifras, visualiza la brecha con la media sectorial. Todo en tu navegador, nada se almacena.",

      meth_eyebrow:       "03 — METODOLOGÍA",
      meth_title:         "Cómo se construyó este benchmark.",
      meth_intro:         "Este benchmark se basa en datos de 600+ marcas de la plataforma Loyoly, abarcando múltiples verticales de e-commerce. Todos los valores reflejan el rendimiento real del programa registrado durante los períodos de referencia correspondientes.",
      meth_op_lbl:        "INDICADORES OPERATIVOS",
      meth_op_body:       "La tasa de activación, el uso de puntos y recompensas, y los indicadores de referidos se calcularon sobre los <strong>últimos 30 días</strong>. Esta ventana refleja las dinámicas recientes de activación e interacción de los miembros.",
      meth_lt_lbl:        "INDICADORES DE LARGO PLAZO",
      meth_lt_body:       "LTV, AOV, promedio de pedidos y tasa de engagement se midieron en un período de <strong>365 días</strong> para garantizar una lectura estable del comportamiento de los miembros y la rentabilidad del programa.",
      meth_smp_lbl:       "MUESTREO",
      meth_smp_body:      "Todos los valores son promedios sectoriales, calculados a partir de <strong>cohortes de clientes homogéneas</strong> dentro de cada vertical. No se aplicó ponderación por tamaño de empresa ni volumen de ventas.",
      meth_footer:        "Estos análisis ofrecen una lectura comparativa y objetiva del rendimiento promedio del programa, permitiendo a las marcas situar sus resultados frente a los estándares del mercado.",

      iv_eyebrow:         "VISTA POR INDUSTRIA",
      iv_title:           "Benchmark por sector.",
      iv_sector_overview: "Sector Overview",
      iv_clients_eyebrow: "MARCAS ANALIZADAS",
      iv_clients_body:    "Algunos programas representativos de este sector (panel anonimizado).",
      iv_kpi_count:       "{n} KPI",
      iv_kpis_count:      "{n} KPI",
      iv_see_program:     "Ver el programa",

      kv_eyebrow:         "VISTA POR KPI",
      kv_title:           "Compara los sectores, un KPI a la vez.",
      kpi_nav_activation_rate:    "Tasa de activación",
      kpi_nav_points_usage_rate:  "Tasa de uso de puntos",
      kpi_nav_redemption_rate:    "Tasa de canje de recompensas",
      kpi_nav_referral_conversion:"Tasa de conversión",
      kpi_nav_new_customer_rate:  "Tasa de nuevos clientes",
      kpi_nav_participation_rate: "Tasa de participación",
      kv_definition_lbl:  "DEFINICIÓN",
      kv_formula_lbl:     "FÓRMULA",
      kv_cross_avg:       "PROMEDIO ENTRE SECTORES",
      kv_ranking_eyebrow: "RANKING POR SECTOR",
      kv_ranking_title:   "{kpi} por sector",
      kv_legend_sector:   "Valor del sector",
      kv_legend_avg:      "Promedio entre sectores",
      kv_avg_short:       "Promedio",
      kv_tips_eyebrow:    "Cómo mejorarlo",
      kv_tips_title:      "Tres acciones que mueven {kpi}.",

      mc_eyebrow:         "UPLIFT DE ENGAGEMENT",
      mc_title:           "Impacto de las misiones completadas.",
      mc_body:            "Cómo la LTV, los pedidos y el AOV (indexados a 100 en cero misiones) crecen a medida que los miembros completan más misiones de engagement.",
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
      export_alert:       "Exportación PNG próximamente. Este es un prototipo estático.",

      bp_eyebrow:         "HERRAMIENTA GRATUITA",
      bp_title:           "Comparar mi marca",
      bp_step_of:         "Paso {n} de 3",
      bp_step_1:          "elige tu sector",
      bp_step_2:          "introduce tus cifras",
      bp_step_3:          "resultados",
      bp_back:            "← Volver",
      bp_continue:        "Continuar",
      bp_see_results:     "Ver mis resultados",
      bp_edit:            "Editar los números",
      bp_no_account:      "Sin cuenta. Nada se almacena.",
      bp_step1_lead:      "Selecciona el sector más cercano. Compararemos tus cifras con las marcas de ese sector.",
      bp_step1_brands:    "marcas",
      bp_step2_lead:      "Introduce lo que sepas y deja el resto en blanco. Necesitamos al menos 3 KPIs para generar comparaciones con sentido.",
      bp_step2_placeholder:"Placeholder = benchmark sectorial {sector}.",
      bp_step3_verdict:   "VEREDICTO",
      bp_step3_good:      "Por encima de la media sectorial.",
      bp_step3_good_body: "La mayoría de tus KPIs superan la media del sector {sector}. Consulta la vista de KPI para ver dónde puedes ir más lejos y qué métricas aún tienen margen de mejora.",
      bp_step3_ok:        "Resultados mixtos, brechas claras por cerrar.",
      bp_step3_ok_body:   "Algunos KPIs están por delante, otros por detrás. Usa la vista de KPI para priorizar las métricas con mayor brecha respecto a la media del sector {sector}.",
      bp_step3_bad:       "Gran potencial por activar.",
      bp_step3_bad_body:  "La mayoría de tus KPIs están por debajo de la media del sector {sector}. Incluso mejoras pequeñas se acumulan rápidamente. Usa la vista de KPI para identificar tus movimientos de mayor impacto.",
      bp_you_vs_avg:      "tú {you} vs. media {avg}",
      bp_not_entered:     "no introducido"
    },
    kpis: {
      activation_rate: {
        name: "Tasa de activación",
        short: "Activación",
        definition: "La tasa de activación mide con qué rapidez los nuevos inscritos tienen su primera interacción significativa con tu programa. Es la primera señal de salud del programa: una tasa baja significa que los miembros se registran pero nunca interactúan, desperdiciando presupuesto de adquisición. Mejorar la activación tiene efecto multiplicador sobre todos los KPIs posteriores, ya que solo los miembros activados pueden canjear, referir o completar misiones.",
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
        definition: "La tasa de uso de puntos mide el porcentaje de puntos emitidos que los miembros realmente canjean, revelando si tu moneda de recompensa se percibe como valiosa. Es un indicador directo de relevancia de las recompensas: un uso bajo suele señalar umbrales demasiado altos o recompensas demasiado genéricas para motivar la acción. Reducir la brecha entre puntos ganados y puntos gastados es uno de los leviers más rápidos para aumentar el engagement.",
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
        definition: "La tasa de canje mide el porcentaje de miembros activos que utilizan al menos una recompensa en una ventana de 90 días. Es la prueba más clara de que tu programa crea valor percibido real, no solo acumulación teórica de puntos. Un canje elevado impulsa tanto la satisfacción como la recompra, convirtiéndolo en un indicador líder del crecimiento de LTV.",
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
        definition: "El CVR de referidos mide cuántos de los compartidos realizados por tus miembros se convierten en un pedido completado. Es la métrica de eficiencia de tu estrategia de boca a boca: un CVR bajo significa que generas actividad de difusión pero no la conviertes en ingresos. Optimizar la experiencia de landing del referido y la estructura de incentivos en ambos lados mueve directamente este número.",
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
        definition: "Nuevos por referido mide el porcentaje de todos los nuevos clientes de un período que fueron traídos por miembros del programa de lealtad. Cuantifica tu base de miembros como canal de adquisición, junto a los canales de pago y orgánicos. Las marcas con una tasa alta reducen sus costes de adquisición pagada y mejoran la calidad de los nuevos clientes, ya que los referidos convierten más rápido y retienen durante más tiempo.",
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
        definition: "La tasa de participación mide el porcentaje de miembros que van más allá de la acumulación de puntos para completar al menos una misión opcional por trimestre. Es el mejor predictor de la retención a largo plazo: los miembros que completan misiones crean un bucle de hábito que los hace mucho más difíciles de perder. Una tasa de participación en alza señala que tu programa ha pasado de transaccional a genuinamente relacional.",
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
        definition: "El crecimiento de LTV mide el delta de ingresos entre los miembros del programa de lealtad y una cohorte comparable de no miembros en 12 meses. Es la prueba fundamental del ROI de la fidelización: la diferencia entre un programa que genera valor incremental real y uno que simplemente recompensa a clientes que habrían comprado de todas formas. Seguir el crecimiento de LTV por cohorte controla el sesgo de selección y revela el impacto causal real de la membresía en el programa.",
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
        definition: "El crecimiento de AOV mide cuánto mayor es el carrito de un miembro en los pedidos donde aplica una recompensa, comparado con sus propios pedidos sin canje. Es la medida más directa del impacto en el momento de pago: una tasa de crecimiento de AOV alta significa que tus recompensas impulsan el gasto hacia arriba, no solo recompensan un gasto ya comprometido. Establecer un umbral mínimo de carrito para el canje de recompensas es la palanca estructural principal para mejorar esta métrica.",
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
        definition: "El crecimiento de pedidos mide con qué frecuencia compran más los miembros del programa de lealtad en comparación con una cohorte comparable de no miembros en 12 meses. Es el indicador más puro de si la membresía en el programa cambia el comportamiento de compra real, independientemente del valor del carrito. Combinado con el crecimiento de LTV, permite a las marcas descomponer el impacto en ingresos de su programa en un componente de frecuencia y un componente de AOV.",
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
        definition: "El ROI mide los ingresos netos generados por el programa de lealtad en relación con su coste total. Es la métrica de business case definitiva: indica a la dirección si el programa crea valor incremental o simplemente subsidia el comportamiento existente de los clientes. Un programa con un ROI sólido convierte el engagement de los miembros en un crecimiento de ingresos sostenible y medible.",
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
      fashion: { name: "Moda y Confección", short: "Moda", intro: "Las marcas de Moda y Confección usan la fidelización para mantener la intención de compra entre ciclos estacionales y lanzamientos. Los miembros responden más a los accesos anticipados y experiencias VIP que a los descuentos, generando una alta participación pero un valor de canje modesto. El principal reto es mantener el engagement fuera de temporada mediante una animación continua del programa y experiencias exclusivas de prelanzamiento." },
      beauty:  { name: "Belleza & Wellness", short: "Belleza", intro: "Belleza & Wellness destaca por su alta frecuencia de compra natural y el vínculo emocional que las marcas construyen con sus clientes. Los programas de fidelización se activan rápidamente y generan un fuerte engagement transaccional. La palanca real está en sostener ese impulso: convertir miembros comprometidos en compradores recurrentes a través de una animación continua del programa y experiencias post-compra personalizadas." },
      food:    { name: "Alimentación y Bebidas", short: "Alimentos", intro: "Alimentación y Bebidas cuenta con la mayor frecuencia de compra natural de todos los sectores, lo que impulsa una activación rápida y un uso elevado de puntos. El bajo valor de los carritos limita el crecimiento del AOV, pero el volumen de transacciones hace que los programas de fidelización sean muy eficientes para consolidar hábitos de compra duraderos. La oportunidad está en usar esa frecuencia como palanca para profundizar el engagement a través de misiones y contenido." },
      health:  { name: "Salud y Suplementos", short: "Salud", intro: "Salud y Suplementos registra el mayor crecimiento de LTV de todos los sectores, impulsado por patrones de compra compatibles con la suscripción y un alto nivel de confianza entre las marcas y sus clientes. Los miembros se reactivan rápidamente a través de misiones de recuperación, y el referido juega un papel estructuralmente más importante que en otras categorías. La palanca a activar es convertir la satisfacción con el producto en boca a boca activo, respaldado por un sólido programa de referidos." },
      home:    { name: "Hogar y Decoración", short: "Hogar", intro: "Hogar y Decoración opera con largos ciclos de compra que cambian fundamentalmente la dinámica de fidelización. El crecimiento del AOV en el momento del canje es sólido, pero la baja frecuencia de transacciones provoca que los miembros se desconecten entre compras, lastrando las tasas de participación y de canje. Las misiones de reengagement son el mecanismo principal para mantener el programa activo entre los momentos de compra." },
      petcare: { name: "Mascotas", short: "Mascotas", intro: "Mascotas destaca por la mayor conversión de referidos de todos los sectores, impulsada por el vínculo emocional entre dueños de mascotas que alimenta naturalmente el boca a boca. Los miembros están muy motivados y muestran una fuerte lealtad a la marca, pero el engagement en el programa depende de la capacidad de las marcas para activar esa energía comunitaria mediante misiones y experiencias compartidas. Los dueños de mascotas hablan entre ellos: el referido es la palanca de crecimiento a priorizar." },
      sports:  { name: "Deporte y Fitness", short: "Deporte", intro: "Deporte y Fitness genera la mayor participación en misiones de todos los sectores, reflejando una audiencia orientada a la comunidad que responde de forma natural a retos y objetivos colectivos. Los programas de fidelización funcionan mejor cuando se construyen alrededor de la identidad y el progreso compartido, más que de recompensas puramente transaccionales. La presión en los márgenes limita el ROI respecto a otros sectores, pero la profundidad del engagement crea una base sólida para la retención a largo plazo." }
    },
    categories: {
      Transactional: { label: "Transaccional", blurb: "Cómo los miembros ganan y gastan en tu programa." },
      Referral:      { label: "Referidos",     blurb: "Cómo los miembros atraen nuevos clientes." },
      Relational:    { label: "Engagement",    blurb: "Qué tan profunda es la dinámica de engagement." },
      Business:      { label: "Impacto en el negocio", blurb: "Qué hace el programa en los ingresos." }
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

      footer_caption:     "Source: Loyoly Loyalty Benchmark 2026 - loyoly.io",
      footer_meta:        "600+ brands · 7 industries · 10 KPIs · Methodology available on request",

      hero_pill:          "Loyalty intelligence",
      hero_h1_pre:        "2026 Loyalty Programs",
      hero_h1_mid:        "",
      hero_h1_post:       "Performance Benchmark",
      hero_lead:          "Real KPIs from {n}+ Loyoly brands, broken down by industry and metric. Find out where your programme stands in under a minute.",
      hero_secondary_cta: "Explore the data",

      sec01_eyebrow:      "01 — TWO WAYS IN",
      sec01_title:        "Two views. One dataset.",
      sec01_lead:         "Cut the data by sector or by KPI. Every card and label below is a direct shortcut to the right view.",
      entry_a_eyebrow:    "BY INDUSTRY",
      entry_a_title:      "See how your sector performs.",
      entry_a_body:       "Pick one of {n} verticals and view all 10 KPIs side-by-side with the cross-sector average, plus mission-impact curves.",
      entry_a_open:       "Open industry view",
      entry_b_eyebrow:    "BY KPI",
      entry_b_title:      "Rank sectors on the metric that matters most.",
      entry_b_body:       "Pick a KPI and instantly compare all 7 sectors against the cross-sector average, with three actionable tips to lift the number.",
      entry_b_open:       "Open KPI view",
      entry_more:         "+ {n} more",

      sec02_eyebrow:      "02 — CROSS-SECTOR AVERAGES",
      sec02_title_a:      "What a loyalty program looks like,",
      sec02_title_b:      "on average, in 2026.",
      sec02_lead:         "Click any card to open the full KPI breakdown: sector ranking and three concrete tips to move the number.",
      chip_rates:         "Rates: 0-100%",
      chip_growth:        "Growth: % uplift",
      chip_roi:           "ROI: x multiplier",

      banner_eyebrow:     "FREE TOOL",
      banner_title:       "How does your program compare?",
      banner_body:        "Pick your industry, enter your numbers, see the gap to the sector average. All in your browser, nothing stored.",

      meth_eyebrow:       "03 — METHODOLOGY",
      meth_title:         "How this benchmark was built.",
      meth_intro:         "This benchmark draws on data from 600+ brands on the Loyoly platform, covering multiple ecommerce verticals. All figures reflect actual program performance recorded during the relevant reference periods.",
      meth_op_lbl:        "OPERATIONAL INDICATORS",
      meth_op_body:       "Activation rate, points and rewards usage, and referral indicators were calculated over the last <strong>30 days</strong>. This window captures recent member activation dynamics and interaction patterns.",
      meth_lt_lbl:        "LONG-TERM INDICATORS",
      meth_lt_body:       "LTV, AOV, average orders, and engagement rate were measured over a <strong>365-day period</strong> to ensure a stable reading of member behaviour and program profitability.",
      meth_smp_lbl:       "SAMPLING",
      meth_smp_body:      "All figures are sector averages, calculated from <strong>homogeneous customer cohorts</strong> within each vertical. No weighting by company size or sales volume was applied.",
      meth_footer:        "These analyses provide a comparative, objective reading of average program performance, enabling brands to benchmark their results against market standards.",

      iv_eyebrow:         "INDUSTRY VIEW",
      iv_title:           "Benchmark by sector.",
      iv_sector_overview: "Sector Overview",
      iv_clients_eyebrow: "BRANDS SAMPLED",
      iv_clients_body:    "A few representative programs from this sector (anonymised panel).",
      iv_kpi_count:       "{n} KPI",
      iv_kpis_count:      "{n} KPIs",
      iv_see_program:     "See programme",

      kv_eyebrow:         "KPI VIEW",
      kv_title:           "Compare sectors, one KPI at a time.",
      kpi_nav_activation_rate:    "Activation rate",
      kpi_nav_points_usage_rate:  "Points usage rate",
      kpi_nav_redemption_rate:    "Rewards redemption rate",
      kpi_nav_referral_conversion:"Referral rate",
      kpi_nav_new_customer_rate:  "New customer rate",
      kpi_nav_participation_rate: "Participation rate",
      kv_definition_lbl:  "DEFINITION",
      kv_formula_lbl:     "FORMULA",
      kv_cross_avg:       "CROSS-SECTOR AVERAGE",
      kv_ranking_eyebrow: "SECTOR RANKING",
      kv_ranking_title:   "{kpi} by sector",
      kv_legend_sector:   "Sector value",
      kv_legend_avg:      "Cross-sector average",
      kv_avg_short:       "Average",
      kv_tips_eyebrow:    "How to improve it",
      kv_tips_title:      "Three actions that move {kpi}.",

      mc_eyebrow:         "ENGAGEMENT UPLIFT",
      mc_title:           "Impact of missions completed.",
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
      export_alert:       "PNG export coming soon. This is a static prototype.",

      bp_eyebrow:         "FREE TOOL",
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
      bp_step1_lead:      "Pick the closest match. We'll compare your numbers against the brands in that sector.",
      bp_step1_brands:    "brands",
      bp_step2_lead:      "Enter what you know and leave the rest blank. We need at least 3 KPIs to generate meaningful comparisons.",
      bp_step2_placeholder:"Placeholder = {sector} sector benchmark.",
      bp_step3_verdict:   "VERDICT",
      bp_step3_good:      "Performing above average.",
      bp_step3_good_body: "Most of your KPIs beat the {sector} sector average. Check the KPI view to see where you can push further and which metrics still have room to grow.",
      bp_step3_ok:        "Mixed results, clear gaps to close.",
      bp_step3_ok_body:   "Some KPIs are ahead, others are lagging. Use the KPI view to prioritize the metrics with the biggest gap to the {sector} sector average.",
      bp_step3_bad:       "Real upside to unlock.",
      bp_step3_bad_body:  "Most of your KPIs sit below the {sector} sector average. Even small improvements compound quickly. Use the KPI view to identify your highest-leverage moves.",
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
