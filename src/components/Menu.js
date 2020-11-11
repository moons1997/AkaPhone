import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { contextApi } from "../services/Context";
import "./styles/Menu.css";

const Menu = () => {
  const { cart } = useContext(contextApi);
  return (
    <div className="menu">
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link to="/" className="d-flex">
              <div className="logo_img">
                <img src="./images/logo.svg" alt="logo" />
              </div>
              <div className="logo_name">
                <b>AkaPhone</b>
                <p>Качестенное по доступное цену</p>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#phone">Телефоны</Nav.Link>
              <Nav.Link href="#smart_wotch">Смарт часы</Nav.Link>
              <Nav.Link href="#tab">Планшеты</Nav.Link>
              <Nav.Link href="#camera">Камеры</Nav.Link>
              <Nav.Link href="#accessories">Аксессуары</Nav.Link>
            </Nav>
            <div className="me-auto d-flex align-items-center justify-content-center">
              <div className="phone">
                <p>+998(90) 225 - 19 - 97</p>
                <a href="tel: +998996770899" className="btn_p">
                  Заказать звонок
                </a>
              </div>
              <div className="myCart">
                <Link to="/cart">
                  {cart.length > 0 ? (
                    <>
                      <span className="badge badge-success">{cart.length}</span>
                    </>
                  ) : (
                    ""
                  )}

                  <FiShoppingBag />
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Menu;
