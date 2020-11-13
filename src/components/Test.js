import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import { categoryData } from "../services/categoryData";
export default class Test extends Component {
  render() {
    let iconItemsStyle = {
      padding: "0px",
      background: "transparent",
      margin: "0 30px",
      height: "50%",
    };

    let circleIcon = {
      borderRadius: "50%",
    };

    let iconsSlides = categoryData.map((item, index) => (
      <div key={index}>
        <img style={circleIcon} src={item.img}></img>
        <p style={{ width: "60%", top: "70%", fontSize: "10px" }}>
          {item.name}
        </p>
      </div>
    ));

    let icons = (
      <CarouselSlider
        sliderBoxStyle={{
          height: "250px",
          width: "80%",
          background: "transparent",
        }}
        accEle={{ dots: false }}
        slideCpnts={iconsSlides}
        itemsStyle={iconItemsStyle}
        buttonSetting={{ placeOn: "middle-outside" }}
      />
    );

    return (
      <div style={{ position: "relative", margin: "0 auto", width: "80%" }}>
        {icons}
      </div>
    );
  }
}
