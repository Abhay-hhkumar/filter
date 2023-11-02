import React, { useState } from 'react';
import Slider from 'react-slider';

const Range = ({minPrice,maxPrice,setMinPrice,setMaxPrice}) => {

  const [values, setValues] = useState([minPrice, maxPrice]);

  // set new changed value of minium and maximum prize
  const handleChange = (newValues) => {
    setValues(newValues);
    setMaxPrice(newValues[1]);
    setMinPrice(newValues[0]);
}

  return (

    <div className="rangeBox">
      <h3>Price Range</h3>
      
      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        min={0}
        max={100}
      />

      {/* show selected price */}
      <div style={{ display: 'flex', alignItems:'center',justifyContent: 'space-between' }}>

      {/* show minium selected price */}
        <div className="priceValue">
          <label htmlFor="minPrice">Min Price:</label><br></br>
          <input
            type="number"
            id="minPrice"
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
        </div>

        {/* show maximun selected price */}
        <div className="priceValue">
          <label htmlFor="maxPrice">Max Price:</label><br></br>
          <input
            type="number"
            id="maxPrice"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
  );
};

export default Range;