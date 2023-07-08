import { Link } from "react-router-dom"

const PopUp = ({
    popup,
    closePopup,
    popPrice,
    cartItems,
    
  }) => {
    
    return (
<div>
{
    popup?
    <div className="main">
        <div className="popup">
            <div className="popupHeader">
                <h2>Order Details</h2>
                <button onClick={closePopup} className="closeButton">X</button>
            </div>
            <div>
            <p>Your order have been successfully placed!!</p>
            {/* <p>Total Number of Items: {cartItems.length}</p> */}
            <p>Total Price: {popPrice}</p>
            {/* <p>{config.message}</p>
        {config.cashback && <p>{config.cashback}</p>}
        {config.freeShipping && <p>{config.freeShipping}</p>} */}
            <p>To continue Shopping <Link to={`/products/:id`}> Click here </Link></p>
            </div>
        </div>
    </div>:""
}
</div>
    )
}
export default PopUp;