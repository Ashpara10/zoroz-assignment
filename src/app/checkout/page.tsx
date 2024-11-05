"use client";
import { useStore } from "@/lib/context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Checkout: React.FC = () => {
  const router = useRouter();
  const { setStore } = useStore();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    nameOnCard: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    const isEmpty = Object.values(paymentDetails).some((val) => val === "");
    if (isEmpty) {
      toast.error("Please fill all fields");

      return;
    }
    const rand = parseInt(Math.random().toFixed());
    if (rand) {
      toast.success("Payment Successful");

      setStore([]);
      router.push("/status/success");
      return;
    }
    toast.error("Payment Unsuccessful");

    router.push("/status/failure");
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-md  rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Checkout</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="John Doe"
              name="nameOnCard"
              value={paymentDetails.nameOnCard}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="1234 5678 9123 4567"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date (MM/YY)
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="MM/YY"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* CVC */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVC
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="123"
              name="cvc"
              value={paymentDetails.cvc}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="button"
            onClick={handlePayment}
            className="w-full  py-2 rounded-md bg-yellow-400/90 hover:bg-yellow-500
             transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
