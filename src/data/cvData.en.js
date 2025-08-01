const cvData = {
  name: "Manyim MA (Edouard) MAKON",
  title: "Software Engineering Student (Master's) | React/Java Developer",
  image: "images/profile.png",
  summary: [
    "I consider myself first and foremost a passionate fullstack React/Java developer.",
    "I aim to deepen my software development skills while actively engaging in decision-making processes.",
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
      role: "React/NextJS Developer Intern",
      company: "Amexio",
      period: "May 2024 - November 2024",
      description: [
        "Part of the team responsible for designing and developing GED integration solutions for clients.",
        "Tasks:",
        "- Refactored the React code of an application (UI) to improve readability and reduce technical debt.",
        "- Optimized the packaging phase of ICN plugins (via Maven) to speed up deployments and simplify maintenance.",
        "- Contributed to the creation and delivery of a training on functional test automation using Gherkin and Cucumber.",
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
      role: "JavaScript Developer Intern",
      company: "Carrefour",
      period: "May 2022 - August 2022",
      description: [
        "Joined the Digital WorkPlace team, specifically the unit dedicated to deployment and support of computers on site.",
        "Tasks:",
        "- Developed JavaScript scripts to automate data processing from BigQuery.",
        "- Designed Data Studio dashboards to optimize and track workstation usage time by site and date.",
        "- Developed scripts to automate the scheduling of monthly meetings with partners.",
        "- Participated in weekly meetings with other units.",
        "- Implemented a dedicated endpoint as part of a remote control project.",
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
      role: "Junior Technical Project Manager",
      company: "Private (for an association)",
      period: "October 2022 - February 2023",
      images: ["images/association-1.png", "images/association-2.png"],
      description: [
        "Project to create a Proof of Concept (POC) for a team sales mobile app, supervised by the school.",
        "Objective: deliver a mobile app with 2 to 3 functional services and a reliable backend (Flutter).",
        "Main contributions:",
        "- Planned meetings with the team and stakeholders (objectives, targets, risks).",
        "- Distributed tasks among members.",
        "- Designed wireframes and front-end mockups.",
        "- Proposed backend architecture: external service vs framework.",
        "- Developed the backend in Flutter.",
        "Project delivered successfully despite initial technical challenges.",
      ],
      keywords: ["Flutter", "Backend", "Wireframes", "Planning", "POC"],
    },
    {
      role: "Frontend Developer Angular/Ionic",
      company: "Partner Association via School",
      period: "October 2021 - March 2022",
      images: [],
      description: [
        "Project to redesign a web event management platform for an association.",
        "First experience with Angular-Ionic, technology learned in pairs during the project.",
        "Main contributions:",
        "- Participated in meetings with the product owner to define requirements and track progress.",
        "- Wrote meeting minutes.",
        "- Developed registration/unregistration services for events.",
        "- Developed modules for adding and editing events.",
        "Project delivered functional according to the specifications, except for Facebook login.",
      ],
      keywords: ["Angular", "Ionic", "Frontend", "Meetings"],
    },
  ],
  personalProjects: [
    {
      name: "Fruit Management App",
      link: ["https://github.com/EdMkn/fruit-register-list"],
      duration: "1 day",
      description: [
        "The reason I created this project was to get familiar with FastAPI, a modern and fast Python web framework for building APIs.",
        "It's a simple web app that allows users to register fruits. The backend is built with FastAPI and provides endpoints to add and list fruits. The frontend is built with React and interacts with the backend to display and register fruits entered by the user.",
        "A docker-compose file is included to simulate a microservices architecture with separate frontend and backend.",
      ],
      images: ["images/fruits-list-1.png", "images/fruits-list-2.png"],
      keywords: ["FastAPI", "React", "Docker", "Microservices"],
    },
    {
      name: "Projet_Calcul",
      link: ["https://github.com/EdMkn/Projet_Calcul"],
      duration: "2 weeks",
      description: [
        "Java web application",
        "Math quiz (mental calculation)",
        "Built with Eclipse and uses TomCat as server",
        "Manual configuration of the database and tables",
      ],
      images: ["images/pjt_calcul-1.png", "images/pjt_calcul-2.png"],
      keywords: ["Java", "Web", "Tomcat", "Database"],
    },
    {
      name: "BlackJack",
      link: ["https://github.com/EdMkn/BlackJack"],
      duration: "3 weeks",
      description: [
        "Java web application",
        "Program simulating the Black Jack game",
        "Implementation of packages, parent and child classes",
        "Use of models, views, and controllers",
      ],
      images: ["images/blackjack-1.png", "images/blackjack-2.png"],
      keywords: ["Java", "MVC", "Game"],
    },
    {
      name: "Travel Destination Website",
      link: ["https://github.com/EdMkn/travel_agency"],
      duration: "3 weeks",
      description: [
        "In this Java 17 project, my contribution was to develop the backend part of a web application, which returns to the user a list of destinations with a specified temperature difference from the departure country.",
        "Tasks:",
        "- Developed a REST API to manage operations linking travelers, destination countries, and their associated temperatures.",
        "- Implemented business logic with Spring Boot.",
      ],
      images: ["images/travel_agency-1.png", "images/travel_agency-2.png"],
      keywords: ["Java", "Spring Boot", "API REST"],
    },
    {
      name: "React Projects",
      link: ["https://github.com/EdMkn/little-projects"],
      duration: "2 weeks",
      description: [
        "React applications made to get more familiar with the React framework",
        "Projects:",
        "- WeatherApp: displays weather information for the region",
        "- TodoApp: allows adding, editing, and deleting tasks",
        "Development of React components, use of useEffect and useState hooks",
        "REST API implementation",
      ],
      images: ["images/lt_projects-1.png", "images/lt_projects-2.png"],
      keywords: ["React", "API REST", "WeatherApp", "TodoApp"],
    },
    {
      name: "Docker Practical Work",
      link: [
        "https://github.com/EdMkn/TP-Docker",
        "https://github.com/EdMkn/Simple-Docker-Projects",
      ],
      duration: "4 days",
      description: [
        "Practical work on dockerizing web applications",
        "- Creating a Dockerfile",
        "- Creating a docker-compose file",
        "Setting up a private registry",
      ],
      images: [],
      keywords: ["Docker", "DevOps"],
    },
    {
      name: "WebScraper ",
      link: [
        "https://github.com/EdMkn/WebScraper",
      ],
      duration: "1 day",
      description: [
        "A C# project to scrape product data from an e-commerce site (e.g. books.toscrape.com), \
        paginate the results, save them in an SQLite database, and export them as JSON.",
      ],
      images: ["images/scraper-1.png", "images/scraper-2.png"],
      keywords: ["C#", "WebScraper", ".NET 7+", "Microsoft.Extensions.DependencyInjection"],
    },
    {
      name: "BookApp",
      link: [
        "https://github.com/EdMkn/simple-console-apps",
      ],
      duration: "2 days",
      description: [
        "A book management web application that combines:",
        "- An MVC frontend with Razor Views",
        "- A RESTful API to interact with data",
        "- Swagger to test endpoints",
        "- In-memory storage (for now)",
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
        "A small desktop application written in C# with \
        GTK# for Linux, organised according to the MVC model.",
        "It lets you browse images in a local \
        folder (supported formats: `.jpg`, `.png`, `.bmp`).",
      ],
      images: ["images/image-viewer-1.png", "images/image-viewer-2.png", "images/image-viewer-3.png"],
      keywords: ["C#", "Image Viewer", ".NET 8", "Mono", "GTK# 3"],
    },
    {
      name: "TodoMobileApp",
      link: [
        "https://github.com/EdMkn/TodoSyncApp",
      ],
      duration: "1 day",
      description: [
        "A mobile app to manage tasks with a modern UI and robust task management logic.",
        "It allows to create, edit and delete tasks, and to synchronize them with a server.",
        "It is developed on Android, and is written in Kotlin and uses Room to store data.",
      ],
      images: ["images/todo_mobile-1.png"],
      keywords: ["Kotlin", "Android", "MVVM", "RecyclerView", "TodoSyncApp", "Room", "Retrofit"],
    },
    {
      name: "WeatherMobileApp",
      link: [
        "https://github.com/EdMkn/My_Weather_App",
      ],
      duration: "2 days",
      description: [
        "A weather app with real-time forecasts using the OpenWeatherMap API.",
        "It allows to display weather information for the region.",
        "It also allows to view weather forecasts for the next 5 days.",
      ],
      images: ["images/weather_app-1.png"],
      keywords: ["Kotlin", "Android", "MVVM", "GSON", "WeatherApp", "Coroutines", "Retrofit", "viewBinding", "PlayServices Location"],
    },
    {
      name: "QR Code Mobile App",
      link: [
        "https://github.com/EdMkn/QRScanner",
      ],
      duration: "3 days",
      description: [
        "A mobile app to manage QR codes.",
        "It allows to scan QR codes and store them in an SQLite database.",
        "It also allows to generate QR codes.",
      ],
      images: ["images/qr_scan-1.png", "images/qr_scan-2.png", "images/qr_scan-3.png", "images/qr_scan-4.png", "images/qr_scan-5.png"],
      keywords: ["Kotlin", "CameraX", "RecyclerView", "ML Kit Barcode Scanner", "Zxing"],
    },
    
  ],
  education: [
    {
      degree: "Computer Engineering",
      institution: "ESIEA",
      description:
        "Software development, application architecture, software quality, project management",
      period: "2020 - 2026",
    },
    {
      degree: "Preparatory Classes for French Grandes Écoles – MPSI track",
      institution: "Prepavogt - Cameroun",
      description: "Mathematics, Physics, and Engineering Sciences",
      period: "2014 - 2016",
    },
  ],
  skills: [
    {
      name: "Cloud Computing Concepts"
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
