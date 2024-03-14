import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import DeliverySummary from "../delivery/DeliverySummary";

const OrderFailed = () => {
  const router = useRouter();

  const handleFailure = () => {
    router.push("/payment");
  };

  return (
    <div className="mr-auto block lg:flex justify-center gap-5">
      <div
        className="flex justify-center align-middle shadow-lg"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        <div className="flex flex-col items-center justify-center border rounded-lg md:p-4 mx-auto">
          <Image
            src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=826&t=st=1710434943~exp=1710435543~hmac=9fa90702793760840d540110135b98385124d1c59a300b4771326393a7375829"
            alt="gif"
            className="rounded-full"
            width={200}
            height={200}
          />
          <h2 className="font-bold text-lg sm:text-xl mt-4 text-center text-red-500">
            Transaction Failed
          </h2>
          <p className="mt-4 text-center">
            Your payment was not successfully processed.
          </p>
          <button
            className="bg-customBlue hover:bg-customHoverBlue text-white px-6 py-2 rounded-lg font-semibold mt-6 w-full flex justify-center items-center"
            onClick={handleFailure}
          >
            Retry Payment <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div
        className="flex justify-center align-middle items-center"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      ></div>
    </div>
  );
};

export default OrderFailed;
