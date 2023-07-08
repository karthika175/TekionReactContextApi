
import axios from 'axios';
import React, { createContext, useState, useCallback, useEffect } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchedValue, setSearchedValue] = useState('');
  let finalSearched=searchedValue;
  const [searchedData, setSearchedData] = useState([]);
  useEffect(()=>{
    setSearchedData([]);
    axios.get("https://dummyjson.com/products")
        .then(response => setSearchedData(response.data))
        .catch(error => console.log(error));
  },[]);
  useEffect(() => {
    if (finalSearched !== '') {
      const searchurl = `https://dummyjson.com/products/search?q=${finalSearched}`;
      axios.get(searchurl)
        .then(response => setSearchedData(response.data))
        .catch(error => console.log(error));
    } 
    // else {
    //   setSearchedData([]);
    //   axios.get("https://dummyjson.com/products")
    //     .then(response => setSearchedData(response.data))
    //     .catch(error => console.log(error));
    // }
  }, [finalSearched]);
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

  return (
    <SearchContext.Provider value={{ searchedValue,searchedData, setSearchedValue, newhandle }}>
      {children}
    </SearchContext.Provider>
  );
};
