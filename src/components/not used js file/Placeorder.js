import React, { useContext } from "react";
import { ShopContext } from "../connectors/ContextApi";

function PlaceOrder() {
  const { cart, totalPrice } = useContext(ShopContext);

  const getConfig = (price) => {
    return {
      message: `Your order total is $${price}.`,
      cashback: price > 10000 ? "You are eligible for cashback offer!" : null,
      freeShipping: price > 5000 ? "You qualify for free shipping!" : null,
    };
  };

  const config = getConfig(totalPrice);

  return (
    <>
      <h2>Place Order</h2>
      <div className="placedProduct">
        <div className="cardContainer">
          {cart.map((product) => (
            <div className="singleProduct" key={product.id}>
              <div>
                <img src={product.thumbnail} alt="thumbnail"></img>
              </div>
              <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.count}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="placedDetails"> 
        <p>{config.message}</p>
        {config.cashback && <p>{config.cashback}</p>}
        {config.freeShipping && <p>{config.freeShipping}</p>}
      </div>
      </div>
    </>
  );
}

export default PlaceOrder;
