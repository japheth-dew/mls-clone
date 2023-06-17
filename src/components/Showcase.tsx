"use client";
import React from "react";
import MapChart from "./MapChart";
import { Input } from "@material-tailwind/react";
import CountriesSelect from "./CountriesSelect";

const Showcase = () => {
  const CustomInput = ({ placeholder }: { placeholder: string }) => {
    return (
      <div className="mt-[1em]">
        <Input
          variant="outlined"
          placeholder={placeholder}
          className="
          border-[1px]
          border-[#9b9999]
          rounded-[5px]
          hover:border-[#2c47a7]
          hover:ring-[#2c47a7]
          focus:ring-[#2c47a7]
          focus:border-[#2c47a7]
          hover:shadow-sm
          focus:shadow-sm
          animate-all
          duration-200
          hover:shadow-[#2c47a7]
          focus:shadow-[#2c47a7]
          focus:outline-none
        px-[1em]
        py-[.3em]"
        />
      </div>
    );
  };
  const Form = ({ header, tagline }: { header?: string; tagline?: string }) => {
    return (
      <div
        className="bg-white py-[1em]  px-[1em] rounded-[2px] shadow-md
       "
      >
        <h2
          className="
        text-[18px] text-[#37a000] mb-3  "
        >
          {header || "Find Real Estate"}
        </h2>

        <p
          className="
        text-[13px] text-[#5a5a5a] mb-5"
        >
          {tagline || "Click on a State to View MLS Listings in your area"}
        </p>
        <div className="">
          <CustomInput placeholder="City" />
          <CustomInput placeholder="Zip" />
          <CountriesSelect />
          <CustomInput placeholder="Country" />
        </div>

        <button
          className="
        bg-[#37a000]
        text-white
        rounded-[5px]
        px-[1em]
        py-[.5em]
        mt-[1em]
        hover:bg-[#2c47a7]
        hover:font-[400]
        "
        >
          SEARCH
        </button>
      </div>
    );
  };

  return (
    <div className="bg-[rgba(0,0,0,.1)] py-[5em] flex items-center justify-center  ">
      <div className="text-[#5a5a5a] flex flex-col items-center justify-center font-[300]  w-full">
        <div className="lg:w-[60%] md:w-[80%] w-[90%] flex flex-col items-center justify-center">
          <h2 className=" text-[40px] text-center  ">Find Real Estate</h2>
          <p className="text-[20px] text-center mt-[1em]">
            Click on a State to View MLS Listings in your area
          </p>
          <div className="h-[1px] w-[8em] bg-[#37a000] mt-10 mb-[3em]" />

          <MapChart />
        </div>
        <div
          className="mt-[2em] grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-[1.5em]
        "
        >
          <Form />
          <Form />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
