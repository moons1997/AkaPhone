import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const bg = "./images/slider_bg.jpg";

const SliderWrapper = styled.div`
  position: relative;
  margin: 45px 0;

  &::after {
    content: "";
    display: block;
    background-color: #fff;
    position: absolute;
    width: 54%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }
  &::before {
    content: "";
    display: block;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-color: #005bd6;
    position: absolute;
    width: 46%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: -1;
  }
  .title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 30px;
    color: #333333;
  }

  .sub_title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    text-align: justify;
    color: #333333;
    margin-bottom: 30px;
  }
  .button button {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 164.4%;
    /* or 26px */
    background: #eb4d4d;
    text-align: justify;
    color: #ffffff;
    border: #eb4d4d;
    padding: 17px 50px;
  }
  .right .img {
    height: 435px;
  }
  .right .img img {
    width: 100%;
    position: relative;
    transform: translateX(-27px);
  }
  .right .name {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 31px;
    line-height: 44px;

    margin-bottom: 41px;
    margin-left: 110px;
  }
  .right .name a {
    color: #ffffff;
  }
  .right .name a:hover {
    text-decoration: none;
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 1);
    transition: all 0.5s ease-in-out;
  }
  .ant-carousel .slick-dots {
    left: -315px;
    bottom: -50px;
  }
  .ant-carousel .slick-dots li button {
    width: 50px;
  }
  .ant-carousel .slick-dots li.slick-active {
    width: 40px;
  }
  .ant-carousel .slick-dots li button {
    height: 10px;
    background: #c4c4c4;
  }
`;

const Slider = () => {
  return (
    <SliderWrapper autoplay={true} effect="fade">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="left">
              <div className="title">
                Смартфоны и гаджеты для близких и друзей по доступной цене
              </div>
              <div className="sub_title">
                В нашем магазине вы сможете найти качествунную продукцию по
                досутпным ценам для вашего близкого человека
              </div>
              <div className="button">
                <button>Посмотреть каталог</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Carousel>
              <div className="right">
                <div className="img">
                  <img src="./images/smart_watch.png" alt="smart_watch" />
                </div>
                <div className="name">
                  <Link to="/">
                    Смарт часы AmazFit <BsArrowRight />
                  </Link>
                </div>
              </div>
              <div className="right">
                <div className="img">
                  <img src="./images/smart_watch.png" alt="smart_watch" />
                </div>
                <div className="name">
                  <Link to="/">
                    Смарт часы AmazFit <BsArrowRight />
                  </Link>
                </div>
              </div>
              <div className="right">
                <div className="img">
                  <img src="./images/smart_watch.png" alt="smart_watch" />
                </div>
                <div className="name">
                  <Link to="/">
                    Смарт часы AmazFit <BsArrowRight />
                  </Link>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </SliderWrapper>
  );
};

export default Slider;
