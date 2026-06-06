const tools = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Vite',
  'Headless UI',
];

/**
 * Endlessly scrolling technology strip.
 * - Pure CSS marquee, GPU-friendly (transform only).
 * - Duplicated list for seamless loop.
 * - `mask-fade-x` softens the edges.
 */
export default function LogoMarquee() {
  return (
    <section
      aria-label="Teknologi yang kami gunakan"
      className="border-y border-ink-200 bg-white/60 py-10"
    >
      <p className="container-wide text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
        Dibangun dengan teknologi modern & terpercaya
      </p>
      <div className="mask-fade-x mt-6 overflow-hidden">
        <div className="flex w-max gap-12 animate-marquee motion-reduce:animate-none">
          {[...tools, ...tools].map((t, i) => (
            <div
              key={`${t}-${i}`}
              className="flex h-10 items-center px-4 font-display text-xl font-semibold tracking-tight text-ink-400 transition-colors hover:text-ink-700"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
