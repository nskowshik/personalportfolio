import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const FloatingIcon = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={`absolute z-0 ${className}`}
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
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Skill-Based Floating Emojis - Closer to Content */}
        <FloatingIcon className="hidden lg:block top-48 left-8 md:left-80 opacity-30 md:opacity-60" delay={0.2}>
          <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
            <span className="text-lg md:text-2xl">⚛️</span>
          </div>
        </FloatingIcon>

        <FloatingIcon className="hidden lg:block top-48 right-8 md:right-60 opacity-30 md:opacity-60" delay={0.4}>
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center border border-secondary/30">
            <span className="text-lg md:text-2xl">🗄️</span>
          </div>
        </FloatingIcon>

        <FloatingIcon className="hidden lg:block bottom-32 left-8 md:left-60 opacity-30 md:opacity-60" delay={0.6}>
          <div className="w-16 h-16 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
            <span className="text-lg md:text-2xl">🚀</span>
          </div>
        </FloatingIcon>

        <FloatingIcon className="hidden lg:block bottom-32 right-8 md:right-80 opacity-30 md:opacity-60" delay={0.8}>
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-pink/20 backdrop-blur-sm flex items-center justify-center border border-pink/30">
            <span className="text-lg md:text-2xl">☁️</span>
          </div>
        </FloatingIcon>

        {/* Main content */}
        <div className="container mx-auto px-4 text-center relative z-10">
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
                Senior Full-Stack Developer
              </span>
              <span className="text-2xl md:text-3xl">🚀</span>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Building end-to-end web solutions with <span className="text-primary font-semibold">React</span>, 
              <span className="text-green-600 font-semibold"> Node.js</span>, 
              <span className="text-secondary font-semibold"> TypeScript</span>, and cloud deployment for 6+ years
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
            className="hidden md:block absolute bottom-[-100px] left-1/2 -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 15, 0] }}
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
    </>
  );
};

export default HeroSection;
