import React from "react";

const States = () => {
  const states: string[][] = [
    [
      "Idaho MLS",
      "Illinois MLS",
      "Indiana MLS",
      "Iowa MLS",
      "Kansas MLS",
      "Kentucky MLS",
      "Georgia MLS",
      "Hawaii MLS",
    ],
    [
      "Louisiana MLS",
      "Maine MLS",
      "Maryland MLS",
      "Massachusetts MLS",
      "D.C. MLS",
      "Florida MLS",
      "Michigan MLS",
      "Minnesota MLS",
    ],
    [
      "Mississippi MLS",
      "Missouri MLS",
      "Connecticut MLS",
      "Delaware MLS",
      "Montana MLS",
      "Nebraska MLS",
      "Nevada MLS",
      "New Hampshire MLS",
    ],
    [
      "New Jersey MLS",
      "New Mexico MLS",
      "New York MLS",
      "Arizona MLS",
      "Arkansas MLS",
      "North Carolina MLS",
      "North Dakota MLS",
      "Ohio MLS",
    ],
    [
      "Oklahoma MLS",
      "Oregon MLS",
      "Pennsylvania MLS",
      "Rhode Island MLS",
      "South Carolina MLS",
      "South Dakota MLS",
    ],
    [
      "Tennessee MLS",
      "Texas MLS",
      "Utah",
      "California MLS",
      "Colorado MLS",
      "California MLS",
      "Colorado MLS",
      "Vermont MLS",
      "Virginia MLS",
    ],
  ];

  return (
    <div className="flex flex-col items-center justify-center py-[5em] bg-[rgba(0,0,0,.1)]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-start auto-cols-max">
        {states.map((stateGroup, index) => (
          <div key={index}>
            {stateGroup.map((state, innerIndex) => (
              <p
                key={innerIndex}
                className="text-[#37a000] text-[10px] hover:underline cursor-pointer"
              >
                {state}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default States;
