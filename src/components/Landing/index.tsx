"use client";
import React from "react";
import styles from "./landing.module.css";

const Landing = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="h-[6em]"></div>
      <div className={styles.container + " h-[70vh] "}>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="md:text-[60px] text-[40px] font-[300] text-center leading-[1.2em]  text-white">
            MLS Multiple Listing Service <br /> Listings
          </h1>
          <p className="text-[16px] mt-4 text-[rgba(255,255,255,.5)]">
            Your Trusted Real Estate Source
          </p>
          <div className="flex gap-x-4 mt-4">
            <button
              onClick={scrollToTop}
              className="bg-[#37a000] text-white px-10 py-4 rounded-[5px] visited:bg-transparent visited:text-white hover:bg-transparent hover:border-[2px] hover:border-white animate-all transition-all duration-200 ease-in-out
              "
            >
              SEARCH LISTINGS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
