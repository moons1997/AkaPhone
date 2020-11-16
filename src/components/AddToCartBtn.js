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

  &:focus {
    outline: none;
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
