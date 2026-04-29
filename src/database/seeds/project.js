import Project from "../models/project.js";

const seedProjects = async () => {
  await Project.bulkCreate([
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online marketplace with real-time inventory, payment integration, and admin dashboard. Supports multiple vendors and handles 10,000+ daily transactions.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe"],
      imageUrl: "https://via.placeholder.com/400x250",
      liveUrl: "https://example-ecommerce.com",
      repoUrl: "https://github.com/kevindeveloper/ecommerce",
      category: "Web Application",
      featured: true,
    },
    {
      title: "Health Tracker App",
      description:
        "Mobile-first progressive web app for tracking fitness goals, nutrition, and mental wellness. Includes data visualization and personalized recommendations using ML.",
      technologies: ["Vue.js", "Firebase", "TensorFlow.js", "Chart.js"],
      imageUrl: "https://via.placeholder.com/400x250",
      liveUrl: "https://healthtracker.app",
      repoUrl: "https://github.com/kevindeveloper/health-tracker",
      category: "Mobile App",
      featured: true,
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop kanban boards, and team analytics. Used by 200+ teams across Africa.",
      technologies: ["React", "Socket.io", "MongoDB", "Express"],
      imageUrl: "https://via.placeholder.com/400x250",
      liveUrl: "https://taskmaster.io",
      repoUrl: "https://github.com/kevindeveloper/taskmaster",
      category: "Productivity",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather visualization dashboard with 7-day forecasts, historical data charts, and severe weather alerts for African cities.",
      technologies: ["JavaScript", "D3.js", "OpenWeatherMap API", "Tailwind CSS"],
      imageUrl: "https://via.placeholder.com/400x250",
      liveUrl: "https://africanweather.dev",
      repoUrl: "https://github.com/kevindeveloper/weather-dashboard",
      category: "Data Visualization",
      featured: false,
    },
  ]);
};

export default seedProjects;

