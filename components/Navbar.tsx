import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white p-8">
      <div className="flex items-center">
        <img
          src="https://groww.in/groww-logo-270.png"
          alt="groww image"
          className="w-8 h-8"
        />
        <div className="ml-4">
          <h1 className="text-xl font-bold text-black">
            Ecommerce Cart - Groww
          </h1>
        </div>

        {/* Spacer to push items to the right */}
        <div className="flex-grow"></div>
      </div>
    </header>
  );
};

export default Navbar;
