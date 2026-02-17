import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
}));

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  return <>{displayed}<span className="animate-pulse">|</span></>;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.id % 2 === 0 ? "hsl(var(--accent) / 0.3)" : "hsl(var(--primary) / 0.15)",
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 15, -10, 5, 0],
              opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
              scale: [1, 1.3, 0.9, 1.2, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/8 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Animated profile placeholder with pulsing ring */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent/30"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ margin: -8 }}
            />
            <motion.div
              className="w-32 h-32 rounded-full bg-secondary border-4 border-accent/20 flex items-center justify-center"
              whileHover={{ scale: 1.1, borderColor: "hsl(var(--accent) / 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <User size={48} className="text-muted-foreground" />
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-accent font-medium mb-2"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
              className="font-display text-5xl md:text-7xl font-bold text-primary leading-tight"
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05, color: "hsl(var(--accent))" }}
                transition={{ duration: 0.2 }}
              >
                Sauvagya
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05, color: "hsl(var(--accent))" }}
                transition={{ duration: 0.2 }}
              >
                Baniya
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
            >
              <TypeWriter text="Aspiring UI/UX Designer & Frontend Developer" delay={1200} />
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto"
            >
              Building creative digital experiences through code and design
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 shadow-lg shadow-accent/20">
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="absolute bottom-10 text-muted-foreground hover:text-accent transition-colors"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
