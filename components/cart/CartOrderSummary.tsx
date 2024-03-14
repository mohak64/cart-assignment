"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { useRouter } from "next/navigation";

const OrderSummaryItem = ({ label, value, children }) => {
  return (
    <div className="flex justify-between text-sm">
      <span className="font-medium">{label}</span>
      {value ? <span className="font-medium">{value}</span> : children}
    </div>
  );
};

const CartOrderSummary = ({ subTotal, isCartEmpty }) => {
  const router = useRouter();
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponCodeVisible, setIsCouponCodeVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const applyCoupon = (code) => {
    let appliedDiscount = 0;

    switch (code) {
      case "GROWW20":
        appliedDiscount = 20;
        setAppliedCoupon("GROWW20");
        break;
      case "GROWW50":
        appliedDiscount = 50;
        setAppliedCoupon("GROWW50");
        break;
      default:
        setAppliedCoupon("");
        setDiscount(0);
        break;
    }

    if (appliedDiscount > 0) {
      const totalValue = subTotal;
      const calculatedDiscount = (appliedDiscount / 100) * totalValue;
      setDiscount(Math.min(calculatedDiscount, 1000));
    }
  };

  const handleShowCouponCode = () => {
    setIsCouponCodeVisible(!isCouponCodeVisible);
  };

  const handleCheckout = () => {
    router.push("/delivery");
  };

  let grandTotal = subTotal - discount;
  if (subTotal < 199) {
    grandTotal += 40;
  }

  return (
    <div className="space-y-8 border rounded-lg p-8 w-full shadow-xl ">
      <h2 className="text-lg font-bold">Order Summary</h2>
      <div className="space-y-6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(subTotal)} />
        <OrderSummaryItem label="Shipping Charges">
          <span
            className={`text-green-500 font-bold ${
              subTotal < 199 ? "hover:text-blue-500" : ""
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {subTotal < 199 && !isCartEmpty ? (
              <>
                {formatPrice(40)}{" "}
                {hover && (
                  <span className="text-sm text-gray-500">
                    {" "}
                    (Above $199, Free)
                  </span>
                )}
              </>
            ) : (
              "FREE"
            )}
          </span>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <a
            onClick={!isCartEmpty ? handleShowCouponCode : undefined}
            className="underline cursor-pointer"
          >
            Add coupon code
          </a>
        </OrderSummaryItem>
        {isCouponCodeVisible && (
          <>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                className="border px-2 py-1 rounded"
              />
              <button
                onClick={() => applyCoupon(couponCode)}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Apply
              </button>
            </div>
            {appliedCoupon && (
              <p className="text-green-500">
                Coupon {appliedCoupon} applied successfully. You have saved{" "}
                {formatPrice(discount)}
              </p>
            )}
            {appliedCoupon === "" && discount === 0 && (
              <p className="text-red-500">Please enter a valid coupon.</p>
            )}
          </>
        )}
        <div className="flex justify-between">
          <p className="font-semibold">Total</p>
          {isCartEmpty ? (
            <p className="font-bold text-red-500">Cart is Empty</p>
          ) : (
            <p>{formatPrice(grandTotal)}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleCheckout}
          className={`bg-customBlue rounded-md hover:bg-customHoverBlue text-white px-6 py-3 rounded-lg font-semibold ${
            isCartEmpty && "cursor-not-allowed opacity-50"
          }`}
          disabled={isCartEmpty}
        >
          Checkout <FaArrowRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CartOrderSummary;
