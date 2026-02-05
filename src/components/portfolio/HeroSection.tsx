import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Sparkles, Zap } from "lucide-react";

const FloatingIcon = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Floating decorative elements */}
      <FloatingIcon className="top-20 left-10 md:left-20" delay={0.2}>
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
          <Code2 className="w-8 h-8 md:w-12 md:h-12 text-primary" />
        </div>
      </FloatingIcon>

      <FloatingIcon className="top-32 right-10 md:right-32" delay={0.4}>
        <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center border border-secondary/30">
          <span className="text-2xl md:text-4xl">⚛️</span>
        </div>
      </FloatingIcon>

      <FloatingIcon className="bottom-40 left-20 md:left-40" delay={0.6}>
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-accent" />
        </div>
      </FloatingIcon>

      <FloatingIcon className="bottom-32 right-16 md:right-48" delay={0.8}>
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg bg-pink/20 backdrop-blur-sm flex items-center justify-center border border-pink/30">
          <span className="text-xl md:text-2xl">💻</span>
        </div>
      </FloatingIcon>

      <FloatingIcon className="top-1/2 left-8 md:left-16" delay={1}>
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow/20 backdrop-blur-sm flex items-center justify-center border border-yellow/30">
          <Zap className="w-4 h-4 md:w-6 md:h-6 text-yellow" />
        </div>
      </FloatingIcon>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-lg md:text-xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hey there! 👋 I'm
          </motion.span>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <span className="text-gradient">Kowshik</span>
            <br />
            <span className="text-foreground">Sudarsan</span>
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
              Senior Frontend Engineer
            </span>
            <span className="text-2xl md:text-3xl">🚀</span>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Crafting delightful web experiences with <span className="text-primary font-semibold">React</span>, 
            <span className="text-secondary font-semibold"> TypeScript</span>, and a sprinkle of ✨ magic for 5+ years in Software Development
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover-lift"
              onClick={() => scrollToSection("projects")}
            >
              View Projects 🎯
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover-lift"
              onClick={() => window.location.href = "/blog"}
            >
              Read Blog 📝
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, y: { duration: 2, repeat: Infinity } }}
        >
          <button 
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
