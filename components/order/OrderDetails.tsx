import React from "react";
import { formatPrice } from "../../components/cart/PriceTag";

const OrderDetails = () => {
  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Calculate total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-2 border rounded-lg p-4 w-full shadow-lg">
      <h2 className="text-lg font-bold">Order Summary</h2>

      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-between">
          <p className="font-normal mr-4">
            {item.title.split(" ").slice(0, 3).join(" ")}{" "}
            <span className="font-semibold">(x{item.quantity})</span>
          </p>
          <p>{formatPrice(item.price * item.quantity)}</p>
        </div>
      ))}

      {/* Display total price */}
      <div className="flex justify-between">
        <p className="font-semibold">Total</p>
        <p className="font-semibold">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
