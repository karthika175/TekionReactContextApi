import { useState, useEffect, Fragment, useContext } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import HeaderForCategory from "../common/HeaderForCart";
import { ShopContext } from '../connectors/ContextApi';

function Description() {
  

  
  const {product} = useContext(ShopContext);


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <HeaderForCategory />
    <div id="descriptionMainContainer">
       
    <h2>{product.title}</h2>
    <div className='descriptionJs'>
        <div className="imgDiv">
            <img src={product.thumbnail} alt="img" />
        </div>
        <div className='details'>
       
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
           

            <p className='stock'>In the stock: {product.stock}</p>
            <p className='discount'>Discount : {product.discountPercentage} OFF /-</p>
            
      
        </div>
    </div>
</div>
</Fragment>
   
  )
}

export default Description;