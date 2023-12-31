import React from "react";
import {
  RocketLaunchIcon,
  StarIcon,
  DevicePhoneMobileIcon,
  ArrowTrendingUpIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";

import about from './../assets/about.svg'

const features = [
  {
    name: "High Quality Design : ",
    description:
      "Kami menawarkan desain website yang menarik, modern, dan profesional, sehingga dapat meningkatkan citra bisnis Anda. Dibuat oleh profesional UI/UX Designer yang berpengalaman.",
    icon: StarIcon,
  },
  {
    name: "Responsive : ",
    description:
      "Website yang telah kami rancang memiliki tampilan responsif, sehingga dapat diakses dengan sempurna dari berbagai perangkat seperti PC, Laptop, Tablet, dan Smartphone.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "SEO Friendly : ",
    description:
      "Website yang kami buat memiliki struktur yang SEO Friendly, sehingga dapat membantu website Anda untuk mendapatkan peringkat yang lebih baik di mesin pencari seperti Google.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Copywriting : ",
    description:
      "Website yang kami buat sudah termasuk copywriting, membuat website Anda lebih mudah dipahami oleh pengunjung.",
    icon: PencilSquareIcon,
  },
  {
    name: "Pengerjaan Cepat : ",
    description:
      "Kami menawarkan pengerjaan website yang cepat dan efektif, sehingga Anda dapat segera memanfaatkan website untuk kebutuhan bisnis Anda.",
    icon: RocketLaunchIcon,
  },
];

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
              <p className="mt-2 display-font text-3xl font-bold tracking-normal text-gray-900 sm:text-4xl">
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
            className="w-[20rem] max-w-none sm:w-[40rem] md:-ml-4 lg:-ml-0"
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
