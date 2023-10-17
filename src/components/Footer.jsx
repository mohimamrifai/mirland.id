import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10 lg:px-[15%]">
      <div className="">
        <div className="mb-3 lg:mb-10">
          <a href="#" className="text-4xl font-bold">Mirland.id</a>
        </div>
        <div className="mb-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex flex-col">
            <a href="#" className="text-base hover:underline">Home</a>
            <a href="#" className="text-base hover:underline">Fb Ads</a>
            <a href="#" className="text-base hover:underline">IG Ads</a>
            <a href="#" className="text-base hover:underline">Google Ads</a>
            <a href="#" className="text-base hover:underline">Jasa Kelola sosial media</a>
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
