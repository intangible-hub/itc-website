/**
 * Home page — landing page of the ITC website.
 *
 * Sections:
 *  1. Hero        — full-viewport intro with tagline and CTA buttons
 *  2. Stats       — animated counters for key ITC numbers
 *  3. Clubs Grid  — card grid of all 9 clubs
 *  4. Tech Teams  — horizontal cards for student project teams
 *  5. Achievements banner
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { clubs, techTeams } from '../data/clubs';

// ─── Animated counter hook ──────────────────────────────────────────────────
/**
 * Counts from 0 to `target` over `duration` ms once `active` becomes true.
 */
function useCounter(target, duration = 2000, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

// ─── Single stat card with intersection-observer trigger ────────────────────
function StatCard({ value, suffix, label, delay }) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCounter(value, 2000, active);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-6 text-center"
    >
      <p className="text-4xl sm:text-5xl font-black" style={{ color: '#0066FF' }}>
        {count}
        <span style={{ color: '#60A5FA' }}>{suffix}</span>
      </p>
      <p className="mt-2 text-slate-400 text-sm font-medium">{label}</p>
    </motion.div>
  );
}

// ─── Club card ───────────────────────────────────────────────────────────────
function ClubCard({ club, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-6 cursor-default flex flex-col gap-3 group"
      style={{ '--club-color': club.color }}
    >
      {/* Icon badge */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ background: `${club.color}20`, border: `1px solid ${club.color}40` }}
      >
        {club.icon}
      </div>
      <h3 className="font-bold text-white text-base group-hover:text-blue-300 transition-colors">
        {club.name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{club.description}</p>
      {/* Category pill */}
      <span
        className="self-start px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
        style={{
          background: `${club.color}20`,
          color: club.color,
          border: `1px solid ${club.color}30`,
        }}
      >
        {club.category}
      </span>
    </motion.div>
  );
}

// ─── Tech team card ──────────────────────────────────────────────────────────
function TeamCard({ team, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-xl p-5 flex items-start gap-4"
    >
      <span className="text-3xl flex-shrink-0">{team.icon}</span>
      <div>
        <h4 className="font-bold text-white text-sm">{team.name}</h4>
        <p className="text-slate-400 text-xs mt-1 leading-relaxed">{team.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Page component ──────────────────────────────────────────────────────────
export default function Home() {
  return (
    <PageTransition>
      {/* ════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(135deg, #0A0F1E 0%, #0D1A3A 60%, #050A14 100%)' }}
      >
        {/* Decorative radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,102,255,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Animated grid lines (purely decorative) */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,102,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag line pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{
              background: 'rgba(0,102,255,0.12)',
              border: '1px solid rgba(0,102,255,0.3)',
              color: '#60A5FA',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Institute Technical Council — IIT Bombay
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Tinker.{' '}
            <span style={{ color: '#0066FF' }}>Innovate.</span>
            <br />
            Create.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The apex body for technical activities at IIT Bombay — home to 20+ clubs,
            competitive teams, and thousands of students who build the future.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/events"
              className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200 glow-blue"
              style={{ background: '#0066FF' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#0052CC')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0066FF')}
            >
              Explore Events
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 rounded-xl font-semibold text-slate-300 hover:text-white transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════
          STATS SECTION
      ════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading subtitle="By The Numbers" title="ITC At A Glance" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCard value={20}   suffix="+"  label="Tech Bodies"       delay={0}    />
          <StatCard value={80}   suffix="+"  label="Yearly Events"     delay={0.1}  />
          <StatCard value={200}  suffix="+"  label="Summer Projects"   delay={0.2}  />
          <StatCard value={10000} suffix="+" label="Students Reached"  delay={0.3}  />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CLUBS GRID
      ════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading subtitle="Technical Clubs" title="Explore Our Clubs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, i) => (
            <ClubCard key={club.id} club={club} index={i} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TECH TEAMS
      ════════════════════════════════════════════════════ */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(0,102,255,0.03)' }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Student Project Teams" title="Competing On The World Stage" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techTeams.map((team, i) => (
              <TeamCard key={team.id} team={team} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ACHIEVEMENT BANNER / CTA
      ════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-10 text-center glow-blue"
          style={{ border: '1px solid rgba(0,102,255,0.3)' }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#0066FF' }}>
            Join Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Be Part Of The Innovation Story
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-8">
            Whether you love robotics, astronomy, competitive programming, or building sustainable energy
            solutions — there is a club and a community waiting for you at ITC.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about"
              className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200"
              style={{ background: '#0066FF' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#0052CC')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0066FF')}
            >
              How To Join
            </Link>
            <Link
              to="/team"
              className="px-8 py-3 rounded-xl font-semibold text-slate-300 hover:text-white transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Meet The Team
            </Link>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
