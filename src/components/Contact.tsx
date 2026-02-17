import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon!" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-60 h-60 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-2">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Contact Me</h2>
          <motion.div
            className="mx-auto mt-4 h-1 bg-accent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <motion.a
                href="mailto:sauvagyabaniya@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all group"
                whileHover={{ x: 5, scale: 1.01 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <Mail size={18} className="text-accent" />
                </motion.div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-primary">sauvagyabaniya@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/sauvagyabaniya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all group"
                whileHover={{ x: 5, scale: 1.01 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                  whileHover={{ rotate: 10 }}
                >
                  <Github size={18} className="text-accent" />
                </motion.div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium text-primary">github.com/sauvagyabaniya</p>
                </div>
              </motion.a>
               <motion.a
  href="https://www.linkedin.com/in/sauvagya-baniya-009797243/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all group"
  whileHover={{ x: 5, scale: 1.01 }}
>
  <motion.div
    className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
    whileHover={{ rotate: 10 }}
  >
    <Linkedin size={18} className="text-accent" /> {/* Changed from Github to Linkedin */}
  </motion.div>
  <div>
    <p className="text-xs text-muted-foreground">LinkedIn</p>
    <p className="text-sm font-medium text-primary">Sauvagya Baniya</p>
  </div>
</motion.a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className="space-y-5"
          >
            <motion.div className="space-y-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="transition-all focus:scale-[1.01]" />
            </motion.div>
            <motion.div className="space-y-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="transition-all focus:scale-[1.01]" />
            </motion.div>
            <motion.div className="space-y-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="transition-all focus:scale-[1.01]" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full gap-2 shadow-lg shadow-accent/20">
                <Send size={16} />
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
