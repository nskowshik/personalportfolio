import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    company: "SuperOps",
    role: "Senior Frontend Engineer",
    period: "Jan 2024 - Present",
    location: "Chennai, India",
    emoji: "🚀",
    color: "primary",
    techStack: [
      "React.js",
      "TypeScript",
      "Redux",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
    ],
    achievements: [
      "Architected component library with 150+ reusable components adopted by 4 teams (50+ engineers)",
      "Built rich text editor with bullet lists, headings, tables, and embedded content",
      "Developed recurring pattern engine with customizable intervals & end conditions",
      "Engineered dynamic policy builder with nested conditions and data-driven options",
      "Delivered comprehensive design system ensuring consistency across 20+ modules",
      "Mentored 5 junior engineers on best practices and frontend architecture",
    ],
  },
  {
    company: "SuperOps",
    role: "Frontend Engineer",
    period: "Feb 2022 - Jan 2024",
    location: "Chennai, India",
    emoji: "💻",
    color: "secondary",
    techStack: ["React.js", "JavaScript", "Redux", "CSS", "HTML5"],
    achievements: [
      "Built reusable components used across 3+ teams",
      "Implemented complex UI features with clean, maintainable code",
      "Collaborated with design team to implement pixel-perfect interfaces",
    ],
  },
  {
    company: "Gove Enterprises",
    role: "Software Engineer",
    period: "May 2020 - Feb 2022",
    location: "Tirunelveli, India",
    emoji: "🌱",
    color: "accent",
    techStack: ["React.js", "JavaScript", "REST APIs", "CSS"],
    achievements: [
      "Developed user-facing features for web applications",
      "Built responsive layouts compatible across browsers",
      "Integrated REST APIs with frontend components",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience <span className="inline-block">💼</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey building products that make a difference
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-[50%] md:text-right"
                  : "md:pl-[50%] md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Content card */}
              <Card
                className={`ml-16 md:ml-0 glass hover-lift ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                <CardHeader className="pb-2">
                  <div
                    className={`flex items-start gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <span className="text-3xl self-center">{exp.emoji}</span>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <div className="flex items-center gap-1 text-muted-foreground mt-1 flex-wrap">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                        <span>({exp.period})</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Tech stack */}
                  <div
                    className={`flex flex-wrap gap-2 pt-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Achievements accordion */}
                  <Accordion type="single" collapsible >
                    <AccordionItem value="achievements" className="border-none">
                      <AccordionTrigger
                        className={`text-sm font-medium ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                      >
                        <span className="flex items-center gap-1">
                          Key Achievements
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul
                          className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}
                        >
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
