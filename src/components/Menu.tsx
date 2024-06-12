"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handelClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <Image
        className="cursor-pointer"
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        onClick={handelClick}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <Link href="/">HomePage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">LogOut</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
