import React, { useContext } from "react";
import Product from "../Product";
import Title from "../utils/PageTitle";
import styled from "styled-components";
import { contextApi } from "../../services/Context";
import { Pagination } from "../commons/Pagination";
import { paginate } from "../utils/paginate";
import Category from "../commons/Category";

const ProductListWrapper = styled.div`
  padding: 50px 0;
  @media screen and (max-width: 768px) {
    padding: 20px 0 50px;
  }
`;
const ProductList = () => {
  const {
    products,
    pageSize,
    currentPage,
    handleSelectCategory,
    category,
    currentCategory,
    count,
  } = useContext(contextApi);

  // filtered code
  let filtered = currentCategory
    ? products.filter((item) => item.category === currentCategory)
    : products;

  // pagination code
  let paginateProduct = paginate(filtered, currentPage, pageSize);

  // pagination code
  return (
    <ProductListWrapper id="category">
      <div className="container">
        <Title title="Каталог товаров" />

        <Category
          onSelectCategory={handleSelectCategory}
          category={category}
          currentCategory={currentCategory}
          count={count}
        />

        <div className="row">
          {paginateProduct.map((product) => (
            <Product
              key={product.id}
              product={product}
              col_m="col-lg-3 col-md-4 col-12"
            />
          ))}
        </div>
        <Pagination
          totalProduct={filtered.length}
          className="prod_pagination"
        />
      </div>
    </ProductListWrapper>
  );
};

export default ProductList;
