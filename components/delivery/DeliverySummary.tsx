"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useAddress from "../../(store)/addressStore";

const DeliverySummary = () => {
  let { address } = useAddress();
  const router = useRouter();

  if (!address.fullName && typeof window !== "undefined") {
    const storedAddressString = localStorage.getItem("addressDetails");
    const storedAddress = storedAddressString
      ? JSON.parse(storedAddressString)
      : null;
    address = storedAddress || {};
  }

  const handleUpdateAddress = () => {
    router.push("/delivery");
  };

  return (
    <div className="space-y-8 border rounded-lg p-4 w-full shadow-xl sm:w-full">
      <h2 className="text-lg font-bold">Delivery Address</h2>
      <div className="space-y-4">
        <div>
          <span className="font-medium">Full Name:</span>{" "}
          <span>{address.fullName}</span>
        </div>
        <div>
          <span className="font-medium">Address:</span>{" "}
          <span>{address.address}</span>
        </div>
        <div>
          <span className="font-medium">Zip Code:</span>{" "}
          <span>{address.zipCode}</span>
        </div>
        <div>
          <span className="font-medium">City:</span> <span>{address.city}</span>
        </div>
        <div>
          <span className="font-medium">Phone Number:</span>{" "}
          <span>{address.phoneNumber}</span>
        </div>
        <div>
          <span className="font-medium">Email:</span>{" "}
          <span>{address.email}</span>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <button
          onClick={handleUpdateAddress}
          className="w-full bg-customBlue hover:bg-customHoverBlue text-white font-bold py-2 px-4 rounded-md"
        >
          Update Address <FaArrowRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default DeliverySummary;
