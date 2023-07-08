import './App.css';
import IndexPage from './components/pages/IndexPage';
import Description from './components/pages/Description';
import ProductOfCategory from './components/not used js file/ProductOfCategory';

import Header from './components/common/Header';
import {ShopContextProvider} from './components/connectors/ContextApi';
import { SearchContextProvider } from './components/not used js file/searchContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import AddtoCart from './components/pages/AddtoCart';
import './style/index.scss';
import './style/mainContent.scss';
import './style/description.scss';
import './style/addtocart.scss'
import './style/header.scss'
import './style/placedOrder.scss'
import './style/login.scss'
import './style/headerForCategory.scss'
import LoginForm from './components/pages/LoginForm';
import PlaceOrder from './components/not used js file/Placeorder';
import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <ShopContextProvider>
        <SearchContextProvider>
          <div className='App'>
        
            <Routes>
            <Route path='/' element={<LoginForm />} />
              <Route index path='/products/:userId' element={<IndexPage />} />
              <Route path='/Description/:id' element={<Description />} />
              {/* <Route path='/ProductOfCategory/:categoryName' element={<ProductOfCategory />} /> */}
            
              <Route path='/AddtoCart' element={<AddtoCart />} />
              
    
              <Route path='/PlaceOrder' element={<PlaceOrder />} />
              <Route path='/Register' element={<Register />} />
            </Routes>
          </div>
        </SearchContextProvider>
      </ShopContextProvider>
    </Router>
  );
}

export default App;
