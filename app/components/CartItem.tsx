import React from "react";

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  imageSrc: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  quantity,
  imageSrc,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  const total = price * quantity;

  return (
    <div className="flex items-center justify-evenly p-4 border-b">
      <div className="flex items-center space-x-4">
        <img
          src={imageSrc}
          alt={name}
          className="h-[200px] w-[200px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center space-x-2">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600 my-2">${price}</p>
        <div className="mb-2">
          <button
            className="bg-gray-200 text-gray-700 rounded px-2 py-1"
            onClick={onDecrement}
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="px-2 mx-2 font-bold">{quantity}</span>
          <button
            className="bg-gray-200 text-gray-700 rounded px-2 py-1"
            onClick={onIncrement}
          >
            +
          </button>
        </div>

        <p className="font-bold mb-2">Total: ${total}</p>
        <button onClick={onDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
