/**
 * PORTFOLIO DATA CONFIGURATION
 * Single Source of Truth for all portfolio content.
 * Images and PDFs are imported as Vite asset modules for optimal bundling.
 */

import photoImg from '../assets/img/Photo.jpeg';
import helmetImg from '../assets/img/close-up-motorcycle-with-helmet.jpg';
import cartImg from '../assets/img/box-market-electronic-ordering-shop-basket.jpg';
import houseImg from '../assets/img/10099.jpg';
import calcImg from '../assets/img/recha-oktaviani-h2aDKwigQeA-unsplash.jpg';
import resumePdf from '../assets/cv/Junaid_Pathan.pdf';

export const portfolioData = {
  // Personal & Brand Information
  personal: {
    name: "Junaid Pathan",
    firstName: "Junaid",
    monogram: "JP",
    brandDomain: "Junaid.dev",
    role: "Full Stack Developer & Software Engineer",
    statusText: "Available for Full-time Roles & Projects",
    location: "Pune, Maharashtra, India",
    email: "junaidp2705@gmail.com",
    phone: "+91 7057735633",
    resumeUrl: resumePdf,
    photoUrl: photoImg,
    tagline: "I build reliable backend architectures in Java and craft clean, responsive, and thoughtfully designed web interfaces with modern frontend technologies.",
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/Junaid2705",
        ariaLabel: "GitHub Profile",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/junaid-pathan-579aa0267",
        ariaLabel: "LinkedIn Profile",
      },
      {
        platform: "Email",
        url: "mailto:junaidp2705@gmail.com",
        ariaLabel: "Direct Email",
      },
    ],
  },

  // Primary Navigation
  navigation: [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],

  // About Me Section Data
  about: {
    sectionTag: "About Me",
    title: "Driven by clean code & continuous learning",
    paragraphs: [
      "I am a software engineer with a strong foundation in Computer Science and Engineering. My focus lies in building dependable web solutions, designing structured object-oriented architectures with Core Java, and crafting clean, accessible user interfaces with JavaScript, modern React, HTML5, and CSS.",
      "I enjoy understanding problems from first principles—whether that means designing an intuitive database schema in MySQL, optimizing data structures, or integrating computer vision models like YOLOv8 into practical applications. I value readability, continuous learning, and thoughtful team collaboration."
    ],
    metrics: [
      { num: "B.Tech", label: "Computer Science & Engg" },
      { num: "4+", label: "Key Engineered Projects" },
      { num: "Core", label: "Java & Modern Web Stack" },
    ],
    quickFacts: [
      { label: "Location", value: "Pune, Maharashtra, India", isHighlight: false },
      { label: "Degree", value: "B.Tech in CSE (CGPA: 7.20)", isHighlight: false },
      { label: "Primary Stack", value: "Java, MySQL, React", isHighlight: false },
      { label: "Availability", value: "Immediate / Open", isHighlight: true },
      { label: "Languages", value: "English, Hindi, Marathi", isHighlight: false },
    ],
  },

  // Technical Skills (Pure skill names, no artificial proficiency levels)
  skills: {
    sectionTag: "Technical Toolkit",
    title: "Skills & Technologies",
    subtitle: "A curated overview of the languages, frameworks, and developer tools I work with.",
    categories: [
      {
        id: "frontend",
        title: "Frontend Development",
        subtitle: "Designing responsive, accessible, and intuitive interfaces",
        iconType: "fe",
        skills: [
          "React.js",
          "JavaScript (ES6+)",
          "HTML5 / Semantic Web",
          "CSS3 / Flexbox & Grid",
          "Bootstrap 5",
          "Responsive UI/UX",
          "REST API Integration",
          "DOM Manipulation",
        ],
      },
      {
        id: "backend",
        title: "Backend & Databases",
        subtitle: "Architecting robust systems and data access pipelines",
        iconType: "be",
        skills: [
          "Core Java",
          "Object-Oriented Programming (OOP)",
          "MySQL",
          "JDBC",
          "Relational Database Design",
          "SQL Query Optimization",
          "Maven",
          "MVC Architecture",
        ],
      },
      {
        id: "tools",
        title: "Tools, DevOps & ML",
        subtitle: "Version control, developer tooling, and applied intelligence",
        iconType: "tools",
        skills: [
          "Git & GitHub",
          "Python",
          "YOLOv8 Computer Vision",
          "VS Code",
          "IntelliJ IDEA / Eclipse",
          "Log4j",
          "Chrome DevTools",
          "Command Line / Bash",
        ],
      },
    ],
  },

  // Projects Showcase
  projects: {
    sectionTag: "Featured Work",
    title: "Projects",
    subtitle: "Selected projects highlighting backend logic, machine learning integration, and clean frontend engineering.",
    categories: ["All", "Computer Vision", "Enterprise Java", "Machine Learning", "Frontend"],
    items: [
      {
        id: "helmet-detection",
        title: "Automatic Helmet Detection System",
        category: "Computer Vision",
        categoryTag: "Computer Vision / Deep Learning",
        description: "Engineered a real-time computer vision system using YOLOv8 trained to detect motorcyclists and classify helmet compliance in streaming video feeds, aimed at bolstering road safety and automated traffic rule monitoring.",
        image: helmetImg,
        techStack: ["Python", "YOLOv8", "OpenCV", "Google Colab"],
        links: {
          code: "https://drive.google.com/drive/folders/1GmFEbPY7Bd4DFh_Fe1x8OV7Arij21UrC?usp=drive_link",
          codeLabel: "View Project",
          isExternalDrive: true,
        },
      },
      {
        id: "ecommerce-cart",
        title: "E-Commerce Cart Management System",
        category: "Enterprise Java",
        categoryTag: "Enterprise Java / Backend",
        description: "Constructed an object-oriented shopping cart application handling persistent order workflows, inventory tracking, and item management with JDBC transactional operations and structured Log4j runtime logging.",
        image: cartImg,
        techStack: ["Core Java", "MySQL", "JDBC", "Maven", "Log4j"],
        links: {
          code: "https://github.com/Junaid2705/E_Commerce_Cart.git",
          codeLabel: "View Repository",
          isExternalDrive: false,
        },
      },
      {
        id: "house-price-prediction",
        title: "Real Estate Price Prediction Engine",
        category: "Machine Learning",
        categoryTag: "Machine Learning & Java",
        description: "Implemented an analytical predictive system using linear regression algorithms in Java to compute property price estimations based on square footage, spatial attributes, and historical market datasets stored in MySQL.",
        image: houseImg,
        techStack: ["Java", "Linear Regression", "MySQL", "Maven"],
        links: {
          code: "https://github.com/Junaid2705/HousePricePredictionProject.git",
          codeLabel: "View Repository",
          isExternalDrive: false,
        },
      },
      {
        id: "interactive-calculator",
        title: "Interactive Web Calculator",
        category: "Frontend",
        categoryTag: "Frontend Application",
        description: "Designed and coded an intuitive, responsive web calculator utilizing Vanilla JavaScript. Features dynamic expression evaluation, keyboard shortcut binding, edge-case arithmetic handling, and fluid responsive styling.",
        image: calcImg,
        techStack: ["JavaScript", "CSS3", "HTML5", "DOM APIs"],
        links: {
          code: "https://github.com/Junaid2705/Calculator-Using-JS.git",
          codeLabel: "View Repository",
          isExternalDrive: false,
        },
      },
    ],
  },

  // Experience & Education Timeline
  timeline: {
    sectionTag: "Career Background",
    title: "Experience & Education",
    subtitle: "A chronicle of my practical engineering journey, academic milestones, and technical development.",
    experience: [
      {
        role: "Software Developer Trainee",
        organization: "[Company Name] • Pune, India",
        period: "2024 – Present",
        badge: "Internship",
        badgeClass: "badge-subtle",
        bullets: [
          "Engineered modular backend services using Core Java and structured relational queries with MySQL.",
          "Collaborated on building clean, mobile-responsive web interfaces utilizing semantic HTML, modern CSS, and JavaScript.",
          "Conducted code reviews, debugged edge issues, and maintained structured documentation using Git and GitHub workflows.",
        ],
      },
      {
        role: "Full Stack & Computer Vision Projects",
        organization: "Self-Directed Engineering",
        period: "2023 – 2024",
        badge: "Independent Engineering",
        badgeClass: "badge-subtle",
        bullets: [
          "Built deep learning video analysis pipelines using YOLOv8, handling custom data preprocessing and model inference.",
          "Architected modular Java enterprise patterns (DAO, MVC, Service layers) with Maven dependencies and unit verification.",
        ],
      },
    ],
    education: [
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Karmaveer Bhaurao Patil College of Engineering, Satara",
        period: "2020 – 2024",
        grade: "CGPA: 7.20 / 10.0",
        badge: "Bachelor's Degree",
        badgeClass: "badge-subtle",
        description: "Curriculum focused on Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, Computer Networks, and Software Engineering methodologies.",
      },
      {
        degree: "Higher Secondary Certificate (HSC) - Science",
        institution: "Laxmanrao Kirloskar Vidyamandir, Palus, Sangli",
        period: "2018 – 2020",
        grade: "Score: 76.45%",
        badge: "Higher Secondary",
        badgeClass: "badge-subtle",
        description: "Comprehensive focus in Mathematics, Physics, Chemistry, and Information Technology.",
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "Swami Ramanand Vidyalaya, Ramanandnagar, Sangli",
        period: "Passed 2018",
        grade: "Score: 86.60%",
        badge: "Secondary",
        badgeClass: "badge-subtle",
        description: "",
      },
    ],
  },

  // Contact Information
  contact: {
    sectionTag: "Get In Touch",
    title: "Let’s Start a Conversation",
    subtitle: "Whether you have a job opportunity, a collaboration in mind, or simply want to connect, feel free to drop a message.",
    bio: "I am actively seeking software engineering positions and impactful projects. Reach out directly via the form below or through any of my contact channels.",
    channels: [
      {
        type: "email",
        label: "Email Me",
        value: "junaidp2705@gmail.com",
        href: "mailto:junaidp2705@gmail.com",
        icon: "mail",
      },
      {
        type: "phone",
        label: "Call / WhatsApp",
        value: "+91 7057735633",
        href: "tel:+917057735633",
        icon: "phone",
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/junaid-pathan-579aa0267",
        href: "https://www.linkedin.com/in/junaid-pathan-579aa0267",
        icon: "linkedin",
      },
      {
        type: "github",
        label: "GitHub",
        value: "github.com/Junaid2705",
        href: "https://github.com/Junaid2705",
        icon: "github",
      },
    ],
  },

  // Footer Metadata
  footer: {
    tagline: "Crafting reliable, scalable software solutions with clean engineering practices.",
    copyrightNote: "Designed with modern, eye-soothing simplicity.",
  },
};

export default portfolioData;
