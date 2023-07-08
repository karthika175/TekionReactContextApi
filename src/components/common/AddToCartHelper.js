const AddToCartHelper = ({
    cart,
    cartItems,
    handleRemoveFromCart,
    updateCartItemCount,
    handleAddItem,
    handleRemoveOneFromCart,
    userId,
    
  }) => {
    
    return (
   
      <>
        {cartItems.map((item, index) => (
          <div className="cartItem" key={index}>
            <div className="cartItemImgDiv">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="cartItemDetailsDiv">
              <h5>{item.title}</h5>
              <h5>Price: {item.price}</h5>
              <h5>Quantity: {item.count}</h5>
              <div className="countHandler">
                <button onClick={() => handleRemoveOneFromCart(item.id)}> - </button>
                <input
                  value={item.count}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), item.id)
                  }
                />
                <button onClick={() => handleAddItem(item.id)}> + </button>
                <button className="removeButton" onClick={() => handleRemoveFromCart(item.id)}> Remove </button>
         
              </div>
              
         
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default AddToCartHelper;
  