/**
 * Navbar — shared across all pages.
 *
 * Behaviour:
 *  - Transparent at the top of the page, gains a glass background on scroll.
 *  - Active link highlighted in electric blue.
 *  - Hamburger menu for screens < md (768 px).
 *  - Animated open/close with Framer Motion.
 */

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About' },
  { to: '/events',  label: 'Events' },
  { to: '/team',    label: 'Meet The Team' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add glass background after scrolling 50px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change (handled by NavLink itself, but also on
  // any outside click we close it via the overlay)
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10,15,30,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* ── Logo ────────────────────────────────────────────── */}
        <NavLink
          to="/"
          className="flex items-center gap-2 font-bold text-white text-lg"
          onClick={closeMobileMenu}
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
            style={{ background: '#0066FF' }}
          >
            ITC
          </span>
          <span className="hidden sm:block">
            Institute Technical Council
          </span>
        </NavLink>

        {/* ── Desktop links ────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
                style={({ isActive }) =>
                  isActive ? { color: '#60A5FA', background: 'rgba(0,102,255,0.15)' } : {}
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Hamburger button (mobile) ────────────────────────── */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {/* Animated burger bars */}
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-5 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-white origin-center"
          />
        </button>
      </nav>

      {/* ── Mobile drawer ────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(10,15,30,0.97)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <ul className="flex flex-col px-4 py-4 gap-1 list-none m-0">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
