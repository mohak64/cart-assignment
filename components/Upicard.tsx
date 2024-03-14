import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const UPIPaymentForm = () => {
  const [upiId, setUpiId] = useState("");
  const router = useRouter();

  const showError = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  };

  const showSuccess = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
  };

  const handlePayment = () => {
    // Basic validation for UPI ID
    if (!upiId) {
      showError("Please enter a UPI ID.");
      return;
    }

    // Regular expression pattern to validate UPI ID format
    const upiIdPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;

    if (!upiIdPattern.test(upiId)) {
      showError("Please enter a valid UPI ID.");
      return;
    }

    // Add additional validation checks as needed

    // Payment successful
    showSuccess("Thank you for your payment!");

    router.push("/confirmation");
  };

  return (
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 max-w-2xl border">
      <div className="mb-2">
        <div className="text-center font-bold text-xl uppercase">
          Secure UPI payment info
          <img
            className="p-4"
            src="https://t3.ftcdn.net/jpg/05/60/50/16/360_F_560501607_x7crxqBWbmbgK2k8zOL0gICbIbK9hP6y.jpg"
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-1">Enter UPI ID</div>
        <input
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
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
