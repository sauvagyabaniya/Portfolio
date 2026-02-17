import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor in Computer Application (BCA)",
    institution: "Kathmandu BernHardt College",
    period: "2078 BS – Present",
  },
  {
    icon: BookOpen,
    title: "+2 Higher Secondary",
    institution: "United Academy",
    period: "2075 – 2077 BS",
  },
  {
    icon: School,
    title: "School Level Education",
    institution: "West Point High School",
    period: "Completed 2075 BS",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" as const } },
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-accent font-medium mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Get To Know
          </motion.p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">About Me</h2>
          <motion.div
            className="mx-auto mt-4 h-1 bg-accent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm a passionate Computer Application student currently pursuing my Bachelor's degree. 
              With a keen eye for design and a love for clean code, I'm on a journey to become a 
              skilled UI/UX designer and frontend developer.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I believe in continuous learning and enjoy exploring new technologies, tools, 
              and creative approaches to problem-solving. Every project is an opportunity 
              to grow and create something meaningful.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-px bg-border"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            />
            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="relative flex gap-5 pl-2 group"
                >
                  <motion.div
                    className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "hsl(var(--accent) / 0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <edu.icon size={18} className="text-accent" />
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                    <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">{edu.title}</h3>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-muted-foreground/60 text-xs mt-1">{edu.period}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
