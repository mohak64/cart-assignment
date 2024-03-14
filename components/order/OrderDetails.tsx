import React from "react";
import { formatPrice } from "../../components/cart/PriceTag";
import useCart from "@/(store)/store"; // Update the path as per your project structure

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const OrderDetails = () => {
  const { cart } = useCart(); // Get cart state from Zustand store

  let storedCartItems = [];
  if (typeof window !== "undefined") {
    const storedCartItemsJSON = localStorage.getItem("cart");
    storedCartItems = storedCartItemsJSON
      ? JSON.parse(storedCartItemsJSON)
      : [];
  }

  // Use Zustand cart if not empty, otherwise use localStorage cart
  const mergedCart = cart.length > 0 ? cart : storedCartItems;

  // Calculate total price
  const total = mergedCart.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-2 border rounded-lg p-4 w-full shadow-lg">
      <h2 className="text-lg font-bold">Order Summary</h2>

      {cart.map((item, index) => (
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
