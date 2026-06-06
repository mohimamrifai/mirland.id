import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import Logo from './Logo';
import { Bars3Icon, XMarkIcon, ArrowRightIcon, WhatsAppIcon } from './Icons';

const navigation = [
  { name: 'Layanan', href: '#services' },
  { name: 'Harga', href: '#pricing' },
  { name: 'Proses', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

const waLink =
  'https://api.whatsapp.com/send?phone=6282118668919&text=Halo%20admin%20Mirland%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur border-b border-ink-200/60 shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex items-center justify-between py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#top" className="no-tap-highlight -m-1.5 p-1.5" aria-label="Beranda Mirland.id">
            <Logo />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:flex-1 lg:justify-end">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp btn-sm hidden sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
          <a href="#pricing" className="btn-primary btn-sm hidden lg:inline-flex">
            <span>Mulai Sekarang</span>
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="no-tap-highlight -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ink-700 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Buka menu utama"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-ink-950/30 backdrop-blur-sm" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <a href="#top" onClick={() => setMobileMenuOpen(false)} aria-label="Beranda Mirland.id">
              <Logo />
            </a>
            <button
              type="button"
              className="no-tap-highlight -m-2.5 rounded-md p-2.5 text-ink-700"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Tutup menu"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-2 divide-y divide-ink-200">
              <div className="space-y-1 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold text-ink-900 transition-colors hover:bg-ink-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="space-y-3 py-6">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp btn-md w-full"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Chat WhatsApp</span>
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary btn-md w-full"
                >
                  <span>Mulai Sekarang</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
