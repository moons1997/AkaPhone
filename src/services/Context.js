import React, { createContext, useState, useEffect } from "react";
import { categoryData } from "./categoryData";
import { storeProduct, detailProduct } from "./data";
export const contextApi = createContext();
contextApi.displayName = "ProductContext";

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  const [detail, setDetail] = useState(detailProduct);
  const [cart, setCart] = useState([]);

  const [subTotal, setSubTotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [sale, setSale] = useState(0);

  const [pageSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const setProduct = () => {
    let products = [];
    let categorys = [];

    storeProduct.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });

    categoryData.forEach((item) => {
      const singleItem = { ...item };
      categorys = [...categorys, singleItem];
    });

    setProducts(products);
    setCategory(categorys);
  };

  useEffect(setProduct, []);

  // console.log(category);

  // -----------
  useEffect(() => {
    addTotals();
  }, [cart]);
  // ----------- bu kodning ma'nosi cart ishlagandan keyin addTotals() function ishlaydi

  const getItem = (id) => {
    return products.find((item) => item.id === id);
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetail(product);
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;

    const price = product.price;
    product.total = price;

    setProducts(tempProducts);
    setCart([...cart, product]);
  };

  const handleIncrement = (id) => {
    let tempCart = [...cart];
    const selectCart = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectCart);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    setCart([...tempCart]);
    // addTotals();
  };

  const handleDecrement = (id) => {
    let tempCart = [...cart];
    const selectCart = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectCart);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      return removeItem(id);
    } else {
      product.total = product.count * product.price;
    }

    setCart([...tempCart]);
  };

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    setCart([...tempCart]);
    setProducts([...tempProducts]);
    addTotals();
  };

  const clearCart = () => {
    setCart([]);
    setProduct();
  };

  const SaleFun = (id) => {
    const product = getItem(id);
    const sale = parseFloat((product.price * product.sale) / 100).toFixed(3);
    return sale * product.count;
  };
  const addTotals = () => {
    let subTotal = 0;
    let sale = 0;
    cart.map((item) => {
      subTotal += item.total;
      sale += SaleFun(item.id);
    });
    setSale(sale);

    const total = subTotal - sale;

    setSubTotal(subTotal);
    setCartTotal(total);
  };

  const handleSelectCategory = (id) => {
    setCurrentCategory(id);
    setCurrentPage(1);
  };

  const handleChangePage = (item) => {
    setCurrentPage(item);
  };

  return (
    <contextApi.Provider
      value={{
        products,
        detail,
        addToCart,
        handleDetail,
        handleIncrement,
        handleDecrement,
        removeItem,
        clearCart,
        cart,
        cartTotal,
        subTotal,
        sale,
        handleChangePage,
        pageSize,
        currentPage,
        handleSelectCategory,
        category,
        currentCategory,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};

export default Context;
