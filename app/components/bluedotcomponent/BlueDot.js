// BlueDot.js

import React, { useEffect, useRef } from 'react';
import styles from './BlueDot.module.css';

const BlueDot = ({ size }) => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;

    const moveRandomly = () => {
      const maxX = window.innerWidth - dot.clientWidth;
      const maxY = window.innerHeight - dot.clientHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      dot.style.left = `${randomX}px`;
      dot.style.top = `${randomY}px`;
    };

    moveRandomly(); // Initial random position

    const intervalId = setInterval(moveRandomly, 5000); // Move every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return <div className={styles.blueDot} ref={dotRef} style={{ width: size, height: size }}></div>;
};

export default BlueDot;
