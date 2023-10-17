import React from 'react';

const Pricing = () => {
    return (
        <section className="bg-indigo-600 py-16 px-[5%] lg:px-[10%]">
            <div className="container mx-auto text-white text-center">
                <h2 className="text-3xl font-semibold mb-6">Paket Harga Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-2">
                    {/* Paket Harga Pertama */}
                    <div className="bg-white text-gray-800 rounded-lg p-6 lg:mt-5 mb-3">
                        <h3 className="text-2xl font-semibold mb-3">Paket Basic</h3>
                        <p className='px-3 text-gray-600 mb-2'>Cocok untuk anda yang baru ingin memulai</p>
                        <p className="text-lg font-bold mb-3"><span className="text-4xl">399rb</span></p>
                        <ul className="text-left">
                            <li className="mb-2 font-semibold">- Gratis SSL</li>
                            <li className="mb-2 font-semibold">- Website 1 Halaman</li>
                            <li className="mb-2 font-semibold">- Gratis Domain .com/.id (1 tahun)</li>
                            <li className="mb-2 font-semibold">- Storage 1Gb</li>
                            <li className="mb-2 font-semibold">- Tombol Whatsapp</li>
                            <li className="mb-2 font-semibold">- Ringan, Responsive & Mobile Frinedly</li>
                            <li className="mb-2 font-semibold">- Pengerjaan Cepat</li>
                            <li className="mb-2 font-semibold">- Revisi sampe oke</li>
                        </ul>
                        <button className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-indigo-900">Buat Sekarang</button>
                    </div>

                    {/* Paket Harga Kedua */}
                    <div className="bg-white text-indigo-600 rounded-lg p-6 mb-3">
                        <h3 className="text-2xl font-semibold mb-3">Paket Premium</h3>
                        <p className='text-indigo-500 px-3 mb-2'>Cocok untuk bisnis yang sedang berkembang</p>
                        <p className="text-lg font-bold mb-3"><span className="text-4xl">899Rb</span></p>
                        <ul className="text-left">
                        <li className="mb-2 font-semibold">- Gratis SSL</li>
                            <li className="mb-2 font-semibold">- Website 5 Halaman</li>
                            <li className="mb-2 font-semibold">- Gratis Domain .com/.id (1 tahun)</li>
                            <li className="mb-2 font-semibold">- Storage 1Gb</li>
                            <li className="mb-2 font-semibold">- Tombol Whatsapp</li>
                            <li className="mb-2 font-semibold">- Ringan, Responsive & Mobile Frinedly</li>
                            <li className="mb-2 font-semibold">- Pengerjaan Cepat</li>
                            <li className="mb-2 font-semibold">- Revisi sampe oke</li>
                        </ul>
                        <button className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-indigo-900">Buat Sekarang</button>
                    </div>

                    {/* Paket Harga Ketiga */}
                    <div className="bg-white text-gray-800 rounded-lg p-6 lg:mt-5">
                        <h3 className="text-2xl font-semibold mb-3">Paket Pro</h3>
                        <p className='px-3 text-gray-600 mb-2'>Konsultasikan kebutuhan wesbite impian anda</p>
                        <p className="text-lg font-bold mb-3"><span className="text-4xl">Customable</span></p>
                        <ul className="text-left">
                            <li className="mb-2 font-semibold">- Gratis SSL</li>
                            <li className="mb-2 font-semibold">- Hosting 1 tahun</li>
                            <li className="mb-2 font-semibold">- Gratis Domain .com/.id (1 tahun)</li>
                            <li className="mb-2 font-semibold">- Custom apapun</li>
                            <li className="mb-2 font-semibold">- Tombol Whatsapp</li>
                            <li className="mb-2 font-semibold">- Ringan, Responsive & Mobile Frinedly</li>
                            <li className="mb-2 font-semibold">- Pengerjaan Cepat</li>
                            <li className="mb-2 font-semibold">- Revisi sampe oke</li>
                        </ul>
                        <button className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-indigo-900">Buat Sekarang</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
