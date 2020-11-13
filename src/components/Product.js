import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";
import { contextApi } from "../services/Context";

import Toast from "../components/Toast";
const sale_bg = "./images/sale_bg.png";
const ProductWrapper = styled.div`
  margin-bottom: 30px;
  .card {
    position: relative;
    z-index: 5;
    height: 390px;
  }
  .product_title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    z-index: 5;
    width: 200px;
    height: 50px;
  }

  .product-info p {
    margin-bottom: 3px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: rgba(176, 176, 176, 0.99);
    text-align: center;
  }
  .product-price {
    display: flex;
    justify-content: space-around;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 10px;
  }
  .sale-price {
    color: #eb4d4d;
  }

  .product-btn {
    text-align: center;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
    line-height: 17px;
    padding: 9px 23px;
    background-color: #eb4d4d;
    border: 2px solid #eb4d4d;
    color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .product-btn:focus {
    outline: none;
  }
  .product-btn:hover {
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 1);
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .card:hover img {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
  .img-container {
    height: 250px;
    // width: auto;
  }
  .img-container img {
    height: 90%;
    width: auto;
  }
  .sale_info {
    position: absolute;
    z-index: 1;
    right: -25px;
    top: -15px;
    background-image: url(${sale_bg});
    height: 70px;
    width: 70px;
    background-size: cover;
  }
  .sale_info img {
    transform: rotateY(180deg);
  }
  .sale_info span {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Product = ({ product }) => {
  const { addToCart, handleDetail } = useContext(contextApi);

  return (
    <>
      <ProductWrapper className="col-9 col-md-6 col-lg-3">
        <div className="card ">
          {product.sale ? (
            <>
              <div className="sale_info d-flex align-items-center justify-content-center">
                <span>{product.sale} %</span>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="product_title d-flex align-items-center justify-content-center">
            {product.title}
          </div>

          <div
            className="img-container"
            onClick={() => {
              handleDetail(product.id);
            }}
          >
            <Link to={{ pathname: "/details", query: { product } }}>
              <img
                src={product.img}
                alt={product.title}
                className="card-img-top "
              />
            </Link>
          </div>

          <div className="product-info">
            <p>Белый, серый, синий</p>
            <div className="product-price">
              <div className="sale-price">{product.price} ₽</div>
              <div></div>
            </div>
          </div>
          <button
            className="product-btn"
            disabled={product.inCart ? true : false}
            onClick={() => {
              addToCart(product.id);
              Toast(product);
            }}
          >
            {product.inCart ? (
              <div>In Cart {<FaShoppingCart size={20} className="ml-2" />}</div>
            ) : (
              <div>
                Add To Cart {<MdAddShoppingCart className="ml-2" size={20} />}
              </div>
            )}
          </button>
        </div>
      </ProductWrapper>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
