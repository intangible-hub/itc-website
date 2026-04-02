/**
 * Home page.
 *
 * Sections:
 *  1. Hero        — full-viewport with animated orbs, gradient headline, CTAs
 *  2. Stats       — animated counters
 *  3. Clubs Grid  — glassmorphism cards with coloured top accent
 *  4. Tech Teams  — horizontal cards
 *  5. Join CTA banner
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { clubs, techTeams } from '../data/clubs';

// ─── Animated counter hook ───────────────────────────────────────────────────
function useCounter(target, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

// ─── Stat card ───────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, delay }) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const count = useCounter(value, 2000, active);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card gradient-border rounded-2xl p-6 sm:p-8 text-center"
    >
      <p className="text-5xl sm:text-6xl font-black gradient-text"
         style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {count}<span style={{ fontSize: '0.7em' }}>{suffix}</span>
      </p>
      <p className="mt-3 text-slate-400 text-sm font-medium tracking-wide">{label}</p>
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
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 group cursor-default overflow-hidden relative"
    >
      {/* Coloured top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${club.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{ background: `${club.color}18`, border: `1px solid ${club.color}35` }}
      >
        {club.icon}
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <h3 className="font-bold text-white text-base group-hover:text-blue-300 transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {club.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{club.description}</p>
      </div>

      {/* Category pill */}
      <span
        className="self-start px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize"
        style={{
          background: `${club.color}18`,
          color: club.color,
          border: `1px solid ${club.color}30`,
          fontFamily: "'Space Grotesk', sans-serif",
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
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ x: 4, transition: { duration: 0.15 } }}
      className="glass-card rounded-xl p-5 flex items-start gap-4 group"
      style={{ borderLeft: '2px solid rgba(0,102,255,0.4)' }}
    >
      <span className="text-3xl flex-shrink-0">{team.icon}</span>
      <div>
        <h4 className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {team.name}
        </h4>
        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{team.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <PageTransition>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{ background: 'linear-gradient(160deg, #060C1A 0%, #0A1628 60%, #060C1A 100%)' }}
      >
        {/* Animated background orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #60A5FA 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 uppercase tracking-widest"
            style={{
              background: 'rgba(0,102,255,0.1)',
              border: '1px solid rgba(0,102,255,0.3)',
              color: '#60A5FA',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Institute Technical Council — IIT Bombay
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Tinker.{' '}
            <span className="gradient-text">Innovate.</span>
            <br />
            Create.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The apex body for technical activities at IIT Bombay — home to 20+ clubs,
            competitive teams, and thousands of students who build the future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/events"
              className="px-8 py-3 rounded-xl font-semibold text-white glow-blue transition-all duration-200 hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, #0066FF, #3B82F6)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Explore Events
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 rounded-xl font-semibold text-slate-300 hover:text-white transition-all duration-200 hover:bg-white/5"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <span className="text-slate-600 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading subtitle="By The Numbers" title="ITC At A Glance" gradient />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCard value={20}    suffix="+" label="Tech Bodies"     delay={0}   />
          <StatCard value={80}    suffix="+" label="Yearly Events"   delay={0.1} />
          <StatCard value={200}   suffix="+" label="Summer Projects" delay={0.2} />
          <StatCard value={10000} suffix="+" label="Students Reached" delay={0.3}/>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLUBS GRID
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading subtitle="Technical Clubs" title="Explore Our Clubs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clubs.map((club, i) => (
            <ClubCard key={club.id} club={club} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TECH TEAMS
      ══════════════════════════════════════════════════════ */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(0,102,255,0.025)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Student Project Teams" title="Competing On The World Stage" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techTeams.map((team, i) => (
              <TeamCard key={team.id} team={team} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          JOIN CTA
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto glass-card gradient-border rounded-3xl p-10 sm:p-14 text-center"
          style={{ boxShadow: '0 0 60px rgba(0,102,255,0.08)' }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
             style={{ color: '#0066FF', fontFamily: "'Space Grotesk', sans-serif" }}>
            Join Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Be Part Of The{' '}
            <span className="gradient-text">Innovation Story</span>
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto mb-8">
            Whether you love robotics, astronomy, competitive programming, or sustainable energy —
            there is a club and community waiting for you at ITC.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about"
              className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:brightness-110 glow-blue"
              style={{
                background: 'linear-gradient(135deg, #0066FF, #3B82F6)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              How To Join
            </Link>
            <Link
              to="/team"
              className="px-8 py-3 rounded-xl font-semibold text-slate-300 hover:text-white transition-all duration-200 hover:bg-white/5"
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Meet The Team
            </Link>
          </div>
        </motion.div>
      </section>

    </PageTransition>
  );
}
