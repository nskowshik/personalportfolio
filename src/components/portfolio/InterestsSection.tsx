import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const interests = [
  {
    title: "Carrom",
    emoji: "🎯",
    description: "Strategic board game enthusiast. Love the precision and focus it requires!",
    color: "primary",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    description: "Quick reflexes and team play. Great way to stay active and competitive.",
    color: "secondary",
  },
  {
    title: "Mentoring",
    emoji: "🧑‍🏫",
    description: "Guiding junior developers and sharing knowledge brings me immense joy.",
    color: "accent",
  },
  {
    title: "Mindfulness",
    emoji: "🧘",
    description: "Practicing meditation and staying present. Key to maintaining work-life balance.",
    color: "pink",
  },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="section-padding bg-gradient-playful">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Beyond Code <span className="inline-block animate-wiggle">🎮</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When I'm not pushing pixels, here's what keeps me going
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: 2 }}
            >
              <Card className="glass hover:shadow-glow transition-all duration-300 h-full text-center">
                <CardContent className="p-6">
                  <motion.span 
                    className="text-6xl block mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {interest.emoji}
                  </motion.span>
                  <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fun quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic max-w-3xl mx-auto">
            "The best developers are the ones who never stop learning and always stay curious" 
            <span className="not-italic"> ✨</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;
