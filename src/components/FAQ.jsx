import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon, SparklesIcon } from './Icons';
import { faqs } from '../data/faqs';

const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow reveal">
            <SparklesIcon className="h-3.5 w-3.5 text-brand-500" />
            FAQ
          </span>
          <h2 className="reveal reveal-delay-1 mt-4 section-title">
            Pertanyaan yang <span className="text-gradient">sering diajukan</span>
          </h2>
          <p className="reveal reveal-delay-2 mx-auto section-subtitle">
            Belum menemukan jawaban yang Anda cari? Chat kami — kami fast response.
          </p>
        </div>

        <div className="reveal reveal-delay-3 mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((item) => (
            <Disclosure
              key={item.q}
              as="div"
              className="group overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-soft transition-all duration-300 hover:border-ink-300 data-[open]:border-brand-300 data-[open]:shadow-card"
            >
              <Disclosure.Button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink-900 transition-colors data-[hover]:bg-ink-50 sm:px-6 sm:py-5 sm:text-lg">
                <span className="flex-1">{item.q}</span>
                <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-data-[open]:rotate-180 group-data-[open]:bg-brand-600 group-data-[open]:text-white">
                  <PlusIcon className="h-4 w-4 group-data-[open]:hidden" />
                  <MinusIcon className="hidden h-4 w-4 group-data-[open]:block" />
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pb-5 text-sm leading-relaxed text-ink-600 sm:px-6 sm:pb-6 sm:text-base">
                {item.a}
              </Disclosure.Panel>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
