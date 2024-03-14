"use client";

import DeliverySummary from "@/components/delivery/DeliverySummary";
import CreditCardForm from "@/components/payment/CreditCard";
import UpiForm from "@/components/payment/Upicard";
import Image from "next/image";
import React, { useState } from "react";

const CardTab = () => {
  return (
    <div className="p-4">
      <CreditCardForm />
    </div>
  );
};

const WalletTab = () => {
  return (
    <div className="p-4">
      <UpiForm />
    </div>
  );
};

const PaymentPage = () => {
  const [activeTab, setActiveTab] = useState<"card" | "upi">("card");

  const handleTabChange = (tab: "card" | "upi") => {
    setActiveTab(tab);
  };

  return (
    <div className=" p-2 mr-auto block  lg:flex justify-center  gap-5">
      <div className="flex justify-center align-middle ">
        <div className="max-w-md mx-auto lg:min-w-96">
          <div className="border-b-2 border-gray-200 mb-4">
            <nav className="flex" aria-label="Tabs">
              <button
                className={`w-full py-2 px-4 text-sm font-medium border-b-2 focus:outline-none focus:text-gray-700 ${
                  activeTab === "card"
                    ? "text-gray-700 border-gray-700"
                    : "text-gray-500 border-transparent"
                }`}
                onClick={() => handleTabChange("card")}
              >
                CARD
              </button>
              <button
                className={`w-full py-2 px-4 text-sm font-medium border-b-2 focus:outline-none focus:text-gray-700 ${
                  activeTab === "upi"
                    ? "text-gray-700 border-gray-700"
                    : "text-gray-500 border-transparent"
                }`}
                onClick={() => handleTabChange("upi")}
              >
                UPI
              </button>
            </nav>
          </div>
          <div>{activeTab === "card" ? <CardTab /> : <WalletTab />}</div>
        </div>
      </div>
      <div className="flex justify-center align-middle items-center">
        <div className="p-0 ">
          <Image
            className=" flex-shrink-0 rounded object-contain outline-none dark:border-transparent "
            src="https://img.freepik.com/free-vector/womans-hand-putting-dollar-bill-into-open-mans-wallet-payment-transfer-money-person-holding-purse-flat-vector-illustration-finance-concept-banner-website-design-landing-web-page_74855-25048.jpg?w=740&t=st=1710406492~exp=1710407092~hmac=c08ae5bcfa29e41ed34e481f054ecf79c5b76387aa2ffecabf3fb829fe24a37f"
            alt="payment"
            width={300}
            height={300}
          />
          <div className="p-4 lg:p-0">
            <DeliverySummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
