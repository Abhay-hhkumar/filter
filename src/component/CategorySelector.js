import React, { useState } from "react"

function CategorySelector( { items,selectedCategory,setSelectedCategory } ) {
  
    // update the category 
   const handleCategoryChange = ( category ) => {  setSelectedCategory( category );  };

    // destructure all types of category available
  const categories = ['All', 'Category A', 'Category B', 'Category C', 'Category D'];

  return (
    <>
       <div className = " categoryBox " >

        <h3>Select Category:</h3><br></br>
         
         {/* select one radio category  */}
        <div className = " categoryOptions " >
        {categories.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
        </div>
        
      </div> </>
 );}
export default CategorySelector;
