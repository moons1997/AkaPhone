import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";
import { contextApi } from "../services/Context";

import Toast from "../components/Toast";

const ProductWrapper = styled.div`
  margin-bottom: 30px;

  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 0;
    margin-top: 10px;
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
  .old-price {
    text-decoration-line: line-through;

    color: rgba(196, 196, 196, 0.5);
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
  img {
    height: 250px;
    // width: auto;
  }
`;

const Product = ({ product }) => {
  const { addToCart, handleDetail } = useContext(contextApi);

  return (
    <>
      <ProductWrapper className="col-9 col-md-6 col-lg-3 ">
        <div className="card ">
          <h3>{product.title}</h3>

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
              <div className="old-price">15 ₽</div>
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
