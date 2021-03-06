import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Default from "./components/pages/Default";
import Navbar from "./components/Menu";
import Product from "./components/Product";
import Details from "./components/Details";
import Cart from "./components/cart";
import MineComponenta from "./components/pages/MineComponenta";
import "antd/dist/antd.css";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MineComponenta} />
        <Route path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
      <Footer />

      <ToastContainer
        position="top-right"
        toastClassName="m_toast"
        progressClassName="m_progress"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
