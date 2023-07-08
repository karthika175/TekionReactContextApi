import { Fragment, useContext, useEffect } from "react";
import { ShopContext } from "../connectors/ContextApi";
import { useParams } from "react-router-dom";

export const CreateCard = ({ 
  dataSet,
  userId,
  handleAddToCart
 }) => {
  const { cartItems, setUserId, id, userJson, setUserJson } = useContext(ShopContext);


  if (dataSet && dataSet.length > 0) {
    return (
      <Fragment>
        {dataSet.map((item, index) => {
          const inCart = userJson[userId] && userJson[userId].some((cartItem) => cartItem.id === item.id);
          
          return (
            <div className="singleItem" key={index}>
              <div className="imgDiv">
                <a>
                  <img id={item.id} src={item.thumbnail} alt={item.title} />
                </a>
              </div>
              <div className="commonDetailsDiv">
                <div className="detailsDiv1">
                  <h5>Title: {item.title}</h5>
                  <h5>Price: {item.price}$</h5>
                </div>
                <div className="detailsDiv2">
                  <h5>Discount: {item.discountPercentage} %</h5>
                  <h5>In Stock: {item.stock} </h5>
                </div>
              </div>
              <div className="submitButton">
                <button
                  type="submit"
                  className={`addToCart ${inCart ? "inCart" : ""}`}
                  id={item.id}
                  value="true"
                  key={item.id}
                  disabled={inCart}
                  onClick={() => handleAddToCart(item)}
                >
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  {inCart ? "In the cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
        
      </Fragment>
    );
  }
  else if(dataSet.length===0){
    return <div>No results found</div>;
  }
   else {
    return <div>Loading data...</div>;
  }
};
