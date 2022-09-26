import React from "react";
import img1 from "../img/block4/block4img1.jpg";
import img2 from "../img/block4/block4img2.jpg";
import img3 from "../img/block4/block4img3.jpg";
import img4 from "../img/block4/block4img4.jpg";
import img5 from "../img/block4/block4img5.jpg";
import img6 from "../img/block4/block4img6.jpg";
import "../styles/Block4.css";
const Block4 = () => {
  return (
    <div id="block4">
      <img className="block4_img block4_hover1" src={img1} alt="" />
      <img className="block4_img block4_hover2" src={img2} alt="" />
      <img className="block4_img block4_hover3" src={img3} alt="" />
      <img className="block4_img block4_hover4" src={img4} alt="" />
      <img className="block4_img block4_hover5" src={img5} alt="" />
      <img className="block4_img block4_hover6" src={img6} alt="" />
    </div>
  );
};

export default Block4;
