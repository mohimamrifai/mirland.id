import React from 'react'
import { RocketLaunchIcon, StarIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid'

import aboutimg from './../assets/aboutimg.png'

const features = [
    {
        name: 'Desain Modern.',
        description:
            'Kami menghadirkan website dengan desain modern yang sepenuhnya disesuaikan dengan kebutuhan bisnis Anda',
        icon: StarIcon,
    },
    {
        name: 'Responsive.',
        description: 'Website yang telah kami rancang memiliki tampilan responsif, sehingga dapat diakses dengan sempurna dari berbagai perangkat, termasuk komputer, smartphone, dan tablet.',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'Pengerjaan Cepat.',
        description: 'Kami menyelesaikan proyek dengan efisiensi yang luar biasa, memastikan pengerjaan yang cepat dan efektif.',
        icon: RocketLaunchIcon,
    },
]

const About = () => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-36">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4 " data-aos="fade-right">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">Tentang Kami</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Jasa pembuatan website <span className='text-indigo-600'>Mirland.id</span> </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Kami merupakan penyedia jasa pembuatan website untuk kebutuhan bisnis, dengan pendekatan yang modern dan desain yang menarik. Dikerjakan Oleh profesional yang berpengalaman.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-lg leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src={aboutimg}
                        alt="Product screenshot"
                        className="w-[25rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                        data-aos="fade-left"
                    />
                </div>
            </div>
        </div>
    )
}

export default About