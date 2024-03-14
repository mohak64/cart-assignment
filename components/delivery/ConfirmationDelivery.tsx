"use client";
import React from "react";

import useAddress from "../../(store)/addressStore";

const ConfirmationDelivery = () => {
  let { address } = useAddress();

  if (!address.fullName && typeof window !== "undefined") {
    const storedAddressString = localStorage.getItem("address");
    const storedAddress = storedAddressString
      ? JSON.parse(storedAddressString)
      : null;
    address = storedAddress || {};
  }

  return (
    <div className="space-y-2 border rounded-lg p-4 w-full shadow-xl">
      <h2 className="text-lg font-semibold">Delivery Address</h2>
      <div className="space-y-0 font-normal">
        <div>
          <span>{address.fullName}</span>
        </div>
        <div>
          <span>{address.address}</span>
        </div>
        <div>
          <span>{address.zipCode}</span>
        </div>
        <div>
          <span>{address.city}</span>
        </div>
        <div>
          <span>{address.phoneNumber}</span>
        </div>
        <div>
          <span>{address.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDelivery;
