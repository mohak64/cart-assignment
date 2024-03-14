"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import useCreditCard from "../(store)/creditcard"; // Import the useCreditCard hook

const CreditCardForm = () => {
  const { creditCardDetails, setCreditCardDetails } = useCreditCard(); // Use the useCreditCard hook

  const router = useRouter();

  const validateCreditCard = (cardNumber) => {
    // For simplicity, we'll just check if the number is numeric and has 16 digits
    return /^\d{16}$/.test(cardNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCardDetails({ ...creditCardDetails, [name]: value }); // Update credit card details using setCreditCardDetails from the hook
  };

  const handlePayment = () => {
    if (!validateCreditCard(creditCardDetails.cardNumber)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Card Number",
        text: "Please enter a valid credit card number.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Payment Successful",
      text: "Thank you for your payment!",
    });

    router.push("/confirmation");
    console.log(creditCardDetails);
  };

  return (
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 max-w-2xl border ">
      <div className="mb-2">
        <div className="text-center font-bold text-xl uppercase">
          Secure payment info
          <img
            className="p-4"
            src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-1">Name on Card</div>
        <input
          name="name"
          value={creditCardDetails.name}
          onChange={handleInputChange}
          placeholder="John Smith"
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 mb-1"
        />
      </div>
      <div className="mb-3">
        <div className="mb-1">Card Number</div>
        <input
          name="cardNumber"
          value={creditCardDetails.cardNumber}
          onChange={handleInputChange}
          placeholder="0000 0000 0000 0000"
          type="numeric"
          className="w-full border border-gray-300 rounded-md p-2 mb-1"
        />
      </div>
      <div className="mb-3 flex -mx-2 items-end">
        <div className="px-2 w-1/2">
          <div className="mb-1">Expiration Date</div>
          <select
            name="expirationMonth"
            value={creditCardDetails.expirationMonth}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 mb-1"
          >
            <option value="">Month</option>
            <option value="01">01 - January</option>
            <option value="02">02 - February</option>
            <option value="03">03 - March</option>
            <option value="04">04 - April</option>
            <option value="05">05 - May</option>
            <option value="06">06 - June</option>
            <option value="07">07 - July</option>
            <option value="08">08 - August</option>
            <option value="09">09 - September</option>
            <option value="10">10 - October</option>
            <option value="11">11 - November</option>
            <option value="12">12 - December</option>
          </select>
        </div>
        <div className="px-2 w-1/2">
          <select
            name="expirationYear"
            value={creditCardDetails.expirationYear}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 mb-1"
          >
            <option value="">Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>
      </div>
      <div className="mb-10">
        <div className="mb-1">Security Code</div>
        <input
          name="securityCode"
          value={creditCardDetails.securityCode}
          onChange={handleInputChange}
          placeholder="123"
          type="password"
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

export default CreditCardForm;
