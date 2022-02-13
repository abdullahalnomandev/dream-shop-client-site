import Coffee from "components/AdminDashboard/Foods/Coffee";
import DryFish from "components/AdminDashboard/Foods/DryFish";
import FreshFood from "components/AdminDashboard/Foods/FreshFood";
import FreshVegetable from "components/AdminDashboard/Foods/FreshVegetable";
import FrozenFish from "components/AdminDashboard/Foods/FrozenFish";
import Juice from "components/AdminDashboard/Foods/Juice";
import Meat from "components/AdminDashboard/Foods/Meat";
import SoftDrink from "components/AdminDashboard/Foods/SoftDrink";
import Tea from "components/AdminDashboard/Foods/Tea";
import Tofu from "components/AdminDashboard/Foods/Tofu";
import React from "react";
import { useParams } from "react-router-dom";

const DashboardRoutes = () => {
  const { page } = useParams();
  return (
    <div className="container ms-5 ">
      {page === "freshFood" ? (
        <FreshFood />
      ) : page === "freshVegetable" ? (
        <FreshVegetable />
      ) : page === "coffee" ? (
        <Coffee />
      ) : page === "frozenFish" ? (
        <FrozenFish />
      ) : page === "dryFish" ? (
        <DryFish />
      ) : page === "juice" ? (
        <Juice />
      ) : page === "meat" ? (
        <Meat />
      ) : page === "softDrink" ? (
        <SoftDrink />
      ) : page === "tea" ? (
        <Tea />
      ) : page === "tofu" ? (
        <Tofu />
      ) : null}
    </div>
  );
};

export default DashboardRoutes;
