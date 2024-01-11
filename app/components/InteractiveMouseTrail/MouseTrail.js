// MouseTrail.js
import React, { useEffect } from "react";
import "./MouseTrail.css"; // Import the CSS for styling

const MouseTrail = () => {
  useEffect(() => {
    const createDot = (x, y) => {
      const dot = document.createElement("div");
      dot.classList.add("mouse-dot");
      dot.style.left = x + "px";
      dot.style.top = y + "px";
      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 800); // Remove dot after 800ms
    };

    const onMouseMove = (event) => {
      createDot(event.clientX, event.clientY);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return null;
};

export default MouseTrail;
