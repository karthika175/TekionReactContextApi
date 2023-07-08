import React, { useEffect, useContext, useCallback, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../connectors/ContextApi';
import { useNavigate } from "react-router-dom";
import HeaderCreate from '../subComponents/HeaderCreate';
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const { 
    selectedCategory,
    setSelectedCategory, 
    userName, 
    setSearchedValue, 
    newhandle, 
    userJson,
    id 
  } = useContext(ShopContext);

const [length, setLength]=useState(0);

  const HandleChange = useCallback((event) => {
    const { value } = event.target;
    setSearchedValue(value);
    newhandle(event);
  }, [setSearchedValue, newhandle]);

  const HandleCategory = useCallback((event) => {
    const { value } = event.target;
   
    setSelectedCategory(value);
  }, [setSelectedCategory]);

  function useDropDown() {
    const [data, setData] = React.useState([]);

    useEffect(() => {
  
      axios
        .get('https://dummyjson.com/products/categories')
        .then(response => {
          const categories = response.data;
          categories.unshift("All Products"); 
          setData(categories);
          setSelectedCategory("All Products"); 
        })
        .catch(error => console.log(error));

        if(userJson[id] && userJson[id].length>0){
          setLength(userJson[id].length);

        }
        else{
          setLength(0);
        }
    }, []);

    return data;
  }

  const returnedData = useDropDown();
  
 


  return (
    <HeaderCreate 
      returnedData={returnedData}
      userName={userName}
      HandleCategory={HandleCategory}
      newhandle={newhandle}
      selectedCategory={selectedCategory}
      length={length}
    />
  );
}
