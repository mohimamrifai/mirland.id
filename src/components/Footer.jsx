import Logo from './Logo';
import { WhatsAppIcon, ArrowRightIcon, CheckIcon } from './Icons';

const nav = {
  Layanan: [
    { name: 'Landing Page', href: '#pricing' },
    { name: 'Company Profile', href: '#pricing' },
    { name: 'Toko Online', href: '#pricing' },
    { name: 'Custom Web App', href: '#pricing' },
  ],
  Perusahaan: [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Cara Kerja', href: '#process' },
    { name: 'Harga', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ],
};

const waLink =
  'https://api.whatsapp.com/send?phone=6282118668919&text=Halo%20admin%20Mirland%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-wide relative z-10 py-16 sm:py-20">
        {/* CTA strip */}
        <div className="reveal rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 via-violet-600/10 to-transparent p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Siap punya website profesional?
              </h3>
              <p className="mt-2 text-sm text-ink-300 sm:text-base">
                Chat kami sekarang untuk konsultasi gratis — biasanya kami balas dalam
                hitungan menit.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-md flex-shrink-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Chat WhatsApp</span>
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div>
              <Logo tone="dark" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Jasa Pembuatan Website Custom Profesional. Partner teknologi untuk
              pertumbuhan bisnis Anda — dari UMKM hingga korporasi.
            </p>
            <ul className="mt-5 space-y-1.5 text-xs text-ink-400">
              {['Konsultasi gratis', 'Revisi sampai OK', 'Support 7×24'].map((b) => (
                <li key={b} className="flex items-center gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 text-emerald-400" strokeWidth={3} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {items.map((it) => (
                  <li key={it.name}>
                    <a
                      href={it.href}
                      className="text-sm text-ink-400 transition-colors hover:text-white"
                    >
                      {it.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Kontak
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-400">
              <li>
                <span className="block text-xs uppercase tracking-wider text-ink-500">
                  WhatsApp
                </span>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 inline-block text-ink-200 transition-colors hover:text-white"
                >
                  +62 821-1866-8919
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-ink-500">
                  Layanan
                </span>
                <span className="mt-0.5 block text-ink-200">7×24 jam</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-ink-500">
                  Area
                </span>
                <span className="mt-0.5 block text-ink-200">Seluruh Indonesia (remote)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Mirland.id. Hak cipta dilindungi.
          </p>
          <p className="text-xs text-ink-500">
            Dibuat dengan perhatian oleh tim{' '}
            <span className="font-semibold text-ink-300">Mirland</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
