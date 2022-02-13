import loader from "assets/images/loader.gif";
import GroceryShoppingCard from "components/Common/GroceryShoppingCard/GroceryShoppingCard";
import useAsync from "hooks/useAsync";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import FreshVegetableServices from "services/Food/FreshVegetableServices";

const VegetableCard = () => {
  const { data } = useAsync(FreshVegetableServices.getFreshVegetable);

  return (
    <section>
      <div className=" ">
        <div className="container-fluid">
          <div className="top-image text-center d-flex justify-content-center align-items-center">
            <img
              className="img-fluid w-50 "
              src="https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D84130&q=best&v=1&m=700&webp=1"
              alt=""
            />
            <img
              className="img-fluid w-50 "
              src="https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D83535&q=best&v=1&m=700&webp=1"
              alt=""
            />
          </div>
          <div className="fruits-items">
            <h6 className="py-5">
              <Link
                to="/grocery"
                className="text-secondary "
                style={{ textDecoration: "underline" }}
              >
                Food
              </Link>{" "}
              <MdOutlineNavigateNext />
              <span style={{ textDecoration: "underline" }}>
                <Link to="/fruits-vegetables" className="text-secondary">
                  Fruits & Vegetable
                </Link>
              </span>
              <MdOutlineNavigateNext />
              <span className="text-black"> Fresh Vegetables</span>
            </h6>

            <div className="row">
              {!data?.length && (
                <div className="text-center">
                  <img className="img-fluid" src={loader} alt="" />
                </div>
              )}

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

export default VegetableCard;
