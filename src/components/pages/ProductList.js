import React, { useContext } from "react";
import Product from "../Product";
import Title from "../utils/PageTitle";
import styled from "styled-components";
import { contextApi } from "../../services/Context";
import { Pagination } from "../Pagination";
import { paginate } from "../utils/paginate";

const ProductListWrapper = styled.div`
  padding: 50px 0;
`;
const ProductList = () => {
  const { products, pageSize, currentPage } = useContext(contextApi);

  // pagination code
  let paginateProduct = paginate(products, currentPage, pageSize);
  let count = paginateProduct.length;
  // pagination code
  return (
    <ProductListWrapper>
      <div className="container">
        <Title title="Каталог товаров" />
        <div className="row">
          {paginateProduct.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          totalProduct={products.length}
          className="prod_pagination"
        />
      </div>
    </ProductListWrapper>
  );
};

export default ProductList;
