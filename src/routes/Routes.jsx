import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUsPage from "../components/AboutUsPage/AboutUsPage";
import AddProductPage from "../components/Admin/AddProductPage";
import EditProductPage from "../components/Admin/EditProductPage";

import Auth from "../components/Authentication/Auth";

import Cart from "../components/Cart/Cart";
import Favorites from "../components/Cart/Favorites";
import Forum from "../components/Forum/Forum";

import HomePage from "../components/HomePage/HomePage";
import NavbarB from "../components/Navbar/Navbar";
import PayForm from "../components/Payment/PayForm";
import ProductDetails from "../components/Products/ProductDetailes";
import ProductList from "../components/Products/ProductList";
import AuthContextProvider from "../contexts/AuthContext";
import ProductContextProvider from "../contexts/ProductContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <NavbarB />
          <Switch>
            <Route exact path='/login' component={Auth} />
            <Route exact path='/aboutuspage' component={AboutUsPage} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/favorites' component={Favorites} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/catalogue' component={ProductList} />
            <Route exact path='/addproductpage' component={AddProductPage} />
            <Route exact path='/edit/:id' component={EditProductPage} />
            <Route exact path='/payform' component={PayForm} />
            <Route exact path='/details/:id' component={ProductDetails} />
            <Route exact path='/forum' component={Forum} />
          </Switch>
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
