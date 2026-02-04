import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const technicalSkills = [
  { name: "React.js", level: 95, emoji: "⚛️", color: "primary" },
  { name: "TypeScript", level: 90, emoji: "📘", color: "secondary" },
  { name: "JavaScript", level: 95, emoji: "💛", color: "yellow" },
  { name: "Redux", level: 88, emoji: "🔄", color: "primary" },
  { name: "HTML5/CSS3", level: 92, emoji: "🎨", color: "accent" },
  { name: "Node.js", level: 75, emoji: "💚", color: "green" },
  { name: "REST APIs", level: 85, emoji: "🔌", color: "pink" },
  { name: "PostgreSQL", level: 70, emoji: "🐘", color: "secondary" },
];

const relevantSkills = [
  { name: "Component Architecture", emoji: "🏗️" },
  { name: "Design Systems", emoji: "🎯" },
  { name: "Performance Optimization", emoji: "⚡" },
  { name: "Code Review", emoji: "👀" },
  { name: "Team Mentoring", emoji: "🧑‍🏫" },
  { name: "Agile/Scrum", emoji: "📊" },
  { name: "Git/Version Control", emoji: "🌿" },
  { name: "Testing (Jest/RTL)", emoji: "🧪" },
];

const SkillBar = ({ skill, index }: { skill: typeof technicalSkills[0]; index: number }) => (
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
      <span className="text-sm text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-3 bg-muted rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${
          skill.color === "primary" ? "bg-primary" :
          skill.color === "secondary" ? "bg-secondary" :
          skill.color === "accent" ? "bg-accent" :
          skill.color === "yellow" ? "bg-yellow" :
          skill.color === "green" ? "bg-green" :
          skill.color === "pink" ? "bg-pink" : "bg-primary"
        }`}
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
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
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-3xl">💻</span>
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Relevant Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Relevant Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {relevantSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all cursor-default"
                    >
                      <span className="text-2xl block mb-2">{skill.emoji}</span>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tools section */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold mb-4 text-muted-foreground">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {["VS Code", "GitHub", "Figma", "Jira", "Postman", "Chrome DevTools", "npm/yarn"].map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-sm rounded-full bg-muted/50 text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
