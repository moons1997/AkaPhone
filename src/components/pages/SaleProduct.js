import React, { useContext } from "react";
import styled from "styled-components";
import { contextApi } from "../../services/Context";
import Product from "../Product";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper-bundle.css";
import PageTitle from "../utils/PageTitle";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SaleWrapper = styled.div`
  padding: 45px 0;
  background: #efefef;
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: -2px;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: -2px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
  @media screen and (max-width: 480px) {
  }
`;

const SaleProduct = () => {
  const { products, count } = useContext(contextApi);

  return (
    <SaleWrapper id="sale">
      <div className="container">
        <PageTitle title="Горячие за неделью" />
        <Swiper
          slidesPerView={count}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          className="pt-5 pb-5"
        >
          {products.map((product) =>
            product.sale > 0 ? (
              <SwiperSlide key={product.id}>
                <Product product={product} col_m="col-lg-12 col-md-12 col-12" />
              </SwiperSlide>
            ) : (
              ""
            )
          )}
        </Swiper>
      </div>
    </SaleWrapper>
  );
};

export default SaleProduct;
