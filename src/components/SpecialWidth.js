import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import { Link } from "react-router-dom";
import styled from "styled-components";

const sale_bg = "./images/sale_bg.png";
const ItemWrapper = styled.div`
  background: linear-gradient(90deg, #31a9dd 0%, #0b84b9 100%);
  padding: 10px 27px 10px 10px;
  .img {
    width: 40%;
  }
  .img img {
    width: 100%;
  }
  .info {
    width: 60%;
    text-align: right;
  }

  .info h3 {
    margin-bottom: 20px;
    color: #ffffff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 32px;
  }
  .info p {
    color: #ffffff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 20px;
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
  @media screen and (max-width: 768px) {
    padding: 10px 41px 10px 10px;
    .sale_info {
      height: 50px;
      width: 50px;
      right: -5px;
    }
    .sale_info span {
      font-size: 13px;
    }
    .info p {
      margin-bottom: 20%;
    }
  }
  @media screen and (max-width: 480px) {
  }
`;

const SpecialWidth = ({ handleDetail, products }) => {
  return (
    <div className="col-lg-12 col-md-12 col-12 mb-4">
      {products.map(
        (product) =>
          product.specialWidth && (
            <ItemWrapper className="d-flex align-items-start" key={product.id}>
              {product.sale ? (
                <>
                  <div className="sale_info d-flex align-items-center justify-content-center">
                    <span>{product.sale} %</span>
                  </div>
                </>
              ) : (
                ""
              )}
              <div className="img">
                <div
                  className="img-container"
                  onClick={() => {
                    handleDetail(product.id);
                  }}
                >
                  <Link to={{ pathname: "/details", query: { product } }}>
                    <img src={product.img} alt={product.title} />
                  </Link>
                </div>
              </div>
              <div className="info">
                <h3>{product.title}</h3>
                <p>{product.price} ₽</p>
                <AddToCartBtn product={product} classN="product-btn" />
              </div>
            </ItemWrapper>
          )
      )}
    </div>
  );
};

export default SpecialWidth;
