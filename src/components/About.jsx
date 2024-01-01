import React from "react";

import about from './../assets/about.svg'


const About = () => {
  return (
    <div id="about" className="overflow-hidden pb-10 mt-10 lg:mt-5 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 " data-aos="fade-up">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-7 text-indigo-600">
                Tentang Kami
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-normal text-gray-900 sm:text-4xl">
                Jasa Pembuatan Website{" "}
                <span className="text-indigo-600">Mirland.id</span>{" "}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Kami merupakan penyedia jasa pembuatan website untuk berbagai
                kebutuhan, dengan keunggulan High Quality Design, Responsive,
                SEO Friendly, Copywriting, serta pengerjaan yang cepat dan
                efektif.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Kami Sudah membuat berbagai macam website mulai dari landing
                page produk, landing page jasa, personal website, company
                profil, blog, Toko online dan lainnya.
              </p>
            </div>
          </div>
          <img
            src={about}
            alt="Gambar about"
            className="w-[20rem] max-w-none sm:w-[35rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
