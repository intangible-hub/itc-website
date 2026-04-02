/**
 * SectionHeading — reusable heading used on every page section.
 *
 * Props:
 *  subtitle  — small blue label above the title
 *  title     — main heading text
 *  center    — center-align (default true)
 *  gradient  — apply gradient-text class to title (default false)
 */

import { motion } from 'framer-motion';

export default function SectionHeading({ subtitle, title, center = true, gradient = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {subtitle && (
        <p className="text-xs font-semibold tracking-widest uppercase mb-3"
           style={{ color: '#0066FF', fontFamily: "'Space Grotesk', sans-serif" }}>
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold ${gradient ? 'gradient-text' : 'text-white'}`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h2>
      {center && (
        <div
          className="mt-4 mx-auto h-0.5 rounded-full"
          style={{
            width: '3rem',
            background: 'linear-gradient(90deg, #0066FF, #6366F1)',
          }}
        />
      )}
    </motion.div>
  );
}
