import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio built with modern web technologies to showcase my work and skills.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Student Management System",
    description: "A desktop application for managing student records built as a college project.",
    tags: ["Kotlin", ".NET"],
  },
  {
    title: "E-Commerce UI Mockup",
    description: "A clean and modern e-commerce interface designed in Canva and prototyped in code.",
    tags: ["Canva", "HTML/CSS"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 50, rotateX: 10 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, type: "spring" as const, stiffness: 80 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">Browse My Recent</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Academic Projects</h2>
          <motion.div
            className="mx-auto mt-4 h-1 bg-accent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-2xl hover:border-accent/20 transition-all duration-300"
              style={{ perspective: 800 }}
            >
              <div className="h-44 bg-secondary relative flex items-center justify-center overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: "spring" }}
                >
                  <ExternalLink size={32} className="text-muted-foreground/30 group-hover:text-accent/60 transition-colors" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-primary text-lg mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs group-hover:border-accent/30 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" className="rounded-full gap-2">
              <a href="https://github.com/sauvagyabaniya" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
