import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send,Code } from "lucide-react";

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
  }
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
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Contact info side */}
                <div className="p-8 md:p-10 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Chennai, India 🇮🇳</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-8">Get in Touch 👋</h3>

                    <div className="space-y-6">
                      {contactInfo.map((contact, index) => (
                        <motion.a
                          key={contact.label}
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-card/50 hover:bg-card hover-lift group transition-all"
                        >
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            contact.color === "primary" ? "bg-primary/20 text-primary" :
                            contact.color === "secondary" ? "bg-secondary/20 text-secondary" :
                            contact.color === "accent" ? "bg-accent/20 text-accent" :
                            "bg-pink/20 text-pink"
                          } group-hover:scale-110 transition-transform`}>
                            <contact.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{contact.label}</p>
                            <p className="font-medium">{contact.value}</p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* CTA side */}
                <div className="p-8 md:p-10 flex flex-col justify-center items-center text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-6xl mb-6 block">🚀</span>
                    <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
                    <p className="text-muted-foreground mb-8">
                      I'm always excited to work on new projects and collaborate with amazing people.
                    </p>
                    <Button 
                      size="lg" 
                      className="text-lg px-8 py-6 hover-lift"
                      onClick={() => window.location.href = "mailto:aathins5@gmail.com"}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send me an email
                    </Button>

                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4">Or find me on</p>
                      <div className="flex justify-center gap-4">
                        <Button 
                          size="icon" 
                          variant="outline" 
                          className="rounded-full hover-lift"
                          onClick={() => window.open("https://www.linkedin.com/in/kowshik-n-s-82b530161", "_blank")}
                        >
                          <Linkedin className="w-5 h-5" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="outline" 
                          className="rounded-full hover-lift"
                          onClick={() => window.open("https://github.com/nskowshik", "_blank")}
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
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
