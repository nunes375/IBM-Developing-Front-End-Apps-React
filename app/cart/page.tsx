"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { RootState } from "@/lib/store"; // Adjust import based on your structure
import {
  incrementItem,
  decrementItem,
  removeFromCart,
} from "@/lib/Features/Plant/cartslice"; // Adjust import based on your structure
import Link from "next/link";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrement = (id: number) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementItem(id));
  };

  const handleDelete = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Total Cart Amount: ${totalAmount}
        </h2>

        <div className="flex-col justify-center">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                imageSrc={item.imageSrc}
                onIncrement={() => handleIncrement(item.id)}
                onDecrement={() => handleDecrement(item.id)}
                onDelete={() => handleDelete(item.id)}
              />
            ))
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}
        </div>

        <div className="mt-6 text-center flex flex-col gap-4">
          <div>
            <Link href="/products">
              <button className="bg-green-500 text-white py-2 px-4 rounded mr-4 ">
                Continue Shopping
              </button>
            </Link>
          </div>
          {cartItems.length > 0 && (
            <div>
              <button className="bg-green-600 text-white py-2 px-4 rounded" onClick={()=>alert("Coming Soon!")}>
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
