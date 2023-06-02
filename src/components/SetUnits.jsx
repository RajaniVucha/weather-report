// SetUnits Component
import React from "react";
import { useState } from "react";
const SetUnits = () => {
  const [selval, setSelval] = useState("celcius");
  const handleSelect = (val) => {
    setSelval(val);
  };
  return (
    <>
      <div className="set-units">
        <label>UNITS</label>
        <select value={selval} onChange={(e) => handleSelect(e.target.value)}>
          <option value="celcius">Celcius</option>
          <option value="farenheit">Farenheit</option>
        </select>
      </div>
    </>
  );
};

export default SetUnits;
