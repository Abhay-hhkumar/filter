import React,{useState} from 'react'
import ReactPaginate from 'react-paginate';
import image from './nokia.jpg'

const Product = ({filteredItems}) => {
  
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items per page;
 
  // tell which pace is selected
  const handlePageClick = (data) => { setCurrentPage(data.selected); }
  
  // number of page for a specific filter
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  
  // display the items on specific pages
  const displayedItems = filteredItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (

      <div className="productBox">
       
       {/* list of all filtered products/items */}
      <ul className="productCard">
        {displayedItems.map(item => ( <li key={item.id}>
                                          <img src={image} alt={item.title} /> 
                                          <p className="title">{item.title}</p>
                                          <p>{item.description}</p>
                                          <p>{item.category}</p>
                                          <p>Price: {item.price}</p>            
                                      </li>
        ))}
      </ul>

      {/* //pagination */}
     
      <ReactPaginate
      
      previousLabel={'Previous'} // Text for the previous button
      nextLabel={'Next'}          // Text for the next button
      breakLabel={'...'}               // Text for ellipsis
      pageCount={pageCount} // Total number of pages
      marginPagesDisplayed={2} // Number of pages at the beginning and end
      pageRangeDisplayed={3} // Number of pages displayed at a time
      onPageChange={handlePageClick} // Callback for page change
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}  //class for list of page number
      activeClassName={'active'}  //class for list of "active" page number
    />
  
      
      
      </div>
   
  )
}
export default Product;
