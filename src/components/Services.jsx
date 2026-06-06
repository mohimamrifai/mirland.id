import {
  StarIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  PencilSquareIcon,
  BoltIcon,
  SparklesIcon,
  ArrowUpRightIcon,
} from './Icons';

const services = [
  {
    name: 'Desain Premium',
    description:
      'Tampilan modern, bersih, dan konsisten dengan identitas brand Anda. Dibangun bersama desainer UI/UX berpengalaman.',
    icon: StarIcon,
    span: 'sm:col-span-2 lg:col-span-2',
    accent: 'from-brand-500/15 to-brand-500/0',
  },
  {
    name: 'Mobile Responsive',
    description: 'Tampil sempurna di smartphone, tablet, dan desktop.',
    icon: DevicePhoneMobileIcon,
    span: 'sm:col-span-1',
    accent: 'from-accent-400/20 to-accent-400/0',
  },
  {
    name: 'SEO Friendly',
    description: 'Struktur semantic, metadata, dan performa optimal untuk Google.',
    icon: ChartBarIcon,
    span: 'sm:col-span-1',
    accent: 'from-emerald-400/20 to-emerald-400/0',
  },
  {
    name: 'Copywriting',
    description: 'Teks yang menjual, bukan sekadar deskripsi.',
    icon: PencilSquareIcon,
    span: 'sm:col-span-1',
    accent: 'from-rose-400/20 to-rose-400/0',
  },
  {
    name: 'Performa Cepat',
    description: 'Loading cepat, skor Lighthouse 90+ untuk UX terbaik.',
    icon: BoltIcon,
    span: 'sm:col-span-1',
    accent: 'from-amber-400/20 to-amber-400/0',
  },
  {
    name: 'Bonus & Revisi',
    description:
      'Free hosting 1 tahun, domain .com/.id, dan revisi sampai OK sesuai brief.',
    icon: SparklesIcon,
    span: 'sm:col-span-2 lg:col-span-2',
    accent: 'from-violet-500/15 to-violet-500/0',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">
            <SparklesIcon className="h-3.5 w-3.5 text-brand-500" />
            Layanan
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 section-title">
            Fitur & pelayanan <span className="text-gradient">berkualitas</span>
          </h2>
          <p className="reveal reveal-delay-2 mx-auto section-subtitle">
            Setiap website yang kami bangun mengikuti standar terbaru — dari estetika
            hingga performa dan SEO.
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className={`group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ink-300 hover:shadow-card-hover sm:p-7 ${s.span}`}
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-radial ${s.accent} opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.description}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Pelajari lebih <ArrowUpRightIcon className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
