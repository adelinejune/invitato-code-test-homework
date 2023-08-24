import { motion } from "framer-motion";

export default function AnimatedTextBox({ children }) {
  const motionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={motionVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
