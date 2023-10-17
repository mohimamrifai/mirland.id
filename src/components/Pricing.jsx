import React from 'react';

const tools = ['React js', 'Next js', 'Node js', 'Express js', 'Mongo Db'];

const Pricing = () => {
    return (
        <section className="bg-indigo-600 py-16 px-[5%] lg:px-[10%]">
            <div className="container mx-auto text-white text-center">
                <h2 className="text-3xl font-semibold mb-8">Sesuaikan Kebutuhan Bisnis Anda dengan Paket Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-2">
                    {/* Paket Harga Pertama */}
                    <div className="bg-white text-gray-800 rounded-lg p-6 lg:mt-5 mb-3">
                        <h3 className="text-2xl font-semibold mb-3 underline">Paket Basic</h3>
                        <p className='px-3 text-gray-600 mb-2'>Cocok untuk landing page produk</p>
                        <p className="text-lg font-bold mb-3"><span className="text-4xl">499rb</span></p>
                        <ul className="text-left">
                            <li className="mb-2 font-medium">Termasuk :</li>
                            <li className="mb-2 font-medium">👉 Website 1 Halaman</li>
                            <li className="mb-2 font-medium">👉 Hosting 1 tahun</li>
                            <li className="mb-2 font-medium">👉 Domain .com tahun</li>
                            <li className="mb-2 font-medium">👉 Template Premium++</li>
                            <li className="mb-2 font-medium">👉 SEO Friendly</li>
                            <li className="mb-2 font-medium">👉 Tombol Whatsapp</li>
                            <li className="mb-2 font-medium">👉 Website Ringan & Cepat</li>
                            <li className="mb-2 font-medium">👉 Responsive & Mobile Friendly</li>
                            <li className="mb-2 font-medium">👉 Full Support</li>
                            <li className="mb-2 font-medium">👉 Revisi sampe ok</li>
                            <li className="mb-2 font-medium">❌ Bantu Buat Konten</li>
                            <li className="mb-2 font-medium">❌ Copywriting</li>
                        </ul>
                        <button className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-indigo-900 transition-all duration-300">Buat Sekarang</button>
                    </div>

                    {/* Paket Harga Kedua */}
                    <div className="bg-white text-indigo-600 rounded-lg p-6 mb-3">
                        <h3 className="text-2xl font-semibold mb-3 underline">Paket Premium</h3>
                        <p className='text-indigo-500 px-3 mb-2'>Cocok untuk Portfolio, Company profile dan Blog</p>
                        <p className="text-lg font-bold mb-3"><span className="text-4xl">999Rb</span></p>
                        <ul className="text-left">
                            <li className="mb-2 font-medium">Termasuk :</li>
                            <li className="mb-2 font-medium">👉 Website 5 Halaman</li>
                            <li className="mb-2 font-medium">👉 Hosting 1 tahun</li>
                            <li className="mb-2 font-medium">👉 Domain .com/.id tahun</li>
                            <li className="mb-2 font-medium">👉 Template Premium++</li>
                            <li className="mb-2 font-medium">👉 SEO Friendly</li>
                            <li className="mb-2 font-medium">👉 Tombol Whatsapp</li>
                            <li className="mb-2 font-medium">👉 Website Ringan & Cepat</li>
                            <li className="mb-2 font-medium">👉 Responsive & Mobile Friendly</li>
                            <li className="mb-2 font-medium">👉 Full Support</li>
                            <li className="mb-2 font-medium">👉 Revisi sampe ok</li>
                            <li className="mb-2 font-medium">👉 Bantu Buat Konten</li>
                            <li className="mb-2 font-medium">👉 Copywriting</li>
                        </ul>
                        <button className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-indigo-900 transition-all duration-300">Buat Sekarang</button>
                    </div>

                    {/* Paket Harga Ketiga */}
                    <div className="bg-white text-gray-800 rounded-lg p-6 lg:mt-5 mb-3">
                        <h3 className="text-2xl font-semibold mb-3 underline">Paket Pro</h3>
                        <p className='px-3 text-gray-600 mb-2'>Tidak menemukan paket yang cocok ?</p>
                        <p className="text-lg font-bold mb-3"><span className="text-4xl">Chat Kami!</span></p>
                        <ul className="text-left">
                            <li className="mb-2 font-medium">Website FullStack yang pernah kami kerjakan :</li>
                            <li className="mb-2 font-medium">👉 Website Blog Full Custom</li>
                            <li className="mb-2 font-medium">👉 Website Kasir</li>
                            <li className="mb-2 font-medium">👉 Website Pengelolaan Karyawan</li>
                            <li className="mb-2 font-medium">👉 Website Pengelolaan Inventori Barang</li>
                            <li className="mb-2 font-medium">👉 Hosting 1 tahun</li>
                            <li className="mb-2 font-medium">👉 Domain custom</li>
                            <li className="mb-2 font-medium">👉 Pengerjaan Cepat</li>
                            <li className="mb-2 font-medium">👉 Revisi Sampe Oke</li>
                        </ul>
                        <p className='text-left my-1'>Tools yang digunakan :</p>
                        <div className='text-left flex flex-wrap gap-2'>
                            {
                                tools.map((item) => (
                                    <span key={item} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                        {item}
                                    </span>
                                ))
                            }
                        </div>
                        <button className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-indigo-900 transition-all duration-300">Chat Sekarang</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;