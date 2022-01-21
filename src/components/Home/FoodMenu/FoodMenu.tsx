import React from "react";
import FoodMenuCard from "./FoodMenuCard";
import HomeTopBanner from "./HomeTopBanner";
import { MenuItem } from "./ManueItem";

const FoodMenu = () => {
  return (
    <section>
      <HomeTopBanner />
      <div className="container-fluid row">
        <h5 className="text-secondary ps-5 mt-5">Food</h5>
        {MenuItem.map((pd) => (
          <FoodMenuCard pd={pd} />
        ))}
      </div>
    </section>
  );
};

export default FoodMenu;
