import GroceryShoppingCard from "components/Common/GroceryShoppingCard/GroceryShoppingCard";
import { MenuItem } from "ManueItem";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const MeatCard = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="top-image text-center"></div>
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
              <Link to="/meat-fish" className="text-secondary">
                Beverages
              </Link>
            </span>
            <MdOutlineNavigateNext />
            <span className="text-black"> Meat</span>
          </h6>

          <div className="row">
            {MenuItem?.[2].subItems[0].foodItems.map((pd) => (
              <GroceryShoppingCard pd={pd} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeatCard;
