import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="nav">
      <div className="nav-title">
        <h1>COVID-19 Tracker</h1>
      </div>
      <div className="nav-links">
        <button>News</button>
        <button>Data</button>
        <button>Contact</button>
      </div>
    </div>
    <div className="header-body">
      <div className="header-image">
        <img
          src="https://images.pexels.com/photos/3970332/pexels-photo-3970332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="covid-19"
        />
      </div>
      <div className="header-left">
        <div className="header-description">
          <h1>Check out current country and global data on COVID19.</h1>
        </div>

        <div className="store-button">
          <CustomButton>
            <img src="https://img.icons8.com/fluency/100/000000/google-play.png" />
            Download
          </CustomButton>
          <CustomButton>
            <img src="https://img.icons8.com/fluency/100/000000/apple-app-store.png" />
            Download
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
