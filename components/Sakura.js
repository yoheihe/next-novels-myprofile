"use client";
import React, { useEffect, useState } from "react";
import '../src/app/globals.css'; 

const Sakura = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const numPetals = 20;
    setPetals([...Array(numPetals).keys()]);
  }, []);

  return (
    <>
      {petals.map((i) => (
        <div
          key={i}
          className="sakura"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </>
  );
};

export default Sakura;
