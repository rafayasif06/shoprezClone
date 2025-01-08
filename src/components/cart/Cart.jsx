import React, { useEffect, useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  const deleteCartItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.removeItem(localStorage.key(index));
  };

  const [counter, setCounter] = useState(1);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const subtractCounter = () => {
    setCounter(counter - 1);
  };

  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      //2
      const key = localStorage.key(i);
      const item = JSON.parse(localStorage.getItem(key));
      if (item) items.push(item);
    }
    return items;
  };

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  const clearCart = () => {
    localStorage.clear();
    setCartItems([]);
  };

  return (
    <section className="w-full p-8">
      <div className=" flex flex-col mx-auto max-w-[1440px] ">
        <div className="flex items-center  bg-gray-200 relative">
          <div className=" text-[#0F121E] text-4xl font-bold mb-4 p-2">
            <h2>Your Cart</h2>
          </div>
          <div className="absolute top-1/2 right-4  translate-y-[-50%]">
            <button
              className="p-2 bg-[#319DFF] hover:bg-[#0F121E] text-white rounded"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className=" flex flex-col items-center justify-center rounded  border-[1px] border-gray-400 gap-3 relative"
              >
                <div className="absolute right-4 top-4 z-20 text-red-600 hover:text-red-800 ">
                  <button className="text-2xl " onClick={() => deleteCartItem(index)}>
                    <FaTrashCan />
                  </button>
                </div>
                <div>
                  <img src={item.prductImg} alt={item.product} />
                </div>
                <div className="flex flex-col w-full p-3 ">
                  <span className="text-gray-500 text-sm">
                    {item.productManufacturer}
                  </span>
                  <p className="text-[#319DFF] text-base font-semibold">
                    {item.product}
                  </p>
                </div>
                <div className="flex justify-around w-full">
                  <div className="bg-[#319DFF] p-3 rounded-full">
                    <p>{item.productPrice}</p>
                  </div>
                  {/* --------------Quantity------------ */}
                  <div className="flex justify-evenly text-white font-medium items-center rounded-full  border-2 ga border-gray-400 overflow-hidden ">
                    <div className="w-8 h-8 bg-red-400  flex items-center justify-center">
                      <button onClick={subtractCounter}>-</button>
                    </div>
                    <div className="  w-8 h-8 bg-green-500 flex items-center justify-center ">
                      <span>{counter}</span>
                    </div>
                    <div className="w-8 h-8 bg-blue-400 flex items-center justify-center">
                      <button onClick={addCounter}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
        {/* <div className="flex">
          <Link to={"/"}>
            <p className="flex items-center justify-center p-4  gap-2 text-xl bg-[#319DFF] hover:bg-[#0F121E] text-white rounded-lg">
              <span>To Home</span>
              <span>
                <IoHomeSharp />
              </span>
            </p>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Cart;
