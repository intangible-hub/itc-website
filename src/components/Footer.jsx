/**
 * Footer — shared across all pages.
 * Contains ITC links, social links and a copyright notice.
 */

import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About ITC' },
  { to: '/events',  label: 'Events' },
  { to: '/team',    label: 'Meet The Team' },
  { to: '/contact', label: 'Contact Us' },
];

const externalLinks = [
  { href: 'https://itc.gymkhana.iitb.ac.in', label: 'ITC Gymkhana' },
  { href: 'https://tech-iitb.org',            label: 'Tech@IITB' },
  { href: 'https://techfest.org',             label: 'TechFest' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(10,15,30,0.95)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── Brand column ──────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: '#0066FF' }}
              >
                ITC
              </span>
              <div>
                <p className="font-bold text-white text-sm">Institute Technical Council</p>
                <p className="text-xs" style={{ color: '#60A5FA' }}>IIT Bombay</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Fostering a culture of innovation and technology at IIT Bombay since its inception.
            </p>
            <p
              className="mt-3 font-semibold tracking-widest text-sm"
              style={{ color: '#0066FF' }}
            >
              Tinker · Innovate · Create
            </p>
          </div>

          {/* ── Quick links ───────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── External links ────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Related Sites
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {externalLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Institute Technical Council, IIT Bombay. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Students' Gymkhana, IIT Bombay
          </p>
        </div>
      </div>
    </footer>
  );
}
