"use client";
import { useEffect, useState } from "react";
import useCart from "../(store)/store";
import { useOrderDetails } from "@/hooks/useOrderDetails";
import CartItem from "../components/CartItem";
import CartOrderSummary from "../components/CartOrderSummary";

import EmptyCart from "../components/EmptyCart";
import Loader from "../components/Loader";

const CartPage = () => {
  const { orderDetails, loading, error } = useOrderDetails();
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [cartItemsText, setCartItemsText] = useState("Item");

  const hookCart = useCart();

  useEffect(() => {
    setCart(hookCart.cart);
    setSubTotal(calculateTotalValue());
    setTotalCartItems(totalCartItem());
    setCartItemsText(hookCart.cart.length > 1 ? "Items" : "Item");
  }, [hookCart.cart]);

  const reloadCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  // Function to calculate the total value based on products in the cart
  const calculateTotalValue = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const totalCartItem = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  // Handling loading and error states
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-8 md:gap-16">
          <div className="flex-2 border rounded-lg p-2 md:p-4 lg:p-8 min-w-full lg:min-w-96 lg:max-w-3xl">
            <h2 className="text-xl font-extrabold md:text-2xl">
              Shopping Cart ({cart.length} {cartItemsText})
            </h2>

            {cart.length < 1 && <EmptyCart />}

            <div className="space-y-6">
              {cart.map((product, index) => (
                <CartItem
                  key={product.id}
                  onClickDelete={() => {
                    hookCart.removeItemFromCart(index);
                  }}
                  {...product}
                  onChangeQuantity={(productId, quantity) => {
                    let existingCart = cart.map((item) =>
                      item.id === productId
                        ? { ...item, quantity: quantity }
                        : item
                    );
                    setCart(existingCart);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center min-w-full lg:min-w-96">
            <CartOrderSummary
              subTotal={subTotal}
              isCartEmpty={cart.length > 0 ? false : true}
            />
            <div className="mt-6 font-semibold">
              <p>or</p>
              <button className="text-blue-500" onClick={reloadCart}>
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
