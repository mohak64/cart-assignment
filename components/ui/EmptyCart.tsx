import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const EmptyCart = () => {
  const reloadCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        // src="https://img.freepik.com/free-vector/empty-shopping-basket-concept-illustration_114360-17072.jpg?size=626&ext=jpg&ga=GA1.1.113792921.1710316104&semt=ais"
        // src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
        // src="https://img.freepik.com/free-psd/3d-render-illustration-shopping-cart-isolated-icon_439185-11702.jpg?w=826&t=st=1710322867~exp=1710323467~hmac=1594ab343801fc84342c1996b6c5a57f19505a1bb67dbba5dade4cb46ca41633"
        src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-18769.jpg?w=826&t=st=1710322991~exp=1710323591~hmac=c9f274e0800f1829ffff4c8dd91ca8ddb70c8c25775c88281bc47f6d83253ade"
        alt="empty_cart"
        width={250}
        height={250}
      />
      <h2 className="font-bold text-xl mt-2">Your Cart is Empty</h2>
      <p className="text-center">Add something to make me happy :)</p>

      <button
        className="bg-customHoverBlue text-white py-2 px-4 rounded-lg text-sm flex items-center mt-6"
        onClick={reloadCart}
      >
        Reload Cart <FaArrowRight className="ml-1" />
      </button>
    </div>
  );
};

export default EmptyCart;
