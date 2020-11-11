import React, { useContext } from "react";
import _ from "lodash";
import { contextApi } from "../services/Context";
import styled from "styled-components";
const NavWrapper = styled.nav`
  text-align: center;
  li {
    list-style: none;
    display: inline-block;
  }
  li a {
    // width: 20px;
    margin: 0;
  }
`;

export const Pagination = ({ totalProduct }) => {
  const { handleChangePage, pageSize, currentPage } = useContext(contextApi);

  let endIndex = Math.ceil(totalProduct / pageSize);
  if (endIndex === 1) return null;

  let pages = _.range(1, endIndex + 1); // [1,2,3,4]

  return (
    <NavWrapper>
      {pages.map((item) => (
        <li
          className={currentPage === item ? "page-item active" : "page-item"}
          key={item}
        >
          <a
            className="page-link"
            href="#abs"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleChangePage(item);
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </NavWrapper>
  );
};
