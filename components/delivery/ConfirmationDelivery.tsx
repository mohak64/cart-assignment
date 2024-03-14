import React from "react";
import { motion } from "framer-motion";
import useAddress from "../../(store)/addressStore";

const ConfirmationDelivery = () => {
  let { address } = useAddress();

  if (!address.fullName && typeof window !== "undefined") {
    const storedAddressString = localStorage.getItem("addressDetails");
    const storedAddress = storedAddressString
      ? JSON.parse(storedAddressString)
      : null;
    address = storedAddress || {};
  }

  return (
    <motion.div
      className="space-y-2 border rounded-lg p-4 w-full shadow-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold">Delivery Address</h2>
      <motion.div
        className="space-y-0 font-normal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
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
      </motion.div>
    </motion.div>
  );
};

export default ConfirmationDelivery;
