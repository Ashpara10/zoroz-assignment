import React from "react";
import { useRouter } from "next/navigation";

const Success: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your transaction was completed
          successfully.
        </p>
        <button
          onClick={() => router.push("/checkout")}
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
        >
          Return to Checkout
        </button>
      </div>
    </div>
  );
};

export default Success;
