/**
 * Footer — shared across all pages.
 */

import { Link } from 'react-router-dom';
import Logo from './Logo';

const quickLinks = [
  { to: '/',        label: 'Home'         },
  { to: '/about',   label: 'About ITC'    },
  { to: '/events',  label: 'Events'       },
  { to: '/team',    label: 'Meet The Team'},
  { to: '/contact', label: 'Contact Us'   },
];

const externalLinks = [
  { href: 'https://itc.gymkhana.iitb.ac.in', label: 'ITC Gymkhana' },
  { href: 'https://tech-iitb.org',            label: 'Tech@IITB'    },
  { href: 'https://techfest.org',             label: 'TechFest'     },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(8,12,26,0.98)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand ─────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <Logo size={38} animated={false} />
              <div>
                <p className="font-bold text-white text-sm"
                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Institute Technical Council
                </p>
                <p className="text-xs" style={{ color: '#60A5FA' }}>IIT Bombay</p>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Fostering a culture of innovation and technology at IIT Bombay.
            </p>
            <p className="mt-4 text-sm font-semibold tracking-widest gradient-text"
               style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Tinker · Innovate · Create
            </p>
          </div>

          {/* ── Quick links ───────────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}
                    className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── External links ────────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Related Sites
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {externalLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                     className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
             style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Institute Technical Council, IIT Bombay.
          </p>
          <p className="text-slate-700 text-xs">Students' Gymkhana, IIT Bombay</p>
        </div>
      </div>
    </footer>
  );
}
