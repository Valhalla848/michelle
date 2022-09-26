import React from "react";
import icon1 from "../icons/Без имени-1.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import icon2 from "../icons/free-icon-tik-tok-1946552.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Footer = () => {
  const position = [42.82881661578283, 74.58419582287019];
  return (
    <div id="footer">
      <div style={{ paddingTop: "50px" }}>
        <h4
          className="footer-text"
          style={{
            textAlign: "center",
            color: "gold",
            fontSize: "20px",
          }}
        >
          Следите за нами в соц сетях
        </h4>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={icon1} alt="" style={{ width: "50%", margin: "0 auto" }} />
      </div>
      <div
        style={{
          width: "30%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <a href="https://instagram.com/michelle_bishkek?igshid=NDRkN2NkYzU=">
          {" "}
          <InstagramIcon style={{ color: "white", fontSize: "2rem" }} />
        </a>

        <a href="https://wa.me/<996999999924>">
          <WhatsAppIcon style={{ color: "white", fontSize: "2rem" }} />
        </a>
        <a href="https://www.tiktok.com/@michelle_bishkek?_t=8UzRlv0N5ph&_r=1">
          <img src={icon2} alt="" style={{ width: "2rem" }} />
        </a>
      </div>
      <div style={{ width: "100%" }}>
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ margin: "0 auto", marginTop: "50px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[42.82881661578283, 74.58419582287019]}>
            <Popup>
              Michelle <br />
              Лучшая кофейня <br />
              <a href="https://2gis.kg/bishkek/firm/70000001047006378/74.584363%2C42.828519?m=74.583745%2C42.82865%2F15.8">
                2-GIS
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Footer;
