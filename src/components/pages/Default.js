import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageNotWrapper = styled.div`
  padding-top: 70px;
  text-align: center;

  h4 {
    font-size: 70px;
    font-weight: 700;
    line-height: 100px;
  }
  h1 {
    font-size: 15rem;
    font-weight: 900;
    line-height: 195px;
    color: #3c3c3c;
  }
  h2 {
    font-weight: 700;
    font-size: 58px;
    margin-top: 25px;
    letter-spacing: 12px;
  }
  button {
    border: none;
    margin-top: 50px;
  }
  button:focus {
    outline: none;
  }

  button a {
    text-align: center;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
    line-height: 17px;
    padding: 9px 23px;
    background-color: #eb4d4d;
    border: 2px solid #eb4d4d;
    transition: all 0.3s ease-in-out;
    color: #fff;
  }

  button a:hover {
    text-decoration: none;
    color: #eb4d4d;
    background-color: #fff;
  }
`;

const Default = () => {
  return (
    <PageNotWrapper className="container">
      <h4>Page Not Found</h4>
      <h1>404</h1>
      <h2>ERROR</h2>

      <button>
        <Link to="/">Вернуться на главную</Link>
      </button>
    </PageNotWrapper>
  );
};

export default Default;
