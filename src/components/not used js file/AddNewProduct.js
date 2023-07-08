import React from "react";
function AddNewProduct() {
   
    // Other product details state
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://dummyjson.com/products/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);
    };
  
    return (
      <>
        <button onClick={handleSubmit}></button>
      </>
    );
  }
export default AddNewProduct;