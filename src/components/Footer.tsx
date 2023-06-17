import React from "react";

const Footer = () => {
  return (
    <footer
      className=" bg-[#37a000] py-[4em] text-white text-[14px]
    
    "
    >
      {" "}
      <div
        className="
  clas
    grid    
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
    gap-4
    w-[90%]
    md:w-[80%]
    lg:w-[70%]  
    mx-auto
    
  "
      >
        <div>
          <p className="">Company</p>
          <div>
            <p className="text-[#ffffff80] hover:underline">About Us</p>
            <p className="text-[#ffffff80] hover:underline">Careers</p>
            <p className="text-[#ffffff80] hover:underline">Contact Us</p>
            <p className="text-[#ffffff80] hover:underline">Privacy Policy</p>
            <p className="text-[#ffffff80] hover:underline">Terms of Use</p>
            <p className="text-[#ffffff80] hover:underline">Site Map</p>
          </div>
        </div>{" "}
        <div>
          <p className="">Property Search</p>
          <div>
            <p className="text-[#ffffff80] hover:underline">
              Find Foreclosures
            </p>
            <p className="text-[#ffffff80] hover:underline">Finid New Homes</p>
            <p className="text-[#ffffff80] hover:underline">Find an Agent </p>
          </div>
        </div>
        <div>
          <p className="">Resources</p>
          <div>
            <p className="text-[#ffffff80] hover:underline">
              Bookmark this Site
            </p>
            <p className="text-[#ffffff80] hover:underline">Education </p>
            <p className="text-[#ffffff80] hover:underline">Glossary</p>
            <p className="text-[#ffffff80] hover:underline">
              Seller/Buyer Info
            </p>
            <p className="text-[#ffffff80] hover:underline">Fair Housing</p>
          </div>
        </div>
        <div
          className="
        col-span-2
        "
        >
          <p className="text-[#ffffff80] ">
            Multiple Listing Network® is the parent company of and DBA MLS.com®.
            Multiple Listing Network® is an independently owned and operated
            Real Estate Advertising and Listing Service Company for real estate
            firms and other real estate related entities. MLS.com is
            independently owned and operated and is not affiliated with any of
            the over 900 local MLS systems. Your use of this web site
            constitutes your acceptance of our Privacy Policy and Terms of Use.
            Multiple Listing Network® and "MLS.com America's Real Estate Portal"
            are federally registered Servicemarks.
          </p>
        </div>
      </div>
      <p
        className="
      text-[#ffffff80]
      text-center
      mt-[5em]
      text-[12px]
      
      "
      >
        Multiple Listing Network Copyright 1991 - 2023 | MLS.com America's Real
        Estate Portal Copyright 2007 - 2023. <br /> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
