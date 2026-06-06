import {
  ServerStackIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckIcon,
} from './Icons';

const features = [
  {
    name: 'Hosting & Domain',
    desc: 'Termasuk 1 tahun hosting + domain .com/.id. Tidak perlu pusing setup teknis.',
    icon: ServerStackIcon,
  },
  {
    name: 'Full Support',
    desc: 'Tim support responsif 7×24. Chat, telepon, atau remote — siap membantu.',
    icon: UserGroupIcon,
  },
  {
    name: 'Pengerjaan Cepat',
    desc: 'Landing page 3–5 hari, company profile 7–14 hari. Deadline kami hormati.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Keamanan Standar',
    desc: 'HTTPS, proteksi dasar, dan backup rutin untuk menjaga website tetap aman.',
    icon: ShieldCheckIcon,
  },
];

const guarantees = ['Revisi sampai OK', 'Source code milik Anda', 'Tanpa biaya tersembunyi', 'Garansi support 30 hari'];

const Featured = () => {
  return (
    <section className="relative bg-ink-50 py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">
            <SparklesIcon className="h-3.5 w-3.5 text-brand-500" />
            Jaminan
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 section-title">
            Komitmen kami untuk <span className="text-gradient">kepuasan Anda</span>
          </h2>
          <p className="reveal reveal-delay-2 mx-auto section-subtitle">
            Setiap paket sudah termasuk benefit yang membuat Anda tenang — dari garansi
            revisi hingga dukungan teknis setelah launch.
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {features.map((f) => (
            <div
              key={f.name}
              className="group rounded-2xl border border-ink-200/70 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <f.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {f.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink-700">
          {guarantees.map((g) => (
            <span key={g} className="inline-flex items-center gap-1.5">
              <CheckIcon className="h-4 w-4 text-emerald-600" strokeWidth={3} />
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
