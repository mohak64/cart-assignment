import { FaArrowRight } from "react-icons/fa";

const EmptyCart = () => {
  const reloadCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
        alt="empty_cart"
        className="w-40 h-40"
      />
      <h2 className="font-bold text-xl mt-2">Your Cart is Empty</h2>
      <p className="text-center">Add something to make me happy :)</p>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm flex items-center mt-6"
        onClick={reloadCart}
      >
        Reload Cart <FaArrowRight className="ml-1" />
      </button>
    </div>
  );
};

export default EmptyCart;
