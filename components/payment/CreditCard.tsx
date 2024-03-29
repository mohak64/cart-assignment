"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import useCreditCard from "../../(store)/creditcard";
import Image from "next/image";

const CreditCardForm = () => {
  const { creditCardDetails, setCreditCardDetails } = useCreditCard();

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCreditCardDetails({ ...creditCardDetails, [name]: value });
  };

  const isCardExpired = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    if (parseInt(creditCardDetails.expirationYear) < currentYear) {
      return true;
    }

    if (
      parseInt(creditCardDetails.expirationYear) === currentYear &&
      parseInt(creditCardDetails.expirationMonth) < currentMonth
    ) {
      return true;
    }

    return false;
  };

  const validateCreditCard = (cardNumber: string) => {
    // Remove all non-digit characters
    const cleanedCardNumber = cardNumber.replace(/\D/g, "");

    // Check if the card number contains only digits and has a length of 16
    if (!/^\d{16}$/.test(cleanedCardNumber)) {
      return false;
    }

    let sum = 0;
    let double = false;

    // Iterate through each digit in reverse order
    for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanedCardNumber.charAt(i), 10);

      if (double) {
        // Double every second digit
        digit *= 2;

        // If the doubled digit is greater than 9, subtract 9
        if (digit > 9) {
          digit -= 9;
        }
      }

      // Add the digit to the sum
      sum += digit;

      // Toggle the double variable
      double = !double;
    }

    // The card number is valid if the sum is a multiple of 10
    return sum % 10 === 0;
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

    if (isCardExpired()) {
      Swal.fire({
        icon: "error",
        title: "Card Expired",
        text: "The credit card has expired. Please use a valid card.",
      });
      return;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "creditCardDetails",
        JSON.stringify(creditCardDetails)
      );
    }
    router.push("/confirmation");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCreditCardDetails = localStorage.getItem("creditCardDetails");
      if (storedCreditCardDetails) {
        setCreditCardDetails(JSON.parse(storedCreditCardDetails));
      }
    }
  }, []);
  return (
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 max-w-2xl border ">
      <div className="mb-2">
        <div className="text-center font-bold text-xl uppercase">
          Secure payment info
          <Image
            className="p-4"
            src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
            width={500}
            height={500}
            alt="creditcard"
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
        <div className="mb-1">Card Number - 4556 7375 8689 9855(Valid)</div>
        <input
          name="cardNumber"
          value={creditCardDetails.cardNumber}
          onChange={handleInputChange}
          placeholder="374245455400126"
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
      <div className="mb-4">
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
