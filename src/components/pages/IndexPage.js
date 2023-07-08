
import React, { Fragment } from 'react';
import MainContent from '../allProducts/MainContent';
import Header from '../common/Header';

const IndexPage = () => {
 

  return (
    <Fragment>
    <Header />
    <div className="mainContainer">
      
      {/* <SideBar /> */}
      <MainContent />
    </div>
    </Fragment>
  );
};

export default IndexPage;
