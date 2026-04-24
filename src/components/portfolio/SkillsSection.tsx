import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiGooglechrome,
  SiNpm,
  SiSlack,
  SiLinear,
  SiVscodium,
  SiTestcafe,
  SiSpring,
  SiSocketdotio,
  SiMixpanel,
} from "react-icons/si";
import {
  Layout,
  Users,
  Cpu,
  Database,
  Server,
  Shield,
  Blocks,
  Zap,
  Eye,
  Plug,
  Cloud,
  Target,
  Layers,
  CheckCircle,
} from "lucide-react";

// Comprehensive skills from both files
const skillCategories = [
  {
    title: "Frontend Development",
    emoji: "🎨",
    color: "primary",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5/CSS3", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Backend Development",
    emoji: "⚙️",
    color: "green",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "REST APIs", icon: Server, color: "#00C7B7" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
      { name: "Websocket", icon: SiSocketdotio, color: "#00C7B7" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "GraphQL", icon: SiGraphql, color: "#E535AB" },
    ],
  },
  {
    title: "Development Practices",
    emoji: "🛠️",
    color: "secondary",
    skills: [
      { name: "Component Architecture", icon: Layout, color: "#3B82F6" },
      { name: "System Design", icon: Cpu, color: "#64748B" },
      { name: "Performance Optimization", icon: Zap, color: "#F59E0B" },
      { name: "Code Review", icon: Eye, color: "#6366F1" },
      { name: "WCAG Compliance", icon: CheckCircle, color: "#EF4444" },
      { name: "Testing (Jest/RTL)", icon: SiTestcafe, color: "#9933CC" },
      { name: "API Development", icon: Plug, color: "#14B8A6" },
      { name: "Cloud Deployment", icon: Cloud, color: "#06B6D4" },
      { name: "Security Best Practices", icon: Shield, color: "#EF4444" },
      { name: "Microservices", icon: Blocks, color: "#F97316" },
    ],
  },
  {
    title: "Professional Skills",
    emoji: "💼",
    color: "accent",
    skills: [
      { name: "Team Mentoring", icon: Users, color: "#8B5CF6" },
      { name: "Agile/Scrum", icon: Target, color: "#10B981" },
      { name: "Git/Version Control", icon: SiGit, color: "#F05032" },
    ],
  },
  {
    title: "Tools & Platforms",
    emoji: "🔧",
    color: "yellow",
    skills: [
      { name: "VS Code", icon: SiVscodium, color: "#007ACC" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Chrome DevTools", icon: SiGooglechrome, color: "#4285F4" },
      { name: "npm/yarn", icon: SiNpm, color: "#CB3837" },
      { name: "MongoDB Atlas", icon: SiMongodb, color: "#47A248" },
      { name: "Slack", icon: SiSlack, color: "#4A154B" },
      { name: "Linear", icon: SiLinear, color: "#5E6AD2" },
      { name: "Mixpanel", icon: SiMixpanel, color: "#7F5AF0" },
      { name: "Corologix", icon: Database, color: "#FF6B35" },
    ],
  },
];

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    skillCategories[0].title,
  );
  const [userInteracted, setUserInteracted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  const selectCategory = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    setUserInteracted(true);
  };

  // Auto-switch categories every 4 seconds when in view and user hasn't interacted
  useEffect(() => {
    if (!isInView) {
      setUserInteracted(false);
      return;
    }

    if (userInteracted) return;

    const interval = setInterval(() => {
      setSelectedCategory((prev) => {
        const currentIndex = skillCategories.findIndex(
          (cat) => cat.title === prev,
        );
        const nextIndex = (currentIndex + 1) % skillCategories.length;
        return skillCategories[nextIndex].title;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView, userInteracted]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-padding bg-gradient-playful"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills{" "}
            <span className="inline-block animate-bounce-subtle">🛠️</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive full-stack technologies and tools I use to build
            scalable web applications
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
                        className={`glass cursor-pointer hover:shadow-lg ${isSelected ? "ring-1 ring-primary" : ""}`}
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
                                {category.skills.length}{" "}
                                {category.skills.length === 1
                                  ? "skill"
                                  : "skills"}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
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
                                    {skill.icon && (
                                      <skill.icon
                                        className="w-8 h-8"
                                        style={{ color: skill.color }}
                                      />
                                    )}
                                    <span className="font-medium">
                                      {skill.name}
                                    </span>
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
                        .find((category) => category.title === selectedCategory)
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
                              {skill.icon && (
                                <skill.icon
                                  className="w-8 h-8"
                                  style={{ color: skill.color }}
                                />
                              )}
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
