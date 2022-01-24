import meatandfish from "assets/images/meat-fish.webp";
import meatandfish2 from "assets/images/meat-fish2.webp";
import { MenuItem } from "ManueItem";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const MeatAndFishMenu = () => {
  return (
    <div className="ms-5 ps-4 ">
      <div className="container-fluid">
        <div className="top-image text-center d-flex justify-content-center align-items-center ">
          <Link to="/grocery/meat">
            <img className="img-fluid " src={meatandfish} alt="" />
          </Link>
          <Link to="/grocery/frozen-fish">
            <img className="img-fluid " src={meatandfish2} alt="" />
          </Link>
        </div>
        <div className="fruits-items">
          <h6 className="py-3">
            <Link
              to="/grocery"
              className="text-secondary"
              style={{ textDecoration: "underline" }}
            >
              Food
            </Link>{" "}
            <MdOutlineNavigateNext />
            <span className="text-black"> Meat & Fish </span>
          </h6>

          <div className="row">
            {MenuItem?.[2].subItems?.map((pd) => (
              <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                <Link to={`/grocery${pd.path}`}>
                  <img className="img-fluid w-75" src={pd.image} alt="" />
                  <p>
                    <Link to={pd.path} className="text-secondary">
                      {pd.title}
                    </Link>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeatAndFishMenu;
