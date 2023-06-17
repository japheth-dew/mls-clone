import React from "react";

const InfoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[4em]">
      <p
        className="
        text-[40px]
        text-[#54545a]
        font-[300]
      "
      >
        {" "}
        What is MLS.com®?
      </p>
      <div className="h-[1px] w-[8em] bg-[#37a000] mt-10 mb-[3em]" />
      <div
        className="flex         lg:w-[50%] md:w-[70%] w-[90%]
"
      >
        <p className="text-[12px]  text-[#5a5a5a]">
          MLS.com® is a free MLS search to find real estate listings for sale by
          Realtors® and other realty professionals that are members of your
          local MLS Multiple Listing Service. MLS.com® also features
          foreclosures, new construction, international properties and real
          estate classes. Find homes for sale, new homes and resale homes, new
          construction, acreage, lots, land, commercial properties and
          investment properties. MLS.com is independently owned and operated and
          is not affiliated with any of the over 900 local MLS systems. On
          MLS.com you can list your properties and reach our global audience.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
