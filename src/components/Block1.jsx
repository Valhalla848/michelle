import React, { useEffect } from "react";
import block from "../img/block1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Block1.css";

const Block1 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="block1" data-aos="zoom-in" data-aos-duration="2000">
      <img className="block1-img" src={block} alt="" />
    </div>
  );
};

export default Block1;
