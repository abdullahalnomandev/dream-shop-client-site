import GroceryShoppingCard from "components/Common/GroceryShoppingCard/GroceryShoppingCard";
import useAsync from "hooks/useAsync";
import { MenuItem } from "ManueItem";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import FreshFoodServices from "services/Food/FreshFoodServices";

const FruitsCard = () => {
  console.log(MenuItem?.[0].subItems[0].foodItems);
  const { data } = useAsync(FreshFoodServices.getFreshFood);

  return (
    <section>
      <div>
        <div className="container-fluid">
          <div className="top-image text-center">
            <img
              className="img-fluid"
              src="https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D82822&q=best&v=1&m=700&webp=1"
              alt=""
            />
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
                <Link to="/fruits-vegetables" className="text-secondary">
                  Fruits Vegetable
                </Link>
              </span>
              <MdOutlineNavigateNext />
              <span className="text-black"> Fresh Fruits</span>
            </h6>
     
            <div className="row ">
              {data?.map((pd) => (
                <GroceryShoppingCard pd={pd} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FruitsCard;
