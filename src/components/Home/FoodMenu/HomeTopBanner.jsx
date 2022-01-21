import React from "react";
import { Link } from "react-router-dom";

const HomeTopBanner = () => {
  return (
    <div className="top-advertistment-banner">
      <div className="row container-fluid ">
        <div className="col-md-12 text-center">
          <div className="col-md-12">
            <Link to="/dhamaka">
              <img
                className="img-fluid"
                src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D94650&q=low&v=1&m=910&webp=1"
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-12">
            <Link to="/popular">
              <img
                className="img-fluid"
                src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D88936&q=low&v=1&m=910&webp=1"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBanner;
