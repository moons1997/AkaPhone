import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { RiRestartLine } from "react-icons/ri";
import { contextApi } from "../../services/Context";

const CartWrapper = styled.div`
  margin-top: 70px;
  .cart_img {
    width: 10%;
  }
  .cart_img img {
    width: 100%;
  }
  .cart_title {
    width: 45%;
  }
  .cart_title p {
    margin-bottom: 1px;
    font-family: Montserrat;
    font-weight: 300;
    font-size: 14px;
    line-height: 5px;
  }
  .cart_title h5 a {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
    color: #000;
  }
  .cart_title h5 a:hover {
    text-decoration: none;
    color: #eb4d4d;
    transition: all 0.2s ease-in-out;
  }
  .cart_count {
    width: 15%;
    // border: 1px solid #ccc;
    // display: inline-block;
  }
  .cart_count button {
    border: 1px solid #ccc;
    // width: 35px;
  }
  .cart_count span {
    padding: 0 5px;
  }
  .cart_price {
    width: 10%;
    margin-right: 5px;
  }
  .cart_total_price {
    width: 17%;
  }
  .cart_remove {
    width: 6%;
  }
  .cart_remove button:hover {
    color: #eb4d4d;
  }
  .cart_remove button:focus {
    outline: none;
  }
  .product_btn {
    border: 1px solid #eb4d4d;
    background-color: #eb4d4d;
    width: 100%;
    padding: 8px 0;
    text-align: center;
    color: #fff;
    // border-bottom-left-radius: 4px;
    // border-bottom-right-radius: 4px;
    transition: all 0.3s ease-in-out;
  }

  .send_btn {
    border: 1px solid #17d542;
    background-color: #17d542;
    width: 100%;
    padding: 8px 0;
    text-align: center;
    color: #fff;
    // border-bottom-left-radius: 4px;
    // border-bottom-right-radius: 4px;
    transition: all 0.3s ease-in-out;
  }
  .send_btn:hover {
    text-decoration: none;
    background-color: #fff;
    color: #17d542;
  }

  .product_btn:hover {
    text-decoration: none;
    background-color: #fff;
    color: #eb4d4d;
  }
  .title {
    color: #212529;
    font-weight: 700;
  }
  .empty {
    text-align: center;
  }
  .empty h3 {
    color: #9faab7;
    font-weight: 700;
  }
  .empty p {
    color: #9faab7;
  }
`;

const Cart = () => {
  const {
    cart,
    clearCart,
    cartTotal,
    handleIncrement,
    handleDecrement,
    removeItem,
    subTotal,
    sale,
  } = useContext(contextApi);

  // console.log(cartTotal);

  return (
    <CartWrapper>
      <div className="container">
        <h2 className="pb-3 title">Корзина</h2>
        <div className="row ">
          {cart.length ? (
            <>
              <div className="col-lg-9">
                {cart.map((product) => {
                  return (
                    <div className="card p-1 mb-2" key={product.id}>
                      <div className="d-flex align-items-center">
                        <div className="cart_img">
                          <img src={product.img} alt="" />
                        </div>
                        <div className="cart_title">
                          <p>Category</p>
                          <h5>
                            <Link to="/details">{product.title}</Link>
                          </h5>
                        </div>
                        <div className="cart_price">{product.price} ₽</div>
                        <div className="cart_count">
                          <button
                            className="btn btn-light"
                            onClick={() => handleIncrement(product.id)}
                          >
                            <FiPlus />
                          </button>
                          <span>{product.count}</span>
                          <button
                            className="btn btn-light"
                            onClick={() => handleDecrement(product.id)}
                          >
                            <FiMinus />
                          </button>
                        </div>
                        <div className="cart_total_price">
                          {product.total} ₽
                        </div>
                        <div className="cart_remove">
                          <button
                            className="btn"
                            onClick={() => {
                              removeItem(product.id);
                            }}
                          >
                            <FaTrashAlt size="25" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-3">
                <div className="card p-2">
                  <div className="price product_total_sum d-flex justify-content-between">
                    <p>Стоимость:</p>
                    <b>{subTotal} ₽</b>
                  </div>
                  <div className="price product_sale_price d-flex justify-content-between">
                    <p>Скидка</p>
                    <b>{sale} ₽</b>
                  </div>
                  <div className="price product_price d-flex justify-content-between">
                    <p>Всего к оплате:</p>
                    <b>{cartTotal} ₽</b>
                  </div>

                  <button
                    onClick={() => {
                      clearCart();
                    }}
                    className="product_btn mb-2"
                  >
                    Clear Cart {<RiRestartLine />}
                  </button>
                  <Link to="/" className="send_btn">
                    Оформить заказ
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-12 empty">
                <div className="card p-3">
                  <div className="img p-2">
                    <FiShoppingCart size="20%" color="#9faab7" />
                  </div>
                  <h3> В вашей корзине пусто? Не беда!</h3>
                  <p>
                    Начните выбирать товары из широкого ассортимента нашего
                    каталога.
                  </p>
                  <Link to="/" className="product_btn">
                    Перейти к покупкам
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </CartWrapper>
  );
};

export default Cart;
