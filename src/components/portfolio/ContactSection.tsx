import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  Code,
  Instagram,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aathins5@gmail.com",
    href: "mailto:aathins5@gmail.com",
    color: "primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 81245 47978",
    href: "tel:+918124547978",
    color: "secondary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/kowshik-n-s-82b530161",
    color: "accent",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Check my repos",
    href: "https://github.com/nskowshik",
    color: "pink",
  },
  {
    icon: Code,
    label: "LeetCode",
    value: "Check my solutions",
    href: "https://leetcode.com/u/aathins5/",
    color: "orange",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect <span className="inline-block">📬</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
            <p className="text-muted-foreground">
              Choose your preferred way to connect
            </p>
          </motion.div>

          <Card className="glass overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Location & Availability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-center md:justify-start gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10">
                      <MapPin className="w-6 h-6 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Based in
                        </p>
                        <p className="font-medium">Chennai, India</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-r from-accent/10 to-pink/10">
                      <p className="text-sm text-muted-foreground mb-3">
                        Currently open to
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm font-medium">
                          Freelance
                        </span>
                        <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-lg text-sm font-medium">
                          Full-time
                        </span>
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-lg text-sm font-medium">
                          Consulting
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Primary Contact Methods */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="space-y-3">
                    <motion.a
                      href="mailto:aathins5@gmail.com"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center justify-start gap-3 p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all group text-left"
                    >
                      <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-sm">
                          aathins5@gmail.com
                        </p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:+918124547978"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center justify-start gap-3 p-3 rounded-xl bg-secondary/10 hover:bg-secondary/20 transition-all group text-left"
                    >
                      <Phone className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium text-sm">+91 81245 47978</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://www.instagram.com/_aathi_23_12"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-start gap-3 p-3 rounded-xl bg-purple-200 dark:bg-purple-800 hover:bg-purple-300 transition-all group text-left"
                    >
                      <Instagram className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Instagram
                        </p>
                        <p className="font-medium text-sm">Follow</p>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Social & Professional Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="space-y-3">
                    <motion.a
                      href="https://linkedin.com/in/kowshik-n-s-82b530161"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center justify-start gap-3 p-3 rounded-xl bg-accent/10 hover:bg-accent/20 transition-all group text-left"
                    >
                      <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          LinkedIn
                        </p>
                        <p className="font-medium text-sm">Connect</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://github.com/nskowshik"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center justify-start gap-3 p-3 rounded-xl bg-pink/10 hover:bg-pink/20 transition-all group text-left"
                    >
                      <Github className="w-5 h-5 text-pink group-hover:scale-110 transition-transform flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">GitHub</p>
                        <p className="font-medium text-sm">View Repos</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://leetcode.com/u/aathins5"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center justify-start gap-3 p-3 rounded-xl transition-all group text-left"
                      style={{ backgroundColor: "rgba(250, 204, 21, 0.1)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(250, 204, 21, 0.2)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(250, 204, 21, 0.1)")
                      }
                    >
                      <Code
                        className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0"
                        style={{ color: "#f59e0b" }}
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          LeetCode
                        </p>
                        <p className="font-medium text-sm">Solutions</p>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16 text-muted-foreground"
        >
          <p className="text-sm">
            Built with 💜 using React & TypeScript • © 2025 Kowshik Sudarsan
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
