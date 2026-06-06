/**
 * Mirland brand mark — abstract "M" formed by two upward bars + a subtle peak.
 * Distinctive, scalable, and renders crisply at any size.
 *
 * Props:
 *  - className: extra classes for the wrapper/mark
 *  - mark: render just the icon, no wordmark
 *  - tone: 'light' (default) for light backgrounds, 'dark' for dark backgrounds
 */
export default function Logo({ className = '', mark = false, tone = 'light' }) {
  const isDark = tone === 'dark';
  // Unique gradient id per render to avoid SVG defs collisions when both tones
  // appear on the same page (e.g. dark navbar transient + light page content).
  const gid = `mirland-grad-${isDark ? 'd' : 'l'}`;

  const svg = (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={mark ? className : 'h-8 w-8'}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#${gid})`} />
      <path
        d="M7 23V9h2.4l6.6 9.9L22.6 9H25v14h-2.6V13.6L16 23.2l-6.4-9.6V23H7Z"
        fill="#fff"
      />
    </svg>
  );

  if (mark) return svg;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {svg}
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-ink-900'
        }`}
      >
        Mirland
        <span className={isDark ? 'text-brand-300' : 'text-brand-600'}>.id</span>
      </span>
    </span>
  );
}
