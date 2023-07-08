
import { Fragment, useContext } from "react";
import { ShopContext } from '../connectors/ContextApi';
import MainContent from "../allProducts/MainContent";

const SearchPage = () => {
 
  const {searchedData}  = useContext(ShopContext);
  console.log(searchedData);

  return ( 
    <Fragment>
      <div id="searchPage" className="mainContainer">  
          <MainContent recievedDataset={searchedData} />
      </div>
  </Fragment>
   
  );
}

export default SearchPage;
