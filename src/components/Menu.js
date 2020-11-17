import React, { useContext, useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { contextApi } from "../services/Context";
import "./styles/Menu.css";

const Menu = () => {
  const { cart, menus } = useContext(contextApi);

  const [scrolled, setScrolled] = useState(false);
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["menu"];
  if (scrolled) {
    navbarClasses.push(" scrolled");
  }

  return (
    <div className={navbarClasses.join("")}>
      <div className="container">
        <header>
          <Navbar expand="lg" sticky="top">
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
            <div className="mob align-items-center justify-content-center">
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {menus.map((menu) => (
                  <Nav.Link key={menu.id} href={menu.url}>
                    {menu.title}
                  </Nav.Link>
                ))}
              </Nav>
              <div className="desck align-items-center justify-content-center">
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
                        <span className="badge badge-success">
                          {cart.length}
                        </span>
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
        </header>
      </div>
    </div>
  );
};

export default Menu;
