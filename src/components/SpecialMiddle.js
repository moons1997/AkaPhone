import React from "react";
import styled from "styled-components";
import AddToCartBtn from "./AddToCartBtn";

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
  }
  .img img {
    position: absolute;
    top: -20px;
    right: -10px;
  }
  .btn_m {
    width: 100%;
  }
`;
const SpecialMiddle = ({ products, handleDetail, type, styleBg }) => {
  return (
    <div className="col-lg-6 mt-4 d-flex">
      {products.map(
        (product) =>
          product[type] && (
            <MiddleWrapper
              key={product.id}
              style={{
                background: `${styleBg}`,
              }}
            >
              <div className="d-flex">
                <div className="info">
                  <h3>{product.title}</h3>
                </div>
                <div className="img">
                  <div className="img_container">
                    <img src={product.img} alt={product.title} />
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
