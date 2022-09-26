import React from "react";
import imgR1 from "../img/block3/Img1.jpg";
import imgR2 from "../img/block7/IMG_5175.png";
import imgR3 from "../img/block7/IMG_5180.png";
import imgR4 from "../img/block7/IMG_5195.PNG";

import img2 from "../img/block3/немецкий завтрак .jpg";
import img3 from "../img/block3/block3img4.jpg";
import img4 from "../img/block3/block3img5.jpg";
import img5 from "../img/block3/block3img6.jpg";
import img6 from "../img/block3/блины с семгой.jpg";
import "../styles/Block3.css";
import AwesomeSlider from "react-awesome-slider";

const Block3 = () => {
  return (
    <>
      <div className="block3">
        <div className="block3-up">
          <div className="block3-up-left">
            <div className="block3-up-left-maintext">GROWER</div>
            <div className="block3-up-left-text">
              Michelle - это нотка заботы каждой детали и отдельно для каждого
              гостя. Мы всегда будем рядом и проявим свою заботу и любовь. Как
              ты мог заметить, наши заботы проявляются с первой минуты твоего
              прибывания в нашу зеленую кофейню.
            </div>
          </div>

          <AwesomeSlider className="block3Slider">
            <div data-src={imgR1} />
            <div data-src={imgR2} />
            <div data-src={imgR3} />
            <div data-src={imgR4} />
          </AwesomeSlider>
        </div>
      </div>
      <div className="block3-down">
        <img
          src={img2}
          alt=""
          className="block3-down-img1  block3-down-img-media"
        />
        <img
          src={img3}
          alt=""
          className="block3-down-img2 block3-down-img-media"
        />
        <img
          src={img4}
          alt=""
          className="block3-down-img3 block3-down-img-media"
        />
        <img src={img5} alt="" className="block3-down-img4" />
        <img src={img6} alt="" className="block3-down-img5 " />
      </div>
    </>
  );
};

export default Block3;
