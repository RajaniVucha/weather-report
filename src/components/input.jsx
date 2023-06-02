// Input Component
import React from "react";

const Input = ({ city, handleCity }) => {
  return (
    <>
      <span className="label">Location</span>
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => handleCity(e.target.value)}
      />
    </>
  );
};

export default Input;
