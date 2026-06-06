import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ArrowRightIcon, SparklesIcon, PlayIcon, StarIcon, WhatsAppIcon } from './Icons';

const waLink =
  'https://api.whatsapp.com/send?phone=6282118668919&text=Halo%20admin%20Mirland%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.';

const stats = [
  { value: '120+', label: 'Website selesai' },
  { value: '50+', label: 'Klien aktif' },
  { value: '4.9/5', label: 'Rating klien' },
  { value: '7×24', label: 'Support' },
];

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Landing Page Konversi Tinggi',
        'Company Profile Profesional',
        'Toko Online Modern',
        'Custom Web Application',
        'Website SEO Friendly',
      ],
      typeSpeed: 65,
      backSpeed: 28,
      smartBackspace: true,
      startDelay: 400,
      loop: true,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Decorative background layers */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-radial from-brand-200/50 via-brand-100/20 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 animate-blob rounded-full bg-accent-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 bottom-0 -z-10 h-72 w-72 animate-blob rounded-full bg-brand-300/30 blur-3xl"
        style={{ animationDelay: '-4s' }}
        aria-hidden="true"
      />

      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mb-6 inline-flex">
            <span className="eyebrow">
              <SparklesIcon className="h-3.5 w-3.5 text-accent-500" />
              <span>Jasa Pembuatan Website Custom Profesional</span>
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            Bangun Website
            <br className="hidden sm:block" />{' '}
            <span className="text-gradient">Profesional</span> untuk
            <br className="hidden sm:block" /> Bisnis Anda
          </h1>

          <div className="reveal reveal-delay-2 mt-6 flex items-center justify-center gap-3 text-lg font-medium text-ink-700 sm:text-2xl">
            <span className="hidden h-px w-8 bg-ink-300 sm:block" aria-hidden="true" />
            <span className="flex items-center gap-2 sm:gap-3">
              <ArrowRightIcon className="h-5 w-5 text-brand-500 sm:h-6 sm:w-6" />
              <span ref={el} className="text-brand-600" aria-live="polite" />
            </span>
            <span className="hidden h-px w-8 bg-ink-300 sm:block" aria-hidden="true" />
          </div>

          <p className="reveal reveal-delay-3 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
            Desain modern, mobile responsive, SEO friendly, dan siap convert. Cocok untuk
            UMKM, personal brand, dan korporasi — mulai dari <span className="font-semibold text-ink-900">Rp499 ribu</span>.
          </p>

          <div className="reveal reveal-delay-4 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg w-full sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" />
              <span>Konsultasi Gratis</span>
            </a>
            <a href="#pricing" className="btn-secondary btn-lg w-full sm:w-auto">
              <PlayIcon className="h-4 w-4" />
              <span>Lihat Paket Harga</span>
            </a>
          </div>

          {/* Social proof */}
          <div className="reveal reveal-delay-4 mt-8 flex flex-col items-center justify-center gap-3 text-sm text-ink-500 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-1.5" aria-label="Rating 4.9 dari 5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
              ))}
              <span className="ml-1.5 font-semibold text-ink-700">4.9/5</span>
            </div>
            <span className="hidden h-4 w-px bg-ink-200 sm:block" aria-hidden="true" />
            <span>Dipercaya 50+ brand di Indonesia</span>
          </div>
        </div>

        {/* Stats card */}
        <dl className="reveal reveal-delay-4 mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-ink-200/70 bg-white/80 p-5 text-center shadow-soft backdrop-blur"
            >
              <dt className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-500 sm:text-sm">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
