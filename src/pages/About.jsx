/**
 * About page — ITC mission, how to join, and council structure.
 *
 * Sections:
 *  1. Mission statement hero
 *  2. How to join (step cards)
 *  3. Council structure (hierarchy cards)
 */

import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

// ─── Data local to this page ─────────────────────────────────────────────────

const joinSteps = [
  {
    step: '01',
    title: 'Attend Club Introduction',
    description:
      'Every club holds intro sessions at the start of the academic year — usually in the first two weeks of July. Attend whichever clubs interest you. No commitment needed yet.',
    icon: '👋',
  },
  {
    step: '02',
    title: 'Participate In Beginner Activities',
    description:
      'Clubs run beginner-friendly workshops, projects, and competitions throughout the first semester. Jump in, make things, and see what you enjoy.',
    icon: '🛠️',
  },
  {
    step: '03',
    title: 'Apply For Membership',
    description:
      'Most clubs have an informal selection — a short project, quiz, or interview — at the end of the first semester or beginning of the second.',
    icon: '📝',
  },
  {
    step: '04',
    title: 'Become A Core Member',
    description:
      'Active members can apply to become Core Members or Managers in their second/third year, taking on leadership and mentoring responsibilities.',
    icon: '🏆',
  },
];

const structure = [
  {
    title: "Students' Gymkhana",
    description: 'The elected student body that governs all student activities at IIT Bombay.',
    level: 0,
    color: '#6366F1',
  },
  {
    title: 'Institute Technical Council (ITC)',
    description:
      'Apex body for all technical activities. Led by the General Secretary — Technical Affairs.',
    level: 1,
    color: '#0066FF',
  },
  {
    title: 'Technical Clubs (9 clubs)',
    description:
      'Independent clubs covering aeromodelling, biology, chemistry, electronics, energy, maths & physics, web/coding, astronomy, and making.',
    level: 2,
    color: '#10B981',
  },
  {
    title: 'Student Project Teams (5 teams)',
    description:
      'Competitive teams (Formula Student, AUV, Mars Rover, Satellite, UMIC) representing IITB internationally.',
    level: 2,
    color: '#F59E0B',
  },
  {
    title: 'ITC Conveners',
    description:
      'Dedicated portfolios for Web, Finance, Events, and Outreach — managed by elected student conveners.',
    level: 2,
    color: '#EF4444',
  },
];

const values = [
  { icon: '🔬', title: 'Curiosity', desc: 'Encourage asking "why" and "what if" at every step.' },
  { icon: '🤝', title: 'Collaboration', desc: 'Cross-club projects and inter-IIT initiatives.' },
  { icon: '🚀', title: 'Excellence', desc: 'World-class competitions on the international stage.' },
  { icon: '🌱', title: 'Inclusivity', desc: 'Every student, regardless of branch, is welcome.' },
];

// ─── Components ──────────────────────────────────────────────────────────────

function StepCard({ step, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="glass-card rounded-2xl p-6 flex gap-5"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0"
        style={{ background: 'rgba(0,102,255,0.15)', color: '#0066FF', border: '1px solid rgba(0,102,255,0.3)' }}
      >
        {step.step}
      </div>
      <div>
        <h3 className="font-bold text-white mb-1">{step.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

function StructureCard({ item, index }) {
  const indent = item.level * 2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card rounded-xl p-5 flex items-start gap-4"
      style={{ marginLeft: `${indent}rem`, borderLeft: `3px solid ${item.color}` }}
    >
      <div className="flex-1">
        <h4 className="font-bold text-white text-sm mb-1" style={{ color: item.color }}>
          {item.title}
        </h4>
        <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <PageTransition>
      {/* ── Mission Hero ───────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0A0F1E 0%, #0D1A3A 50%, #0A0F1E 100%)',
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,102,255,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#0066FF' }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            About ITC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            The Institute Technical Council is the umbrella body that coordinates, nurtures, and
            amplifies all technology-driven activity at IIT Bombay. From midnight hackathons to
            international championships, ITC is where students turn curiosity into creation.
          </motion.p>
        </div>
      </section>

      {/* ── Mission & Values ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: mission text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#0066FF' }}>
              Mission
            </p>
            <h2 className="text-3xl font-bold text-white mb-5">
              Empowering Students To Build The Future
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                ITC exists to create an ecosystem where every student — regardless of their department
                or prior experience — can explore technology, build real projects, and grow as a maker,
                engineer, or scientist.
              </p>
              <p>
                We believe that the best learning happens outside the classroom. By running workshops,
                competitions, and mentorship programmes, ITC gives students the resources and community
                they need to go beyond the syllabus.
              </p>
              <p>
                Our clubs and teams have placed IITB on the global map — from Formula Student podiums
                in Germany to satellite payloads in orbit.
              </p>
            </div>
          </motion.div>

          {/* Right: values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-5"
              >
                <span className="text-3xl">{v.icon}</span>
                <h4 className="font-bold text-white text-sm mt-3 mb-1">{v.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How To Join ────────────────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(0,102,255,0.03)' }}
      >
        <div className="max-w-3xl mx-auto">
          <SectionHeading subtitle="Getting Started" title="How To Join A Club" />
          <div className="space-y-4">
            {joinSteps.map((step, i) => (
              <StepCard key={step.step} step={step} delay={i * 0.1} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200 glow-blue"
              style={{ background: '#0066FF' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#0052CC')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0066FF')}
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Council Structure ──────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <SectionHeading subtitle="Organisation" title="Council Structure" />
        <div className="space-y-3">
          {structure.map((item, i) => (
            <StructureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
