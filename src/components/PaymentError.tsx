import React from "react";
import { useRouter } from "next/navigation";

const Failure: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center  p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">
          Payment Failed
        </h2>
        <p className="text-gray-700 mb-6">
          Unfortunately, there was an issue with your payment. Please try again.
        </p>
        <button
          onClick={() => router.push("/checkout")}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
        >
          Return to Checkout
        </button>
      </div>
    </div>
  );
};

export default Failure;
