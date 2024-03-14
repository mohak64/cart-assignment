// Import necessary libraries and components

// import CreditCardForm from "@/components/debit_card/CreditCard";
// import Header from "@/components/Header"; // Assuming Header is a custom component
import React from "react";

// Card component
const CardTab = () => {
  return (
    <div className="p-4">
      {/* Add your card payment form or relevant content here */}
      <CreditCardForm />
    </div>
  );
};

// Wallet component
const WalletTab = () => {
  return (
    <div className="p-4">
      {/* Add your wallet payment form or relevant content here */}
      <p className="text-lg font-semibold">Wallet Payment Form</p>
    </div>
  );
};

// Payment page component
const PaymentPage = () => {
  return (
    <div>
      <div className="p-8">
        <div className="max-w-md mx-auto">
          <div className="border-b-2 border-gray-200 mb-4">
            <nav className="flex" aria-label="Tabs">
              <button className="w-full py-2 px-4 text-sm font-medium text-gray-500 border-b-2 border-transparent focus:outline-none focus:text-gray-700 focus:border-gray-300">
                CARD
              </button>
              <button className="w-full py-2 px-4 text-sm font-medium text-gray-500 border-b-2 border-transparent focus:outline-none focus:text-gray-700 focus:border-gray-300">
                UPI
              </button>
            </nav>
          </div>
          <div>
            <div>
              ce
              {/* <CardTab /> */}
            </div>
            <div>
              ce
              {/* <WalletTab /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
