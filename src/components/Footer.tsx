import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-sm text-muted-foreground"
          whileHover={{ scale: 1.02 }}
        >
          © {new Date().getFullYear()} Sauvagya Baniya. Built with passion & code.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
