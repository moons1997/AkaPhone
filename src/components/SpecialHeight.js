import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeightWrapper = styled.div`
  background: linear-gradient(180deg, #5ac651 0%, #ecdb41 100%);
  padding: 10px;

  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 32px;
    text-align: right;

    color: #ffffff;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    text-align: right;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .img-container {
    margin-bottom: 13px;
  }
  .product-btn {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 15px;
    text-align: center;
  }
`;

const SpecialHeight = ({ handleDetail, products }) => {
  return products.map(
    (product) =>
      product.specialHeight && (
        <HeightWrapper key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.sale} ₽</p>
          <div
            className="img-container"
            onClick={() => handleDetail(product.id)}
          >
            <Link to={{ pathname: "/details", query: { product } }}>
              <img src={product.img} alt={product.title} />
            </Link>
          </div>
          <AddToCartBtn product={product} classN="product-btn" />
        </HeightWrapper>
      )
  );
};

export default SpecialHeight;
