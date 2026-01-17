import { Project, Skill } from "@/types";

export const projects: Project[] = [
  // Web Development Projects
  {
    id: 1,
    title: "WikiPage Pro Website",
    description:
      "A website which offers professional services to create and manage brand or business pages on Wikipedia — plus website design, UX, SEO and related digital presence services.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://wikipagepro.com/",
    githubUrl: "https://github.com/PhenomCorp12/wikipagepro",
    image: "/project1.jpg",
    featured: true,
    category: "web",
  },
  {
    id: 2,
    title: "EasyTask Management App",
    description:
      "An Enterprise-level task management without friction which users can add tasks and mark tasks as completed.",
    technologies: ["AngularJs", "Vanilla Css"],
    liveUrl: "https://easytask-seven.vercel.app/",
    githubUrl: "https://github.com/PhenomCorp12/easytask",
    image: "/project2.jpg",
    featured: true,
    category: "web",
  },
  {
    id: 3,
    title: "WealthBridge Investment Banking App",
    description:
      "An React-based Investment Banking App for different tiers of account, which generates interest on active investments .",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "TailwindCSS",
    ],
    liveUrl: "https://wealthridge-investment.vercel.app/",
    githubUrl: "https://github.com/PhenomCorp12/wealthridge-investment",
    image: "/project3.jpg",
    featured: true,
    category: "web",
  },

  // Graphics Design Projects
  {
    id: 4,
    title: "Church Social Media Designs",
    description:
      "Complete social media design package for a church community, including custom graphics and program promotions.",
    technologies: [
      "Photoshop",
      "PixelLab",
      "Snapseed",
      "Church Guidelines",
    ],
    image: "/design/project4-1.jpg",
    images: [
      "/design/project4-1.jpg",
      "/design/project4-2.jpg",
      "/design/project4-3.jpg",
      "/design/project4-4.jpg",
    ],
    featured: true,
    category: "design",
  },
  {
    id: 5,
    title: "Social Media Designs",
    description:
      "Custom social media designs for Instagram, Facebook, Twitter, and LinkedIn featuring post templates, story designs, and brand-consistent visual content.",
    technologies: [
     "Photoshop",
      "PixelLab",
      "User Research",
      "Snapseed",
    ],
    image: "/design/project5-1.jpg",
    images: [
      "/design/project5-1.jpg",
      "/design/project5-2.jpg",
      "/design/project5-3.jpg",
      "/design/project5-4.jpg",
    ],
    featured: true,
    category: "design",
  },
  {
    id: 6,
    title: "Event Flyers",
    description:
      "Sustainable packaging design for organic food products focusing on eco-friendly materials and compelling visual storytelling.",
    technologies: [
     "Photoshop",
      "PixelLab",
      "Pinterest",
      "Snapseed",
    ],
    image: "/design/project6-1.jpg",
    images: [
      "/design/project6-1.jpg",
      "/design/project6-2.jpg",
    ],
    featured: true,
    category: "design",
  },

  // Data Analysis Projects
  {
    id: 7,
    title: "Machine Learning Univariate Time Series Analysis using Random Forest",
    description:
      "Machine Learning Time Series Analysis using Random Forest to predict the rate of growth of publications of Statistics in the advancement of AI and Modern Technology till 2030.",
    technologies: ["Python", "Jupyter Notebook", "RandomForestRegressor", "Machine Learning", "Numpy", "Pandas", "Sklearn.metrics", "statsmodels.graphics.tsaplots"],
    liveUrl: "https://drive.google.com/drive/folders/1QPm6i8fQ0rteH5__sq38gJawGoy0fnnM?usp=sharing",
    githubUrl: "https://github.com/Kingjay19/time-series",
    image: "/project7.jpg",
    featured: true,
    category: "data",
  },
  {
    id: 8,
    title: "Leukemia Cancer Patient Survival Analysis",
    description:
      "Survival Analysis of Leukemia cancer patients and finding which particular factor contributes more to cancer patients' deaths.",
    technologies: [
      "R",
      "Kaplan-Meier Survival Curve",
      "Ggplot2",
      "Data Visualization",
      "Dplyr",
      "Survminer",
    ],
    liveUrl: "https://drive.google.com/file/d/13bW3Sw4KDGyHSKMRX-2jzJ9ChBrRb-S6/view?usp=sharing",
    githubUrl: "https://github.com/Kingjay19/survival-analysis",
    image: "/project8.jpg",
    featured: true,
    category: "data",
  },
  {
    id: 9,
    title: "Dummy Variable Regression Analysis",
    description:
      "Dummy variable regression analysis of GTBank revenue trends based on three different regions.",
    technologies: [
      "R",
      "Dplyr",
      "Data Transformation",
      "Excel",
      "Statistical Modeling",
    ],
    liveUrl: "https://drive.google.com/file/d/1deNd_P9xLrNlOEaSubKNoLYhIIRYN6UF/view?usp=sharing",
    githubUrl: "https://github.com/Kingjay19/dummy-variable-regression",
    image: "/project9.jpg",
    featured: true,
    category: "data",
  },
];

export const skills: Skill[] = [
  // Frontend Skills
  { name: "React", category: "frontend", level: 90 },
  { name: "TypeScript", category: "frontend", level: 85 },
  { name: "Next.js", category: "frontend", level: 88 },
  { name: "Tailwind CSS", category: "frontend", level: 92 },
  { name: "HTML/CSS", category: "frontend", level: 95 },
  { name: "AngularJs", category: "frontend", level: 65 },

  // Design Skills
  { name: "Photoshop", category: "design", level: 85 },
  { name: "PixelLab", category: "design", level: 88 },
  { name: "Figma", category: "design", level: 78 },
  { name: "Brand Identity", category: "design", level: 75 },

  // Data Analysis Skills
  { name: "Python", category: "data", level: 78 },
  { name: "R", category: "data", level: 80 },
  { name: "SPSS", category: "data", level: 85 },
  { name: "Data Visualization", category: "data", level: 85 },
  { name: "Statistical Analysis", category: "data", level: 90 },
  { name: "Excel/Sheets", category: "data", level: 88 },

  // Tools
  { name: "Git", category: "tools", level: 88 },
  { name: "Microsoft Office Suite", category: "tools", level: 95 },
];
