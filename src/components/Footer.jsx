import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10 lg:px-[15%]">
      <div className="">
        <div className="mb-3 lg:mb-10">
          <a href="#" className="text-3xl font-bold">Mirland.id</a>
        </div>
        <div className="mb-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex flex-col">
            <a href="#" className="text-lg hover:underline">Beranda</a>
            <a href="#" className="text-lg hover:underline">Tentang Kami</a>
            <a href="#" className="text-lg hover:underline">Layanan</a>
            <a href="#" className="text-lg hover:underline">Kontak</a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-lg hover:underline">Beranda</a>
            <a href="#" className="text-lg hover:underline">Tentang Kami</a>
            <a href="#" className="text-lg hover:underline">Layanan</a>
            <a href="#" className="text-lg hover:underline">Kontak</a>
          </div>
        </div>
        <div className="">
          <p>Hak Cipta © 2023 mirland.id</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
