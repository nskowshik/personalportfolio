import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  SiReact, SiTypescript, SiJavascript, SiRedux, SiHtml5, 
  SiNodedotjs, SiPostgresql, SiExpress, SiMongodb, SiGraphql,
  SiGit, SiGithub, SiFigma, SiJira, SiPostman, SiGooglechrome,
  SiNpm, SiSlack, SiLinear, SiVscodium, SiRailway,
  SiTestcafe} from "react-icons/si";
import { 
  Layout, Users, Code2, Cpu, Database,
  Server, Shield, Blocks, Zap, Eye, 
  Plug, Cloud, Target, Layers
} from "lucide-react";

// Icon mapping for skills
const getSkillIcon = (skillName: string) => {
  const iconMap: Record<string, any> = {
    // Frontend
    "React.js": SiReact,
    "TypeScript": SiTypescript,
    "JavaScript": SiJavascript,
    "Redux": SiRedux,
    "HTML5/CSS3": SiHtml5,
    // Backend
    "Node.js": SiNodedotjs,
    "REST APIs": Server,
    "PostgreSQL": SiPostgresql,
    "Express.js": SiExpress,
    "MongoDB": SiMongodb,
    "GraphQL": SiGraphql,
    // Tools & Platforms
    "VS Code": SiVscodium,
    "GitHub": SiGithub,
    "Figma": SiFigma,
    "Jira": SiJira,
    "Postman": SiPostman,
    "Chrome DevTools": SiGooglechrome,
    "npm/yarn": SiNpm,
    "MongoDB Atlas": SiMongodb,
    "Railway": SiRailway,
    "Slack": SiSlack,
    "Linear": SiLinear,
    // Professional Skills
    "Team Mentoring": Users,
    "Agile/Scrum": Target,
    "Git/Version Control": SiGit,
    // Development Practices
    "Component Architecture": Layout,
    "Design Systems": Target,
    "Performance Optimization": Zap,
    "Code Review": Eye,
    "Testing (Jest/RTL)": SiTestcafe,
    "Full-Stack Architecture": Layers,
    "Database Design": Database,
    "API Development": Plug,
    "Cloud Deployment": Cloud,
    "System Design": Cpu,
    "Security Best Practices": Shield,
    "Microservices": Blocks,
  };
  return iconMap[skillName] || Code2;
};

// Color mapping for technology icons
const getSkillIconColor = (skillName: string): string => {
  const colorMap: Record<string, string> = {
    // Frontend
    "React.js": "#61DAFB",
    "TypeScript": "#3178C6",
    "JavaScript": "#F7DF1E",
    "Redux": "#764ABC",
    "HTML5/CSS3": "#E34F26",
    // Backend
    "Node.js": "#339933",
    "REST APIs": "#00C7B7",
    "PostgreSQL": "#4169E1",
    "Express.js": "#000000",
    "MongoDB": "#47A248",
    "GraphQL": "#E535AB",
    // Tools & Platforms
    "VS Code": "#007ACC",
    "GitHub": "#181717",
    "Figma": "#F24E1E",
    "Jira": "#0052CC",
    "Postman": "#FF6C37",
    "Chrome DevTools": "#4285F4",
    "npm/yarn": "#CB3837",
    "MongoDB Atlas": "#47A248",
    "Railway": "#9B59B6",
    "Slack": "#4A154B",
    "Linear": "#5E6AD2",
    // Professional Skills
    "Team Mentoring": "#8B5CF6",
    "Agile/Scrum": "#10B981",
    "Git/Version Control": "#F05032",
    // Development Practices
    "Component Architecture": "#3B82F6",
    "Design Systems": "#EC4899",
    "Performance Optimization": "#F59E0B",
    "Code Review": "#6366F1",
    "Testing (Jest/RTL)": "#9933CC",
    "Full-Stack Architecture": "#8B5CF6",
    "Database Design": "#0EA5E9",
    "API Development": "#14B8A6",
    "Cloud Deployment": "#06B6D4",
    "System Design": "#64748B",
    "Security Best Practices": "#EF4444",
    "Microservices": "#F97316",
  };
  return colorMap[skillName] || "#6366F1";
};

// Comprehensive skills from both files
const skillCategories = [
  {
    title: "Frontend Development",
    emoji: "🎨",
    color: "primary",
    skills: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Redux" },
      { name: "HTML5/CSS3" },
    ]
  },
  {
    title: "Backend Development",
    emoji: "⚙️",
    color: "green",
    skills: [
      { name: "Node.js"  },
      { name: "REST APIs" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "GraphQL" },
    ]
  },
  {
    title: "Development Practices",
    emoji: "🛠️",
    color: "secondary",
    skills: [
      { name: "Component Architecture" },
      { name: "Design Systems" },
      { name: "Performance Optimization" },
      { name: "Code Review" },
      { name: "Testing (Jest/RTL)" },
      { name: "Full-Stack Architecture" },
      { name: "API Development" },
      { name: "Cloud Deployment" },
      { name: "System Design" },
      { name: "Security Best Practices" },
      { name: "Microservices" },
    ]
  },
  {
    title: "Professional Skills",
    emoji: "💼",
    color: "accent",
    skills: [
      { name: "Team Mentoring" },
      { name: "Agile/Scrum" },
      { name: "Git/Version Control" },
    ]
  },
  {
    title: "Tools & Platforms",
    emoji: "🔧",
    color: "yellow",
    skills: [
      { name: "VS Code" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Postman" },
      { name: "Chrome DevTools" },
      { name: "npm/yarn" },
      { name: "MongoDB Atlas" },
      { name: "Slack" },
      { name: "Linear" },
    ]
  }
];

const SkillBar = ({ skill, index, showLevel = true }: { skill: { name: string; emoji: string; level?: number; color?: string }; index: number; showLevel?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <div className="flex items-center justify-between mb-2">
      <span className="font-medium flex items-center gap-2">
        <span className="text-xl">{skill.emoji}</span>
        {skill.name}
      </span>
      {showLevel && skill.level && (
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      )}
    </div>
    {showLevel && skill.level && (
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            skill.color === "primary" ? "bg-primary" :
            skill.color === "secondary" ? "bg-secondary" :
            skill.color === "accent" ? "bg-accent" :
            skill.color === "yellow" ? "bg-yellow" :
            skill.color === "green" ? "bg-green" :
            skill.color === "pink" ? "bg-pink" :
            skill.color === "blue" ? "bg-blue-400" :
            skill.color === "orange" ? "bg-orange-500" :
            skill.color === "cyan" ? "bg-cyan-500" :
            "bg-primary"
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
        />
      </div>
    )}
  </motion.div>
);

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(skillCategories[0].title);

  const selectCategory = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
  };

  return (
    <section id="skills" className="section-padding bg-gradient-playful">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills <span className="inline-block animate-bounce-subtle">🛠️</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive full-stack technologies and tools I use to build scalable web applications
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
            <div className="space-y-6 lg:h-[520px] lg:overflow-y-auto">
              {skillCategories.map((category, categoryIndex) => {
                const isSelected = selectedCategory === category.title;
                
                return (
                  <div key={category.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                      className="rounded-lg border"
                    >
                      <Card 
                        className={`glass cursor-pointer hover:shadow-lg ${isSelected ? 'ring-1 ring-primary' : ''}`}
                        onClick={() => selectCategory(category.title)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold flex items-center gap-3">
                              <span className="text-2xl">{category.emoji}</span>
                              {category.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">
                                {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden mt-4"
                      >
                        <Card className="glass w-full flex flex-col overflow-hidden">
                          <CardContent className="p-6 flex-1 flex flex-col">
                            <div className="grid grid-cols-2 gap-4 overflow-y-auto pr-2">
                              {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skill.name}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: skillIndex * 0.05 }}
                                  className="group relative bg-card/50 border border-primary/20 rounded-lg p-4 hover:border-primary/40 hover:shadow-lg"
                                >
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/60 rounded-l-lg opacity-0 group-hover:opacity-100"></div>
                                  <div className="flex items-center gap-3">
                                    {(() => {
                                      const Icon = getSkillIcon(skill.name);
                                      const color = getSkillIconColor(skill.name);
                                      return <Icon className="w-8 h-8" style={{ color }} />;
                                    })()}
                                    <span className="font-medium">{skill.name}</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-1 xl:col-span-2 space-y-6 h-[520px] min-h-[520px] hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full"
              >
                <Card className="glass w-full h-full flex flex-col overflow-hidden">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="grid grid-cols-2 gap-4 overflow-y-auto pr-2">
                      {skillCategories
                        .find(category => category.title === selectedCategory)
                        ?.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: skillIndex * 0.05 }}
                            className="group relative bg-card/50 border border-primary/20 rounded-lg p-4 hover:border-primary/40 hover:shadow-lg"
                          >
                            <div className="flex items-center gap-3">
                              {(() => {
                                const Icon = getSkillIcon(skill.name);
                                const color = getSkillIconColor(skill.name);
                                return <Icon className="w-8 h-8" style={{ color }} />;
                              })()}
                              <span className="font-medium">{skill.name}</span>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
