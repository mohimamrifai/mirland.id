import React from 'react'
import {ServerStackIcon,  UserGroupIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Hosting & Domain',
        description:
            'Harga pembuatan website sudah termasuk hosting 1 tahun dan domain .com/id untuk tahun pertama.',
        icon: ServerStackIcon,
    },
    {
        name: 'Full Support',
        description:
            'Admin kami siap membantu anda 7x24 jam setiap harinya, Mirland memiliki dukungan teknis untuk pengelolaan lebih baik.',
        icon: UserGroupIcon,
    },
    {
        name: "Pengerjaan Cepat",
        description:
          "Kami menawarkan pengerjaan website yang cepat dan efektif, sehingga Anda dapat segera memanfaatkan website untuk kebutuhan bisnis Anda.",
        icon: RocketLaunchIcon,
      },
    {
        name: 'Security',
        description:
            'Website yang kami buat memiliki mekanisme keamanan yang baik, sehingga website anda aman dari serangan hacker.',
        icon: ShieldCheckIcon,
    },
]

const Featured = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600" data-aos="fade-up">Jaminan Kepuasan</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-up">
                        Kami selalu berusaha memberikan yang terbaik untuk Anda!
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature, index) => (
                            <div key={feature.name} className="relative pl-16" data-aos="fade-up" data-aos-duration={index * 300}>
                                <dt className="text-lg font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Featured