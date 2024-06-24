"use client";

import Image from "next/image";

const CartModel = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}

            <div className="flex gap-4">
              <Image
                src="/nida.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />

              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="flex items-center gap-2 p-1 rounded-sm bg-gray-50">
                      $50
                    </div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Avilable</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qant 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">cart subtotal amount</span>
            </div>
            <p className="mt-2 mb-4 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="px-4 py-3 rounded-md ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="px-4 py-3 text-white bg-black rounded-md disabled:cursor-not-allowed disabled:opacity-75">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
