import { motion } from "framer-motion";
import { Figma, Code2, Image, Globe, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  { icon: Figma, title: "UI/UX Design", description: "Creating intuitive and visually appealing user interfaces with a focus on user experience.", learning: true },
  { icon: Code2, title: "Frontend Development", description: "Building responsive, modern websites using HTML, CSS, and frontend frameworks.", learning: false },
  { icon: Image, title: "Graphic Design", description: "Designing social media graphics, simple illustrations, and visual content using Canva & Photoshop.", learning: false },
  { icon: Globe, title: "WordPress Setup", description: "Basic website setup, theme customization, and content management with WordPress.", learning: false },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring" as const } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">How I Can Help</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">What I Can Do</h2>
          <motion.div
            className="mx-auto mt-4 h-1 bg-accent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={card}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -15px hsl(var(--accent) / 0.15)" }}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 cursor-default"
            >
              {service.learning && (
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Badge className="bg-accent/10 text-accent border-accent/20 text-xs gap-1">
                    <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      <Sparkles size={12} />
                    </motion.div>
                    Learning
                  </Badge>
                </motion.div>
              )}
              <motion.div
                className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <service.icon size={22} className="text-accent" />
              </motion.div>
              <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
