import React from "react";

const CubeBlock = () => {
  return (
    <div className="loadingio-spinner-cube-9wwll2iwaxm">
      <div className="ldio-8gfq198pcia">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style>{`
        @keyframes ldio-8gfq198pcia {
          0% { transform: scale(1.1800000000000002) }
          100% { transform: scale(1) }
        }
        .ldio-8gfq198pcia div {
          position: absolute;
          width: 40px;
          height: 40px;
          top: 40px;
          left: 40px;
          background: #00ffff;
          animation: ldio-8gfq198pcia 1s cubic-bezier(0,0.5,0.5,1) infinite;
          animation-delay: -0.3s;
        }
        .ldio-8gfq198pcia div:nth-child(2) {
          top: 40px;
          left: 120px;
          background: #408484;
          animation-delay: -0.2s;
        }
        .ldio-8gfq198pcia div:nth-child(3) {
          top: 120px;
          left: 40px;
          background: #7b7e76;
          animation-delay: 0s;
        }
        .ldio-8gfq198pcia div:nth-child(4) {
          top: 120px;
          left: 120px;
          background: #ffffff;
          animation-delay: -0.1s;
        }
        .loadingio-spinner-cube-9wwll2iwaxm {
          width: 200px;
          height: 200px;
          display: inline-block;
          overflow: hidden;
          background: none;
        }
        .ldio-8gfq198pcia {
          width: 100%;
          height: 100%;
          position: relative;
          transform: translateZ(0) scale(1);
          backface-visibility: hidden;
          transform-origin: 0 0;
        }
        .ldio-8gfq198pcia div { box-sizing: content-box; }
      `}</style>
    </div>
  );
};

export default CubeBlock;
