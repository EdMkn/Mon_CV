const cvData = {
  name: "Manyim MA (Edouard) MAKON",
  title: "Etudiant en génie logiciel BAC+5| Développeur React/Java ",
  summary:[
    "Je me considère avant tout comme un jeune développeur fullstack React/Java passionné.",
    "Je souhaite dans le cadre d' un stage de fin d'études de 6 mois approfondir mes compétences en développement de logiciels, tout en m'impliquant activement dans les processus décisionnels."],
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
    },
    {
      role: "Chef de projet technique junior",
      company: "Particulier pour le compte d'une association",
      period: "octobre 2022 - fevrier 2023",
      images: [
        "images/association-1.png",
        "images/association-2.png"
      ],
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
    },
    {
      role: "Développeur frontend Angular/Ionic",
      company: "Association partenaire via l'école",
      period: "octobre 2021 - mars 2022",
      images: [
      ],
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
    },
  ],
  personalProjects: [
    {
      name: "Fruit Management App",
      link: ["https://github.com/EdMkn/fruit-register-list"],
      duration: "1 heure",
      description: [
        "La raison pour laquelle j'ai réalisé ce projet était pour me familiariser avec FastAPI, un framework web Python moderne et rapide (haute performance) pour construire des API.",
        "Il s'agit d'une simple application web qui permet aux utilisateurs d'enregistrer des fruits. Le backend est construit avec FastAPI et fournit des endpoints pour ajouter et lister des fruits. Le frontend est construit avec React et interagit avec le backend pour afficher et enregistrer les fruits saisis par l'utilisateur.",
        "Un ficher docker-compose est inclus au projet afin de simuler l'architecture micro-services avec le frontend et le backend séparé"
      ],
      images: [
        "images/fruits-list-1.png",
        "images/fruits-list-2.png",
      ],
    },
    {
      name: "Projet_Calcul",
      link: ["https://github.com/EdMkn/Projet_Calcul"],
      duration: "2 semaines",
      description: [
        "Application web Java​",
        "Quizz de questions mathématiques (Calcul mental)",
        "Fait avec Eclipse et utilise TomCat comme serveur​",
        "Configuration manuelle de la base de données et des tables​"
      ],
      images: [
        "images/pjt_calcul-1.png",
        "images/pjt_calcul-2.png",
      ],
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
      images: [
        "images/blackjack-1.png",
        "images/blackjack-2.png",
      ],
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
        "- Implémentation de la logique métier avec Spring Boot."
      ],
      images: [
        "images/travel_agency-1.png",
        "images/travel_agency-2.png",
      ],
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
        "Réalisation d'API-REST"
      ],
      images: [
        "images/lt_projects-1.png",
        "images/lt_projects-2.png",
      ],
    },
    {
      name: "Travaux pratiques sur Docker ",
      link: [
        "https://github.com/EdMkn/TP-Docker",
        "https://github.com/EdMkn/Simple-Docker-Projects"
      ],
      duration: "4 jours",
      description: [
        "Travaux pratiques sur la dockerisation d'applications web",
        "- Mise en Place d'un Dockerfile",
        "- Réalisation d'un docker-compose",
        "Réalisation d'un registre privé", 
      ],
      images: [
      ],
    },

  ],
  education: [
    {
      degree: "Ingénieur informatique",
      institution: "ESIEA",
      description: "Développement logiciel, architecture applicative, Qualité logiciel, Gestion de projets",
      period: "2020 - 2026",
    },
  ],
  skills: [
    "Concepts Cloud Computing",
    "Cloud Digital Leader ",
    "Docker",
    "JavaScript",
    "ReactJS",
    "Python",
    "Java",
    "Flask",
    "PostGreSQL",
    "MySQL",
  ],
};

export default cvData;
