import React, { useContext } from "react";
import styled from "styled-components";
import SpecialWidth from "../SpecialWidth";
import { contextApi } from "../../services/Context";
import PageTitle from "../utils/PageTitle";
import SpecialMiddle from "../SpecialMiddle";
import SpecialHeight from "../SpecialHeight";

const SpeciaWrapper = styled.div`
  padding: 50px 0 30px;
  h4 {
    margin-bottom: 30px;
  }
`;

const SpecialOffers = () => {
  const { handleDetail, products } = useContext(contextApi);

  return (
    <SpeciaWrapper id="special">
      <div className="container">
        <PageTitle title="Специальные предложения" />
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="row">
              <SpecialWidth handleDetail={handleDetail} products={products} />

              <SpecialMiddle
                handleDetail={handleDetail}
                products={products}
                type="specialMiddleL1"
                styleBg="linear-gradient(90deg, #e16740 0%, #be2121 100%)"
                col="col-lg-6 col-md-6 col-12"
              />
              <SpecialMiddle
                handleDetail={handleDetail}
                products={products}
                type="specialMiddleL2"
                styleBg="linear-gradient(90deg, #398178 0%, #15A299 100%)"
                col="col-lg-6 col-md-6 col-12"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <SpecialHeight
                  products={products}
                  handleDetail={handleDetail}
                />
              </div>
              <div className="col-lg-6 col-md-6 ">
                <div className="row">
                  <SpecialMiddle
                    handleDetail={handleDetail}
                    products={products}
                    type="specialMiddleR1"
                    styleBg="linear-gradient(90deg, #394081 0%, #8967D2 100%)"
                    col="col-lg-12 col-md-12 col-12"
                  />
                  <SpecialMiddle
                    handleDetail={handleDetail}
                    products={products}
                    type="specialMiddleR2"
                    styleBg="linear-gradient(90deg, #81396C 0%, #0D9DA6 100%)"
                    col="col-lg-12 col-md-12 col-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpeciaWrapper>
  );
};

export default SpecialOffers;
