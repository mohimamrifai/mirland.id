import { SparklesIcon, CheckIcon } from './Icons';

const steps = [
  {
    n: '01',
    title: 'Konsultasi Gratis',
    desc: 'Ceritakan kebutuhan bisnis Anda via WhatsApp. Kami dengarkan, beri rekomendasi, dan estimasi harga transparan.',
  },
  {
    n: '02',
    title: 'Brief & Penawaran',
    desc: 'Setelah deal, kami susun brief detail dan timeline pengerjaan yang jelas untuk Anda setujui.',
  },
  {
    n: '03',
    title: 'Desain & Development',
    desc: 'Tim mulai mengerjakan. Anda akan menerima preview berkala untuk memastikan arah sesuai.',
  },
  {
    n: '04',
    title: 'Revisi & Launch',
    desc: 'Revisi sampai OK, lalu website di-deploy ke domain & hosting Anda. Dilatih cara mengelolanya.',
  },
];

const Process = () => {
  return (
    <section id="process" className="relative bg-ink-50 py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">
            <SparklesIcon className="h-3.5 w-3.5 text-brand-500" />
            Cara kerja
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 section-title">
            Dari brief ke <span className="text-gradient">launch</span> dalam 4 langkah
          </h2>
          <p className="reveal reveal-delay-2 mx-auto section-subtitle">
            Proses yang jelas, komunikasi yang responsif, dan hasil yang bisa Anda andalkan.
          </p>
        </div>

        <ol className="reveal reveal-delay-3 mt-14 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-ink-200/70 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl font-bold text-ink-200 transition-colors group-hover:text-brand-200 sm:text-5xl">
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <span
                    className="absolute right-6 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-ink-200 to-transparent lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                <span>Termasuk di setiap paket</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
