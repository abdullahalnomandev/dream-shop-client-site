import mpimage from "assets/images/_mpimage.webp";
import mpimage1 from "assets/images/_mpimage1.webp";
import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../../../../ManueItem";
import FoodMenuCard from "./FoodMenuCard";

const FoodMenu = () => {
  return (
    <section>
      <div className="top-advertistment-banner">
        <div className="row container-fluid ">
          <div className="col-md-12 text-center">
            <div className="col-md-12">
              <Link to="/fruits-vegetables">
                <img className="img-fluid" src={mpimage} alt="" />
              </Link>
            </div>
            <div className="col-md-12">
              <Link to="/fruits-vegetables">
                <img className="img-fluid" src={mpimage1} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid row">
        <h5 className="text-secondary ps-5 mt-5">Food</h5>
        {MenuItem.map((pd) => (
          <FoodMenuCard pd={pd} key={pd._id} />
        ))}
      </div>
    </section>
  );
};

export default FoodMenu;
