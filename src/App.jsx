/**
 * App.jsx — root component.
 *
 * Responsibilities:
 *  - Sets up React Router with BrowserRouter
 *  - Wraps all routes in <AnimatePresence> for page transitions
 *  - Renders the persistent Navbar and Footer around all page content
 *
 * Route map:
 *   /          → Home
 *   /about     → About
 *   /events    → Events
 *   /team      → Meet The Team
 *   /contact   → Contact
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import Home    from './pages/Home';
import About   from './pages/About';
import Events  from './pages/Events';
import Team    from './pages/Team';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      {/*
        AnimatePresence monitors when children are added/removed.
        The `key` prop on the Routes wrapper tells Framer Motion that
        the child changed, triggering exit → enter animations.
      */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"        element={<Home    />} />
            <Route path="/about"   element={<About   />} />
            <Route path="/events"  element={<Events  />} />
            <Route path="/team"    element={<Team    />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
