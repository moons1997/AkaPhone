import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import Toast from "../components/Toast";
import { contextApi } from "../services/Context";

import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  padding: 13px 0;
  text-align: center;
  color: #fff;
  width: 188px;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    background: #ffffff;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 0px 25px #ffffff;
    color: #000;
  }
`;

const AddToCartBtn = ({ product, classN }) => {
  const { addToCart } = useContext(contextApi);
  return (
    <ButtonWrapper
      className={classN}
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
    </ButtonWrapper>
  );
};

export default AddToCartBtn;
