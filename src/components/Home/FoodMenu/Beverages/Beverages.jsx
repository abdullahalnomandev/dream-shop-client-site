import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Beverages = () => {
  return (
    <div className="ms-5 ps-4 ">
      <div className="container-fluid">
        <div className="top-image text-center ">
          <img
            className="img-fluid w-75 "
            src="https://chaldn.com/_mpimage/beverages?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D82885&q=best&v=1&m=700&webp=1"
            alt=""
          />
        </div>
        <div className="beverages-items">
          <h6>
            <Link
              to="/grocery"
              className="text-secondary"
              style={{ textDecoration: "underline" }}
            >
              Food
            </Link>{" "}
            <MdOutlineNavigateNext />
            <span className="text-black"> Beverages</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Beverages;
