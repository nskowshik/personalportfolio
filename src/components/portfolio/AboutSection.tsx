import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, MapPin, Briefcase } from "lucide-react";

const funFacts = [
  { emoji: "🎓", text: "B.E. in Electrical Engineering from Anna University" },
  { emoji: "💼", text: "5+ years building scalable React applications" },
  { emoji: "🏗️", text: "Architected component libraries used by 50+ engineers" },
  { emoji: "🎨", text: "Passionate about pixel-perfect UI & great DX" },
  { emoji: "🧘", text: "Mindfulness enthusiast & mentor" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-playful">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me <span className="inline-block animate-wiggle">👋</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From circuits to React components - my journey of transforming ideas into interactive experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile image placeholder & info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass overflow-hidden hover-lift">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-pink to-accent flex items-center justify-center text-5xl flex-shrink-0 animate-pulse-glow">
                    🧑‍💻
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Kowshik Sudarsan</h3>
                    <p className="text-muted-foreground mb-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Chennai, India 🇮🇳
                    </p>
                    <p className="text-foreground leading-relaxed">
                      I'm a passionate frontend engineer who loves turning complex problems into elegant, 
                      user-friendly interfaces. With a background in Electrical Engineering, I bring an 
                      analytical approach to building performant web applications that users love to interact with.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="font-medium">5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                    <span className="font-medium">B.E. Electrical</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10">
                    <Heart className="w-5 h-5 text-accent" />
                    <span className="font-medium">React Enthusiast</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-pink/10">
                    <span className="text-xl">🎯</span>
                    <span className="font-medium">UI Architect</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fun facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Fun Facts ✨</h3>
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-4 p-4 rounded-xl glass hover-lift cursor-default"
              >
                <span className="text-2xl flex-shrink-0">{fact.emoji}</span>
                <p className="text-foreground">{fact.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
