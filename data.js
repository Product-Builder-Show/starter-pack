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
    emoji: "🎲",
    titre: "Escape Game Onboarding",
    constat: "L'onboarding est un jour charnière dans la vie de tout consultant chez WeFiiT, mais aussi une avalanche d'informations à digérer d'un coup.",
    probleme: "Comment aider chaque nouveau WeFiiTer à s'approprier tous les éléments de notre culture WeFiiT suite à son onboarding ?",
    build: "Un escape game où le nouvel arrivant avance d'énigme en énigme pour découvrir la culture, les outils et l'équipe WeFiiT.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les nouveaux arrivants, pendant leurs premiers jours chez WeFiiT, et les managers ou RH qui les accueillent et veulent une intégration mémorable plutôt qu'une avalanche de slides.",
      piste: "Une chasse au trésor guidée : le nouvel arrivant avance d'énigme en énigme pour découvrir la culture, les outils et l'équipe WeFiiT.",
      prompt: "On construit un escape game digital pour l'onboarding des nouveaux chez WeFiiT : une chasse au trésor où l'arrivant résout des énigmes sur la culture, les outils et les valeurs de l'entreprise pour « déverrouiller » son accès à l'équipe. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : les 3 énigmes clés d'une V1 jouable en 2h et par quoi commencer. J'utilise /plan, je valide, puis on code étape par étape."
    })
  },
  {
    emoji: "🎤",
    titre: "Coach Soutenances",
    constat: "La soutenance est le moment de vérité d'une mission : le pitch doit convaincre, et bien s'y préparer demande du temps et plusieurs répétitions.",
    probleme: "Comment s'entraîner sans complexes avant sa prépa soutenance avec un PAD ?",
    build: "Un coach IA vocal qui débriefe le fond et la forme du pitch, avant l'entraînement avec le PAD.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les WeFiiTers qui préparent une soutenance ou un pitch important, seuls et à leur rythme, pour répéter et gagner en assurance avant le vrai jury.",
      piste: "Une vraie discussion orale : on parle à voix haute, l'IA joue le jury, écoute le pitch et répond en direct.",
      prompt: "On construit un coach IA d'entraînement à la soutenance : on lui parle à voix haute, il joue le client sceptique, envoie des questions pièges et débriefe sur le fond, la posture et le storytelling. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : le déroulé d'une session et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "🏆",
    titre: "Vitrine des Réalisations",
    constat: "Chez WeFiiT, on produit de super livrables en mission, un hackathon chez LV il y a quelques jours, la présentation de Pauline sur les agents IA au Tech Data's, mais on n'en garde aucune mémoire collective.",
    probleme: "Comment retrouver et s'inspirer de nos meilleurs livrables produits en mission ?",
    build: "Une vitrine façon Product Hunt, où tous ces livrables prennent vie et s'inspirent les uns les autres.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les consultants qui veulent valoriser un livrable marquant, et les commerciaux ou managers qui cherchent des références concrètes pour un pitch client.",
      piste: "L'app store des dernières MEP : une galerie où chaque mise en production récente s'affiche comme une app, avec sa vignette, ses tags et son impact.",
      prompt: "On construit une galerie interne des réalisations WeFiiT, façon « app store des dernières MEP » : chaque livrable s'affiche en carte avec vignette, tags (compétence, secteur) et impact, consultable par tous. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : le modèle de données d'une carte et les 3 écrans essentiels d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "🧰",
    titre: "Toolkit Agentique",
    constat: "En mission, chaque WeFiiTer brille déjà avec ses propres agents IA : Discovery, Test Utilisateur, User Stories, Tests Automatisés… Mais chacun dans son coin, sans mise en commun ni émulation collective.",
    probleme: "Comment équiper chaque WeFiiTer d'agents IA éprouvés sur le terrain, et harmoniser nos pratiques ?",
    build: "Des agents signature WeFiiT, reconnaissables, alignés sur nos standards de qualité Product Management.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Tous les consultants WeFiiT, au quotidien sur leurs missions, qui veulent des agents fiables et partagés plutôt que de bricoler les leurs dans leur coin.",
      piste: "Une galerie d'agents partagés : chaque agent a sa fiche (rôle, quand l'utiliser) et un bouton pour copier son prompt.",
      prompt: "On construit une galerie d'agents partagés pour les consultants WeFiiT (OKR, discovery, user stories, tests) : chaque agent a sa fiche (rôle, quand l'utiliser) et un bouton pour copier son prompt. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : la structure d'une fiche agent et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "🖼️",
    titre: "Brief Augmenté",
    constat: "Notre brief consultant sert à la fois notre montée en valeur et notre différenciation IA — mais aujourd'hui il fait 7 à 10 pages avec un template générique qui ne porte ni l'un ni l'autre.",
    probleme: "Comment faire de notre brief un vrai levier de notre montée en valeur et de notre différenciation IA ?",
    build: "Un template plus compact, intégrant nos compétences IA, avec des déclinaisons personnalisées par compétence.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les consultants qui préparent leur brief avant une mission ou un entretien client, et les PADs qui les présentent aux clients.",
      piste: "Un générateur de brief avec score de lisibilité : l'IA rédige le brief et un indicateur pousse à le garder court et percutant.",
      prompt: "On construit une plateforme pour créer le brief d'un consultant WeFiiT : l'IA aide à rédiger, met en avant l'impact et les compétences IA, avec un design épuré et un score de lisibilité qui pousse à rester court. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : les champs du brief et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "☕",
    titre: "We.Café",
    constat: "WeFiiT grandit sans grossir : 120 WeFiiTers aujourd'hui, avec plein d'occasions de rencontrer de nouvelles personnes qu'on ne saisit pas encore.",
    probleme: "Comment provoquer, chaque semaine, une rencontre qu'on n'aurait jamais eue autrement : un autre client, une autre promotion, une autre Tribe ?",
    build: "Une app qui matche deux WeFiiTers qu'on n'aurait jamais croisés autrement, une autre Tribe, un autre client, un autre étage, pour partager un café.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Tous les WeFiiTers, et particulièrement les nouveaux arrivants, qui veulent rencontrer des collègues et créer du lien au-delà des projets.",
      piste: "Une app de matching : deux WeFiiTers sont mis en relation pour partager un café, selon leurs envies et leurs disponibilités.",
      prompt: "On construit une app de matching We.Café : elle met en relation deux WeFiiTers pour partager un café, un thé ou un matcha, selon leurs envies et leurs disponibilités. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : le modèle de données (profil, dispo, match) et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
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
