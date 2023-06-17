"use client";
import React, { useState } from "react";

export default function Navbar({
  handleMenuToggle,
  isMenuOpen,
}: {
  handleMenuToggle: any;
  isMenuOpen: any;
}) {
  const Link = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href="#"
      className="text-sm text-[#00000080] text-[16px] font-[500]  hover:text-[#37a000] "
    >
      {children}
    </a>
  );

  const MenuIcon = () => (
    <div
      onClick={handleMenuToggle}
      className={`flex flex-col hover:gap-y-2 gap-y-1  animate-all duration-300   cursor-pointer`}
    >
      <div
        className="
      h-[3px] w-[25px] bg-black
      "
      />
      <div
        className="
      h-[2px] w-[25px] bg-black
      "
      />
      <div className="h-[1px] w-[25px] bg-black" />
    </div>
  );

  return (
    <>
      <nav className="w-full flex items-center z-30 justify-center fixed bg-white shadow-sm shadow-black ">
        <div className="container   flex justify-between items-center  w-full py-[2em]">
          <div className="flex items-center justify-around   w-full ">
            <a className="text-xl font-bold  hover:text-gray-300" href="#">
              <img src="/images/logo.png" alt="logo" className="h-10 " />
            </a>
            <div className="mx-10 md:flex lg:gap-x-8 sm:gap-x-6  hidden ">
              <Link href="#">Foreclosures</Link>
              <Link href="#">New Homes</Link>
              <Link href="#">Find an Agent</Link>
              <Link href="#">Real Estate Classes</Link>
            </div>

            <div className="md:hidden sm:flex">
              <MenuIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
