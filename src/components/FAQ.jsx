import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div className="w-full px-4 py-10">
            <h2 className='text-center text-2xl font-medium text-indigo-600 w-10/12 mx-auto mb-5'>Pertanyaan yang sering diajukan kepada kami.</h2>
            <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-600 px-4 py-2 text-left text-base lg:text-lg font-medium text-white hover:bg- focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75 mb-2">
                                <span>Apakah konten website dibuat mirland.id ?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform transition-all duration-300' : ''
                                        } h-5 w-5 text-white`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-1 pb-2 text-base text-gray-500">
                                Tidak, Konten webiste disesuaikan dengan kebutuhan bisnis anda sebagai client kami, akan tetapi kami bisa membantu dalam penyusunanya.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default FAQ