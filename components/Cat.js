'use client';
import React, { useState, useEffect } from 'react';
import styles from './cat.module.css';

const Cat = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const moveCat = () => {
      setPosition((prev) => ({
        x: Math.max(0, Math.min(window.innerWidth - 100, prev.x + (Math.random() * 200 - 100))),
        y: Math.max(0, Math.min(window.innerHeight - 100, prev.y + (Math.random() * 200 - 100))),
      }));
    };

    const interval = setInterval(moveCat, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={styles.cat} 
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className={styles.body}>
        <div className={styles.ear}></div>
        <div className={styles.ear}></div>
        <div className={styles.tail}></div>
      </div>
    </div>
  );
};

export default Cat;
