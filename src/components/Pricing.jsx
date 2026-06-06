import { CheckIcon, XMarkIcon, ArrowRightIcon, SparklesIcon, WhatsAppIcon } from './Icons';

const waLink =
  'https://api.whatsapp.com/send?phone=6282118668919&text=Halo%20admin%20Mirland%2C%20saya%20tertarik%20dengan%20paket%20website.';

const Check = ({ children, negative = false, dark = false }) => (
  <li className="flex items-start gap-3">
    <span
      className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
        negative
          ? dark
            ? 'bg-white/10 text-ink-400'
            : 'bg-ink-100 text-ink-400'
          : dark
            ? 'bg-emerald-400/20 text-emerald-300 ring-1 ring-inset ring-emerald-400/30'
            : 'bg-emerald-100 text-emerald-700'
      }`}
    >
      {negative ? <XMarkIcon className="h-3 w-3" strokeWidth={3} /> : <CheckIcon className="h-3 w-3" strokeWidth={3} />}
    </span>
    <span
      className={`text-sm ${
        negative
          ? dark
            ? 'text-ink-400 line-through'
            : 'text-ink-400 line-through'
          : dark
            ? 'text-ink-100'
            : 'text-ink-700'
      }`}
    >
      {children}
    </span>
  </li>
);

const plans = [
  {
    name: 'Starter',
    tagline: 'Cocok untuk landing page produk atau jasa',
    price: '499K',
    period: 'sekali bayar',
    features: [
      { text: '1 halaman landing page' },
      { text: 'Hosting 1 tahun' },
      { text: 'Domain .com' },
      { text: 'Template premium' },
      { text: 'SEO on-page dasar' },
      { text: 'Tombol WhatsApp' },
      { text: 'Mobile responsive' },
      { text: 'Revisi sampai OK' },
      { text: 'Bantu buat konten', negative: true },
      { text: 'Copywriting', negative: true },
    ],
    cta: 'Pilih Starter',
    highlight: false,
  },
  {
    name: 'Business',
    tagline: 'Paling populer untuk UMKM & personal brand',
    price: '999K',
    period: 'sekali bayar',
    features: [
      { text: 'Hingga 5 halaman' },
      { text: 'Hosting 1 tahun' },
      { text: 'Domain .com / .id' },
      { text: 'Desain custom premium' },
      { text: 'SEO on-page lengkap' },
      { text: 'Tombol WhatsApp' },
      { text: 'Mobile responsive' },
      { text: 'Revisi sampai OK' },
      { text: 'Bantu buat konten' },
      { text: 'Copywriting' },
    ],
    cta: 'Pilih Business',
    highlight: true,
    badge: 'Paling Populer',
  },
  {
    name: 'Custom',
    tagline: 'Web app, dashboard, atau sistem internal',
    price: 'Mulai Chat',
    period: 'penawaran khusus',
    features: [
      { text: 'Full custom development' },
      { text: 'Database & API sendiri' },
      { text: 'Admin dashboard' },
      { text: 'Login & autentikasi' },
      { text: 'Hosting 1 tahun' },
      { text: 'Domain custom' },
      { text: 'Dokumentasi teknis' },
      { text: 'Revisi sampai OK' },
    ],
    cta: 'Konsultasi Custom',
    highlight: false,
  },
];

const tools = ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB'];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">
            <SparklesIcon className="h-3.5 w-3.5 text-brand-500" />
            Paket Harga
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 section-title">
            Pilih paket yang <span className="text-gradient">sesuai</span> kebutuhan Anda
          </h2>
          <p className="reveal reveal-delay-2 mx-auto section-subtitle">
            Harga transparan, tanpa biaya tersembunyi. Garansi revisi sampai Anda puas.
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-6 transition-all duration-300 sm:p-8 ${
                p.highlight
                  ? 'border border-brand-500/40 bg-gradient-to-br from-brand-600 via-brand-700 to-violet-700 text-white shadow-glow ring-1 ring-inset ring-white/10 lg:scale-[1.02]'
                  : 'border border-ink-200 bg-white text-ink-900 shadow-soft hover:border-ink-300 hover:shadow-card-hover'
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-glow ring-1 ring-brand-200">
                  {p.badge}
                </span>
              )}

              <div>
                <h3
                  className={`font-display text-xl font-bold ${
                    p.highlight ? 'text-white' : 'text-ink-900'
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-1.5 text-sm ${
                    p.highlight ? 'text-brand-100' : 'text-ink-600'
                  }`}
                >
                  {p.tagline}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span
                  className={`font-display text-4xl font-bold ${
                    p.highlight ? 'text-white' : 'text-ink-900'
                  }`}
                >
                  {p.price.startsWith('Rp') || p.price === 'Mulai Chat' ? p.price : `Rp${p.price}`}
                </span>
              </div>
              <p
                className={`mt-1 text-xs ${
                  p.highlight ? 'text-brand-200' : 'text-ink-500'
                }`}
              >
                {p.period}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {p.features.map((f, i) => (
                  <Check key={i} negative={f.negative} dark={p.highlight}>
                    {f.text}
                  </Check>
                ))}
              </ul>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                  p.highlight
                    ? 'bg-white text-brand-700 shadow-glow hover:bg-brand-50'
                    : 'bg-brand-600 text-white shadow-glow hover:bg-brand-700'
                }`}
              >
                {p.name === 'Custom' ? (
                  <>
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>{p.cta}</span>
                  </>
                ) : (
                  <>
                    <span>{p.cta}</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </>
                )}
              </a>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center justify-center gap-2 text-xs text-ink-500">
          <span>Custom package menggunakan:</span>
          {tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md bg-ink-100 px-2 py-1 font-medium text-ink-700 ring-1 ring-inset ring-ink-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
