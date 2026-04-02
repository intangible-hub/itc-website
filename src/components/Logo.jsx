/**
 * Logo — ITC hexagonal mark with circuit traces.
 *
 * Props:
 *  size     — pixel size of the hex (default 36)
 *  showText — show "ITC" wordmark beside the hex (default false)
 *  animated — slow pulse-glow animation (default true)
 */
export default function Logo({ size = 36, showText = false, animated = true }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none" style={{ lineHeight: 1 }}>
      {/* ── Hex mark ─────────────────────────────────────────── */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={animated ? { animation: 'pulse-glow 3s ease-in-out infinite' } : {}}
        aria-label="ITC logo"
      >
        {/* Outer hexagon */}
        <path
          d="M24 3 L42 13.5 L42 34.5 L24 45 L6 34.5 L6 13.5 Z"
          fill="rgba(0,102,255,0.12)"
          stroke="#0066FF"
          strokeWidth="1.5"
        />
        {/* Circuit traces from centre */}
        <line x1="24" y1="24" x2="24" y2="13"  stroke="#0066FF" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="24" y1="24" x2="33" y2="29"  stroke="#0066FF" strokeWidth="1.3" strokeLinecap="round"/>
        <line x1="24" y1="24" x2="15" y2="29"  stroke="#0066FF" strokeWidth="1.3" strokeLinecap="round"/>
        {/* Outer nodes */}
        <circle cx="24" cy="13" r="2.5" fill="#0066FF"/>
        <circle cx="33" cy="29" r="2.5" fill="#0066FF"/>
        <circle cx="15" cy="29" r="2.5" fill="#0066FF"/>
        {/* Centre node */}
        <circle cx="24" cy="24" r="4"   fill="#0066FF" opacity="0.9"/>
        <circle cx="24" cy="24" r="2"   fill="#E0EEFF"/>
      </svg>

      {/* ── Optional wordmark ────────────────────────────────── */}
      {showText && (
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: size * 0.44,
          letterSpacing: '0.04em',
          color: '#F1F5F9',
        }}>
          ITC<span style={{ color: '#0066FF' }}>.</span>
        </span>
      )}
    </span>
  );
}
