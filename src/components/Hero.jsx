import React from "react";
import Typed from "typed.js";

const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  const bulan = new Date().getMonth() + 1;
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const teksPesan = `https://api.whatsapp.com/send?phone=6282118668919&text=Halo%20admin%20mirland%2C%20saya%20mau%20pesan%20website%20dengan%20harga%20diskon%205%25`;

  React.useEffect(() => {
    const typed = new Typed("#textberjalan", {
      strings: [
        "Landing Page",
        "Company Profile",
        "E-Commerce",
        "Blog",
        "Personal Website",
      ],
      typeSpeed: 130,
      backSpeed: 30,
      startDelay: 800,
      loop: true,
      showCursor: false,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative isolate px-3 pt-10">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <h3 className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 animate__animated animate__zoomIn">
            Dapatkan Promo Esklusif Bulan {namaBulan[bulan - 1]}{" "}
            <a
              target="_blank"
              href={teksPesan}
              className="font-semibold text-indigo-600 hover:ms-3 duration-200"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Ambil Promo <span aria-hidden="true">&rarr;</span>
            </a>
          </h3>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-normal text-gray-900 sm:text-5xl animate__animated animate__fadeInDown display-font">
            Jasa Pembuatan Website Profesional Untuk Berbagai Macam Kebutuhan
          </h1>{" "}
          <br />
          <div className="flex items-center justify-between w-11/12 lg:w-8/12 mx-auto text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 animate__animated animate__fadeInDown">
          👉
            <span className="text-indigo-600" ref={el} id="textberjalan"></span>
            👈
          </div>
          <p className="mt-6 text-lg leading-6 text-gray-600 animate__animated animate__fadeInDown">
            Membuat Website Dengan High Quality Design, Responsive, SEO Friendly
            Untuk Berbagai Macam Kebutuhan Anda.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=6282118668919&text=Halo%20admin%20mirland%2C%20"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate__animated animate__fadeInLeft"
            >
              Chat Sekarang
            </a>
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-gray-900 animate__animated animate__fadeInRight hover:ms-3 duration-200"
            >
              Tentang Kami <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
