import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

export default function CountriesSelect() {
  const { countries } = useCountries();

  return (
    <div>
      <select
        placeholder="Select State"
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
        py-[.7em]
        w-[100%]
        mt-[1em]
        text-[#00000058]
        text-[14px]
        "
        name=""
        id=""
      >
        {countries.map((country: any, index: number) => (
          <option
            className="
          text-[#00000058] text-[14px] hover:underline cursor-pointer w-full

          
          "
            key={index}
            value={country.name}
          >
            {country.name.slice(0, 20)}
          </option>
        ))}
      </select>
    </div>
  );
}
