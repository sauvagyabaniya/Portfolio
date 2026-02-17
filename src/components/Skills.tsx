import { motion } from "framer-motion";
import { Palette, Code, Terminal, FileText, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  { icon: Palette, title: "Design & Creative", skills: ["Canva", "Adobe Photoshop", "Flipa Clip"] },
  { icon: Code, title: "Frontend & Web Dev", skills: ["HTML/CSS", "WordPress", "VS Code"] },
  { icon: Terminal, title: "Programming", skills: ["Kotlin", ".NET"] },
  { icon: FileText, title: "Productivity & Tools", skills: ["Microsoft Office", "Git & GitHub"] },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring" as const, stiffness: 100 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Animated bg accent */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">What I Know</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">My Skills</h2>
          <motion.div
            className="mx-auto mt-4 h-1 bg-accent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={card}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -15px hsl(var(--accent) / 0.15)" }}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 cursor-default"
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <cat.icon size={22} className="text-accent" />
              </motion.div>
              <h3 className="font-semibold text-primary mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.1 }}
                  >
                    <Badge variant="secondary" className="text-xs font-normal hover:bg-accent/10 hover:text-accent transition-colors cursor-default">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          className="flex justify-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2.5"
            animate={{ boxShadow: ["0 0 0 0 hsl(var(--accent) / 0.2)", "0 0 0 10px hsl(var(--accent) / 0)", "0 0 0 0 hsl(var(--accent) / 0.2)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Sparkles size={16} className="text-accent" />
            </motion.div>
            <span className="text-sm font-medium text-primary">Currently Learning: UI/UX Design</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
