/**
 * Events page — filterable card grid with past/upcoming toggle.
 *
 * Features:
 *  - Toggle between Upcoming and Past events
 *  - Filter by category (workshop, competition, talk, hackathon)
 *  - Animated card entrance on filter change
 *  - Empty state for no results
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { events } from '../data/events';

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORY_COLORS = {
  workshop:    { bg: 'rgba(16,185,129,0.15)',   text: '#10B981', border: 'rgba(16,185,129,0.3)'  },
  competition: { bg: 'rgba(239,68,68,0.15)',    text: '#EF4444', border: 'rgba(239,68,68,0.3)'   },
  talk:        { bg: 'rgba(99,102,241,0.15)',   text: '#818CF8', border: 'rgba(99,102,241,0.3)'  },
  hackathon:   { bg: 'rgba(251,191,36,0.15)',   text: '#FBBF24', border: 'rgba(251,191,36,0.3)'  },
};

const categories = ['all', 'workshop', 'competition', 'talk', 'hackathon'];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// ─── EventCard ────────────────────────────────────────────────────────────────

function EventCard({ event }) {
  const cat = CATEGORY_COLORS[event.category] || CATEGORY_COLORS.workshop;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/20 transition-colors"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-base leading-snug">{event.title}</h3>
          <p className="text-sm mt-1" style={{ color: '#0066FF' }}>
            Organised by {event.organiser}
          </p>
        </div>
        {/* Category pill */}
        <span
          className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize"
          style={{ background: cat.bg, color: cat.text, border: `1px solid ${cat.border}` }}
        >
          {event.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{event.description}</p>

      {/* Meta row */}
      <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-3 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          📅 {formatDate(event.date)}
        </span>
        <span className="flex items-center gap-1.5">
          📍 {event.location}
        </span>
      </div>
    </motion.article>
  );
}

// ─── FilterButton ─────────────────────────────────────────────────────────────

function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200"
      style={{
        background: active ? 'rgba(0,102,255,0.2)' : 'transparent',
        color: active ? '#60A5FA' : '#94A3B8',
        border: `1px solid ${active ? 'rgba(0,102,255,0.4)' : 'rgba(255,255,255,0.07)'}`,
      }}
    >
      {label}
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Events() {
  const [status, setStatus]     = useState('upcoming'); // 'upcoming' | 'past'
  const [category, setCategory] = useState('all');

  // Filter events based on current toggle and category selection
  const filtered = useMemo(() => {
    return events.filter((e) => {
      const statusMatch   = e.status === status;
      const categoryMatch = category === 'all' || e.category === category;
      return statusMatch && categoryMatch;
    });
  }, [status, category]);

  return (
    <PageTransition>
      {/* ── Page header ────────────────────────────────────────── */}
      <section
        className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center"
        style={{
          background: 'linear-gradient(180deg, #0D1A3A 0%, #0A0F1E 100%)',
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: '#0066FF' }}
        >
          What's Happening
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="gradient-text">Events</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-slate-400 max-w-xl mx-auto"
        >
          Workshops, competitions, talks, and hackathons — all in one place.
        </motion.p>
      </section>

      {/* ── Filters ────────────────────────────────────────────── */}
      <section className="sticky top-16 z-30 py-4 px-4 sm:px-6 lg:px-8"
        style={{
          background: 'rgba(10,15,30,0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Upcoming / Past toggle */}
          <div
            className="flex rounded-xl p-1 gap-1"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            {['upcoming', 'past'].map((s) => (
              <button
                key={s}
                onClick={() => { setStatus(s); setCategory('all'); }}
                className="px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all duration-200"
                style={{
                  background: status === s ? '#0066FF' : 'transparent',
                  color: status === s ? '#fff' : '#94A3B8',
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <FilterButton
                key={c}
                label={c}
                active={category === c}
                onClick={() => setCategory(c)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Event cards grid ───────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {filtered.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="text-white font-bold text-xl mb-2">No events found</h3>
            <p className="text-slate-500">
              Try changing the category filter or switching between Upcoming / Past.
            </p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </PageTransition>
  );
}
