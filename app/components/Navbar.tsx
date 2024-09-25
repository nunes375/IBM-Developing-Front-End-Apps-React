// components/Navbar.js
"use client";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { RootState } from "@/lib/store";
import Link from "next/link";
const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <nav className="bg-green-500 p-4 flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center">
          <img src="/images/tree.png" alt="logo" className="h-10 w-10 mr-2" />
          <div>
            <h1 className="text-white text-xl font-bold">Evergreen Garden</h1>
            <p className="text-white text-sm">Where Nature Meets Tranquility</p>
          </div>
        </div>
      </Link>
      <div>
        <h2 className="text-white text-xl">Plants</h2>
      </div>
      <div className="relative">
        {/* <img src="/cart-icon.png" alt="Cart" className="h-8 w-8" /> */}
        <Link href="/cart">
          <ShoppingCart size="45" color="white" />
          <span className="absolute top-0 right-0 bg-white text-green-500 rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
