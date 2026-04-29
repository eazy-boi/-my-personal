import Skill from "../models/skill.js";

const seedSkills = async () => {
  await Skill.bulkCreate([
    // Frontend
    { name: "React", category: "frontend", proficiency: 95, icon: "⚛️" },
    { name: "Vue.js", category: "frontend", proficiency: 85, icon: "🟩" },
    { name: "HTML5 & CSS3", category: "frontend", proficiency: 98, icon: "🎨" },
    { name: "JavaScript (ES6+)", category: "frontend", proficiency: 95, icon: "📜" },
    { name: "TypeScript", category: "frontend", proficiency: 80, icon: "🔷" },
    { name: "Tailwind CSS", category: "frontend", proficiency: 90, icon: "💨" },

    // Backend
    { name: "Node.js", category: "backend", proficiency: 92, icon: "🟢" },
    { name: "Express.js", category: "backend", proficiency: 90, icon: "🚀" },
    { name: "Python", category: "backend", proficiency: 75, icon: "🐍" },
    { name: "REST API Design", category: "backend", proficiency: 88, icon: "🔗" },

    // Database
    { name: "PostgreSQL", category: "database", proficiency: 85, icon: "🐘" },
    { name: "MongoDB", category: "database", proficiency: 80, icon: "🍃" },
    { name: "MySQL", category: "database", proficiency: 88, icon: "🐬" },
    { name: "Redis", category: "database", proficiency: 70, icon: "🔴" },

    // DevOps
    { name: "Docker", category: "devops", proficiency: 75, icon: "🐳" },
    { name: "AWS", category: "devops", proficiency: 70, icon: "☁️" },
    { name: "CI/CD", category: "devops", proficiency: 78, icon: "🔄" },

    // Tools
    { name: "Git & GitHub", category: "tools", proficiency: 95, icon: "🐙" },
    { name: "VS Code", category: "tools", proficiency: 95, icon: "📝" },
    { name: "Figma", category: "tools", proficiency: 70, icon: "🎯" },
    { name: "Postman", category: "tools", proficiency: 90, icon: "📮" },

    // Soft Skills
    { name: "Team Leadership", category: "soft", proficiency: 85, icon: "👥" },
    { name: "Problem Solving", category: "soft", proficiency: 95, icon: "🧩" },
    { name: "Communication", category: "soft", proficiency: 90, icon: "💬" },
    { name: "Agile/Scrum", category: "soft", proficiency: 88, icon: "🏃" },
  ]);
};

export default seedSkills;

