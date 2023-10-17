import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const datas = [
    {
        id: 1,
        pertanyaan: "Apakah saya yang membuat websitenya sendiri ?",
        jawaban: "Tidak, anda terima beres hanya perlu memberitahukan apa yang anda butuhkan."
    },
    {
        id: 2,
        pertanyaan: "Apakah saya harus bisa ngoding untuk mengelola website saya ?",
        jawaban: "Tidak, Tampilan admin yang ramah pengguna dapat membantu anda mengelola website tanpa perlu coding."
    },
    {
        id: 3,
        pertanyaan: "Bagaimana jika saya mengalami kesulitasn ?",
        jawaban: "Tidak perlu khawatir, Tim kami siap membantu anda mengatasi masalah di website anda."
    },
    {
        id: 4,
        pertanyaan: "Apakah website saya bisa cepat dan aman ?",
        jawaban: "Tim kami siap siaga menjaga dan melayani website anda 24 jam."
    },
    {
        id: 5,
        pertanyaan: "Saya sudah punya hosting dan domain sendiri, apakah masih bisa membuat website di Mirland.id ?",
        jawaban: "Bisa, Anda hanya kana dikenakan biaya pembuatan websitenya saja."
    },
    {
        id: 6,
        pertanyaan: "Apakah ada garansi ?",
        jawaban: "Ya ada, Garansi revisi sampe Oke dan sesuai keinginan anda."
    },
]

const FAQ = () => {
    return (
        <div className="w-full px-4 py-10">
            <h2 className='text-center text-2xl font-semibold text-indigo-600 w-10/12 mx-auto mb-5'>Pertanyaan yang sering diajukan kepada kami.</h2>
            <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
                {
                    datas.map((item, index) => (
                        <Disclosure key={item.id} >
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-600 px-4 py-2 text-left text-base lg:text-base font-normal text-white hover:bg- focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75 mb-2" data-aos="fade-up" data-aos-delay={index * 100}>
                                        <span>{item.pertanyaan}</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform transition-all duration-300' : ''
                                                } h-5 w-5 text-white`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-1 pb-2 text-base text-gray-600">{item.jawaban}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))
                }
            </div>
        </div>
    )
}

export default FAQ