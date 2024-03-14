import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className="space-y-8 border rounded-lg p-4 w-full shadow-xl sm:w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold">Delivery Address</h2>
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-medium">Full Name:</span>{" "}
          <span>{address.fullName}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="font-medium">Address:</span>{" "}
          <span>{address.address}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="font-medium">Zip Code:</span>{" "}
          <span>{address.zipCode}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="font-medium">City:</span> <span>{address.city}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <span className="font-medium">Phone Number:</span>{" "}
          <span>{address.phoneNumber}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="font-medium">Email:</span>{" "}
          <span>{address.email}</span>
        </motion.div>
      </div>
      <div className="flex justify-center pt-4">
        <motion.button
          onClick={handleUpdateAddress}
          className="w-full bg-customBlue hover:bg-customHoverBlue text-white font-bold py-2 px-4 rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Update Address <FaArrowRight className="inline-block ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DeliverySummary;
