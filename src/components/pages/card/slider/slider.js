import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import url from "../../../../helpers/config";
import "./slider.scss";

let Slider = ({ imgs = [] }) => {
  const sliders = imgs.map((img, index) => {
    if (img) {
      return (
        <SplideSlide key={index}>
          <img src={`${url}/${img}`} alt="" />
        </SplideSlide>
      );
    }
  });
  return (
    <div className="cardslider">
      <img src={require("../../../../assets/img/san.png")} alt="" />
      <div className="card__gift">
        <img src={require("../../../../assets/img/gift.png")} alt="" />
        Подарок
      </div>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          arrows: false,
          pagination: false,
        }}
      >
        {sliders}
      </Splide>
    </div>
  );
};

export default Slider;
