/**
 * Sample events data for the Events page.
 * In a real deployment this would come from an API/CMS.
 * status: 'upcoming' | 'past'
 * category: 'workshop' | 'competition' | 'talk' | 'hackathon'
 */

export const events = [
  // ── Upcoming ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Robotics Workshop — Line Follower',
    organiser: 'ERC',
    date: '2025-04-12',
    location: 'ERC Lab, Ground Floor, Mechanical Building',
    category: 'workshop',
    status: 'upcoming',
    description:
      'Build and program a line-following robot from scratch. All components provided. Prerequisites: basic C++ knowledge.',
    image: null,
  },
  {
    id: 2,
    title: 'Introduction to Web Development',
    organiser: 'WnCC',
    date: '2025-04-18',
    location: 'KReSIT Seminar Room',
    category: 'workshop',
    status: 'upcoming',
    description:
      'Hands-on bootcamp covering HTML, CSS, JS and React fundamentals. Targeted at freshers and those new to web development.',
    image: null,
  },
  {
    id: 3,
    title: 'TechFest IIT Bombay — Asia\'s Largest Science & Tech Festival',
    organiser: 'ITC',
    date: '2025-12-27',
    location: 'IIT Bombay Campus',
    category: 'competition',
    status: 'upcoming',
    description:
      'Annual international science and technology festival with competitions, workshops, and exhibitions attended by 180,000+ participants.',
    image: null,
  },
  {
    id: 4,
    title: 'Night Sky Observation Session',
    organiser: 'Krittika',
    date: '2025-04-25',
    location: 'IIT Bombay Lakeside',
    category: 'talk',
    status: 'upcoming',
    description:
      'Special session to observe Saturn and its rings. Telescopes provided. No prior knowledge needed.',
    image: null,
  },
  {
    id: 5,
    title: 'Maker\'s Hack — Hardware Hackathon',
    organiser: 'Tinkerers Laboratory',
    date: '2025-05-10',
    location: 'Tinkerers Laboratory',
    category: 'hackathon',
    status: 'upcoming',
    description:
      '24-hour hardware hackathon. Soldering irons, microcontrollers, 3D printers — everything available on-site.',
    image: null,
  },

  // ── Past ──────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Summer of Code — Open Source Sprint',
    organiser: 'WnCC',
    date: '2024-10-05',
    location: 'Online',
    category: 'hackathon',
    status: 'past',
    description:
      'Month-long open-source contribution sprint. 120+ students merged PRs to real-world projects including Mozilla Firefox and NumPy.',
    image: null,
  },
  {
    id: 7,
    title: 'Formula Student Design Seminar',
    organiser: 'IIT Bombay Racing',
    date: '2024-09-14',
    location: 'Victor Menezes Convention Centre',
    category: 'talk',
    status: 'past',
    description:
      'Deep-dive into the aerodynamics, suspension, and powertrain of the 2024 Formula Student car.',
    image: null,
  },
  {
    id: 8,
    title: 'PCB Design Workshop',
    organiser: 'ERC',
    date: '2024-08-30',
    location: 'ERC Lab',
    category: 'workshop',
    status: 'past',
    description:
      'Three-day workshop on KiCad — from schematic capture to Gerber export and PCB fabrication.',
    image: null,
  },
  {
    id: 9,
    title: 'Mars Rover — URC Selection Presentation',
    organiser: 'Mars Rover Team',
    date: '2024-08-01',
    location: 'Online',
    category: 'competition',
    status: 'past',
    description:
      'Team presented their System Acceptance Review (SAR) video to qualify for the University Rover Challenge in Utah, USA.',
    image: null,
  },
  {
    id: 10,
    title: 'Astrophotography Competition',
    organiser: 'Krittika',
    date: '2024-07-20',
    location: 'IIT Bombay',
    category: 'competition',
    status: 'past',
    description:
      'Campus-wide astrophotography competition with prizes for best deep-sky and solar system categories.',
    image: null,
  },
];
