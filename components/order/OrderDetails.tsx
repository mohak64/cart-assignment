import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-2 border rounded-lg p-4 w-full shadow-lg"
    >
      <h2 className="text-lg font-bold">Order Summary</h2>

      {mergedCart.map((item: CartItem, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex justify-between"
        >
          <p className="font-normal mr-4">
            {item.title.split(" ").slice(0, 3).join(" ")}{" "}
            <span className="font-semibold">(x{item.quantity})</span>
          </p>
          <p>{formatPrice(item.price * item.quantity)}</p>
        </motion.div>
      ))}

      {/* Display total price */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: mergedCart.length * 0.1 }}
        className="flex justify-between"
      >
        <p className="font-semibold">Total</p>
        <p className="font-semibold">${total.toFixed(2)}</p>
      </motion.div>
    </motion.div>
  );
};

export default OrderDetails;
