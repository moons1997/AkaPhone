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
  background: #efefef;
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: -2px;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: -2px;
  }
`;

const SaleProduct = () => {
  const { products } = useContext(contextApi);

  return (
    <SaleWrapper>
      <div className="container">
        <PageTitle title="Горячие за неделью" />
        <Swiper
          slidesPerView={4}
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
                <Product product={product} col_m="col-12 col-md-6 col-lg-12" />
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
