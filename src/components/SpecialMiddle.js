import React from "react";
import styled from "styled-components";
import AddToCartBtn from "./AddToCartBtn";
import { Link } from "react-router-dom";

const sale_bg = "./images/sale_bg.png";
const MiddleWrapper = styled.div`
  //   background: transparent;
  padding: 10px;
  position: relative;
  width: 100%;

  .info {
    width: 50%;
  }
  .info h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 27px;
    padding-left: 20px;
    color: #ffffff;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;

    color: #ffffff;
  }
  .img {
    width: 50%;
    height: 98px;
  }
  .img img {
    position: absolute;
    top: -20px;
    right: -10px;
  }
  .btn_m {
    width: 100%;
  }
  .sale_info {
    position: absolute;
    z-index: 1;
    left: -35px;
    top: -20px;
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
    .sale_info {
      height: 50px;
      width: 50px;
      left: -20px;
    }
    .sale_info span {
      font-size: 13px;
    }
    .info p {
      margin-bottom: 20%;
    }
    .img img {
      right: 0;
    }
    .img {
      height: 81px;
    }
  }
  @media screen and (max-width: 480px) {
    .img {
      margin-bottom: 10px;
    }
  }
`;
const SpecialMiddle = ({ products, handleDetail, type, styleBg, col }) => {
  return (
    <div className={`${col} mb-3 d-flex`}>
      {products.map(
        (product) =>
          product[type] && (
            <MiddleWrapper
              key={product.id}
              style={{
                background: `${styleBg}`,
              }}
            >
              {product.sale ? (
                <>
                  <div className="sale_info d-flex align-items-center justify-content-center">
                    <span>{product.sale} %</span>
                  </div>
                </>
              ) : (
                ""
              )}
              <div className="d-flex">
                <div className="info">
                  <h3>{product.title}</h3>
                </div>
                <div className="img">
                  <div
                    className="img_container"
                    onClick={() => {
                      handleDetail(product.id);
                    }}
                  >
                    <Link to={{ pathname: "/details", query: { product } }}>
                      <img src={product.img} alt={product.title} />
                    </Link>
                  </div>
                </div>
              </div>
              <p>{product.price} ₽</p>
              <AddToCartBtn product={product} classN="btn_m" />
            </MiddleWrapper>
          )
      )}
    </div>
  );
};

export default SpecialMiddle;
