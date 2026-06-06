import { useState } from 'react';
import { WhatsAppIcon, XMarkIcon } from './Icons';

const waLink =
  'https://api.whatsapp.com/send?phone=6282118668919&text=Halo%20admin%20Mirland%2C%20saya%20ingin%20konsultasi%20pembuatan%20website.';

/**
 * Floating WhatsApp button (bottom-right).
 * - Hidden until 600px scroll for cleaner first impression.
 * - Respects mobile safe-area.
 * - Dismissable tooltip (first visit only).
 */
export default function FloatingWhatsApp() {
  const [tipOpen, setTipOpen] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      {tipOpen && (
        <div
          role="status"
          className="relative max-w-[260px] rounded-2xl border border-ink-200 bg-white px-4 py-3 pr-8 text-sm text-ink-800 shadow-card animate-fade-up"
        >
          <button
            type="button"
            onClick={() => setTipOpen(false)}
            aria-label="Tutup pesan"
            className="absolute right-2 top-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-ink-400 hover:bg-ink-100 hover:text-ink-700"
          >
            <XMarkIcon className="h-3.5 w-3.5" />
          </button>
          <p className="font-semibold text-ink-900">Halo! 👋</p>
          <p className="mt-0.5 text-ink-600">
            Butuh website profesional? Chat kami untuk konsultasi gratis.
          </p>
          <span
            className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-ink-200 bg-white"
            aria-hidden="true"
          />
        </div>
      )}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Mirland"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 -z-10 animate-pulse-soft rounded-full bg-[#25D366] opacity-60 blur-md" />
        <span className="absolute inset-0 -z-10 rounded-full ring-2 ring-white/30" />
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
