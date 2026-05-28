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
      kv_insights_eyebrow: "Les insights à retenir",
      kv_insights_title:   "Ce que les données disent sur {kpi}.",
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
        definition: "Le taux d'activation mesure la part des commandes incluant une récompense issue du programme. C'est l'indicateur de référence pour évaluer l'adoption réelle du programme de fidélité par vos clients. Un bon taux traduit une perception claire de la valeur du programme : vos membres comprennent les avantages, les utilisent et les intègrent naturellement dans leur parcours post-achat.",
        formula: "(Commandes avec récompense utilisée / Volume total de commandes) × 100",
        formulaParts: { num: "Commandes avec récompense utilisée", denom: "Volume total de commandes" },
        tips: [
          { title: "Construisez une gamme de récompenses variée", body: "Construisez une gamme de récompenses variée, adaptée à plusieurs profils clients (bons d'achat, accès exclusifs, dons solidaires...)." },
          { title: "Simplifiez l'accès aux premiers paliers", body: "Simplifiez l'accès aux premiers paliers pour déclencher rapidement la première activation et créer un réflexe d'usage." },
          { title: "Rendez le programme omniprésent", body: "Rendez le programme omniprésent dans votre écosystème : page d'accueil, compte client, email post-achat, réseaux sociaux, checkout." }
        ],
        insights: "Les secteurs Beauté & Bien-être (5,7%) et Animalerie (5,5%) se distinguent en tête du classement. Ce sont des catégories où l'attachement émotionnel au produit est fort : les clients sont naturellement prédisposés à s'engager avec un programme qui prolonge leur relation à la marque. Le passage à l'activation est facilité par une relation déjà chargée de sens.\nÀ l'inverse, le secteur Santé & Compléments affiche le taux le plus faible (4,0%) malgré un taux de participation très élevé (18,8%). Ce décalage révèle un profil d'adhérent qui s'inscrit sans franchir le pas de l'engagement transactionnel, souvent parce que le programme est perçu comme un avantage administratif plutôt qu'une expérience désirable."
      },
      points_usage_rate: {
        name: "Taux d'utilisation des points",
        short: "Utilisation des points",
        definition: "Le taux d'utilisation des points mesure la part des points crédités qui sont effectivement dépensés par vos clients. C'est un indicateur clé de la liquidité de votre programme et de la valeur perçue de vos récompenses. Un bon taux traduit un parcours fluide et des avantages suffisamment attractifs pour inciter vos membres à passer à l'action. Un véritable baromètre de l'efficacité de votre mécanique d'engagement.",
        formula: "(Points utilisés / Points gagnés) × 100",
        formulaParts: { num: "Points utilisés", denom: "Points gagnés" },
        tips: [
          { title: "Rendez vos 1ères récompenses atteignables", body: "Rendez vos 1ères récompenses atteignables dès les premiers achats pour créer un réflexe d'utilisation immédiat." },
          { title: "Mettez en place des rappels automatisés", body: "Mettez en place des rappels automatisés du solde de points via email, SMS ou WhatsApp pour maintenir l'attention des membres." },
          { title: "Créez un effet d'urgence maîtrisé", body: "Créez un effet d'urgence maîtrisé avec des bonus à durée limitée, afin de stimuler la dépense." }
        ],
        insights: "Les secteurs Alimentation & Boissons (17,4%) et Animalerie (15,1%) écrasent la moyenne de plus de 5 points. La fréquence d'achat élevée dans ces deux catégories crée un cycle naturel d'accumulation et de dépense : les clients voient régulièrement leur solde augmenter, ce qui maintient la pertinence du programme entre deux visites et génère une forte envie de convertir.\nLe secteur Santé & Compléments (7,6%) peine malgré un fort taux de participation. Le problème est structurel : dans une catégorie où l'achat est rationnel et planifié, les points s'accumulent lentement et les occasions de les utiliser ne se présentent pas assez souvent pour entretenir l'habitude. Le programme risque alors de devenir invisible dans la routine du client."
      },
      redemption_rate: {
        name: "Taux d'utilisation des récompenses",
        short: "Utilisation",
        definition: "Le taux d'utilisation des récompenses mesure la part des avantages réclamés qui sont effectivement utilisés par les clients. C'est un indicateur clé de l'activation réelle du programme et de la valeur perçue des bénéfices proposés. Un bon taux traduit une expérience fluide, compréhensible et incitative, tandis qu'un faible taux signale souvent un manque de clarté, de visibilité ou des conditions d'usage trop restrictives.",
        formula: "(Récompenses utilisées / Récompenses réclamées) × 100",
        formulaParts: { num: "Récompenses utilisées", denom: "Récompenses réclamées" },
        tips: [
          { title: "Automatisez des rappels multicanaux", body: "Automatisez des rappels multicanaux (email, SMS, WhatsApp, push) pour encourager vos clients à utiliser leurs récompenses avant expiration." },
          { title: "Fluidifiez les conditions d'utilisation", body: "Fluidifiez les conditions d'utilisation : moins de contraintes = plus d'activation." },
          { title: "Positionnez les récompenses dans les moments clés", body: "Positionnez les récompenses dans les moments clés du parcours d'achat : dans les emails, le compte client ou au checkout." }
        ],
        insights: "C'est le KPI le plus homogène du benchmark, avec un écart de seulement 9,7 points entre le premier (Beauté & Bien-être, 48,5%) et le dernier (Maison & Décoration, 38,8%). Ce resserrement indique que le taux de rachat est davantage piloté par la qualité du catalogue de récompenses que par la nature du secteur. Une fois le membre actif, la mécanique de rachat suit une logique similaire quelle que soit la catégorie.\nLe secteur Maison & Décoration reste en retrait (-5,1 pts). Avec des cycles d'achat longs et peu de visites en boutique ou sur le site, les membres ont moins d'occasions de voir et d'utiliser leurs récompenses. L'enjeu n'est pas tant d'augmenter la valeur des rewards que de créer des points de contact réguliers pour rappeler que ces récompenses existent."
      },
      referral_conversion: {
        name: "Taux de conversion du parrainage",
        short: "Conversion parrainage",
        definition: "Le taux de conversion du parrainage mesure la part de filleuls qui réalisent un premier achat après avoir reçu une invitation ou un code de parrainage. Il évalue la capacité de votre marque à transformer une recommandation en acquisition effective. Un bon taux traduit une promesse claire, un avantage bien positionné et un parcours d'achat sans friction pour le filleul.",
        formula: "(Nombre de filleuls ayant passé commande / Nombre total de filleuls invités) × 100",
        formulaParts: { num: "Filleuls ayant passé commande", denom: "Total de filleuls invités" },
        tips: [
          { title: "Soignez l'expérience filleul", body: "Soignez l'expérience filleul : du clic sur le lien à l'achat, le parcours doit être fluide, mobile-first et exempt de toute friction." },
          { title: "Intégrez le parrainage dans vos scénarios CRM", body: "Intégrez le parrainage dans vos scénarios CRM : emails post-achat, espace client, thank you page... pour multiplier les points d'entrée naturels." },
          { title: "Relancez les filleuls inactifs", body: "Relancez les filleuls inactifs via une séquence automatisée (email, SMS ou WhatsApp) avant expiration du code pour maximiser la conversion." },
          { title: "Testez différentes incitations", body: "Testez différentes incitations (bon d'achat, réduction, points de fidélité) pour identifier le levier le plus performant selon votre AOV." }
        ],
        insights: "Le secteur Maison & Décoration réalise ici une performance inattendue en tête du classement (44,1%, +7 pts). Dans une catégorie à fort ticket moyen, la recommandation d'un proche a un poids décisif. L'acheteur potentiel est déjà en phase de réflexion avancée : un parrainage valide son choix plutôt que de le susciter, ce qui explique un taux de conversion nettement supérieur à la moyenne.\nLe secteur Mode & Prêt-à-porter ferme le classement (35,0%). La catégorie génère pourtant beaucoup de conversation sociale autour des achats, mais la conversion est freinée par la dimension personnelle du choix vestimentaire. La recommandation déclenche l'exploration, rarement la décision d'achat directe. Travailler la mécanique d'incentive côté filleul, plutôt que côté parrain, peut débloquer ce levier."
      },
      new_customer_rate: {
        name: "Taux de nouveaux clients (issus du parrainage)",
        short: "Nouveaux du parrainage",
        definition: "Le taux de nouveaux clients mesure la part d'acheteurs acquis via le parrainage, par rapport à l'ensemble des nouveaux clients sur une période donnée. Il met en lumière la capacité du programme à générer de la croissance organique et à transformer vos clients satisfaits en véritables relais d'acquisition. Un bon taux traduit une communauté active, une expérience de recommandation bien intégrée et un coût d'acquisition marginal quasi nul, des atouts majeurs pour une stratégie de croissance rentable.",
        formula: "(Nouveaux clients via parrainage / Total des nouveaux clients) × 100",
        formulaParts: { num: "Nouveaux clients via parrainage", denom: "Total des nouveaux clients" },
        tips: [
          { title: "Personnalisez le message de parrainage", body: "Personnalisez le message de parrainage : un ton authentique, venant du parrain, génère plus de confiance qu'une communication purement promotionnelle." },
          { title: "Facilitez le partage", body: "Facilitez le partage (liens à copier-coller, email, SMS...) pour lever les freins à la recommandation spontanée." },
          { title: "Animez régulièrement votre programme", body: "Animez régulièrement votre programme avec des campagnes de double bonus, des challenges communautaires ou des activations saisonnières pour maintenir la viralité." }
        ],
        insights: "Les chiffres sont faibles et très serrés sur l'ensemble du benchmark (de 0,6% à 0,9%). Ce KPI mesure la contribution nette du parrainage à l'acquisition totale, et son niveau modeste rappelle que le referral ne remplace pas les autres canaux d'acquisition mais vient les compléter. Les secteurs Maison & Décoration (0,9%) et Animalerie (0,8%) tirent leur épingle du jeu grâce à la combinaison d'un taux de conversion élevé et d'une base de membres actifs engagés.\nPour la majorité des secteurs bloqués à 0,6%, le plafond est moins lié à la volonté des clients de parrainer qu'à la visibilité du mécanisme dans le parcours post-achat. Un parrainage qui n'est pas promu au bon moment, avec la bonne offre, reste statistiquement invisible."
      },
      participation_rate: {
        name: "Taux de participation",
        short: "Participation",
        definition: "Le taux de participation correspond à la part de clients ayant complété au moins une mécanique d'engagement sur la période observée. Il reflète la vitalité relationnelle de votre programme et la capacité de votre marque à créer des interactions au-delà de l'achat. Un bon taux montre que vos clients ne se limitent pas à consommer : ils participent, partagent, donnent leur avis et contribuent à la visibilité organique de votre marque. Un véritable indicateur de performance communautaire.",
        formula: "(Nombre de clients ayant complété une mission / Nombre total de clients actifs) × 100",
        formulaParts: { num: "Clients ayant complété une mission", denom: "Total de clients actifs" },
        tips: [
          { title: "Diversifiez les mécaniques d'engagement", body: "Diversifiez les mécaniques d'engagement : opt-in, avis, UGC, interactions sociales, sondages..." },
          { title: "Animez autour des temps forts", body: "Animez régulièrement votre programme autour de temps forts (nouveautés, événements, campagnes saisonnières) pour renouveler l'intérêt." },
          { title: "Rendez les mécaniques visibles", body: "Rendez les mécaniques d'engagement visibles et accessibles tout au long du parcours client : dans les emails, le compte fidélité, etc." },
          { title: "Gamifiez l'expérience", body: "Gamifiez l'expérience avec des récompenses symboliques ou des bonus temporaires pour dynamiser la participation dans la durée." }
        ],
        insights: "Les secteurs Santé & Compléments (+9 pts au-dessus de la moyenne, à 18,8%) et Beauté & Bien-être (13,3%) dominent largement. Ces catégories partagent une dimension aspirationnelle forte : les clients s'identifient à un style de vie, pas seulement à un produit. Les missions et défis de fidélité s'inscrivent naturellement dans cette logique de progression personnelle, ce qui décuple l'envie de participer.\nLe secteur Maison & Décoration est en dernière position avec 1,7%, soit -8,1 pts sous la moyenne. La participation aux challenges suppose une régularité d'interaction que le comportement d'achat maison ne permet tout simplement pas. Dans cette catégorie, le programme de fidélité doit être pensé sur des cycles longs et des événements clés (déménagement, rénovation, saisonnalité) plutôt que sur une dynamique d'engagement hebdomadaire."
      },
      ltv_growth: {
        insights: "Le secteur Maison & Décoration réalise une performance exceptionnelle (+263,5%, +88 pts). Cette catégorie cumule deux effets favorables : une forte croissance de l'AOV (+34%) et un très bon taux de réachat (+143,4%). Les membres fidèles de ce secteur dépensent plus à chaque visite et reviennent plus souvent, ce qui démultiplie la valeur vie client par rapport aux non-membres.\nLe secteur Animalerie (+134,7%) est en queue de peloton malgré son excellent ROI global. L'explication est mécanique : dans une catégorie où l'AOV est faible et peu extensible, la croissance du LTV est plafonnée par l'équation panier x fréquence. Le programme crée de la rétention mais ne peut pas corriger structurellement un panier moyen faible. C'est une catégorie où la valeur du programme réside davantage dans la réduction du churn que dans l'expansion du revenu par client.",
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
        insights: "Les secteurs Maison & Décoration (+34%) et Santé & Compléments (+28,7%) enregistrent les progressions les plus marquées. Dans des catégories à panier élevé, le programme de fidélité donne au client une raison concrète de franchir un palier de dépense supplémentaire : passer à une gamme supérieure, ajouter un produit complémentaire, ou profiter d'un seuil de récompense. L'effet levier sur l'AOV est d'autant plus fort que le client est en phase de réflexion.\nLe secteur Animalerie (+8,7%) est à contre-courant. La catégorie génère pourtant un excellent ROI (34,3x) grâce au volume et à la fréquence, mais l'AOV progresse peu car les achats sont essentiellement récurrents et fonctionnels. Les clients rachètent les mêmes références sans être incités à monter en gamme ou à élargir leur panier. Travailler les cross-sell et les montées en gamme via la mécanique de fidélité reste un levier sous-exploité dans cette catégorie.",
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
        insights: "Les secteurs Mode & Prêt-à-porter (+147,2%) et Maison & Décoration (+143,4%) affichent les progressions les plus élevées. La mode est portée par une dynamique de réachat émotionnel intense : les collections, les tendances et les nouveautés créent des occasions d'achat répétées que le programme vient amplifier. Pour le secteur Maison & Décoration, la croissance des commandes confirme que le programme parvient à transformer des acheteurs occasionnels en clients réguliers sur des projets successifs.\nLe secteur Santé & Compléments ferme le classement (+87,6%, -33,9 pts), ce qui peut sembler paradoxal pour une catégorie à forte participation. Le problème est la nature de la demande : l'achat est conditionné par le besoin réel, et la fidélité ne peut pas créer une fréquence artificielle dans une catégorie où le client rachète quand son stock est épuisé. Le programme augmente la rétention mais ne compresse pas les intervalles d'achat.",
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
        insights: "Les secteurs Animalerie (34,3x) et Maison & Décoration (25,8x) mènent le classement. Leur domination s'explique par des mécaniques différentes mais complémentaires : le secteur Animalerie tire sa performance d'un fort volume de transactions récurrentes avec un coût de récompenses maîtrisé, tandis que le secteur Maison & Décoration capitalise sur un ticket moyen élevé qui démultiplie le revenu additionnel généré par chaque membre actif.\nLe secteur Alimentation & Boissons (8,9x) arrive en dernière position. Le paradoxe de cette catégorie est visible dans les données : malgré le meilleur taux d'utilisation des points (17,4%) et une forte fréquence d'achat, le ROI reste en deçà de la moyenne. La combinaison d'un ticket moyen structurellement faible et d'un coût des récompenses proportionnellement élevé comprime les marges. La fidélité génère de l'engagement, mais la rentabilité nette du programme est plus difficile à construire.",
        name: "ROI",
        short: "ROI",
        definition: "Le ROI mesure la rentabilité directe du programme de fidélité. C'est l'indicateur ultime pour évaluer la performance économique d'une stratégie relationnelle : il traduit la capacité du programme à convertir l'engagement client en revenu mesurable. Un bon ROI démontre qu'au-delà du lien créé avec la communauté, le programme génère une croissance rentable et durable.",
        formula: "(Revenus additionnels générés / Coût total du programme (outil + récompenses)) × 100",
        formulaParts: { num: "Revenus additionnels générés", denom: "Coût total du programme (outil + récompenses)" },
        tips: [
          { title: "Optimisez le mix récompenses / marge", body: "Optimisez le mix récompenses / marge : privilégiez des avantages à forte valeur perçue et faible coût opérationnel (ex. accès exclusifs, SAV dédiée...)." },
          { title: "Segmentez vos efforts promotionnels", body: "Segmentez vos efforts promotionnels : concentrez les incentives sur vos segments à plus fort potentiel (top spenders, VIP, clients dormants à réactiver)." },
          { title: "Activez la data pour piloter vos campagnes", body: "Activez la data pour piloter vos campagnes : utilisez les signaux d'engagement (points non utilisés, récompense non consommée, seuil presque atteint) pour déclencher des relances ciblées et rentables." }
        ]
      }
    },
    sectors: {
      fashion: { name: "Mode & Prêt-à-porter", short: "Mode", intro: "Le secteur Mode & Prêt-à-porter affiche la meilleure croissance des commandes du benchmark (+147,2%) et une progression de la LTV nettement au-dessus de la moyenne (+195%). Le programme est un moteur de fréquence d'achat particulièrement efficace, y compris entre les cycles saisonniers et les drops.\nLe potentiel de croissance passe par l'approfondissement de l'engagement : activer davantage les mécaniques de missions et de parrainage permettrait de transformer une fidélité déjà transactionnellement solide en véritable appartenance à la marque." },
      beauty:  { name: "Beauté & Bien-être", short: "Beauté", intro: "Le secteur Beauté & Bien-être se distingue par un profil d'engagement particulièrement solide : taux d'activation (5,7%), participation (13,3%) et taux de rachat des récompenses (48,5%) sont tous au-dessus de la moyenne inter-sectorielle. Le lien émotionnel fort entre les clients et leurs marques beauté favorise une adoption naturelle et régulière du programme.\nLe vrai levier réside dans la durée : utiliser cet engagement élevé pour faire progresser les paniers et la LTV, grâce à une animation continue et des expériences post-achat personnalisées qui donnent envie de revenir plus souvent et de dépenser davantage." },
      food:    { name: "Alimentation & Boissons", short: "Alimentation", intro: "Le secteur Alimentation & Boissons bénéficie de la fréquence d'achat naturelle la plus élevée de tout le benchmark, ce qui se traduit par un taux d'utilisation des points exceptionnel (17,4%, premier toutes catégories confondues). La mécanique transactionnelle fonctionne d'elle-même, portée par la régularité des visites.\nCe volume de transactions constitue une base idéale pour approfondir l'engagement via des missions et du contenu, et ainsi renforcer la rentabilité globale du programme à mesure que la relation client se consolide." },
      health:  { name: "Santé & Compléments", short: "Santé", intro: "Le secteur Santé & Compléments enregistre le taux de participation le plus élevé du benchmark (18,8%) et une croissance de l'AOV solide (+28,7%). Les clients s'impliquent fortement dans les mécaniques d'engagement, portés par une relation de confiance élevée avec leurs marques et une dimension aspirationnelle bien ancrée.\nLe levier à activer est le parrainage : avec un taux de conversion de 38,5% au-dessus de la moyenne, les clients satisfaits sont naturellement enclins à recommander. Structurer ce bouche-à-oreille existant en programme de parrainage actif représente une opportunité de croissance directe." },
      home:    { name: "Maison & Décoration", short: "Maison", intro: "Le secteur Maison & Décoration délivre les résultats business les plus impressionnants du benchmark : meilleure croissance de la LTV (+263,5%), meilleur taux de conversion des parrainages (44,1%) et meilleure progression de l'AOV (+34%). Quand un client s'engage avec son programme de fidélité, l'impact sur le chiffre d'affaires est massif.\nDans un secteur où les cycles d'achat sont naturellement longs, les mécaniques de réengagement entre deux projets constituent le principal levier pour maintenir le programme vivant et capter les opportunités dès qu'elles se présentent." },
      petcare: { name: "Animaux & Accessoires", short: "Animaux & Acc.", intro: "Le secteur Animaux de Compagnie affiche le meilleur ROI du benchmark (34,3x) et des performances au-dessus de la moyenne sur l'ensemble des KPI transactionnels et referral. La fréquence d'achat élevée combinée à l'attachement émotionnel des propriétaires à leurs animaux crée des conditions idéales pour un programme de fidélité performant et rentable.\nLa force naturelle du bouche-à-oreille dans cette communauté est confirmée par un taux de conversion des parrainages de 42,2%. Amplifier ces mécaniques de recommandation, tout en travaillant la montée en gamme des paniers, constitue le principal axe de progression." },
      sports:  { name: "Sport & Fitness", short: "Sport", intro: "Le secteur Sport & Fitness présente un profil équilibré sur l'ensemble des indicateurs du benchmark, porté par une audience naturellement orientée vers les défis collectifs et les objectifs de progression. Les programmes y génèrent une fidélité solide et une bonne rétention sur le long terme.\nL'enjeu pour ce secteur est de capitaliser sur l'identité communautaire forte de ses clients : construire le programme autour du progrès partagé et des expériences exclusives plutôt que des seules récompenses transactionnelles permet d'activer pleinement ce potentiel d'engagement." },
      other:   { name: "Autres", short: "Autres", intro: "Aucun secteur ne correspond précisément à votre modèle. Votre marque sera comparée aux moyennes inter-secteurs, calculées sur l'ensemble des 600+ marques du panel. C'est le point de référence le plus neutre disponible." }
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
      kv_insights_eyebrow: "Insights clave",
      kv_insights_title:   "Lo que dicen los datos sobre {kpi}.",
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
        definition: "La tasa de activación mide la proporción de pedidos que incluyen una recompensa obtenida a través del programa. Es el indicador de referencia para evaluar la adopción real del programa de fidelización por parte de tus clientes. Una buena tasa refleja una percepción clara del valor del programa: tus miembros comprenden los beneficios, los utilizan y los integran de forma natural en su recorrido post-compra.",
        formula: "(Pedidos con recompensa utilizada / Volumen total de pedidos) × 100",
        formulaParts: { num: "Pedidos con recompensa utilizada", denom: "Volumen total de pedidos" },
        tips: [
          { title: "Construye una gama de recompensas variada", body: "Construye una gama de recompensas variada, adaptada a diferentes perfiles de clientes (vales, accesos exclusivos, donaciones solidarias...)." },
          { title: "Simplifica el acceso a los primeros niveles", body: "Simplifica el acceso a los primeros niveles para desencadenar rápidamente la primera activación y crear un reflejo de uso." },
          { title: "Haz el programa omnipresente", body: "Haz que el programa esté omnipresente en tu ecosistema: página de inicio, cuenta de cliente, email post-compra, redes sociales, checkout." }
        ],
        insights: "Los sectores Belleza & Wellness (5,7%) y Mascotas (5,5%) se distinguen a la cabeza del ranking. Son categorías con un fuerte apego emocional al producto: los clientes están naturalmente predispuestos a comprometerse con un programa que prolonga su relación con la marca. El paso a la activación se ve facilitado por una relación ya cargada de significado.\nPor el contrario, el sector Salud & Suplementos registra la tasa más baja (4,0%) a pesar de una tasa de participación muy elevada (18,8%). Esta brecha revela un perfil de miembro que se inscribe sin dar el paso al compromiso transaccional, a menudo porque el programa se percibe como un beneficio administrativo más que como una experiencia deseable."
      },
      points_usage_rate: {
        name: "Tasa de uso de puntos",
        short: "Uso de puntos",
        definition: "La tasa de uso de puntos mide la proporción de puntos acreditados que son efectivamente gastados por tus clientes. Es un indicador clave de la liquidez de tu programa y del valor percibido de tus recompensas. Una buena tasa refleja un recorrido fluido y beneficios suficientemente atractivos para incitar a tus miembros a actuar. Un verdadero barómetro de la eficacia de tu mecánica de engagement.",
        formula: "(Puntos utilizados / Puntos ganados) × 100",
        formulaParts: { num: "Puntos utilizados", denom: "Puntos ganados" },
        tips: [
          { title: "Haz alcanzables las primeras recompensas", body: "Haz que tus primeras recompensas sean alcanzables desde las primeras compras para crear un reflejo de uso inmediato." },
          { title: "Configura recordatorios automatizados", body: "Configura recordatorios automatizados del saldo de puntos por email, SMS o WhatsApp para mantener la atención de los miembros." },
          { title: "Crea un efecto de urgencia controlado", body: "Crea un efecto de urgencia controlado con bonificaciones de tiempo limitado para estimular el gasto." }
        ],
        insights: "Los sectores Alimentación & Bebidas (17,4%) y Mascotas (15,1%) superan la media en más de 5 puntos. La alta frecuencia de compra en ambas categorías crea un ciclo natural de acumulación y gasto: los clientes ven regularmente cómo crece su saldo, lo que mantiene la relevancia del programa entre visitas y genera un fuerte deseo de convertir.\nEl sector Salud & Suplementos (7,6%) tiene dificultades a pesar de una alta tasa de participación. El problema es estructural: en una categoría donde la compra es racional y planificada, los puntos se acumulan lentamente y las ocasiones de usarlos no se presentan con suficiente frecuencia para mantener el hábito. El programa corre entonces el riesgo de volverse invisible en la rutina del cliente."
      },
      redemption_rate: {
        name: "Tasa de utilización de recompensas",
        short: "Utilización",
        definition: "La tasa de utilización de recompensas mide la proporción de beneficios reclamados que son efectivamente utilizados por los clientes. Es un indicador clave de la activación real del programa y del valor percibido de los beneficios ofrecidos. Una buena tasa refleja una experiencia fluida, comprensible e incentivadora, mientras que una tasa baja suele señalar falta de claridad, visibilidad o condiciones de uso demasiado restrictivas.",
        formula: "(Recompensas utilizadas / Recompensas reclamadas) × 100",
        formulaParts: { num: "Recompensas utilizadas", denom: "Recompensas reclamadas" },
        tips: [
          { title: "Automatiza recordatorios multicanal", body: "Automatiza recordatorios multicanal (email, SMS, WhatsApp, push) para animar a tus clientes a usar sus recompensas antes de que expiren." },
          { title: "Simplifica las condiciones de uso", body: "Simplifica las condiciones de uso: menos restricciones = más activación." },
          { title: "Posiciona las recompensas en momentos clave", body: "Posiciona las recompensas en los momentos clave del recorrido de compra: en emails, la cuenta de cliente o en el checkout." }
        ],
        insights: "Este es el KPI más homogéneo del benchmark, con una diferencia de solo 9,7 puntos entre el primero (Belleza & Wellness, 48,5%) y el último (Hogar & Decoración, 38,8%). Este acercamiento indica que la tasa de canje está más impulsada por la calidad del catálogo de recompensas que por la naturaleza del sector. Una vez que el miembro está activo, la mecánica de canje sigue una lógica similar independientemente de la categoría.\nEl sector Hogar & Decoración se mantiene rezagado (-5,1 pts). Con ciclos de compra largos y pocas visitas a la tienda o al sitio web, los miembros tienen menos ocasiones de ver y utilizar sus recompensas. El reto no es tanto aumentar el valor de las recompensas como crear puntos de contacto regulares para recordar a los miembros que estas recompensas existen."
      },
      referral_conversion: {
        name: "Tasa de conversión de referidos",
        short: "CVR referidos",
        definition: "La tasa de conversión de referidos mide la proporción de referidos que realizan una primera compra tras recibir una invitación o un código de referido. Evalúa la capacidad de tu marca para convertir una recomendación en una adquisición efectiva. Una buena tasa refleja una promesa clara, un beneficio bien posicionado y un recorrido de compra sin fricciones para el referido.",
        formula: "(Número de referidos que realizaron una compra / Número total de referidos invitados) × 100",
        formulaParts: { num: "Referidos que realizaron una compra", denom: "Total de referidos invitados" },
        tips: [
          { title: "Cuida la experiencia del referido", body: "Cuida la experiencia del referido: desde el clic en el enlace hasta la compra, el recorrido debe ser fluido, mobile-first y sin ninguna fricción." },
          { title: "Integra el referido en tus flujos CRM", body: "Integra el referido en tus flujos CRM: emails post-compra, área de cliente, thank you page... para multiplicar los puntos de entrada naturales." },
          { title: "Reactiva a los referidos inactivos", body: "Reactiva a los referidos inactivos mediante una secuencia automatizada (email, SMS o WhatsApp) antes de que expire el código para maximizar la conversión." },
          { title: "Prueba diferentes incentivos", body: "Prueba diferentes incentivos (vale de compra, descuento, puntos de fidelización) para identificar el lever más eficaz según tu AOV." }
        ],
        insights: "El sector Hogar & Decoración logra aquí un rendimiento inesperadamente líder (44,1%, +7 pts). En una categoría con un ticket medio elevado, la recomendación de un conocido tiene un peso decisivo. El potencial comprador ya está en una fase de reflexión avanzada: un referido valida su elección más que suscitarla, lo que explica una tasa de conversión claramente superior a la media.\nEl sector Moda & Confección cierra el ranking (35,0%). La categoría genera mucha conversación social en torno a las compras, pero la conversión se ve frenada por la dimensión personal de la elección de ropa. La recomendación desencadena la exploración, raramente la decisión de compra directa. Trabajar la mecánica de incentivo del lado del referido, en lugar del lado del referente, puede desbloquear este lever."
      },
      new_customer_rate: {
        name: "Tasa de nuevos clientes (desde referidos)",
        short: "Nuevos por referido",
        definition: "La tasa de nuevos clientes mide la proporción de compradores adquiridos a través del referido, en relación con el total de nuevos clientes en un período determinado. Pone de relieve la capacidad del programa para generar crecimiento orgánico y convertir a tus clientes satisfechos en verdaderos canales de adquisición. Una buena tasa refleja una comunidad activa, una experiencia de recomendación bien integrada y un coste de adquisición marginal casi nulo, activos fundamentales para una estrategia de crecimiento rentable.",
        formula: "(Nuevos clientes vía referido / Total de nuevos clientes) × 100",
        formulaParts: { num: "Nuevos clientes vía referido", denom: "Total de nuevos clientes" },
        tips: [
          { title: "Personaliza el mensaje de referido", body: "Personaliza el mensaje de referido: un tono auténtico, proveniente del referente, genera más confianza que una comunicación puramente promocional." },
          { title: "Facilita el sharing", body: "Facilita el sharing (enlaces para copiar y pegar, email, SMS...) para eliminar las barreras a la recomendación espontánea." },
          { title: "Anima regularmente tu programa", body: "Anima regularmente tu programa con campañas de doble bonificación, retos comunitarios o activaciones estacionales para mantener la viralidad." }
        ],
        insights: "Las cifras son bajas y muy ajustadas en todo el benchmark (de 0,6% a 0,9%). Este KPI mide la contribución neta del referido a la adquisición total, y su nivel modesto recuerda que el referido no reemplaza otros canales de adquisición sino que los complementa. Los sectores Hogar & Decoración (0,9%) y Mascotas (0,8%) destacan gracias a la combinación de una alta tasa de conversión y una base de miembros activos comprometidos.\nPara la mayoría de los sectores bloqueados en el 0,6%, el techo está menos relacionado con la voluntad de los clientes de referir que con la visibilidad del mecanismo en el recorrido post-compra. Un programa de referidos que no se promueve en el momento adecuado, con la oferta correcta, permanece estadísticamente invisible."
      },
      participation_rate: {
        name: "Tasa de participación",
        short: "Participación",
        definition: "La tasa de participación corresponde a la proporción de clientes que han completado al menos una mecánica de engagement en el período observado. Refleja la vitalidad relacional de tu programa y la capacidad de tu marca para crear interacciones más allá de la compra. Una buena tasa muestra que tus clientes no se limitan a consumir: participan, comparten, dan su opinión y contribuyen a la visibilidad orgánica de tu marca. Un verdadero indicador de rendimiento comunitario.",
        formula: "(Número de clientes que completaron una misión / Número total de clientes activos) × 100",
        formulaParts: { num: "Clientes que completaron una misión", denom: "Total de clientes activos" },
        tips: [
          { title: "Diversifica las mecánicas de engagement", body: "Diversifica las mecánicas de engagement: opt-in, reseñas, UGC, interacciones sociales, encuestas..." },
          { title: "Anima el programa en momentos clave", body: "Anima regularmente tu programa en torno a momentos clave (novedades, eventos, campañas estacionales) para renovar el interés." },
          { title: "Haz las mecánicas visibles y accesibles", body: "Haz las mecánicas de engagement visibles y accesibles a lo largo del recorrido del cliente: en emails, la cuenta de fidelización, etc." },
          { title: "Gamifica la experiencia", body: "Gamifica la experiencia con recompensas simbólicas o bonificaciones temporales para dinamizar la participación a largo plazo." }
        ],
        insights: "Los sectores Salud & Suplementos (+9 pts por encima de la media, en 18,8%) y Belleza & Wellness (13,3%) dominan ampliamente. Estas categorías comparten una fuerte dimensión aspiracional: los clientes se identifican con un estilo de vida, no solo con un producto. Las misiones y los desafíos de fidelización encajan naturalmente en esta lógica de progresión personal, lo que multiplica el deseo de participar.\nEl sector Hogar & Decoración ocupa el último lugar con 1,7%, -8,1 pts por debajo de la media. La participación en los retos requiere una regularidad de interacción que el comportamiento de compra del hogar simplemente no permite. En esta categoría, el programa de fidelización debe pensarse en ciclos largos y eventos clave (mudanza, renovación, estacionalidad) en lugar de una dinámica de engagement semanal."
      },
      ltv_growth: {
        insights: "El sector Hogar & Decoración logra un rendimiento excepcional (+263,5%, +88 pts). Esta categoría acumula dos efectos favorables: un fuerte crecimiento del AOV (+34%) y una muy buena tasa de recompra (+143,4%). Los miembros fieles de este sector gastan más en cada visita y regresan con más frecuencia, lo que multiplica el valor de vida del cliente frente a los no miembros.\nEl sector Mascotas (+134,7%) se sitúa en la cola del pelotón a pesar de su excelente ROI global. La explicación es mecánica: en una categoría donde el AOV es bajo y poco extensible, el crecimiento del LTV está limitado por la ecuación cesta × frecuencia. El programa crea retención pero no puede corregir estructuralmente una cesta media baja. Es una categoría donde el valor del programa reside más en la reducción del churn que en la expansión del ingreso por cliente.",
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
        insights: "Los sectores Hogar & Decoración (+34%) y Salud & Suplementos (+28,7%) registran los crecimientos más marcados. En categorías con cesta alta, el programa de fidelización da al cliente una razón concreta para superar un umbral de gasto adicional: pasar a una gama superior, añadir un producto complementario o aprovechar un nivel de recompensa. El efecto palanca sobre el AOV es tanto más fuerte cuanto más avanzada es la fase de reflexión del cliente.\nEl sector Mascotas (+8,7%) va a contracorriente. La categoría genera sin embargo un excelente ROI (34,3x) gracias al volumen y la frecuencia, pero el AOV crece poco porque las compras son esencialmente recurrentes y funcionales. Los clientes recompran las mismas referencias sin ser incentivados a subir de gama o ampliar su cesta. Trabajar el cross-sell y las subidas de gama a través de la mecánica de fidelización sigue siendo un lever infrautilizado en esta categoría.",
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
        insights: "Los sectores Moda & Confección (+147,2%) y Hogar & Decoración (+143,4%) muestran los crecimientos más elevados. La moda está impulsada por una intensa dinámica de recompra emocional: las colecciones, las tendencias y las novedades crean ocasiones de compra repetidas que el programa amplifica. Para el sector Hogar & Decoración, el crecimiento de los pedidos confirma que el programa logra transformar compradores ocasionales en clientes regulares en proyectos sucesivos.\nEl sector Salud & Suplementos cierra el ranking (+87,6%, -33,9 pts), lo que puede parecer paradójico para una categoría de alta participación. El problema es la naturaleza de la demanda: la compra está condicionada por la necesidad real, y la fidelización no puede crear una frecuencia artificial en una categoría donde el cliente recompra cuando su stock se agota. El programa aumenta la retención pero no comprime los intervalos de compra.",
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
        insights: "Los sectores Mascotas (34,3x) y Hogar & Decoración (25,8x) lideran el ranking. Su dominio se explica por mecánicas diferentes pero complementarias: el sector Mascotas extrae su rendimiento de un alto volumen de transacciones recurrentes con un coste de recompensas controlado, mientras que el sector Hogar & Decoración capitaliza sobre un ticket medio elevado que multiplica el ingreso adicional generado por cada miembro activo.\nEl sector Alimentación & Bebidas (8,9x) llega en última posición. La paradoja de esta categoría es visible en los datos: a pesar de la mejor tasa de uso de puntos (17,4%) y una alta frecuencia de compra, el ROI se mantiene por debajo de la media. La combinación de un ticket medio estructuralmente bajo y un coste de recompensas proporcionalmente elevado comprime los márgenes. La fidelización genera engagement, pero la rentabilidad neta del programa es más difícil de construir.",
        name: "ROI",
        short: "ROI",
        definition: "El ROI mide la rentabilidad directa del programa de fidelización. Es el indicador definitivo para evaluar el rendimiento económico de una estrategia relacional: refleja la capacidad del programa para convertir el engagement del cliente en ingresos medibles. Un buen ROI demuestra que, más allá del vínculo creado con la comunidad, el programa genera un crecimiento rentable y sostenible.",
        formula: "(Ingresos adicionales generados / Coste total del programa (herramienta + recompensas)) × 100",
        formulaParts: { num: "Ingresos adicionales generados", denom: "Coste total del programa (herramienta + recompensas)" },
        tips: [
          { title: "Optimiza el mix recompensas / margen", body: "Optimiza el mix recompensas / margen: prioriza beneficios con alto valor percibido y bajo coste operativo (ej. accesos exclusivos, SAV dedicado...)." },
          { title: "Segmenta tus esfuerzos promocionales", body: "Segmenta tus esfuerzos promocionales: concentra los incentivos en tus segmentos de mayor potencial (top spenders, VIPs, clientes dormantes a reactivar)." },
          { title: "Activa los datos para gestionar tus campañas", body: "Activa los datos para gestionar tus campañas: utiliza las señales de engagement (puntos no utilizados, recompensa no consumida, umbral casi alcanzado) para desencadenar acciones específicas rentables." }
        ]
      }
    },
    sectors: {
      fashion: { name: "Moda y Confección", short: "Moda", intro: "El sector Moda & Confección registra el mejor crecimiento de pedidos del benchmark (+147,2%) y una progresión del LTV claramente por encima de la media (+195%). El programa es un motor de frecuencia de compra particularmente eficaz, incluso entre los ciclos estacionales y los drops.\nEl potencial de crecimiento pasa por la profundización del engagement: activar más las mecánicas de misiones y referidos permitiría transformar una fidelización ya sólida transaccionalmente en una verdadera pertenencia a la marca." },
      beauty:  { name: "Belleza & Wellness", short: "Belleza", intro: "El sector Belleza & Wellness destaca por un perfil de engagement particularmente sólido: tasa de activación (5,7%), participación (13,3%) y tasa de canje de recompensas (48,5%) están todos por encima de la media intersectorial. El fuerte vínculo emocional entre los clientes y sus marcas de belleza favorece una adopción natural y regular del programa.\nEl verdadero lever reside en la duración: utilizar este alto engagement para hacer crecer las cestas y el LTV, gracias a una animación continua y experiencias post-compra personalizadas que invitan a los miembros a volver más a menudo y gastar más." },
      food:    { name: "Alimentación y Bebidas", short: "Alimentos", intro: "El sector Alimentación & Bebidas se beneficia de la frecuencia de compra natural más alta de todo el benchmark, lo que se traduce en una tasa de uso de puntos excepcional (17,4%, primera en todas las categorías). La mecánica transaccional funciona por sí sola, impulsada por la regularidad de las visitas.\nEste volumen de transacciones constituye una base ideal para profundizar el engagement a través de misiones y contenidos, reforzando así la rentabilidad global del programa a medida que la relación con el cliente se consolida." },
      health:  { name: "Salud y Suplementos", short: "Salud", intro: "El sector Salud & Suplementos registra la tasa de participación más alta del benchmark (18,8%) y un sólido crecimiento del AOV (+28,7%). Los clientes se implican fuertemente en las mecánicas de engagement, impulsados por una alta relación de confianza con sus marcas y una dimensión aspiracional bien arraigada.\nEl lever a activar es el referido: con una tasa de conversión del 38,5% por encima de la media, los clientes satisfechos están naturalmente inclinados a recomendar. Estructurar este boca a boca existente en un programa de referidos activo representa una oportunidad de crecimiento directo." },
      home:    { name: "Hogar y Decoración", short: "Hogar", intro: "El sector Hogar & Decoración entrega los resultados de negocio más impresionantes del benchmark: mejor crecimiento del LTV (+263,5%), mejor tasa de conversión de referidos (44,1%) y mejor progresión del AOV (+34%). Cuando un cliente se compromete con su programa de fidelización, el impacto en el volumen de negocio es masivo.\nEn un sector donde los ciclos de compra son naturalmente largos, las mecánicas de reengagement entre dos proyectos constituyen el principal lever para mantener el programa vivo y captar las oportunidades en cuanto se presentan." },
      petcare: { name: "Animales y accesorios", short: "Animales", intro: "El sector Mascotas registra el mejor ROI del benchmark (34,3x) y un rendimiento por encima de la media en todos los KPIs transaccionales y de referido. La alta frecuencia de compra combinada con el apego emocional de los dueños a sus mascotas crea condiciones ideales para un programa de fidelización de alto rendimiento y rentable.\nLa fortaleza natural del boca a boca en esta comunidad se confirma con una tasa de conversión de referidos del 42,2%. Amplificar estas mecánicas de recomendación, mientras se trabaja la subida de gama de las cestas, constituye el principal eje de progresión." },
      sports:  { name: "Deporte y Fitness", short: "Deporte", intro: "El sector Deporte & Fitness presenta un perfil equilibrado en todos los indicadores del benchmark, impulsado por una audiencia naturalmente orientada hacia los retos colectivos y los objetivos de progresión. Los programas generan aquí una fidelización sólida y una buena retención a largo plazo.\nEl reto para este sector es capitalizar la fuerte identidad comunitaria de sus clientes: construir el programa en torno al progreso compartido y las experiencias exclusivas en lugar de las simples recompensas transaccionales permite activar plenamente este potencial de engagement." },
      other:   { name: "Otros", short: "Otros", intro: "Ningún sector corresponde exactamente a tu modelo. Tu marca se comparará con los promedios intersectoriales, calculados sobre las 600+ marcas del panel. Es el punto de referencia más neutro disponible." }
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
      kv_insights_eyebrow: "Key insights",
      kv_insights_title:   "What the data says about {kpi}.",
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
