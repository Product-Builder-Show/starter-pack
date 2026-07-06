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
    probleme: "Le premier jour chez WeFiiT est souvent une avalanche d'infos difficile à retenir.",
    build: "Un escape game digital où le nouvel arrivant résout des énigmes basées sur la culture, les outils et les valeurs WeFiiT pour « déverrouiller » son accès à l'équipe.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les nouveaux arrivants, pendant leurs premiers jours chez WeFiiT, et les managers ou RH qui les accueillent et veulent une intégration mémorable plutôt qu'une avalanche de slides.",
      piste: "Une chasse au trésor guidée : le nouvel arrivant avance d'énigme en énigme pour découvrir la culture, les outils et l'équipe WeFiiT.",
      prompt: "On construit un escape game digital pour l'onboarding des nouveaux chez WeFiiT : une chasse au trésor où l'arrivant résout des énigmes sur la culture, les outils et les valeurs de l'entreprise pour « déverrouiller » son accès à l'équipe. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : les 3 énigmes clés d'une V1 jouable en 2h et par quoi commencer. J'utilise /plan, je valide, puis on code étape par étape."
    })
  },
  {
    emoji: "🏆",
    titre: "Vitrine des Réalisations",
    probleme: "Les beaux livrables produits en mission restent invisibles en interne, donc peu valorisés lors des évaluations ou des pitchs commerciaux.",
    build: "Une galerie interactive où chacun poste un livrable marquant (anonymisé si besoin), taguée par compétence et secteur, consultable par tous.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les consultants qui veulent valoriser un livrable marquant, et les commerciaux ou managers qui cherchent des références concrètes pour un pitch client.",
      piste: "L'app store des dernières MEP : une galerie où chaque mise en production récente s'affiche comme une app, avec sa vignette, ses tags et son impact.",
      prompt: "On construit une galerie interne des réalisations WeFiiT, façon « app store des dernières MEP » : chaque livrable s'affiche en carte avec vignette, tags (compétence, secteur) et impact, consultable par tous. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : le modèle de données d'une carte et les 3 écrans essentiels d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "🖼️",
    titre: "Brief du consultant",
    probleme: "Le brief est la vitrine du consultant. Aujourd'hui les briefs sont jugés trop longs, avec un design vieilli et sans mise en avant des compétences IA.",
    build: "Une plateforme pour créer ses briefs avec assistance à la rédaction et mise en avant de son impact et de ses compétences IA. Design épuré, à l'image de WeFiiT, où le client comprend le profil du consultant dès la première page.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les consultants qui préparent leur brief avant une mission ou un entretien client, et les PADs qui les présentent aux clients.",
      piste: "Un générateur de brief avec score de lisibilité : l'IA rédige le brief et un indicateur pousse à le garder court et percutant.",
      prompt: "On construit une plateforme pour créer le brief d'un consultant WeFiiT : l'IA aide à rédiger, met en avant l'impact et les compétences IA, avec un design épuré et un score de lisibilité qui pousse à rester court. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : les champs du brief et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "🧰",
    titre: "Toolkit agentique du consultant",
    probleme: "Chacun bricole ses propres agents dans son coin. Résultat : aucune harmonisation, et surtout aucun agent signature WeFiiT qui porte notre positionnement métier.",
    build: "Assemblez la suite d'agents du consultant WeFiiT : définition d'OKR, cadrage de discovery, rédaction de user stories, automatisation de tests. Des agents partagés, reconnaissables, qui témoignent de notre expertise.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Tous les consultants WeFiiT, au quotidien sur leurs missions, qui veulent des agents fiables et partagés plutôt que de bricoler les leurs dans leur coin.",
      piste: "Une galerie d'agents partagés : chaque agent a sa fiche (rôle, quand l'utiliser) et un bouton pour copier son prompt.",
      prompt: "On construit une galerie d'agents partagés pour les consultants WeFiiT (OKR, discovery, user stories, tests) : chaque agent a sa fiche — rôle, quand l'utiliser — et un bouton pour copier son prompt. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : la structure d'une fiche agent et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "🎤",
    titre: "Entraînement Soutenance",
    probleme: "La soutenance reste un moment de stress pour les WeFiiTers, à chaque fois. Un seul remède : la préparation.",
    build: "Un coach IA qui simule la soutenance avant le vrai jury. Il écoute votre pitch, joue le client sceptique, envoie les questions pièges et vous débriefe sur le fond, la posture et le storytelling. Le stress de l'oral, en mode répétable et sans témoin gênant.",
    fiche: Object.assign({}, FICHE_VIDE, {
      utilisateurs: "Les WeFiiTers qui préparent une soutenance ou un pitch important, seuls et à leur rythme, pour répéter et gagner en assurance avant le vrai jury.",
      piste: "Une vraie discussion orale : on parle à voix haute, l'IA joue le jury, écoute le pitch et répond en direct.",
      prompt: "On construit un coach IA d'entraînement à la soutenance : on lui parle à voix haute, il joue le client sceptique, envoie des questions pièges et débriefe sur le fond, la posture et le storytelling. Stack : Claude, GitHub, Supabase. Avant de coder, propose-moi un plan : le déroulé d'une session et les 3 fonctionnalités d'une V1 en 2h. J'utilise /plan, je valide, puis on code."
    })
  },
  {
    emoji: "☕",
    titre: "We.Café",
    probleme: "Plus on est nombreux chez WeFiiT, plus il devient difficile de vraiment se connaître. On travaille côte à côte sans jamais prendre le temps d'un vrai moment ensemble.",
    build: "Une app qui matche deux WeFiiTers pour partager un café, un thé ou un matcha — un moment simple pour se découvrir, échanger et apprendre les uns des autres.",
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
  { cap: "Lucie BIONDI", membres: ["Louis DODEIGNE", "Rohat GEZER", "Jeremy HADDAD", "Yamila DARY"], salle: "Locaux WeFiiT", email: "equipe1@wefiit.com", motdepasse: "1234abcd" },
  { cap: "Hugo DE LA RUELLE", membres: ["François JACQUEMIN", "Nicolas DENIEUL", "Helena N'GOLLO", "Louis DALLEAU"], salle: "Locaux WeFiiT" },
  { cap: "William FABRIS", membres: ["Noemie GIRAUDEAU", "Océane LEFEVRE", "Anne VELENOVSKY", "Hermine DU VIGNAUX"], salle: "Locaux WeFiiT" },
  { cap: "Pauline PELLETIER", membres: ["Amandine ROY", "Alexandre NGUYEN", "Maria NADIFI", "Antoine PIATKOWSKI"], salle: "Locaux WeFiiT" },
  { cap: "Chloé DURAND", membres: ["Khadija KARRAY", "Benjamin GOUESLARD", "Jade SYCHAREUN", "Mathieu LE FAUCHEUR"], salle: "Locaux WeFiiT" },
  { cap: "Chris SARKIS", membres: ["Pierre LABLACHE-COMBIER", "Alexandre CARNEADO", "Tharagan SRIKANTHASAMY", "Pablo NEMEJANSKI"], salle: "Salle du Live, 5ème" },
  { cap: "Ronan BEBIN", membres: ["Baptiste LECACHEUR", "Antoine LE HIR", "Joséphine PILLET", "Victor GODY"], salle: "Salle du Live, 5ème" },
  { cap: "Felix NAVARRE", membres: ["Malha CHEBLAL", "Anne-Lise PRICAZ", "Julia MATHURIN", "Mathilde PERRIN"], salle: "Salle du Live, 5ème" },
  { cap: "Rodolphe LE BLEVENEC", membres: ["Olivier LEVY", "Inès LACARRIERE", "Léane GOURCY"], salle: "Salle du Live, 5ème" },
  { cap: "Thomas VOISIN", membres: ["Antoine BRIQUET", "Matthis HUET", "Léa CRINON"], salle: "Salle Passerelle" },
  { cap: "Nils VERVAET", membres: ["Leontine BERTHOME", "Hugues DUPROZ", "Alina KSENDZENKO", "Soline BIANQUIS"], salle: "Salle Passerelle" },
  { cap: "Enzo GRANO", membres: ["Rayan RAHMANI-MERAITS", "Thomas BIGOT", "Chloé MARTIN"], salle: "Petite salle WeFiiT" },
  { cap: "Erwan SAVOYEN", membres: ["Cédric LOZAC'H", "Grégoire DELÉVACQUE", "Soukaina SBAI"], salle: "Espaces communs 6ème" },
  { cap: "Sarah THIEBAUT", membres: ["Christopher WOODS", "Mélanie HENG", "Gaëlle BRICAUD-NG SUI WA", "Amaury SERVIN"], salle: "Espaces communs 6ème" },
  { cap: "Pauline AGACHE", membres: ["Marwan ZIDANE", "Alice GAILLARD", "Hamza BITER", "Iris HEDOUIN"], salle: "Espaces communs 6ème" },
  { cap: "Delphine RINGUENET", membres: ["Pierre CHAMOREAU", "Marthe ORTOLO", "Morgane KRAU", "François Xavier CAPELLE"], salle: "Salle Jet, 3ème étage" },
  { cap: "Emma COLOMBAT", membres: ["Alexis ROBERT", "Alice MAUZ", "Camille LOPEZ", "Paul VALTON"], salle: "Salle Moonraker, 2ème étage" },
  { cap: "Alice GUERIN", membres: ["Adrien SUBITTE", "Agathe LECOCQ", "Martin BOUZID", "Pauline FAUVEL"], salle: "Salle Viper Mark, 7ème étage" },
  { cap: "Alice REVEREND", membres: ["Pauline ROBIAL", "Axel ALIZIER", "Camille CLAUDE", "Thomas LAUDET"], salle: "Salle Hyperion, 7ème étage" },
  { cap: "Alain PERRONE", membres: ["Mailis BONHOMMÉ", "Gabriel DIAS COSTA", "Adel BENDJEBBAR"], salle: "Salle Orbit, 3ème étage" },
  { cap: "Baptiste CLENET", membres: ["Victor NIORE", "Syrine BOURICHA", "Nathan THOMAS"], salle: "Salle Galactica, 7ème étage" },
  { cap: "Adrien-Ismaël HENRIQUES", membres: ["Laura CABANILLAS NAVARRO", "Axelle TORTAI", "Pauline MASSON"], salle: "Salle Prometheus, 6ème étage" },
  { cap: "Corentin BARCZYK", membres: ["Marius ROUSSEL", "Anne-Claire GAILLARD", "Elise PEREZ Y LANDAZURI"], salle: "Salle Eltrium, 6ème étage" }
];

const RAISONS = [
  { emoji: "🚀", titre: "Montez en compétence sur l'IA", texte: "Apprenez en faisant : créez par vous-mêmes de vrais outils internes. Le learning by doing, grandeur nature." },
  { emoji: "🛠️", titre: "Créez des outils utiles à WeFiiT", texte: "Des livrables réutilisables, à réelle valeur ajoutée pour les tribes de l'entreprise." },
  { emoji: "🤝", titre: "Vivez un moment collectif", texte: "Émulation, cohésion et partage entre WeFiiTers autour de l'apprentissage de l'IA." }
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
