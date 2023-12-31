import React from "react";
import {
  DevicePhoneMobileIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";

const services = [
  {
    name: "High Quality Design",
    description:
      "Kami menawarkan desain website yang menarik, modern, dan profesional, sehingga dapat meningkatkan citra bisnis Anda. Dibuat oleh profesional UI/UX Designer yang berpengalaman.",
    icon: StarIcon,
  },
  {
    name: "Responsive",
    description:
      "Website yang telah kami rancang memiliki tampilan responsif, sehingga dapat diakses dengan sempurna dari berbagai perangkat seperti PC, Laptop, Tablet, dan Smartphone.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "SEO Friendly",
    description:
      "Website yang kami buat memiliki struktur yang SEO Friendly, sehingga dapat membantu website Anda untuk mendapatkan peringkat yang lebih baik di mesin pencari seperti Google.",
    icon: ChartBarIcon,
  },
  {
    name: "Copywriting",
    description:
      "Website yang kami buat sudah termasuk copywriting, membuat website Anda lebih mudah dipahami oleh pengunjung.",
    icon: PencilSquareIcon,
  },
  {
    name: "Performance",
    description:
      "Website yang kami buat mengedapankan kecepatan respon website untuk user experience yang lebih baik.",
    icon: ArrowTrendingUpIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2
            className="text-base font-semibold leading-7 text-indigo-600"
            data-aos="fade-up"
          >
            Fitur Dan Pelayanan Berkualitas
          </h2>
          <p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            data-aos="fade-up"
          >
            Menghadirkan Fitur Dan Pelayanan Berkualitas Untuk Anda!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="relative pl-16"
                data-aos="fade-up"
                data-aos-duration={index * 300}
              >
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <service.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
