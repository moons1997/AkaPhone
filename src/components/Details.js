import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { contextApi } from "../services/Context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";

const DetailWrapper = styled.div`
  margin: 70px 0 50px;

  .company_name {
    font-size: 15px;
    color: #eb4d4d;
    font-family: Montserrat;
  }
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 22px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 50px;
  }
  .about h6 {
    font-weight: bold;
  }
  .about p {
    font-size: 15px;
    font-family: Montserrat;
    font-weight: 500;
  }
  .price {
    display: flex;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 29px;
  }
  .sale_price {
    color: #eb4d4d;
    margin-right: 30px;
  }
  .old_price {
    text-decoration-line: line-through;

    color: rgba(196, 196, 196, 0.5);
  }

  .detail-btn {
    display: inline-block;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    padding: 9px 23px;
    background-color: transparent;
    border: 2px solid #eb4d4d;
    color: #eb4d4d;
    margin-right: 20px;
  }
  .detail-btn:focus {
    outline: none;
  }
  .detail-btn:hover {
    background-color: #eb4d4d;
    color: #fff;
    transition: all 0.5s ease-in-out;
    text-decoration: none;
  }

  .detail-btn.detail-btn_2 {
    border: 2px solid #31a9dd;
    color: #31a9dd;
  }
  .detail-btn.detail-btn_2:hover {
    background-color: #31a9dd;
    border-color: #31a9dd;
    color: #fff;
    transition: all 0.5s ease-in-out;
  }
`;

const Details = () => {
  const { detail, addToCart } = useContext(contextApi);
  const { img, title, company, info, price, inCart, id } = detail;
  const { query } = useLocation();

  return (
    <DetailWrapper>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-5 col-lg-5">
            <div className="card">
              <div className="img-container">
                <img src={img} alt={title} className="card-img-top" />
              </div>
            </div>
          </div>
          <div className="col-10 mx-auto col-md-7 col-lg-7">
            <div className="info">
              <div className="company_name text-capitalize">{company}</div>
              <h2 className="text-capitalize">{title}</h2>
              <div className="about">
                <h6>Коротко о товаре</h6>
                <p>{info}</p>
              </div>
              <div className="price mb-3">
                <div className="sale_price">{price} ₽</div>
                <div className="old_price"></div>
              </div>
              <div className="d-flex ">
                <Link to="/" className="detail-btn detail-btn_1">
                  Back To Products
                </Link>
                <button
                  className="detail-btn  detail-btn_2"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    addToCart(id);
                    Toast(query.product);
                  }}
                >
                  {detail.inCart ? "In Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailWrapper>
  );
};

export default Details;
