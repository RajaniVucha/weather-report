// WeatherReport Component
import React from "react";

const WeatherReport = () => {
  return (
    <>
      <div className="weather-report">
        <h2 className="big">Los Angeles </h2>
        <h3 className="conditions">Clear Sky | Feels Like 14C</h3>
        <div className="temperature">
          <div>Current Temperature 14C</div>
          <div>Maximun Temperature 17 C</div>
          <div>Minimum Temperature 11C</div>
        </div>
        <div className="wind">
          <div>Wind Speed</div>
          <div>Wind Direction</div>
        </div>
        <div className="pressure">
          <div>Pressure</div>
          <div>Humidity</div>
        </div>
      </div>
    </>
  );
};

export default WeatherReport;
