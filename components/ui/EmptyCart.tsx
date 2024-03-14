import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const EmptyCart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const reloadCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-18769.jpg?w=826&t=st=1710322991~exp=1710323591~hmac=c9f274e0800f1829ffff4c8dd91ca8ddb70c8c25775c88281bc47f6d83253ade"
        alt="empty_cart"
        width={250}
        height={250}
        style={{ animation: "fadeIn 1s ease-in-out" }}
      />
      <h2
        className="font-bold text-xl mt-2"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        Your Cart is Empty
      </h2>
      <p className="text-center" style={{ animation: "fadeIn 1s ease-in-out" }}>
        Add something to make me happy :)
      </p>

      <button
        className="bg-customHoverBlue text-white py-2 px-4 rounded-lg text-sm flex items-center mt-6"
        style={{ animation: "bounceIn 0.5s ease" }}
        onClick={reloadCart}
      >
        Reload Cart <FaArrowRight className="ml-1" />
      </button>
    </div>
  );
};

export default EmptyCart;
