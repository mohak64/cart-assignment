import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white p-8 lg:ml-30 xl:ml-20">
      <div className="flex items-center">
        <Image
          src="https://groww.in/groww-logo-270.png"
          alt="groww image"
          width={50}
          height={50}
        />
        <div className="ml-4">
          <h1 className="text-xl font-bold text-black">
            Ecommerce Cart - Groww
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
