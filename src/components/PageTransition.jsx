/**
 * PageTransition — wraps every page with a fade-in/slide-up entrance.
 * Uses Framer Motion's AnimatePresence (wired in App.jsx via the key prop).
 */

import { motion } from 'framer-motion';

const variants = {
  initial:  { opacity: 0, y: 18 },
  animate:  { opacity: 1, y: 0 },
  exit:     { opacity: 0, y: -18 },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
