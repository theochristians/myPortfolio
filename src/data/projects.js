export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing with Stripe, product management, and an intuitive admin dashboard with real-time analytics.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and comprehensive project tracking with deadline notifications.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Frontend",
    status: "Completed"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive analytics dashboard that leverages machine learning to provide insights and predictions. Built with modern web technologies and integrated with multiple data sources.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    category: "Full Stack",
    status: "In Progress"
  },
  {
    id: 4,
    title: "REST API Server",
    description: "A robust RESTful API server with authentication, rate limiting, and comprehensive documentation. Built with Node.js and Express with MongoDB integration.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Backend",
    status: "Completed"
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    technologies: ["React Native", "OpenWeather API", "Redux", "Maps"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Mobile",
    status: "Completed"
  },
  {
    id: 7,
    title: "Cryptocurrency Tracker",
    description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    technologies: ["React", "CoinGecko API", "Chart.js", "LocalStorage"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Frontend",
    status: "Completed"
  },
  {
    id: 8,
    title: "Microservices Architecture",
    description: "A scalable microservices architecture with Docker containers, API Gateway, and service discovery. Includes monitoring and logging solutions.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    technologies: ["Docker", "Kubernetes", "Node.js", "Redis", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    category: "Backend",
    status: "In Progress"
  }
];

// Helper function to get project categories with counts
export const getProjectCategories = () => {
  const categoryCount = projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {});

  return [
    { name: 'all', count: projects.length },
    ...Object.entries(categoryCount).map(([name, count]) => ({ name, count }))
  ];
};

// Helper function to filter projects by category
export const filterProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};