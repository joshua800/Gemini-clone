import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Josh.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              sunt omnis obcaecati?
              <img src={assets.compass_icon} alt="" />
            </p>
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              sunt omnis obcaecati?
              <img src={assets.bulb_icon} alt="" />
            </p>
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              sunt omnis obcaecati?
              <img src={assets.menu_icon} alt="" />
            </p>
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              sunt omnis obcaecati?
              <img src={assets.code_icon} alt="" />
            </p>
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div className="div">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double check its responses. Your Privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
