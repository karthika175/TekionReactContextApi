import React, { useContext, useEffect, useCallback, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../connectors/ContextApi";
import { CreateCard } from "../common/CreateCard";
import SideBar from "../subComponents/SideBar";

export default function MainContent() {
  const { 
    categoryData, 
    setPriceRange, 
    priceRange, 
    searchedValue,
    stockRange,
    setStockRange,
    discountRange,
    setDiscountRange,

   } = useContext(
    ShopContext
  );
  const { cartItems, setUserId, id, userJson, setUserJson } = useContext(ShopContext);


 
  const navigate = useNavigate();

  const eventDele = useCallback(
    (event) => {
      const tagName = event.target.tagName;
      const id = event.target.id;

      if (tagName === "IMG") {
        navigate(`/Description/${id}`);
      }
    },
    [navigate]
  );

  const [filteredCategoryData, setFilteredCategoryData] = useState([]);

useEffect(() => {
  let filteredData = categoryData;

  if (priceRange > 0) {
    filteredData = filteredData.filter(
      (product) => product.price <= parseInt(priceRange)
    );
  }
  if (discountRange > 0) {
    filteredData = filteredData.filter(
      (product) => product.discountPercentage <= parseInt(discountRange)
    );
  }
  if (stockRange > 0) {
    filteredData = filteredData.filter(
      (product) => product.stock <= parseInt(stockRange)
    );
  }
  if (searchedValue !== '') {
    const searchValueLowerCase = searchedValue.toLowerCase();
    filteredData = filteredData.filter(
      (product) => product.title.toLowerCase().includes(searchValueLowerCase)
    );
  }
  
  

  setFilteredCategoryData(filteredData);
}, [priceRange, discountRange, stockRange, categoryData,searchedValue]);

const { userId } = useParams();
setUserId(userId);
useEffect(() => {
  const existingUserJson = localStorage.getItem("userDetails");
  if (existingUserJson) {
    const parsedUserJson = JSON.parse(existingUserJson);
    setUserJson(parsedUserJson);
  }
}, [setUserJson]);


const handleAddToCart = (item) => {
  const itemWithCount = {
    ...item,
    count: 1,
  };

  const existingCartItems = userJson[id] || [];
  const isItemInCart = existingCartItems.some((cartItem) => cartItem.id === itemWithCount.id);

  if (isItemInCart) {
    return;
  }

  setUserJson((prevUser) => ({
    ...prevUser,
    [id]: [...existingCartItems, itemWithCount],
  }));
};




  return (
    <>
      <SideBar />
      <div className="cardContainer">
        <article className="mainDiv" onClick={eventDele}>
          <CreateCard dataSet={filteredCategoryData}
            handleAddToCart={handleAddToCart}
            userId={userId}

          />
        </article>
      </div>
    </>
  );
}
