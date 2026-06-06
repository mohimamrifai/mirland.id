import { ArrowRightIcon, SparklesIcon, WhatsAppIcon, CheckIcon } from './Icons';

const waLink =
  'https://api.whatsapp.com/send?phone=6282118668919&text=Halo%20admin%20Mirland%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.';

const benefits = ['Konsultasi gratis', 'Tanpa komitmen', 'Penawaran transparan'];

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      {/* Decorative gradients */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 -z-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10 text-center">
        <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-200 backdrop-blur">
          <SparklesIcon className="h-3.5 w-3.5 text-accent-400" />
          Siap memulai?
        </span>

        <h2 className="reveal reveal-delay-1 mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          Website profesional adalah <span className="text-gradient-warm">investasi</span>,
          <br className="hidden sm:block" /> bukan pengeluaran.
        </h2>

        <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
          Setiap hari tanpa website yang optimal adalah peluang yang hilang. Mulai
          percakapan singkat dengan kami — tanpa komitmen, tanpa biaya.
        </p>

        <div className="reveal reveal-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp btn-lg w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>Mulai Konsultasi</span>
          </a>
          <a
            href="#pricing"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
          >
            <span>Lihat Paket</span>
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <ul className="reveal reveal-delay-4 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-300">
          {benefits.map((b) => (
            <li key={b} className="inline-flex items-center gap-1.5">
              <CheckIcon className="h-4 w-4 text-emerald-400" strokeWidth={3} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CallToAction;
