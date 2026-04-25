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
    title: "Component Library",
    description:
      "A comprehensive library of 150+ reusable React components with TypeScript, Storybook documentation, and full accessibility support.",
    emoji: "📦",
    techStack: ["React", "TypeScript", "Storybook", "CSS Modules"],
    highlights: ["150+ components", "Used by 50+ engineers", "Shopify Polaris"],
    color: "primary",
    github: undefined,
    link: undefined,
  },
  {
    title: "Real-time Chat Application",
    description:
      "Full-stack chat application with WebSocket support, private messaging, group chats, and message persistence.",
    emoji: "💭",
    techStack: ["React", "WebSocket", "Node.js", "Svelte","Tailwind CSS", "Redis"],
    highlights: [
      "Real-time messaging",
      "WebSocket",
      "Message history",
      "Online status",
    ],
    color: "secondary",
  },
  {
    title: "Rich Text Editor",
    description: "Feature-rich WYSIWYG editor with real-time collaboration, formatting, and media support.",
    emoji: "📝",
    techStack: ["React", "TypeScript", "Shadcn", "Optimistic Updates","Tailwind CSS"],
    highlights: ["Real-time collaboration","TipTap", "Formatting", "Media support", "Version control"],
    color: "secondary",
    github: "https://github.com/nskowshik/tiptap_editor",
    link: "https://slasheditor.netlify.app/",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Business intelligence dashboard with real-time data visualization, custom reports, and automated insights.",
    emoji: "📊",
    techStack: ["React", "GraphQL", "PostgreSQL", "Echart", "WebSocket", "Responsive Grid Layout"],
    highlights: [
      "Real-time analytics",
      "Custom reports",
      "Data visualization",
      "API integration",
    ],
    color: "yellow",
  },
  {  title: "Store Management System",
    description: "A full-featured store management system with real-time inventory tracking, order management, and reporting capabilities.",
    emoji: "🔄",
    techStack: ["Node JS", "MongoDB", "Express", "JWT"],
    highlights: ["Inventory tracking", "Order management", "Customer details"],
    color: "accent",
    github: "https://github.com/nskowshik/NodeJsJWT",
    link: undefined,
  },
  
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
