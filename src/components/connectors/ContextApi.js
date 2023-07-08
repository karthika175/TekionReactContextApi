import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

  const [selectedCategory, setSelectedCategory] = useState('');

  const [cartItems, setCartItems] = useState([]);
  const [userName,setUserName] =useState('');
  let finalCategory=selectedCategory;
  
  const [cartArray, setCartArray] = useState([]);
  const [cart, setCart] = useState({});
  const [userCart,setUserCart]=useState([]);
  const [userJson,setUserJson]=useState({});
  const [categoryData, setCategoryData] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [totalPrice,setTotalPrice] = useState(0);
  const [id,setUserId] = useState(0);
  const [priceRange, setPriceRange] = useState(0);
  const [discountRange, setDiscountRange] = useState(0);
  const [stockRange, setStockRange] = useState(0);
  useEffect(() => {
    if (finalCategory === 'All Products') {
      axios.get("https://dummyjson.com/products")
        .then(response => setCategoryData(response.data.products));
    } else {
      axios.get(`https://dummyjson.com/products/category/${finalCategory}`)
        .then(response => setCategoryData(response.data.products));
    }
  }, [finalCategory]);
  
  useEffect(() => {
    console.log(categoryData);
  }, [categoryData]);
  
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then(response => setProduct(response.data));
  }, [id,product]);
  
  // useEffect(() => {
  //   axios.get("https://dummyjson.com/products")
  //     .then(response => setValue(response.data));
  //   }, []);

    const debounce = (func) => {
      let timer;
      return function (...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          timer = null;
          func.apply(context, args);
        }, 500);
      };
    };
  
    const newhandle = useCallback(
      debounce((event) => {
        const { value } = event.target;
        if (value) {
          setSearchedValue(value);
        } else {
          setSearchedValue('');
        }
      }),
      []
    );
    
const contextValue={

  selectedCategory,
  setSelectedCategory,
  categoryData,
  searchedValue,setSearchedValue,
  setCartItems,
  totalPrice,setTotalPrice,
  id,setUserId,
  userJson,setUserJson,
  userCart,setUserCart,
  cartArray,setCartArray,
  userName,setUserName,
  newhandle,
  product,
  priceRange,
  setPriceRange,
  discountRange,
  setDiscountRange,
  stockRange,
  setStockRange,

 
};
  return (
    
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
