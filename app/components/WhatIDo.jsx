import React from "react";
import SpinnerBlocks from "./Components_for_WhatiDo/SpinnerBlocks"; // Import the SpinnerBlocks component
import SpinnerDualBall from "./Components_for_WhatiDo/SpinnerDualBall"; // Import the SpinnerDualBall component
import CubeBlock from "./Components_for_WhatiDo/CubeBlock";

const WhatIDo = () => {
  return (
    <section className="text-white">
      <div className="flex flex-wrap justify-center">
        <div className="text-center m-4">
          <h2 className="text-3xl font-bold text-center text-[#00FFFF]">
            What I Do
          </h2>
        

        <div className="flex justify-around max-w-3xl mx-auto">
          <div className="flex flex-col items-center mx-3">
            {/* Your existing content */}
          </div>

          <div className="flex flex-col items-center mx-3">
            {/* Your existing content */}
          </div>

          <div className="flex flex-col items-center mx-3">
            {/* SpinnerBlocks component */}
            <SpinnerBlocks />
            <p className="text-white text-center">Software Development</p>
          </div>

          <div className="flex flex-col items-center mx-3">
            {/* SpinnerDualBall component */}
            <SpinnerDualBall />
            <p className="text-white text-center">Web Design</p>
          </div>

          <div className="flex flex-col items-center mx-3">
            {/* CubeBlock component */}
            <CubeBlock />
            <p className="text-white text-center ">Web Development</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
