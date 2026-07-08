import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Rich Text Editor",
    description:
      "A Notion-style rich text editor built with React and TypeScript by extending an MIT-licensed editor with custom extensions and reusable components.",
    emoji: "📝",
    techStack: [
      "React",
      "TypeScript",
      "TipTap",
      "SCSS",
      "Vite"
    ],
    highlights: [
      "Custom extensions",
      "Reusable components",
      "Rich formatting",
      "Keyboard shortcuts"
    ],
    color: "primary",
    github: "https://github.com/nskowshik/tiptap_editor",
    link: "https://slasheditor.netlify.app/",
  },

  {
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with WebSocket-based messaging, online presence, group conversations, and persistent chat history.",
    emoji: "💬",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "WebSocket",
      "Redis",
      "Tailwind CSS"
    ],
    highlights: [
      "Real-time messaging",
      "Group chat",
      "Online presence",
      "Message persistence"
    ],
    color: "secondary",
  },

  {
    title: "Analytics Dashboard",
    description:
      "Interactive analytics dashboard with responsive charts, GraphQL APIs, filters, and real-time data updates.",
    emoji: "📊",
    techStack: [
      "React",
      "GraphQL",
      "ECharts",
      "WebSocket",
      "TypeScript"
    ],
    highlights: [
      "Real-time updates",
      "Interactive charts",
      "Advanced filters",
      "Responsive layout"
    ],
    color: "yellow",
  },

  {
    title: "SSO & Admin Portal",
    description:
      "Secure administration portal implementing Keycloak SSO, role-based access control, and user management workflows.",
    emoji: "🔐",
    techStack: [
      "React",
      "TypeScript",
      "Keycloak",
      "REST API",
      "SCSS"
    ],
    highlights: [
      "SSO",
      "RBAC",
      "User management",
      "Secure authentication"
    ],
    color: "accent",
  },

  {
    title: "Store Management System",
    description:
      "Full-stack inventory and order management application with secure JWT authentication and REST APIs.",
    emoji: "🏪",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    highlights: [
      "Inventory management",
      "Order tracking",
      "REST APIs",
      "JWT authentication"
    ],
    color: "secondary",
    github: "https://github.com/nskowshik/NodeJsJWT",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects <span className="inline-block">🎯</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack applications and APIs showcasing end-to-end development
            expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass hover-lift h-full group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <span className="text-4xl mb-2 block group-hover:animate-bounce-subtle">
                      {project.emoji}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project?.github && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {project?.link && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    <Layers className="w-4 h-4 text-muted-foreground mr-1" />
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
