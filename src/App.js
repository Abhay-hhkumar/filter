import React,{useState,useEffect,} from 'react';
import CategorySelector from './component/CategorySelector';
import Range from './component/Range';
import Product from './component/Product';
import products from './component/Data';
import GlobalStyles from './component/styles/Global';// for style

const App = () => {
   
  const [selectedCategory,setSelectedCategory]=useState('All');  //state to store category
  const [minPrice,setMinPrice]=useState(0);     //state to store minium prize range
  const [maxPrice,setMaxPrice]=useState(155);   //state to store max prize range
  const [items,setItems]=useState(products);    //state to store all products
  const [filteredItems,setFilteredItems]=useState([]);      //state to store filtered products
  const [isMenuOpen, setIsMenuOpen] = useState(false);      //it use to toggle the menu/close botton


  // we click menu button to toggle it
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   useEffect(()=>{
     
  // if we have not select any category then show all category items otherwise show filtered category items
  //we used ternary operator
    var filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);
     
  //  apply filter to items on the basis of minium and maxium price of items
     filteredItems=filteredItems.filter(item => item.price >= minPrice && item.price <= maxPrice)
  
  // set the final filtered item in filteredItems
    setFilteredItems(filteredItems)
   },[minPrice,maxPrice,selectedCategory])
  
  return (
    <>

    {/* //apply style in required elements globaly */}
    <GlobalStyles />

      <div className='container'>
       {/* header */}
       <header>  <h2>Logo</h2>
          { isMenuOpen ? <button onClick={toggleMenu} id="menuButton" >Close</button> : <button onClick={toggleMenu} id="menuButton" >Menu</button>}
       </header>
     
     {/* content */}
      <div className='main'>
          {/* if isMenuOpen is true then id=menu-open will added in filter div */}
          <div className="filter" id={ `${isMenuOpen ? 'menu-open' : ''}`}>
            <h2>Filter</h2>
            <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} items={items} />
            <Range minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>  
          </div>   
          <Product filteredItems={filteredItems} />
      </div>
      
      {/* footer */}
     <footer><p>Footer</p></footer>
       
    </div> </> )}
    
export default App

// install
// npm install react-paginate
// npm install react-slider
// npm install styled-components

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

