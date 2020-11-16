import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CategoryWrapper = styled.div`
  margin: 30px 0;

  .category {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 5px;
  }

  .category.active {
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
  }
  .img {
    // width: 50%;
  }
  .category .img img {
    width: 60px;
    height: 50px;
  }
  .name {
    // width: 50%;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: -1px;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: -1px;
  }
`;

const Category = ({ onSelectCategory, category, currentCategory }) => {
  return (
    <CategoryWrapper>
      {/* <div className="row"> */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        className="pt-5 pb-5"
      >
        {category.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="" key={item.id}>
              <div
                className={
                  item.id === currentCategory
                    ? "category active d-flex justify-content-around align-items-center"
                    : "category d-flex justify-content-around align-items-center"
                }
                onClick={() => {
                  onSelectCategory(item.id);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="name">{item.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </CategoryWrapper>
  );
};

export default Category;
