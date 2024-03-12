"use client";
import React, { useState } from "react";

const DeliveryDetails = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!fullName || !address || !zipCode || !city || !phoneNumber || !email) {
      alert("Please fill in all fields.");
      return;
    }

    // If all validations pass, proceed with form submission
    alert("Address saved successfully!");

    // Trigger the callback provided by the parent component
    onSubmit();
  };

  return (
    <div className=" p-8 mr-auto">
      <div className="flex-1 max-w-lg border border-gray-300 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Delivery Information</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="123 Example Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex justify-between space-x-2">
            <div>
              <label htmlFor="zipCode" className="block mb-1">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city" className="block mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-1">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="xyz@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
