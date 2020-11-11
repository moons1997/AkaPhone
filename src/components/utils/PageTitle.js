import React from "react";
import styled from "styled-components";
const Title = styled.h4`
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px;
  color: #333;
  margin-bottom: 50px;
`;
const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PageTitle;
