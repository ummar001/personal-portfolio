import React from 'react';

const SpinnerDualBall = () => {
  return (
    <div className="loadingio-spinner-dual-ball-5ja3gqdhcp6">
      <div className="ldio-2bzati9p5yi">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style>
        {`
        @keyframes ldio-2bzati9p5yi-o {
            0%    { opacity: 1; transform: translate(0 0) }
           49.99% { opacity: 1; transform: translate(80px,0) }
           50%    { opacity: 0; transform: translate(80px,0) }
          100%    { opacity: 0; transform: translate(0,0) }
        }
        @keyframes ldio-2bzati9p5yi {
            0% { transform: translate(0,0) }
           50% { transform: translate(80px,0) }
          100% { transform: translate(0,0) }
        }
        .ldio-2bzati9p5yi div {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          top: 60px;
          left: 20px;
        }
        .ldio-2bzati9p5yi div:nth-child(1) {
          background: #e4dade;
          animation: ldio-2bzati9p5yi 1s linear infinite;
          animation-delay: -0.5s;
        }
        .ldio-2bzati9p5yi div:nth-child(2) {
          background: #46dff0;
          animation: ldio-2bzati9p5yi 1s linear infinite;
          animation-delay: 0s;
        }
        .ldio-2bzati9p5yi div:nth-child(3) {
          background: #e4dade;
          animation: ldio-2bzati9p5yi-o 1s linear infinite;
          animation-delay: -0.5s;
        }
        .loadingio-spinner-dual-ball-5ja3gqdhcp6 {
          width: 200px;
          height: 200px;
          display: inline-block;
          overflow: hidden;
          background: none;
        }
        .ldio-2bzati9p5yi {
          width: 100%;
          height: 100%;
          position: relative;
          transform: translateZ(0) scale(1);
          backface-visibility: hidden;
          transform-origin: 0 0; /* see note above */
        }
        .ldio-2bzati9p5yi div { box-sizing: content-box; }
        `}
      </style>
    </div>
  );
};

export default SpinnerDualBall;
