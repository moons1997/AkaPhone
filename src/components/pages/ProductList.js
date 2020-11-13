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
`;
const ProductList = () => {
  const {
    products,
    pageSize,
    currentPage,
    handleSelectCategory,
    category,
    currentCategory,
  } = useContext(contextApi);

  // filtered code
  let filtered = currentCategory
    ? products.filter((item) => item.category === currentCategory)
    : products;

  // pagination code
  let paginateProduct = paginate(filtered, currentPage, pageSize);

  // pagination code
  return (
    <ProductListWrapper>
      <div className="container">
        <Title title="Каталог товаров" />

        <Category
          onSelectCategory={handleSelectCategory}
          category={category}
          currentCategory={currentCategory}
        />

        <div className="row">
          {paginateProduct.map((product) => (
            <Product key={product.id} product={product} />
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
