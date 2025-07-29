import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';


export const skills = {
  frontend: [
    { name: "Flutter", level: 80, category: "Framework" },
    { name: "React", level: 75, category: "Framework" },
    { name: "Next.js", level: 70, category: "Framework" },
    { name: "JavaScript", level: 75, category: "Language" },
    { name: "HTML", level: 80, category: "Markup" },
    { name: "CSS", level: 75, category: "Styling" },
    { name: "Bootstrap", level: 70, category: "Styling" }
  ],
  backend: [
    { name: ".NET", level: 85, category: "Framework" },
    { name: "C#", level: 85, category: "Framework" },
    { name: "Node.js", level: 75, category: "Framework" },
    { name: "Express.js", level: 75, category: "Framework" },
    { name: "Flask", level: 85, category: "Framework" },
    { name: "FastAPI", level: 80, category: "Framework" },
    { name: "Python", level: 85, category: "Language" },
  ],
  database: [
    { name: "SQL Server", level: 75, category: "SQL" },
    { name: "MySQL", level: 65, category: "SQL" },
    { name: "MongoDB", level: 50, category: "NoSQL" },
    { name: "Cosmos DB", level: 50, category: "NoSQL" }
  ],
  tools: [
    { name: "Azure Functions", level: 82, category: "Cloud" },
    { name: "Azure API Management", level: 80, category: "Cloud" },
    { name: "Docker", level: 65, category: "Containerization" },
    { name: "Git", level: 80, category: "Version Control" },
    { name: "Microsoft 365", level: 80, category: "Productivity" },
    { name: "Google Workspace", level: 85, category: "Productivity" }
  ]
};

export const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: <FaCode /> },
  { id: 'backend', name: 'Backend', icon: <FaServer /> },
  { id: 'database', name: 'Database', icon: <FaDatabase /> },
  { id: 'tools', name: 'Tools & Others', icon: <FaTools /> }
]