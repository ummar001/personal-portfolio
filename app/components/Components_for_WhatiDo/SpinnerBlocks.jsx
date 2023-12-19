import React from 'react';

const SpinnerBlocks = () => {
  return (
    <div className="loadingio-spinner-blocks-4s5uuo0y78h">
      <div className="ldio-q0xt33agorg">
        <div style={{ left: '38px', top: '38px', animationDelay: '0s' }}></div>
        <div style={{ left: '80px', top: '38px', animationDelay: '0.125s' }}></div>
        <div style={{ left: '122px', top: '38px', animationDelay: '0.25s' }}></div>
        <div style={{ left: '38px', top: '80px', animationDelay: '0.875s' }}></div>
        <div style={{ left: '122px', top: '80px', animationDelay: '0.375s' }}></div>
        <div style={{ left: '38px', top: '122px', animationDelay: '0.75s' }}></div>
        <div style={{ left: '80px', top: '122px', animationDelay: '0.625s' }}></div>
        <div style={{ left: '122px', top: '122px', animationDelay: '0.5s' }}></div>
      </div>
      <style>
        {`
        @keyframes ldio-q0xt33agorg {
          0% { background: #049bba }
          12.5% { background: #049bba }
          12.625% { background: #00fff5 }
          100% { background: #00fff5 }
        }
        .ldio-q0xt33agorg div {
          position: absolute;
          width: 40px;
          height: 40px;
          background: #00fff5;
          animation: ldio-q0xt33agorg 1s linear infinite;
        }
        .loadingio-spinner-blocks-4s5uuo0y78h {
          width: 200px;
          height: 200px;
          display: inline-block;
          overflow: hidden;
          background: none;
        }
        .ldio-q0xt33agorg {
          width: 100%;
          height: 100%;
          position: relative;
          transform: translateZ(0) scale(1);
          backface-visibility: hidden;
          transform-origin: 0 0; /* see note above */
        }
        .ldio-q0xt33agorg div { box-sizing: content-box; }
        `}
      </style>
    </div>
  );
};

export default SpinnerBlocks;
