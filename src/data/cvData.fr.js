const cvData = {
  name: "Manyim MA (Edouard) MAKON",
  title: "Etudiant en génie logiciel BAC+5| Développeur React/Java ",
  image: "images/profile.png",
  summary: [
    "Je me considère avant tout comme un jeune développeur fullstack React/Java passionné.",
    "Je vise à approfondir mes compétences en développement de logiciels, tout en m'impliquant activement dans les processus décisionnels.",
  ],
  contact: {
    email: "nmaknyim@gmail.com",
    phone: "+33782306485",
    location: "Velizy, France",
    github: "https://github.com/EdMkn/",
    linkedin: "https://www.linkedin.com/in/mmmakon/",
  },

  experience: [
    {
      role: "Stage développeur React/NextJS",
      company: "Amexio",
      period: "mai 2024 - novembre 2024",
      description: [
        "Intégré à l’ équipe chargée de concevoir et développer les solutions d’intégration GED pour les clients.",
        "Tâches :",
        "- Refactorisation du code React d’une application (IHM) dans le but d’améliorer la lisibilité et réduire la dette technique",
        "- Optimisation de la phase de packaging des plugins ICN (via Maven), afin d'accélérer les déploiements et d’en simplifier la maintenance",
        "- Contribution à l’élaboration et à la diffusion d’une formation sur l’ automatisation des tests fonctionnels, en utilisant Gherkin et Cucumber.",
      ],
      keywords: [
        "React",
        "NextJS",
        "GED",
        "Maven",
        "Gherkin",
        "Cucumber",
        "Refactoring",
      ],
    },
    {
      role: "Stage Développeur Javascript",
      company: "Carrefour",
      period: "mai 2022 - aout 2022",
      description: [
        "Intégré à l’ équipe Digital WorkPlace, plus précisément à l’unité dédiée au déploiement et au support des ordinateurs présents sur le site",
        "Tâches :",
        "- Développement de scripts en JavaScript pour automatiser le traitement des données provenant de BigQuery",
        "- Conception de Dashboard Data Studio afin d’optimiser et tracker le temps d’utilisation des postes de travail en fonction du site et de la date",
        "- Développement de scripts afin d’automatiser la planification de réunions mensuelles avec des partenaires",
        "- Participation à des réunions hebdomadaires avec d’autres unités",
        "- Implémentation d’un endpoint dédié dans le cadre d’un projet de contrôle à distance.",
      ],
      keywords: [
        "JavaScript",
        "BigQuery",
        "Data Studio",
        "Automation",
        "Endpoint",
      ],
    },
    {
      role: "Chef de projet technique junior",
      company: "Particulier pour le compte d'une association",
      period: "octobre 2022 - fevrier 2023",
      images: ["images/association-1.png", "images/association-2.png"],
      description: [
        "Projet de réalisation d’un Proof of Concept (POC) d’une application mobile de vente en équipe, encadré par l’école.",
        "Objectif : livrer une application mobile avec 2 à 3 services fonctionnels et un backend fiable (Flutter).",
        "Mes contributions principales :",
        "- Planification des réunions avec l’équipe et les commanditaires (objectifs, cibles, risques).",
        "- Répartition des tâches entre les membres.",
        "- Conception des wireframes et maquettes front.",
        "- Proposition d’architecture backend : service externe vs framework.",
        "- Développement du backend sur Flutter.",
        "Projet livré avec succès malgré des difficultés techniques initiales.",
      ],
      keywords: ["Flutter", "Backend", "Wireframes", "Planning", "POC"],
    },
    {
      role: "Développeur frontend Angular/Ionic",
      company: "Association partenaire via l'école",
      period: "octobre 2021 - mars 2022",
      images: [],
      description: [
        "Projet de refonte d’une plateforme web de gestion d’évènements pour une association.",
        "Premier contact avec Angular-Ionic, technologie apprise en binôme durant le projet.",
        "Mes contributions principales :",
        "- Participation aux réunions avec le product owner pour définir les besoins et suivre l’avancement.",
        "- Rédaction de comptes-rendus de réunions.",
        "- Développement de services d’inscription / désinscription à des évènements.",
        "- Développement des modules d’ajout et de modification d’évènements.",
        "Projet livré fonctionnel selon le cahier des charges, à l’exception de la connexion Facebook.",
      ],
      keywords: ["Angular", "Ionic", "Frontend", "Meetings"],
    },
  ],
  personalProjects: [
    {
      name: "Fruit Management App",
      link: ["https://github.com/EdMkn/fruit-register-list"],
      duration: "1 jour",
      description: [
        "La raison pour laquelle j'ai réalisé ce projet était pour me familiariser avec FastAPI, un framework web Python moderne et rapide (haute performance) pour construire des API.",
        "Il s'agit d'une simple application web qui permet aux utilisateurs d'enregistrer des fruits. Le backend est construit avec FastAPI et fournit des endpoints pour ajouter et lister des fruits. Le frontend est construit avec React et interagit avec le backend pour afficher et enregistrer les fruits saisis par l'utilisateur.",
        "Un ficher docker-compose est inclus au projet afin de simuler l'architecture micro-services avec le frontend et le backend séparé",
      ],
      images: ["images/fruits-list-1.png", "images/fruits-list-2.png"],
      keywords: ["FastAPI", "React", "Docker", "Microservices"],
    },
    {
      name: "Projet_Calcul",
      link: ["https://github.com/EdMkn/Projet_Calcul"],
      duration: "2 semaines",
      description: [
        "Application web Java​",
        "Quizz de questions mathématiques (Calcul mental)",
        "Fait avec Eclipse et utilise TomCat comme serveur​",
        "Configuration manuelle de la base de données et des tables​",
      ],
      images: ["images/pjt_calcul-1.png", "images/pjt_calcul-2.png"],
      keywords: ["Java", "Web", "Tomcat", "Database"],
    },
    {
      name: "BlackJack",
      link: ["https://github.com/EdMkn/BlackJack"],
      duration: "3 semaines",
      description: [
        "Application web Java​",
        "Programme simulant le jeu de Black Jack",
        "Implémentation de packages, de classes parentes et filles",
        "Utilisation de modèles, de vues et de contrôleurs",
      ],
      images: ["images/blackjack-1.png", "images/blackjack-2.png"],
      keywords: ["Java", "MVC", "Game"],
    },
    {
      name: "Realisation d’un site de destination ",
      link: ["https://github.com/EdMkn/travel_agency"],
      duration: "3 semaines",
      description: [
        "Dans ce projet fait sur Java 17, ma contribution a été dans la réalisation de la \
        partie backend d'une application web, qui renvoie à l'utilisateur une liste de \
        destinations ayant un écart déterminé de températures avec le pays de départ",
        "Tâches:",
        "- Développement d'une API REST pour gérer les opérations liant les voyageurs, \
        les pays de destinations, et les températures associées à ceux-ci",
        "- Implémentation de la logique métier avec Spring Boot.",
      ],
      images: ["images/travel_agency-1.png", "images/travel_agency-2.png"],
      keywords: ["Java", "Spring Boot", "API REST"],
    },
    {
      name: "Projets realisés en React ",
      link: ["https://github.com/EdMkn/little-projects"],
      duration: "2 semaines",
      description: [
        "Applications React réalisés dans le but de mieux se familiariser avec le framework React",
        "Projets:",
        "- WeatherApp: permet d'afficher les informations météo de la région",
        "- TodoApp: permet de réaliser des tâches d'ajout, de modification et de suppression de tâches",
        "Realisation de composants React, manipulation de Hooks useEffect, useState",
        "Réalisation d'API-REST",
      ],
      images: ["images/lt_projects-1.png", "images/lt_projects-2.png"],
      keywords: ["React", "API REST", "WeatherApp", "TodoApp"],
    },
    {
      name: "Travaux pratiques sur Docker ",
      link: [
        "https://github.com/EdMkn/TP-Docker",
        "https://github.com/EdMkn/Simple-Docker-Projects",
      ],
      duration: "4 jours",
      description: [
        "Travaux pratiques sur la dockerisation d'applications web",
        "- Mise en Place d'un Dockerfile",
        "- Réalisation d'un docker-compose",
        "Réalisation d'un registre privé",
      ],
      images: [],
      keywords: ["Docker", "DevOps"],
    },
    {
      name: "WebScraper ",
      link: [
        "https://github.com/EdMkn/WebScraper",
      ],
      duration: "1 jour",
      description: [
        "Un projet en C# pour scrapper les données de produits depuis un site e-commerce (ex: books.toscrape.com), \
        paginer les résultats, les sauvegarder dans une base de données SQLite, et les exporter en JSON",
      ],
      images: ["images/scraper-1.png", "images/scraper-2.png"],
      keywords: ["C#", "WebScraper", ".NET 7+", "Microsoft.Extensions.DependencyInjection"],
    },
    {
      name: "BookApp",
      link: [
        "https://github.com/EdMkn/simple-console-apps",
      ],
      duration: "2 jours",
      description: [
        "Une application web de gestion de livres qui combine :",
        "- Un frontend MVC avec Razor Views",
        "- Une API RESTful pour interagir avec les données",
        "- Swagger pour tester les endpoints",
        "- Stockage en mémoire (pour l’instant)",
      ],
      images: ["images/book-app-1.png", "images/book-app-2.png", "images/book-app-3.png", "images/book-app-4.png", "images/book-app-5.png"],
      keywords: ["C#", "Book Manager", ".NET 8", "Razor Pages", "Swagger", "ASP.NET Core MVC", "ApiController"],
    },
    {
      name: "ImageViewerMVC",
      link: [
        "https://github.com/EdMkn/simple-console-apps",
      ],
      duration: "2 jours",
      description: [
        "Une petite application de bureau écrite en C# avec \
        GTK# pour Linux, organisée selon le modèle MVC.",
        "Elle permet de parcourir les images d’un dossier \
        local (formats pris en charge : `.jpg`, `.png`, `.bmp`).",
      ],
      images: ["images/image-viewer-1.png", "images/image-viewer-2.png", "images/image-viewer-3.png"],
      keywords: ["C#", "Image Viewer", ".NET 8", "Mono", "GTK# 3"],
    },
    {
      name: "TodoMobileApp",
      link: [
        "https://github.com/EdMkn/TodoSyncApp",
      ],
      duration: "1 jour",
      description: [
        "Une application mobile de gestion de tâches avec une interface utilisateur moderne et une logique de gestion des tâches robuste.",
        "Elle permet de créer, modifier et supprimer des tâches, et de les synchroniser avec un serveur.",
        "Elle est développée sur Android, et est écrite en Kotlin et utilise Room pour stocker les données.",
      ],
      images: ["images/todo_mobile-1.png"],
      keywords: ["Kotlin", "Android", "MVVM", "RecyclerView", "TodoSyncApp", "Room", "Retrofit"],
    },
    {
      name: "WeatherMobileApp",
      link: [
        "https://github.com/EdMkn/My_Weather_App",
      ],
      duration: "2 jours",
      description: [
        "Une application météo Android avec prévisions en temps réel utilisant l'API OpenWeatherMap.",
        "Elle permet d'afficher les informations météo de la région.",
        "Elle permet également de consulter les prévisions météo pour les 5 prochains jours.",
      ],
      images: ["images/weather_app-1.png"],
      keywords: ["Kotlin", "Android", "MVVM", "GSON", "WeatherApp", "Coroutines", "Retrofit", "viewBinding", "PlayServices Location"],
    },
    {
      name: "QR Code Mobile App",
      link: [
        "https://github.com/EdMkn/QRScanner",
      ],
      duration: "3 jours",
      description: [
        "Une application mobile de gestion de QR codes.",
        "Elle permet de scanner des QR codes et de les stocker dans une base de données SQLite.",
        "Elle permet également de générer des QR codes.",
      ],
      images: ["images/qr_scan-1.png", "images/qr_scan-2.png", "images/qr_scan-3.png", "images/qr_scan-4.png", "images/qr_scan-5.png"],
      keywords: ["Kotlin", "CameraX", "RecyclerView", "ML Kit Barcode Scanner", "Zxing"],
    },
  ],
  education: [
    {
      degree: "Ingénieur informatique",
      institution: "ESIEA",
      description:
        "Développement logiciel, architecture applicative, Qualité logiciel, Gestion de projets",
      period: "2020 - 2026",
    },
    {
      degree: "Classes Preparatoires MPSI",
      institution: "Prepavogt - Cameroun",
      description: "Mathématiques, Physiques, Sciences de l'ingénieur",
      period: "2014 - 2016",
    },
  ],
  skills: [
    {
      name: "Concepts Cloud Computing"
    },
    {
      name: "Cloud Digital Leader",
      type: "certification",
      link: "https://www.credly.com/badges/af2cf0d5-a395-4f96-bb03-524f631ae37e"
    },
    {
      name: "Docker"
    },
    {
      name: "JavaScript"
    },
    {
      name: "ReactJS"
    },
    {
      name: "Python"
    },
    {
      name: "Java"
    },
    {
      name: "Flask"
    },
    {
      name: "PostgreSQL"
    },
    {
      name: "MySQL"
    },
  ],
};

export default cvData;
