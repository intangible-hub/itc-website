/**
 * Meet The Team page — ITC Cabinet + Club Managers profile cards.
 *
 * Sections:
 *  1. ITC Cabinet  — 6 core executive members with role descriptions
 *  2. Club Managers — one manager per club
 */

import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { cabinet, clubManagers } from '../data/team';

// ─── Avatar component (initials-based, no images needed) ─────────────────────

function Avatar({ initials, color, size = 'lg' }) {
  const dim = size === 'lg' ? '5rem' : '3.5rem';
  const fontSize = size === 'lg' ? '1.5rem' : '1rem';
  return (
    <div
      className="rounded-full flex items-center justify-center font-black text-white flex-shrink-0 mx-auto"
      style={{
        width: dim,
        height: dim,
        fontSize,
        background: `linear-gradient(135deg, ${color}99, ${color}33)`,
        border: `2px solid ${color}60`,
        boxShadow: `0 0 20px ${color}30`,
      }}
    >
      {initials}
    </div>
  );
}

// ─── Cabinet member card ──────────────────────────────────────────────────────

function CabinetCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 text-center flex flex-col items-center gap-4"
    >
      <Avatar initials={member.initials} color={member.color} size="lg" />
      <div>
        <h3 className="font-bold text-white text-base">{member.name}</h3>
        <p className="text-xs mt-1 font-medium" style={{ color: member.color }}>
          {member.role}
        </p>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed text-center flex-1">
        {member.description}
      </p>
      {/* LinkedIn link placeholder */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-slate-500 hover:text-blue-400 transition-colors"
        onClick={(e) => e.preventDefault()}
      >
        LinkedIn ↗
      </a>
    </motion.div>
  );
}

// ─── Club manager card ────────────────────────────────────────────────────────

function ManagerCard({ manager, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="glass-card rounded-xl p-4 flex items-center gap-4"
    >
      <Avatar initials={manager.initials} color={manager.color} size="sm" />
      <div className="min-w-0">
        <p className="font-bold text-white text-sm truncate">{manager.name}</p>
        <p className="text-xs text-slate-400 truncate">{manager.club}</p>
        <p className="text-xs mt-0.5" style={{ color: manager.color }}>
          {manager.role}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Team() {
  return (
    <PageTransition>
      {/* ── Page header ─────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: 'linear-gradient(180deg, #0D1A3A 0%, #0A0F1E 100%)' }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: '#0066FF' }}
        >
          The People Behind ITC
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-5xl font-black text-white mb-4"
        >
          Meet The Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-slate-400 max-w-xl mx-auto"
        >
          Elected students who dedicate their time to making ITC thrive —
          from managing budgets to mentoring freshers.
        </motion.p>
      </section>

      {/* ── ITC Cabinet ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading subtitle="Leadership" title="ITC Cabinet" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cabinet.map((member, i) => (
            <CabinetCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* ── Club Managers ────────────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(0,102,255,0.03)' }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Club Leadership" title="Club Managers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clubManagers.map((manager, i) => (
              <ManagerCard key={manager.id} manager={manager} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
