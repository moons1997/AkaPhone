import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const FooterWrapper = styled.div`
  background: #062b40;
  padding: 55px 0;
  ul {
    padding: 0;
    margin: 0;
  }
  ul li {
    list-style: none;
    margin-bottom: 5px;
  }

  .logo {
    width: 20%;
    text-align: center;
  }
  .logo_container {
    background: #ffffff;
    border: 4px solid rgba(47, 96, 221, 0.95);
    border-radius: 50%;
    padding: 10px;
    height: 70px;
    width: 70px;
    text-align: center;
    margin: 0 auto;
  }
  .logo img {
  }
  .logo h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #ffffff;
  }
  .logo p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #ffffff;
  }

  .links {
    width: 15%;
    text-align: center;
  }
  .links a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* or 100% */

    color: #ffffff;
  }
  .map {
    width: 35%;
  }
  .footer_contact {
    width: 15%;
    text-align: right;
  }
  .footer_contact p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    /* identical to box height, or 100% */

    color: #dfdfdf;
    margin-bottom: 0;
  }
  .footer_contact a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height, or 100% */

    color: #ffffff;
  }
  .social img:first-child {
    padding-left: 5px;
  }
  .desc {
    display: flex;
  }
  .mob {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .desc {
      display: none;
    }
    .mob {
      display: block;
    }
    .mob .logo {
      width: 50%;
    }
    .mob .links {
      width: 50%;
    }
    .mob .map {
      width: 100%;
      margin-bottom: 20px;
    }
    .mob .footer_contact {
      width: 100%;
    }
    .mob .footer_contact ul {
      display: flex;
      flex-wrap: wrap;
    }
    .mob .footer_contact ul li {
      flex: 0 0 50%;
    }
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container ">
        <div className="desc">
          <div className="logo">
            <Link to="/">
              <div className="logo_container">
                <img src="./images/logo.svg" alt="logo" />
              </div>
              <h3>AkaPhone</h3>
            </Link>
            <p>Качестенное по доступное цену</p>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">О нас </Link>
              </li>
              <li>
                <Link to="/">Каталог продуктов </Link>
              </li>
              <li>
                <Link to="/">Доставка</Link>
              </li>
              <li>
                <Link to="/">Контакты </Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">Смартфоны</Link>
              </li>
              <li>
                <Link to="/">Смарт Часы </Link>
              </li>
              <li>
                <Link to="/">Планшеты</Link>
              </li>
              <li>
                <Link to="/">Камеры </Link>
              </li>
              <li>
                <Link to="/">Аксессуары </Link>
              </li>
            </ul>
          </div>
          <div className="map">
            <YMaps>
              <Map
                defaultState={{
                  center: [37.229019, 67.276754],
                  zoom: 9,
                  controls: ["zoomControl", "fullscreenControl"],
                }}
                width="100%"
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                <Placemark defaultGeometry={[37.229019, 67.276754]} />
              </Map>
            </YMaps>
          </div>
          <div className="footer_contact">
            <ul>
              <li>
                <p>Наш телефон</p>
                <Link to="tel: +998902251997">+998(91) 163-12-36</Link>
              </li>
              <li>
                <p>Наш E-mail</p>
                <Link to="mailto: info@akaphone.uz">info@akaphone.uz</Link>
              </li>
              <li>
                <p>Наш адрес</p>
                <Link to="">ул Мевазор дом 21</Link>
              </li>
              <li className="social">
                <Link to="/">
                  <img src="./images/facebook.png" alt="facebook" />
                </Link>
                <Link to="/">
                  <img src="./images/telegram.png" alt="telegram" />
                </Link>
                <Link to="/">
                  <img src="./images/instagram.png" alt="instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mob">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="d-flex">
                <div className="logo">
                  <Link to="/">
                    <div className="logo_container">
                      <img src="./images/logo.svg" alt="logo" />
                    </div>
                    <h3>AkaPhone</h3>
                  </Link>
                  <p>Качестенное по доступное цену</p>
                </div>
                <div className="links">
                  <ul>
                    <li>
                      <Link to="/">О нас </Link>
                    </li>
                    <li>
                      <Link to="/">Каталог продуктов </Link>
                    </li>
                    <li>
                      <Link to="/">Доставка</Link>
                    </li>
                    <li>
                      <Link to="/">Контакты </Link>
                    </li>
                    <li>
                      <Link to="/">Смартфоны</Link>
                    </li>
                    <li>
                      <Link to="/">Смарт Часы </Link>
                    </li>
                    <li>
                      <Link to="/">Планшеты</Link>
                    </li>
                    <li>
                      <Link to="/">Камеры </Link>
                    </li>
                    <li>
                      <Link to="/">Аксессуары </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="map">
                <YMaps>
                  <Map
                    defaultState={{
                      center: [37.229019, 67.276754],
                      zoom: 9,
                      controls: ["zoomControl", "fullscreenControl"],
                    }}
                    width="100%"
                    modules={[
                      "control.ZoomControl",
                      "control.FullscreenControl",
                    ]}
                  >
                    <Placemark defaultGeometry={[37.229019, 67.276754]} />
                  </Map>
                </YMaps>
              </div>
              <div className="footer_contact">
                <ul>
                  <li>
                    <p>Наш телефон</p>
                    <Link to="tel: +998902251997">+998(91) 163-12-36</Link>
                  </li>
                  <li>
                    <p>Наш E-mail</p>
                    <Link to="mailto: info@akaphone.uz">info@akaphone.uz</Link>
                  </li>
                  <li>
                    <p>Наш адрес</p>
                    <Link to="">ул Мевазор дом 21</Link>
                  </li>
                  <li className="social">
                    <Link to="/">
                      <img src="./images/facebook.png" alt="facebook" />
                    </Link>
                    <Link to="/">
                      <img src="./images/telegram.png" alt="telegram" />
                    </Link>
                    <Link to="/">
                      <img src="./images/instagram.png" alt="instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
