import { Link, useNavigate } from "react-router-dom"

const HeaderCreate = (({
    newhandle,
    returnedData,
    HandleCategory,
    userName,
    selectedCategory,
    length
})=>{
    const navigate=useNavigate();
    return(
        <header className="headDiv">
      <div className="backButton">
        <button onClick={() => navigate(-1)}>
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
      </div>
      <div className="title">
        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        <h1>SHOPEE</h1>
      </div>
      <div id="searchDiv">
        <input
          type="text"
          className="search"
          placeholder="search here"
          id="search"
          onChange={newhandle}
        />
      </div>
      <div className="dropDown" id="showCategory">
        <select onChange={HandleCategory} value={selectedCategory}>
        {returnedData.map(item => (
        <option key={item} value={item}>{item}</option>
      ))}
         
          
        </select>
      </div>
      <div className="moveToCartPagesDiv">
        <button className="moveToCartPages">
          <Link to="/AddtoCart">
            cart ({length})
          </Link>
        </button>
      </div>
      <div className="login">
        <h3>{userName}</h3>
      </div>
    </header>
    )
})
export default HeaderCreate;