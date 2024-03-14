"use client";
import OrderConfirmed from "@/components/transaction/OrderConfirmed";
import OrderFailed from "@/components/transaction/OrderFailed";
import React, { useEffect, useState } from "react";

const Confirmation: React.FC = () => {
  const [probabilityThreshold, setProbabilityThreshold] = useState(0.7);

  useEffect(() => {
    const previousPaymentFailed =
      typeof window !== "undefined" &&
      localStorage.getItem("previousPaymentFailed") === "true";

    if (previousPaymentFailed) {
      setProbabilityThreshold(1);
    }
  }, []);

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

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "previousPaymentFailed",
        paymentStatus === "failed" ? "true" : "false"
      );
    }
  }, [randomValue, probabilityThreshold]);

  return <div className="p-2 lg:p-8">{renderOrderComponent()}</div>;
};

export default Confirmation;
