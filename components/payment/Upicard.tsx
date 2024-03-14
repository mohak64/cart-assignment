import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import useUpiId from "../../(store)/upiid"; // Import the useUpiId hook
import Image from "next/image";

const UPIPaymentForm = () => {
  const { upiIdDetails, setUpiIdDetails } = useUpiId(); // Use the useUpiId hook
  const router = useRouter();

  const showError = (message: string) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  };

  const handlePayment = () => {
    if (!upiIdDetails.upiId) {
      showError("Please enter a UPI ID.");
      return;
    }

    const upiIdPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;

    if (!upiIdPattern.test(upiIdDetails.upiId)) {
      showError("Please enter a valid UPI ID.");
      return;
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("upiIdDetails", JSON.stringify(upiIdDetails));
    }

    router.push("/confirmation");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUpiIdDetails = localStorage.getItem("upiIdDetails");
      if (storedUpiIdDetails) {
        setUpiIdDetails(JSON.parse(storedUpiIdDetails));
      }
    }
  }, []);

  return (
    <div
      className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 max-w-2xl border"
      style={{ animation: "fadeIn 1s ease-in-out" }}
    >
      <div className="mb-2">
        <div className="text-center font-bold text-xl uppercase">
          Secure UPI payment info
          <Image
            className="p-4"
            src="https://t3.ftcdn.net/jpg/05/60/50/16/360_F_560501607_x7crxqBWbmbgK2k8zOL0gICbIbK9hP6y.jpg"
            width={500}
            height={500}
            alt="upi"
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-1">Enter UPI ID</div>
        <input
          value={upiIdDetails.upiId}
          onChange={(e) => setUpiIdDetails({ upiId: e.target.value })}
          placeholder="example@upi"
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 mb-1"
        />
      </div>
      <div>
        <button
          className="w-full bg-customBlue hover:bg-customHoverBlue text-white font-bold py-2 px-4 rounded-md"
          onClick={handlePayment}
        >
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default UPIPaymentForm;
