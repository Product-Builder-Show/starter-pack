/*
  Données partagées du Product Builder Show.
  Un seul fichier de vérité : les 4 propositions de page le chargent toutes,
  donc une correction ici (nom, défi, FAQ) se répercute partout.
*/

/*
  Chaque défi porte aussi sa "fiche complète" (ouverte en modal pleine page).
  Les champs marqués [à compléter] sont à remplir défi par défi.
*/
const FICHE_VIDE = {
  utilisateurs: "[à compléter : qui va utiliser l'outil au quotidien, dans quelles situations]",
  ressources: "[à compléter : document(s) à télécharger pouvant être utiles pour ce défi]",
  prompt: "[à compléter : un prompt de démarrage simple, pour les équipes qui ne savent pas par où commencer]",
  piste: "[à compléter : un exemple d'idée concrète, pour les équipes en manque d'inspiration]"
};

const DEFIS = [
  {
    emoji: "🏆",
    titre: "Showroom WeFiiT",
    constat: "Chez WeFiiT, on produit de super livrables en mission : la présentation de Pauline chez Roole, la formation IA de Nils chez BPI, le hackathon de Baptiste chez LV… Mais tout ça dort dans des dossiers.",
    probleme: "Comment faire rayonner en interne et en externe nos plus beaux livrables de mission ?",
    build: "Une vitrine où tous ces livrables prennent vie et s'inspirent les uns les autres. Bonus : à partir d'un livrable, on génère directement un post LinkedIn ou un article de blog.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les consultants qui veulent valoriser une réalisation marquante, et les commerciaux ou managers qui cherchent des références concrètes pour un pitch client. Cadre : on met en vitrine des réalisations anonymisées ou déjà publiques (hackathons, conférences, formations), jamais un livrable client brut.",
      ressources: "De quoi remplir la vitrine et calibrer la génération de contenu : la <a href=\"https://www.figma.com/make/8Fhqkz0lECsUKWJiovFT8N/POC-IA-Talk---Tech-Days?fullscreen=1&t=ab7lyRL2l31getgQ-1&code-node-id=0-9\" target=\"_blank\" rel=\"noopener\">prez de Pauline aux Tech Days (MDP : hope-teal-moving-script)</a>, le <a href=\"https://wefiitcom.sharepoint.com/:u:/s/TribeExpertises/IQDb4Q3SN72vQqQypZ4Pp0TeAXpoTu1BU9AlyTQlXyi2zoo?e=gUT2ih\" target=\"_blank\" rel=\"noopener\">hackathon LV</a>, la <a href=\"https://wefiitcom.sharepoint.com/:b:/s/TribeExpertises/IQBtYApCwm8uT5fNcr82tdO9AXODHQ3Cjj-BJBihLK-ipMo?e=Ta62Em\" target=\"_blank\" rel=\"noopener\">formation de Nils</a>, les <a href=\"https://wefiitcom.sharepoint.com/:f:/s/TribeExpertises/IgDNK407IgLFQ5VRD1j-Y9J9AaPeWynZBsYXG8LcUeblIvE?e=6f7O02\" target=\"_blank\" rel=\"noopener\">formations réalisées chez les clients</a>, les <a href=\"https://wefiitcom.sharepoint.com/:f:/s/TribeExpertises/IgCoAzuvU8p3TpV_iOEC4DSrAa2rJFVJ1K1dgRbNkAUgiNw?e=l2B6xI\" target=\"_blank\" rel=\"noopener\">conférences, séminaires et REX inspirationnels</a>, et les <a href=\"https://wefiitcom.sharepoint.com/sites/INTERNALCOMMUNICATION/Documents%20partages/Contr%C3%B4le%20QA%20Notori%C3%A9t%C3%A9/Guidelines%20Blog%20WeFiiT.pdf\" target=\"_blank\" rel=\"noopener\">Guidelines Blog WeFiiT</a> pour écrire au bon ton.",
      piste: "L'app store des réalisations WeFiiT : chaque livrable s'affiche comme une app, avec sa vignette, ses tags et son impact, et un bouton génère le post LinkedIn ou l'article de blog qui le fait rayonner.",
      prompt: "On construit une vitrine des réalisations WeFiiT : chaque livrable (hackathon, conférence, formation…) s'affiche en carte avec vignette, tags (compétence, secteur) et impact, et un bouton génère en un clic un brouillon de post LinkedIn ou d'article de blog. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : le modèle de données d'une carte, les 3 écrans essentiels et la génération de post pour une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "🎲",
    titre: "Escape Game Onboarding",
    constat: "L'onboarding est un moment charnière dans la vie de tout WeFiiTer, qui se conclut par le passage du permis bateau. Mais c'est aussi une avalanche d'informations à digérer d'un coup.",
    probleme: "Comment aider chaque nouveau WeFiiTer à s'approprier facilement les principaux éléments de notre culture dans ses premières semaines ?",
    build: "Un escape game où chaque nouvel arrivant avance d'énigme en énigme pour découvrir la culture, les outils et l'équipe WeFiiT.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les nouveaux arrivants, pendant leurs premiers jours chez WeFiiT et avant la validation de leur permis bateau avec Yamila, et les managers ou RH qui les accueillent et veulent une intégration mémorable plutôt qu'une avalanche de slides.",
      ressources: "La matière première des énigmes existe déjà : <a href=\"https://app.notion.com/p/wefiit/Ton-parcours-d-int-gration-26fe1ca090a9808aacc1dbf03e9d98f7\" target=\"_blank\" rel=\"noopener\">Ton parcours d'intégration</a> (Notion) et la <a href=\"https://wefiitcom.sharepoint.com/sites/MyWeFiiT/SitePages/Onboarding.aspx\" target=\"_blank\" rel=\"noopener\">section Onboarding de My WeFiiT</a> (SharePoint).",
      piste: "Trois salles à déverrouiller : la culture (raison d'être, Vision 2028), les outils du quotidien, et l'équipage (qui fait quoi chez WeFiiT). Le parcours d'intégration sert de livre d'énigmes.",
      prompt: "On construit un escape game digital pour l'onboarding des nouveaux chez WeFiiT : une chasse au trésor où l'arrivant résout des énigmes sur la culture, les outils et les valeurs de l'entreprise pour « déverrouiller » son accès à l'équipe. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : les 3 énigmes clés d'une V1 jouable en 2h et par quoi commencer. J'utilise /plan, je valide, puis on code étape par étape."
    })
  },
  {
    emoji: "🎤",
    titre: "Coach Soutenances",
    constat: "La préparation soutenance avec les PADs, c'est l'un des rituels les plus sacrés et les plus appréciés chez WeFiiT.",
    probleme: "Comment s'entraîner sans complexes avant sa prépa soutenance avec un PAD ?",
    build: "Un coach IA, boosté par les capacités d'analyse vocale des LLM, qui débriefe le fond et la forme du pitch avant la prépa soutenance.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les WeFiiTers qui préparent leur soutenance client (le pitch où le consultant se présente au client avant d'être staffé), seuls et à leur rythme, pour répéter et gagner en assurance avant la prépa avec le PAD.",
      ressources: "La Mallette du Consultant contient déjà tout le référentiel du coach : le <a href=\"https://wefiitcom.sharepoint.com/sites/WeFiiT/Documents%20partages/Forms/AllItems.aspx?id=%2Fsites%2FWeFiiT%2FDocuments%20partages%2FG%C3%A9n%C3%A9ral%2F4%20%2D%20La%20Mallette%20du%20Consultant%2F3%20%2D%20Mes%20soutenances%20clients%2F%5BGUIDE%5D%20Prepa%20soutenance%2Epdf&parent=%2Fsites%2FWeFiiT%2FDocuments%20partages%2FG%C3%A9n%C3%A9ral%2F4%20%2D%20La%20Mallette%20du%20Consultant%2F3%20%2D%20Mes%20soutenances%20clients&p=true&ga=1\" target=\"_blank\" rel=\"noopener\">Guide Prépa Soutenance</a>, les <a href=\"https://wefiitcom.sharepoint.com/sites/WeFiiT/Documents%20partages/Forms/AllItems.aspx?id=%2Fsites%2FWeFiiT%2FDocuments%20partages%2FG%C3%A9n%C3%A9ral%2F4%20%2D%20La%20Mallette%20du%20Consultant%2F3%20%2D%20Mes%20soutenances%20clients%2FQuestionsTypeSoutenance%2Epdf&parent=%2Fsites%2FWeFiiT%2FDocuments%20partages%2FG%C3%A9n%C3%A9ral%2F4%20%2D%20La%20Mallette%20du%20Consultant%2F3%20%2D%20Mes%20soutenances%20clients&p=true&ga=1\" target=\"_blank\" rel=\"noopener\">Questions Types Soutenance</a> et le <a href=\"https://wefiitcom.sharepoint.com/:p:/s/WeFiiT/EVNaprni0o1Khkpw1qK2mF4BSq69BPxNBjrDm9HNEoil_g?e=GzZcF3\" target=\"_blank\" rel=\"noopener\">Guide Construire son Analyse Produit</a>.",
      piste: "Une vraie discussion orale : on parle à voix haute, l'IA joue le client, écoute le pitch et répond en direct.",
      prompt: "On construit un coach IA d'entraînement à la soutenance : on lui parle à voix haute, il joue le client sceptique, envoie des questions pièges et débriefe sur le fond, la posture et le storytelling. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : le déroulé d'une session et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "☕",
    titre: "We.Café",
    constat: "Chez WeFiiT, on se rencontre déjà dans nos cercles : les missions, les Tribes, la vie d'entreprise. Mais à 120 WeFiiTers, ça fait 119 rencontres possibles par personne.",
    probleme: "Comment provoquer, chaque semaine, de nouvelles rencontres entre WeFiiTers ?",
    build: "Une app qui matche deux WeFiiTers qu'on n'aurait jamais croisés autrement, une autre Tribe, un autre client, un autre étage, pour partager un café.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Tous les WeFiiTers, et particulièrement les nouveaux arrivants, qui veulent rencontrer des collègues et créer du lien au-delà des projets.",
      ressources: "Pour alimenter le matching : le <a href=\"https://wefiitcom-my.sharepoint.com/:x:/g/personal/yamila_dary_wefiit_com/IQAjQ79xtSjuTLHftdFjMG9TAeetqLxJPse0r32Z42H_D0c?e=sw2woO\" target=\"_blank\" rel=\"noopener\">fichier Excel avec la liste des WeFiiTers</a>, les <a href=\"https://wefiitcom.sharepoint.com/:f:/s/WeFiiT/IgC3sroBnjrzRZ0RZHz_YOteARFQVo9A1IVgZ0XjJVf2ecU?e=qqLV9h\" target=\"_blank\" rel=\"noopener\">bios des WeFiiTers</a> et les <a href=\"https://wefiitcom.sharepoint.com/:f:/s/WeFiiT/IgD0f146WCTTQ5m02CB0TkWkAdF9wgHpPILX7Fqmpf_XcCI?e=LStteb\" target=\"_blank\" rel=\"noopener\">photos Teams des WeFiiTers</a>.",
      piste: "Une app de matching : deux WeFiiTers qui ne se croisent pas (autre Tribe, autre client, autre étage) sont mis en relation pour partager un café, selon leurs envies et leurs disponibilités.",
      prompt: "On construit une app de matching We.Café : elle met en relation deux WeFiiTers qui ne se croisent pas (autre Tribe, autre client, autre étage) pour partager un café, un thé ou un matcha, selon leurs envies et leurs disponibilités. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : le modèle de données (profil, Tribe, client, dispo, match) et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "🖼️",
    titre: "Brief Augmenté",
    constat: "Notre brief consultant sert à la fois notre montée en valeur et notre différenciation IA. Mais aujourd'hui, il fait 7 à 10 pages avec un template générique qui ne porte ni l'un ni l'autre.",
    probleme: "Comment faire de notre brief un vrai levier de notre montée en valeur et de notre différenciation IA ?",
    build: "Un template plus compact, intégrant nos compétences IA, avec des déclinaisons personnalisées par compétence.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les consultants qui préparent leur brief avant une mission ou un entretien client, et les PADs qui les présentent aux clients.",
      piste: "Un générateur de brief avec score de lisibilité : l'IA rédige le brief et un indicateur pousse à le garder court et percutant.",
      prompt: "On construit une plateforme pour créer le brief d'un consultant WeFiiT : l'IA aide à rédiger, met en avant l'impact et les compétences IA, avec un design épuré et un score de lisibilité qui pousse à rester court. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : les champs du brief et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  }
];

/* Le capitaine est au même niveau que l'équipage : il apparaît en premier
   dans la liste, signalé seulement par un petit emoji. */
const EQUIPES = [
  { cap: "Yamila DARY", membres: ["Louis DODEIGNE", "Rohat GEZER", "Jeremy HADDAD", "Lucie BIONDI"], salle: "Bureaux WeFiiT", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-01" },
  { cap: "Hugo DE LA RUELLE", membres: ["François JACQUEMIN", "Nicolas DENIEUL", "Helena N'GOLLO", "Louis DALLEAU"], salle: "Bureaux WeFiiT", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-02" },
  { cap: "William FABRIS", membres: ["Noemie GIRAUDEAU", "Océane LEFEVRE", "Anne VELENOVSKY", "Hermine DU VIGNAUX"], salle: "Bureaux WeFiiT", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-03" },
  { cap: "Pauline PELLETIER", membres: ["Amandine ROY", "Alexandre NGUYEN", "Maria NADIFI", "Antoine PIATKOWSKI"], salle: "Bureaux WeFiiT", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-04" },
  { cap: "Chloé DURAND", membres: ["Khadija KARRAY", "Jade SYCHAREUN", "Mathieu LE FAUCHEUR"], salle: "Bureaux WeFiiT", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-05" },
  { cap: "Chris SARKIS", membres: ["Pierre LABLACHE-COMBIER", "Tharagan SRIKANTHASAMY", "Mathilde PERRIN"], salle: "Salle du WeFiiT Live", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-06" },
  { cap: "Ronan BEBIN", membres: ["Baptiste LECACHEUR", "Antoine LE HIR", "Joséphine PILLET", "Victor GODY"], salle: "Salle du WeFiiT Live", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-07" },
  { cap: "Felix NAVARRE", membres: ["Anne-Lise PRICAZ", "Julia MATHURIN", "Pablo NEMEJANSKI"], salle: "Salle du WeFiiT Live", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-08" },
  { cap: "Rodolphe LE BLEVENEC", membres: ["Olivier LEVY", "Inès LACARRIERE", "Léane GOURCY"], salle: "Salle du WeFiiT Live", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-09" },
  { cap: "Thomas VOISIN", membres: ["Antoine BRIQUET", "Matthis HUET", "Léa CRINON"], salle: "Salle Passerelle", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-10" },
  { cap: "Nils VERVAET", membres: ["Hugues DUPROZ", "Alina KSENDZENKO", "Soline BIANQUIS"], salle: "Salle Passerelle", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-11" },
  { cap: "Axel ALIZIER", membres: ["Rayan RAHMANI-MERAITS", "Thomas BIGOT", "Chloé MARTIN"], salle: "Petite salle WeFiiT", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-12" },
  { cap: "Erwan SAVOYEN", membres: ["Cédric LOZAC'H", "Grégoire DELÉVACQUE", "Leontine BERTHOME"], salle: "Espaces communs 6ème", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-13" },
  { cap: "Sarah THIEBAUT", membres: ["Christopher WOODS", "Mélanie HENG", "Gaëlle BRICAUD", "Amaury SERVIN"], salle: "Espaces communs 6ème", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-14" },
  { cap: "Pauline AGACHE", membres: ["Marwan ZIDANE", "Alice GAILLARD", "Hamza BITER", "Iris HEDOUIN"], salle: "Espaces communs 6ème", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-15" },
  { cap: "Delphine RINGUENET", membres: ["Pierre CHAMOREAU", "Morgane KRAU", "François Xavier CAPELLE"], salle: "Salle Jet, 3ème étage", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-16" },
  { cap: "Emma COLOMBAT", membres: ["Alexis ROBERT", "Alice MAUZ", "Paul VALTON"], salle: "Salle Moonraker, 2ème étage", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-17" },
  { cap: "Alice GUERIN", membres: ["Adrien SUBITTE", "Agathe LECOCQ", "Martin BOUZID", "Pauline FAUVEL"], salle: "Salle Viper Mark, 7ème étage", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-18" },
  { cap: "Alice REVEREND", membres: ["Pauline ROBIAL", "Enzo GRANO", "Camille CLAUDE", "Thomas LAUDET"], salle: "Salle Hyperion, 7ème étage", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-19" },
  { cap: "Alain PERRONE", membres: ["Mailis BONHOMMÉ", "Gabriel DIAS COSTA", "Adel BENDJEBBAR"], salle: "Salle Orbit, 3ème étage", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-20" },
  { cap: "Baptiste CLENET", membres: ["Victor NIORE", "Syrine BOURICHA", "Nathan THOMAS"], salle: "Salle Galactica, 7ème étage", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-21" },
  { cap: "Adrien-Ismaël HENRIQUES", membres: ["Laura CABANILLAS NAVARRO", "Axelle TORTAI", "Pauline MASSON"], salle: "Salle Prometheus, 6ème étage", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-22" },
  { cap: "Corentin BARCZYK", membres: ["Marius ROUSSEL", "Anne-Claire GAILLARD", "Elise PEREZ Y LANDAZURI"], salle: "Salle Eltrium, 6ème étage", github: "https://github.com/Product-Builder-Show/WeFiiT-Team-23" }
];

const RAISONS = [
  { emoji: "🚀", titre: "Builder ensemble avec l'IA", texte: "Learning by doing : accélérer notre montée en compétences collective sur le vibe coding." },
  { emoji: "🛠️", titre: "Créer de la valeur pour WeFiiT", texte: "Builder à partir de use cases à valeur pour WeFiiT et les WeFiiTers." },
  { emoji: "🤝", titre: "Créer du lien", texte: "Émulation, cohésion et partage entre WeFiiTers autour de l'apprentissage de l'IA." }
];

/* La toolbox : ce avec quoi chaque équipe part au top départ. */
const TOOLBOX = [
  { emoji: "🔑", titre: "Un compte Claude par équipe", texte: "Chaque capitaine d'équipe a un accès SSO à un compte Claude. Et chaque équipe aura son propre écran pour vibe coder ensemble." },
  { emoji: "🎨", titre: "Le Design System WeFiiT", texte: "Couleurs, typos, composants : votre app aura les couleurs de WeFiiT dès la première itération." },
  { emoji: "📦", titre: "Des inputs et des connecteurs sur étagère", texte: "Des accélérateurs pour chaque projet et un connecteur SharePoint, déjà branché dans Claude." }
];

const OUTILS = [
  { nom: "Claude", texte: "Votre copilote IA : générez, codez, brainstormez, itérez." },
  { nom: "GitHub", texte: "Hébergez et versionnez votre code, collaborez à plusieurs." },
  { nom: "Supabase", texte: "Base de données et backend prêts à l'emploi pour donner vie à votre app." }
];

const FAQS = [
  { q: "Combien de temps dure le hackathon ?", a: "2 heures chrono. [à compléter]" },
  { q: "Faut-il savoir coder ?", a: "[à compléter]" },
  { q: "Comment se déroule la restitution ?", a: "[à compléter]" },
  { q: "Quels sont les critères du jury ?", a: "[à compléter]" }
];

/* 3 numéros à joindre en cas de blocage (technique, tokens, salle). */
const HOTLINE = [
  "06 42 72 78 31",
  "06 76 73 94 54",
  "07 88 60 93 20"
];
