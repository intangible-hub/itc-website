/**
 * SectionHeading — reusable heading block used on every page section.
 * Shows an optional blue accent line, a subtitle, and a main title.
 */

import { motion } from 'framer-motion';

export default function SectionHeading({ subtitle, title, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {subtitle && (
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-2"
          style={{ color: '#0066FF' }}
        >
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {/* Decorative underline */}
      {center && (
        <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ background: '#0066FF' }} />
      )}
    </motion.div>
  );
}
