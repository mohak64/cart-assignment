"use client";
import OrderConfirmed from "@/components/transaction/OrderConfirmed";
import OrderFailed from "@/components/transaction/OrderFailed";
import React, { useEffect } from "react";

const Confirmation: React.FC = () => {
  const initialProbabilityThreshold = 0.7;
  let probabilityThreshold = initialProbabilityThreshold;

  const previousPaymentFailed =
    localStorage.getItem("previousPaymentFailed") === "true";

  if (previousPaymentFailed) {
    probabilityThreshold = 1;
  }

  const randomValue = Math.random();

  const renderOrderComponent = () => {
    return randomValue < probabilityThreshold ? (
      <OrderConfirmed />
    ) : (
      <OrderFailed />
    );
  };

  // Save the payment status in localStorage after each call
  useEffect(() => {
    const paymentStatus =
      randomValue < probabilityThreshold ? "success" : "failed";
    localStorage.setItem(
      "previousPaymentFailed",
      paymentStatus === "failed" ? "true" : "false"
    );
  }, [randomValue, probabilityThreshold]);

  return <div className="p-2 lg:p-8">{renderOrderComponent()}</div>;
};

export default Confirmation;
