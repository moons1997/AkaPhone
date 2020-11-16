import React, { useContext } from "react";
import styled from "styled-components";
import SpecialWidth from "../SpecialWidth";
import { contextApi } from "../../services/Context";
import PageTitle from "../utils/PageTitle";
import SpecialMiddle from "../SpecialMiddle";

const SpeciaWrapper = styled.div`
  padding: 50px 0 30px;
  h4 {
    margin-bottom: 30px;
  }
`;

const SpecialOffers = () => {
  const { handleDetail, products } = useContext(contextApi);

  return (
    <SpeciaWrapper className="container">
      <PageTitle title="Специальные предложения" />
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <SpecialWidth handleDetail={handleDetail} products={products} />

            <SpecialMiddle
              handleDetail={handleDetail}
              products={products}
              type="specialMiddleL1"
              styleBg="linear-gradient(90deg, #e16740 0%, #be2121 100%)"
            />
            <SpecialMiddle
              handleDetail={handleDetail}
              products={products}
              type="specialMiddleL2"
              styleBg="linear-gradient(90deg, #398178 0%, #15A299 100%)"
            />
          </div>
        </div>
      </div>
    </SpeciaWrapper>
  );
};

export default SpecialOffers;
