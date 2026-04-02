/**
 * Navbar — shared across all pages.
 *
 * Behaviour:
 *  - Transparent at top, gains glass background on scroll.
 *  - Active link highlighted in blue with pill background.
 *  - Hamburger menu (animated) for mobile < md.
 */

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const links = [
  { to: '/',        label: 'Home'          },
  { to: '/about',   label: 'About'         },
  { to: '/events',  label: 'Events'        },
  { to: '/team',    label: 'Meet The Team' },
  { to: '/contact', label: 'Contact'       },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,15,30,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* ── Logo ──────────────────────────────────────────────── */}
        <NavLink to="/" onClick={close} className="flex items-center gap-2.5">
          <Logo size={34} animated={false} />
          <span
            className="hidden sm:block font-semibold text-white text-sm tracking-wide"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Institute Technical Council
          </span>
        </NavLink>

        {/* ── Desktop links ─────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
                style={({ isActive }) =>
                  isActive ? { background: 'rgba(0,102,255,0.15)', color: '#60A5FA' } : {}
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Hamburger (mobile) ────────────────────────────────── */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 }  : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-slate-300 origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-5 h-0.5 bg-slate-300"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-slate-300 origin-center"
          />
        </button>
      </nav>

      {/* ── Mobile drawer ─────────────────────────────────────────── */}
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
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <ul className="flex flex-col px-4 py-3 gap-1 list-none m-0">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={close}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
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
