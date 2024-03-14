import React from "react";

const Navbar = () => {
  return (
    <header
      className="bg-white p-8 lg:ml-30 xl:ml-20"
      style={{ animation: "fadeIn 0.5s ease" }}
    >
      <a href="/">
        <div className="flex items-center">
          <img
            src="https://groww.in/groww-logo-270.png"
            alt="groww image"
            width={50}
            height={50}
            style={{ animation: "fadeIn 1s ease" }}
          />
          <div className="ml-4" style={{ animation: "fadeIn 1.5s ease" }}>
            <h1 className="text-xl font-bold text-black">
              Ecommerce Cart - Groww
            </h1>
          </div>
        </div>
      </a>
    </header>
  );
};

export default Navbar;
