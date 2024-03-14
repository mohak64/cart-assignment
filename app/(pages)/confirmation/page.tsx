"use client";

import OrderConfirmed from "@/components/transaction/OrderConfirmed";
import OrderFailed from "@/components/transaction/OrderFailed";
import React, { useEffect, useState } from "react";
import { create } from "zustand";

interface PaymentStore {
  previousPaymentFailed: boolean;
  setPreviousPaymentFailed: (value: boolean) => void;
}

const usePaymentStore = create<PaymentStore>((set) => ({
  previousPaymentFailed: false,
  setPreviousPaymentFailed: (value) => set({ previousPaymentFailed: value }),
}));

const Confirmation: React.FC = () => {
  const [probabilityThreshold, setProbabilityThreshold] = useState(0.7);
  const [previousPaymentFailed, setPreviousPaymentFailed] = usePaymentStore(
    (state) => [state.previousPaymentFailed, state.setPreviousPaymentFailed]
  );

  useEffect(() => {
    if (previousPaymentFailed) {
      setProbabilityThreshold(1);
    }
  }, [previousPaymentFailed]);

  const randomValue = Math.random();

  const renderOrderComponent = () => {
    return randomValue < probabilityThreshold ? (
      <OrderConfirmed />
    ) : (
      <OrderFailed />
    );
  };

  // Save the payment status after each call
  useEffect(() => {
    const paymentStatus =
      randomValue < probabilityThreshold ? "success" : "failed";
    setPreviousPaymentFailed(paymentStatus === "failed");
  }, [randomValue, probabilityThreshold, setPreviousPaymentFailed]);

  return <div className="p-2 lg:p-8">{renderOrderComponent()}</div>;
};

export default Confirmation;
