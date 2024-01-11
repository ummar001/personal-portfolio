// components/InteractiveMouseTrail.jsx
import { useEffect } from "react";

const InteractiveMouseTrail = () => {
  useEffect(() => {
    const createDot = (x, y) => {
      const dot = document.createElement("div");
      dot.classList.add("mouse-dot");
      dot.style.left = x + "px";
      dot.style.top = y + "px";
      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 800);
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

export default InteractiveMouseTrail;
