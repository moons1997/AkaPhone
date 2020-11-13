import React from "react";
import styled from "styled-components";

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
`;

const Category = ({ onSelectCategory, category, currentCategory }) => {
  return (
    <CategoryWrapper>
      <div className="row justify-content-around">
        {category.map((item) => (
          <div className="col-lg-2" key={item.id}>
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
        ))}
      </div>
    </CategoryWrapper>
  );
};

export default Category;
