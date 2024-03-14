"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import DeliverySummary from "../delivery/DeliverySummary";
import Image from "next/image";
import CartOrderSummary from "../cart/CartOrderSummary";
import ConfirmationDelivery from "../delivery/ConfirmationDelivery";
import OrderDetails from "../order/OrderDetails";

const OrderConfirmed = () => {
  const router = useRouter();

  const finishOrder = () => {
    localStorage.removeItem("cart");
    router.push("/");
  };

  return (
    <div className=" mr-auto block  lg:flex justify-center  gap-5">
      <div className="flex justify-center  items-center">
        <div className="pb-4 lg:pb-0 w-full ">
          <OrderDetails />
          <div className="mt-6">
            <ConfirmationDelivery />
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle shadow-lg p-4 lg:p-8 border rounded-lg">
        <div className="flex flex-col items-center justify-center  mx-auto">
          <Image
            src="https://img.freepik.com/free-vector/verified-concept-illustration_114360-4998.jpg?w=826&t=st=1710436482~exp=1710437082~hmac=24657ca360e029180a4e1dfbc4c74bcbe0a59407844a586c3f63ffd28695ae7c"
            alt="gif"
            width={300}
            height={300}
          />
          <h2 className="font-bold text-lg sm:text-xl mt-4 text-center">
            Your Order has Been Successfully Placed!
          </h2>
          <p className="mt-4 text-center mb-4">
            Within moments you will receive a notification with the receipt of
            your purchase order.
          </p>
          <button
            className=" bg-customBlue hover:bg-customHoverBlue  text-white flex justify-center items-center font-bold py-2 px-4 rounded-md"
            onClick={finishOrder}
          >
            Continue Shopping <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
