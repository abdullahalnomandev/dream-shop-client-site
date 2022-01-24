import drink from "assets/images/soft-drinks.webp";
import GroceryShoppingCard from "components/Common/GroceryShoppingCard/GroceryShoppingCard";
import { MenuItem } from "ManueItem";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const DrinkCard = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="top-image text-center">
          <img className="img-fluid" src={drink} alt="" />
        </div>
        <div className="fruits-items">
          <h6 className="py-5">
            <Link
              to="/grocery"
              className="text-secondary"
              style={{ textDecoration: "underline" }}
            >
              Food
            </Link>{" "}
            <MdOutlineNavigateNext />
            <span style={{ textDecoration: "underline" }}>
              <Link to="/beverages" className="text-secondary">
                Fruits Vegetable
              </Link>
            </span>
            <MdOutlineNavigateNext />
            <span className="text-black"> Soft Drink</span>
          </h6>

          <div className="row">
            {MenuItem?.[1].subItems[3].foodItems.map((pd) => (
              <GroceryShoppingCard pd={pd} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkCard;
