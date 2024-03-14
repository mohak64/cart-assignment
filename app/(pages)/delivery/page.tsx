"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useAddress from "@/(store)/addressStore";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const DeliveryDetails = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const addressStore = useAddress((state) => state);

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^\d{10}$/;
    return setIsPhoneNumberValid(phoneRegex.test(phoneNumber));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return setIsEmailValid(emailRegex.test(email));
  };

  useEffect(() => {
    validatePhoneNumber(phoneNumber);
    validateEmail(email);
  }, [phoneNumber, email]);

  useEffect(() => {
    // Fetch address details from localStorage if useAddress is empty
    const storedAddress = addressStore.address;
    if (!storedAddress) {
      const storedAddressString = localStorage.getItem("addressDetails");
      if (storedAddressString) {
        const storedAddress = JSON.parse(storedAddressString);
        setFullName(storedAddress.fullName);
        setAddress(storedAddress.address);
        setZipCode(storedAddress.zipCode);
        setCity(storedAddress.city);
        setPhoneNumber(storedAddress.phoneNumber);
        setEmail(storedAddress.email);
      }
    } else {
      // Use address details from useAddress
      setFullName(storedAddress.fullName);
      setAddress(storedAddress.address);
      setZipCode(storedAddress.zipCode);
      setCity(storedAddress.city);
      setPhoneNumber(storedAddress.phoneNumber);
      setEmail(storedAddress.email);
    }
  }, []);

  const handleSubmit = () => {
    if (!fullName || !address || !zipCode || !city || !phoneNumber || !email) {
      Swal.fire({
        icon: "error",
        title: "Fields missing",
        text: "Please fill in all fields.",
      });
      return;
    }

    if (!isPhoneNumberValid) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a valid phone number.",
      });
      return;
    }

    if (!isEmailValid) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email Address",
        text: "Please enter a valid email address.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Address saved successfully!",
      showConfirmButton: false,
      timer: 500,
    });
    const newAddress = {
      fullName,
      address,
      zipCode,
      city,
      phoneNumber,
      email,
    };
    localStorage.setItem("addressDetails", JSON.stringify(newAddress));
    addressStore.setAddress(newAddress);
    router.push("/payment");
  };

  return (
    <div className=" p-8 mr-auto block  lg:flex justify-center items-center gap-5">
      <div className="flex justify-center align-middle items-center">
        <div className="flex-1 max-w-lg border border-gray-300 rounded-lg p-6 shadow-xl ">
          <h2 className="text-lg font-semibold mb-4">Delivery Information</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block mb-1">
                Full Name<span className="text-red-500">*</span>
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
                Address<span className="text-red-500">*</span>
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
                  Zip Code<span className="text-red-500">*</span>
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
                  City<span className="text-red-500">*</span>
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
                Phone Number<span className="text-red-500">*</span>
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
                Email Address<span className="text-red-500">*</span>
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
              className="w-full bg-customBlue py-2 rounded-md hover:bg-customHoverBlue font-semibold text-white"
            >
              Save Address
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle items-center">
        <Image
          className=" flex-shrink-0 rounded object-contain outline-none dark:border-transparent "
          src="https://img.freepik.com/free-vector/delivery-concept-illustration_114360-140.jpg?w=826&t=st=1710317093~exp=1710317693~hmac=02d6d4165a67b97123c3b2ac752325b39e63cb4bebe58c683e30ae2f2f165a58"
          // src="https://img.freepik.com/free-vector/directions-concept-illustration_114360-2268.jpg?w=826&t=st=1710316268~exp=1710316868~hmac=74384dcb966f9f49efe5b8954ca5440825d0bb0390c9d49833fbeb4e113d86b2"
          // src="https://img.freepik.com/free-vector/logistic-services-with-support-agent_24877-54382.jpg?t=st=1710317549~exp=1710321149~hmac=2dc976698c6da5f7e7c9d9f2e04a9c94fccf56a38a7703713523ef6be5e6aba4&w=740"
          alt="delivery"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default DeliveryDetails;
