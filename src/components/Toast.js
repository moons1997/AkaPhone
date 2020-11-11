import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ToastBody = styled.div`
  .tost_img {
    width: 30%;
  }
  .tost_img img {
    width: 100%;
  }
  h5 {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
  .toast_name {
    font-size: 14px;
    color: #000;
  }
  .toast_price {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }
  .toast_btn {
    text-align: center;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
    line-height: 17px;
    padding: 9px 0;
    background-color: #eb4d4d;
    border: 2px solid #eb4d4d;
    color: #fff;
    display: inline-block;
    width: 100%;
    border-radius: 4px;
    margin: 6px 0;
  }
  .toast_btn:hover {
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 1);
    transition: all 0.5s ease-in-out;
    text-decoration: none;
  }
`;

const Toast = ({ title, img, price, count, total }) => {
  const body = () => (
    <ToastBody>
      <h5>Товар добавлен в корзину</h5>
      <div className="d-flex">
        <div className="tost_img">
          <img src={img} alt={title} />
        </div>
        <div className="toast_info">
          <div className="toast_name">{title}</div>
          <div className="toast_price">{price} ₽</div>
        </div>
      </div>

      <Link to="/cart" className="toast_btn">
        Перейти в корзину
      </Link>
    </ToastBody>
  );

  return toast(body, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default Toast;
