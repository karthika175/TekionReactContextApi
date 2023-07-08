import React, { useEffect, useContext, useCallback, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../connectors/ContextApi';
import { useNavigate } from "react-router-dom";
import { SearchContext } from '../not used js file/searchContext';
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const {userName} = useContext(ShopContext);

  return (
    <header className="headDiv">
        <div className="backTitle">
            <div className="backButton">
            <button onClick={()=> navigate(-1)}>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </button>

            </div>
            <div className="title">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <h1>SHOPEE</h1>
            </div>
      </div>
  
     <div className="dropCartLogin">
        
        <div className="moveToCartPagesDiv">
          <button className="moveToCartPages">
            <Link to="/AddtoCart">
            cart 
            </Link>
            </button>
        </div>
        <div className="login">
         <h3>{userName}</h3>
        </div>
      </div>
    </header>
  )
}
