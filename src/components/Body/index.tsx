import React from "react";
import Swiper from "../Swiper";
type Props = {};

export default function index({}: Props) {
  return (
    <div className="swippersc">
      <div style={{ width: "100%" }}>
        {" "}
        <Swiper></Swiper>
      </div>
      <div className="container">
        <div className="about">
          <div className="avatar"></div>
          <div>
            <h2> Welcome to my home in Rio</h2>
            <div>
              I'm Lucas, a freelance photographer and designer living in the
              heart of Copacabana. I’d love to host you and show you the real
              Rio. You’ll love my place - not only will you be in the best city,
              you’ll be in the best part of town!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
