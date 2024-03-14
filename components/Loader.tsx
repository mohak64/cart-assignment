import Image from "next/image";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full  h-12 w-12">
        <Image
          src="https://groww.in/groww-logo-270.png"
          alt="groww image"
          width={40}
          height={40}
        />
      </div>
      <p className="mt-4 font-bold">Loading...</p>
    </div>
  );
}

export default Loader;
