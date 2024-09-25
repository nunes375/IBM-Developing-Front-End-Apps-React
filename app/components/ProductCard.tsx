"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/Features/Plant/cartslice";
import { RootState } from "@/lib/store";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  description: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  imageSrc,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemInCart = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      price: parseFloat(price), // Convert price to a number
      quantity: 1,
      imageSrc,
    };
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded-md shadow-md w-full max-w-xs text-center">
      <img
        src={imageSrc}
        alt={name}
        className="mx-auto h-40 w-40 object-contain"
      />
      <h2 className="font-bold text-lg mt-2">{name}</h2>
      <p className="text-green-700 text-lg font-semibold mt-2">${price}</p>
      <p className="text-gray-600 mt-1">{description}</p>
      <button
        className={`mt-4 py-2 px-4 rounded ${
          itemInCart ? "bg-gray-400" : "bg-green-500 text-white"
        }`}
        onClick={handleAddToCart}
        disabled={!!itemInCart} // Optional: Disable button if item is already in cart
      >
        {itemInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
