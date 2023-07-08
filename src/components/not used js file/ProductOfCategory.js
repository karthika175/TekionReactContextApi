import { Fragment, useContext } from "react";
import { ShopContext } from '../connectors/ContextApi';
import MainContent from "../allProducts/MainContent";
import HeaderForCategory from "../common/HeaderForCart";

const ProductOfCategory = () => {
  const {categoryData}  = useContext(ShopContext);
  
  console.log(categoryData);
  return ( 
    <Fragment>
      <HeaderForCategory />
     <div id="productOfCategory" className="mainContainer">
        
        {/* <MainContent recievedDataset={categoryData} /> */}
           
      </div>
    </Fragment>
  );
}

export default ProductOfCategory;
