import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../styles/Block5.css";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import img1 from "../img/block5/block5img1.jpg";
import img2 from "../img/block5/block5img2.jpg";
import img3 from "../img/block5/block5img3.jpg";
import menu1 from "../menuRu/menu1.jpg";
import menu2 from "../menuRu/menu2.jpg";
import menu3 from "../menuRu/menu3.jpg";
import menu4 from "../menuRu/menu4.jpg";
import menu5 from "../menuRu/menu5.jpg";
import menu6 from "../menuRu/menu6.jpg";
import menu7 from "../menuRu/menu7.jpg";
import menu8 from "../menuRu/menu8.jpg";
import menu9 from "../menuRu/menu9.jpg";
import menu10 from "../menuRu/menu10.jpg";
import menu11 from "../menuRu/menu11.jpg";
import menu12 from "../menuRu/menu12.jpg";
import menu13 from "../menuRu/menu13.jpg";
import menu14 from "../menuRu/menu14.jpg";
import menu15 from "../menuRu/menu15.jpg";
import menu16 from "../menuRu/menu16.jpg";
import menu17 from "../menuRu/menu17.jpg";
import menu18 from "../menuRu/menu18.jpg";
import menu19 from "../menuRu/menu19.jpg";
import menu20 from "../menuRu/menu20.jpg";
import menu21 from "../menuRu/menu21.jpg";
import menu22 from "../menuRu/menu22.jpg";
import enmenu1 from "../menuEn/enmenu1.jpg";
import enmenu2 from "../menuEn/enmenu2.jpg";
import enmenu3 from "../menuEn/enmenu3.jpg";
import enmenu4 from "../menuEn/enmenu4.jpg";
import enmenu5 from "../menuEn/enmenu5.jpg";
import enmenu6 from "../menuEn/enmenu6.jpg";
import enmenu7 from "../menuEn/enmenu7.jpg";
import enmenu8 from "../menuEn/enmenu8.jpg";
import enmenu9 from "../menuEn/enmenu9.jpg";
import enmenu10 from "../menuEn/enmenu10.jpg";
import enmenu11 from "../menuEn/enmenu11.jpg";
import enmenu12 from "../menuEn/enmenu12.jpg";
import enmenu13 from "../menuEn/enmenu13.jpg";
import enmenu14 from "../menuEn/enmenu14.jpg";
import enmenu15 from "../menuEn/enmenu15.jpg";
import enmenu16 from "../menuEn/enmenu16.jpg";
import enmenu17 from "../menuEn/enmenu17.jpg";
import enmenu18 from "../menuEn/enmenu18.jpg";
import enmenu19 from "../menuEn/enmenu19.jpg";
import enmenu20 from "../menuEn/enmenu20.jpg";
import enmenu21 from "../menuEn/enmenu21.jpg";
import enmenu22 from "../menuEn/enmenu22.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const Block5 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openen, setOpenEn] = React.useState(false);
  const handleOpenEn = () => setOpenEn(true);
  const handleCloseEn = () => setOpenEn(false);

  return (
    <div id="block5">
      <div className="block5-left">
        <div className="block5-left-main">
          <div className="block5-left-hr"></div>
          <div className="block5-left-text1">
            В нашем заведении, вы сможете попробовать много различных блюд! Если
            вы думаете, что у нас чего-то нет, то вы ошибаетесь!
          </div>
          <div className="block5-left-text2">
            Мы с давних времен занимаемся этим делом, и в нашем штабе работают
            только лучшие и самые отзывчивые сотрудники. В нашем меню
            присутствует множество различных блюд, так что никто не останется
            голодным!
          </div>
          <div className="block5-left-text3">
            Вы хотите ознакомиться с нашим меню?
            <LocalDiningIcon className="block5-left-icon" />
          </div>
          <div className="block5-left-btn">
            <button className="block5-left-btn-ru" onClick={handleOpen}>
              MENU(RU)
            </button>
            <button className="block5-left-btn-en" onClick={handleOpenEn}>
              MENU(EN)
            </button>
          </div>
        </div>
      </div>

      <div className="block5_right">
        <AwesomeSlider className="block5Slider">
          <div data-src={img1} />
          <div data-src={img2} />
          <div data-src={img3} />
        </AwesomeSlider>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="RuMenuModal">
          <img src={menu1} alt="" className="rumenu" />
          <img src={menu2} alt="" className="rumenu" />
          <img src={menu3} alt="" className="rumenu" />
          <img src={menu4} alt="" className="rumenu" />
          <img src={menu5} alt="" className="rumenu" />
          <img src={menu6} alt="" className="rumenu" />
          <img src={menu7} alt="" className="rumenu" />
          <img src={menu8} alt="" className="rumenu" />
          <img src={menu9} alt="" className="rumenu" />
          <img src={menu10} alt="" className="rumenu" />
          <img src={menu11} alt="" className="rumenu" />
          <img src={menu12} alt="" className="rumenu" />
          <img src={menu13} alt="" className="rumenu" />
          <img src={menu14} alt="" className="rumenu" />
          <img src={menu15} alt="" className="rumenu" />
          <img src={menu16} alt="" className="rumenu" />
          <img src={menu17} alt="" className="rumenu" />
          <img src={menu18} alt="" className="rumenu" />
          <img src={menu19} alt="" className="rumenu" />
          <img src={menu20} alt="" className="rumenu" />
          <img src={menu21} alt="" className="rumenu" />
          <img src={menu22} alt="" className="rumenu" />
        </Box>
      </Modal>
      <Modal
        open={openen}
        onClose={handleCloseEn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="EnMenuModal">
          <img src={enmenu1} alt="" className="enmenu" />
          <img src={enmenu2} alt="" className="enmenu" />
          <img src={enmenu3} alt="" className="enmenu" />
          <img src={enmenu4} alt="" className="enmenu" />
          <img src={enmenu5} alt="" className="enmenu" />
          <img src={enmenu6} alt="" className="enmenu" />
          <img src={enmenu7} alt="" className="enmenu" />
          <img src={enmenu8} alt="" className="enmenu" />
          <img src={enmenu9} alt="" className="enmenu" />
          <img src={enmenu10} alt="" className="enmenu" />
          <img src={enmenu11} alt="" className="enmenu" />
          <img src={enmenu12} alt="" className="enmenu" />
          <img src={enmenu13} alt="" className="enmenu" />
          <img src={enmenu14} alt="" className="enmenu" />
          <img src={enmenu15} alt="" className="enmenu" />
          <img src={enmenu16} alt="" className="enmenu" />
          <img src={enmenu17} alt="" className="enmenu" />
          <img src={enmenu18} alt="" className="enmenu" />
          <img src={enmenu19} alt="" className="enmenu" />
          <img src={enmenu20} alt="" className="enmenu" />
          <img src={enmenu21} alt="" className="enmenu" />
          <img src={enmenu22} alt="" className="enmenu" />
        </Box>
      </Modal>
    </div>
  );
};

export default Block5;
