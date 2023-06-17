"use client";

import Navbar from "@/components/Header";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Scroll to the top of the page
      window.scrollTo(0, 0);

      // Lock scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Unlock scrolling
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const CustomLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      onClick={() => {
        setIsMenuOpen(false);
      }}
      className="text-sm text-[#00000080] text-[16px] font-[500]  hover:text-[#37a000] "
    >
      {children}
    </Link>
  );

  return (
    <div className={`flex w-full ${isMenuOpen ? "menu-open" : ""}`}>
      <Navbar handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <div>
        <div className={`menu ${isMenuOpen ? "slide-in" : ""}`}>
          <div className="mx-10 text-[#00000058] mt-[8em] text-[16px] flex flex-col gap-[2em]">
            <CustomLink href="#">Foreclosures</CustomLink>
            <CustomLink href="#">New Homes</CustomLink>
            <CustomLink href="#">Find an Agent</CustomLink>
            <CustomLink href="#">Real Estate Classes</CustomLink>
          </div>
        </div>
        <div className="wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
