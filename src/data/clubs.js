/**
 * Static data for all ITC technical clubs and teams.
 * Separated from components so content updates don't require touching UI code.
 */

export const clubs = [
  {
    id: 'aero',
    name: 'Aeromodelling Club',
    shortName: 'Aero Club',
    description:
      'Design, build and fly model aircraft — from gliders to RC planes and drones. One of the most active clubs with inter-IIT competitions.',
    icon: '✈️',
    color: '#3B82F6',
    category: 'engineering',
  },
  {
    id: 'biox',
    name: 'BioX Club',
    shortName: 'BioX',
    description:
      'Interdisciplinary club at the intersection of biology, engineering and technology. Works on biosensors, bioinformatics and synthetic biology.',
    icon: '🧬',
    color: '#10B981',
    category: 'science',
  },
  {
    id: 'chem',
    name: 'Chemistry Club & ChemE TL',
    shortName: 'Chem Club',
    description:
      'Bridges theoretical chemistry and hands-on experiments. Organises workshops, quizzes, and collaborates with the Chemical Engineering Technical League.',
    icon: '⚗️',
    color: '#F59E0B',
    category: 'science',
  },
  {
    id: 'erc',
    name: 'Electronics & Robotics Club',
    shortName: 'ERC',
    description:
      'The go-to club for electronics hobbyists and robotics enthusiasts. Runs workshops on Arduino, PCB design, embedded systems and autonomous robots.',
    icon: '🤖',
    color: '#EF4444',
    category: 'engineering',
  },
  {
    id: 'energy',
    name: 'Energy Club',
    shortName: 'Energy Club',
    description:
      'Focused on sustainable energy solutions — solar, wind, and energy storage. Participates in national energy challenge competitions.',
    icon: '⚡',
    color: '#FBBF24',
    category: 'engineering',
  },
  {
    id: 'mnpc',
    name: 'Maths & Physics Club',
    shortName: 'MnPC',
    description:
      'For those who find beauty in equations and proofs. Organises problem-solving sessions, lectures by faculty, and inter-IIT Sci-Tech competitions.',
    icon: '🔭',
    color: '#8B5CF6',
    category: 'science',
  },
  {
    id: 'wncc',
    name: 'Web and Coding Club',
    shortName: 'WnCC',
    description:
      'The largest technical club on campus. Covers web dev, competitive programming, ML/AI, open-source contributions, and hackathons.',
    icon: '💻',
    color: '#0066FF',
    category: 'software',
  },
  {
    id: 'krittika',
    name: 'Krittika',
    shortName: 'Krittika',
    description:
      'The Astronomy Club of IIT Bombay. Night-sky observation sessions, astrophotography, telescope workshops, and participation in national Olympiads.',
    icon: '🌌',
    color: '#6366F1',
    category: 'science',
  },
  {
    id: 'tl',
    name: 'Tinkerers Laboratory',
    shortName: 'TL',
    description:
      'A maker-space with 3D printers, laser cutters, CNC machines and more. The hub for hardware prototyping on campus — open to all students.',
    icon: '🔧',
    color: '#F97316',
    category: 'engineering',
  },
];

export const techTeams = [
  {
    id: 'iitbr',
    name: 'IIT Bombay Racing',
    description: 'Formula Student race car team. Designs and builds a single-seater Formula-style car for international FSAE competitions.',
    icon: '🏎️',
  },
  {
    id: 'auv',
    name: 'AUV IIT Bombay',
    description: 'Autonomous Underwater Vehicle team. Builds submarines that navigate underwater autonomously for international RoboSub competitions.',
    icon: '🤿',
  },
  {
    id: 'mars',
    name: 'Mars Rover Team',
    description: 'Builds Mars-analogue rovers for University Rover Challenge (URC). Pushes boundaries in autonomous navigation and robotic manipulation.',
    icon: '🚀',
  },
  {
    id: 'ssp',
    name: 'Student Satellite Program',
    description: 'End-to-end student satellite project — from design to launch. One of the few student groups in India working on real satellites.',
    icon: '🛰️',
  },
  {
    id: 'umic',
    name: 'UMIC',
    description: 'Unmanned and Micro-aerial vehicles Interest Community. Focuses on drone hardware, flight controllers, and autonomous flight systems.',
    icon: '🚁',
  },
];
