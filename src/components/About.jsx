import { CheckIcon, SparklesIcon, ArrowUpRightIcon } from './Icons';

const points = [
  'Brief jelas, tanpa jargon teknis',
  'Desain custom, bukan template pasaran',
  'Revisi sampai Anda puas',
  'Garansi support setelah launch',
];

const About = () => {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-28 lg:py-32">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <div className="reveal relative">
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-radial from-brand-100 via-brand-50/50 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-ink-50 to-white p-8 shadow-card sm:p-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
                <p className="font-display text-3xl font-bold text-ink-900">120+</p>
                <p className="mt-1 text-sm text-ink-600">Website selesai</p>
              </div>
              <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
                <p className="font-display text-3xl font-bold text-ink-900">7 hari</p>
                <p className="mt-1 text-sm text-ink-600">Rata-rata pengerjaan</p>
              </div>
              <div className="col-span-2 rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['#4f46e5', '#7c3aed', '#ec4899', '#f59e0b'].map((c, i) => (
                      <span
                        key={c}
                        className="inline-block h-8 w-8 rounded-full border-2 border-white"
                        style={{ background: c, zIndex: 4 - i }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Tim ahli</p>
                    <p className="text-xs text-ink-500">Desainer + Developer berpengalaman</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code-style accent */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-ink-200 bg-ink-950 text-ink-100 shadow-soft">
              <div className="flex items-center gap-1.5 border-b border-ink-800 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-ink-500">
                  mirland.config.js
                </span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
{`export default {
  client: 'Anda',
  stack: ['Next.js', 'Tailwind', 'Node'],
  design: 'premium',
  seo: true,
  responsive: true,
  support: '7×24',
  delivered: '✓'
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="eyebrow reveal">
            <SparklesIcon className="h-3.5 w-3.5 text-brand-500" />
            Tentang Mirland.id
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 section-title">
            Partner teknologi untuk <span className="text-gradient">pertumbuhan</span> bisnis Anda
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Kami adalah studio web development yang fokus pada hasil: website yang tidak
            hanya indah dilihat, tetapi juga menghasilkan leads, penjualan, dan kredibilitas
            untuk brand Anda.
          </p>
          <p className="reveal reveal-delay-3 mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
            Dari landing page hingga aplikasi web kustom — kami sudah mengerjakan ratusan
            project untuk UMKM, personal brand, hingga korporasi.
          </p>

          <ul className="reveal reveal-delay-3 mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckIcon className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-ink-800">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#process"
            className="reveal reveal-delay-4 group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
          >
            Lihat cara kerja kami
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
