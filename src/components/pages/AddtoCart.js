import { Fragment, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ShopContext } from "../connectors/ContextApi";
import { Link, useNavigate } from "react-router-dom";
import AddToCartHelper from '../common/AddToCartHelper';
import HeaderForCart from '../common/HeaderForCart';
import  '../../style/placedOrder.scss';
import PopUp from '../subComponents/PopUp'
function AddtoCart() {
  const {
    id,
    userJson,
    setUserJson,
    cartArray,
  } = useContext(ShopContext);

   const [cartItemLen,setCartItemLen]=useState(0);
  const [popPrice,setPopPrice]=useState(0);
  useEffect(() => {
    const existingUserJson = localStorage.getItem("userDetails");
    if (existingUserJson) {
      setUserJson(JSON.parse(existingUserJson));
    }
  }, [setUserJson]);
  
  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userJson));
  }, [userJson]);
  
  useEffect(() => {
    if (id) {
      const updatedCart = [...(userJson[id] || []), ...cartArray];
      const uniqueCart = Array.from(new Set(updatedCart.map((item) => item.id)))
        .map((id) => updatedCart.find((item) => item.id === id));
      setUserJson((prevUser) => ({
        ...prevUser,
        [id]: uniqueCart,
      }));
      localStorage.setItem("userDetails", JSON.stringify({
        ...userJson,
        [id]: uniqueCart,
      }));
    }
  }, [id]);
  
  const [popup,setPop]=useState(false)
  const handleClickOpen = () => {
    setUserJson((prevUser) => ({
      ...prevUser,
      [id]: [],
    }));
    //setCartItemLen(userJson[id]);
//console.log(userJson[id]);
    setPopPrice(totalPrice);
    localStorage.removeItem("userDetails");
    setPop(!popup);
  };
  const closePopup=()=>{
    setPop(false)
  }
  const handleRemoveFromCart = useCallback(
    (itemId) => {
      const updatedCart = userJson[id].filter((item) => item.id !== itemId);
      setUserJson((prevUser) => ({
        ...prevUser,
        [id]: updatedCart,
      }));
      localStorage.setItem(
        "userDetails",
        JSON.stringify({
          ...userJson,
          [id]: updatedCart,
        })
      );
    },
    [userJson, setUserJson, id]
  );
  const updateCartItemCount = useCallback(
    (count, itemId) => {
      const updatedCart = userJson[id].map((item) =>
        item.id === itemId ? { ...item, count } : item
      );
      setUserJson((prevUser) => ({
        ...prevUser,
        [id]: updatedCart,
      }));
      localStorage.setItem(
        "userDetails",
        JSON.stringify({
          ...userJson,
          [id]: updatedCart,
        })
      );
    },
    [userJson, setUserJson, id]
  );
  const handleAddItem = useCallback(
    (itemId) => {
      const updatedCart = userJson[id].map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            count: item.count ? item.count + 1 : 1,
          };
        }
        return item;
      });
  
      setUserJson((prevUser) => ({
        ...prevUser,
        [id]: updatedCart,
      }));
      localStorage.setItem(
        "userDetails",
        JSON.stringify({
          ...userJson,
          [id]: updatedCart,
        })
      );
    },
    [userJson, setUserJson, id]
  );
  const handleRemoveOneFromCart = useCallback(
    (itemId) => {
      const updatedCart = userJson[id].map((item) =>
        item.id === itemId ? { ...item, count: item.count - 1 } : item
      );
  
      setUserJson((prevUser) => ({
        ...prevUser,
        [id]: updatedCart,
      }));
      localStorage.setItem(
        "userDetails",
        JSON.stringify({
          ...userJson,
          [id]: updatedCart,
        })
      );
    },
    [userJson, setUserJson, id]
  );
  const totalPrice = (userJson[id] ?? []).reduce(
    (acc, item) => acc + item.price * (item.count || 0),
    0
  );
 
  const getConfig = (price) => {
    return {
      message: `Total Price: $${price}.`,
      cashback: price > 500 ? "You are eligible for cashback offer!" : null,
      freeShipping: price > 1000 ? "You qualify for free shipping!" : null,
    };
  };

  const config = getConfig(totalPrice);
  

  return (
    <Fragment>
      <HeaderForCart />
    <>
      <h2>Cart</h2>
      <div className={`cartContainer ${popup ? "lowOpacity" : ""}`}>
        <div className="cartItems">
          {userJson[id] && userJson[id].length > 0 ? (
            <AddToCartHelper
              cartItems={userJson[id]}
              handleRemoveFromCart={handleRemoveFromCart}
              updateCartItemCount={updateCartItemCount}
              handleAddItem={handleAddItem}
              handleRemoveOneFromCart={handleRemoveOneFromCart}
              userId={id}
              
            />
          ) : (
            <div>Your cart is empty.</div>
          )}
        </div>
        <div className="totalPrice">
          {/* <p>Total price: {totalPrice}</p> */}
          <p>{config.message}</p>
        {config.cashback && <p>{config.cashback}</p>}
        {config.freeShipping && <p>{config.freeShipping}</p>}
          <button onClick={handleClickOpen}> place order </button>
          <PopUp 
            popup={popup}
            closePopup={closePopup}
            cartItemLen={cartItemLen}
            popPrice={popPrice}
          
             />
             
        </div>
      </div>
     
    </>
    </Fragment>
  );
}
export default AddtoCart;
