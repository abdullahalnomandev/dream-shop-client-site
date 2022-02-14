import CoffeeCard from "components/Home/FoodMenu/Beverages/CoffeeCard";
import DrinkCard from "components/Home/FoodMenu/Beverages/DrinkCard";
import JuiceCard from "components/Home/FoodMenu/Beverages/JuiceCard";
import TeaCard from "components/Home/FoodMenu/Beverages/TeaCard";
import FruitsCard from "components/Home/FoodMenu/FruitsAndVegetables/FruitsCard";
import VegetableCard from "components/Home/FoodMenu/FruitsAndVegetables/VegetableCard";
import DriFishCard from "components/Home/FoodMenu/MeatAndFish/DriFishCard";
import FishCard from "components/Home/FoodMenu/MeatAndFish/FishCard";
import MeatCard from "components/Home/FoodMenu/MeatAndFish/MeatCard";
import TufaCard from "components/Home/FoodMenu/MeatAndFish/TufaCard";
import { useParams } from "react-router-dom";

const GroceryRoutes = () => {
  const { panel } = useParams();

  return (
    <div className="ms-md-5 ps-md-4">
      {panel === "fresh-fruit" ? (
        <FruitsCard />
      ) : panel === "fresh-vegetable" ? (
        <VegetableCard />
      ) : panel === "tea-coffee" ? (
        <TeaCard />
      ) : panel === "coffee-2" ? (
        <CoffeeCard />
      ) : panel === "juice" ? (
        <JuiceCard />
      ) : panel === "soft-drinks" ? (
        <DrinkCard />
      ) : panel === "meat" ? (
        <MeatCard />
      ) : panel === "frozen-fish" ? (
        <FishCard />
      ) : panel === "dried-fish" ? (
        <DriFishCard />
      ) : panel === "tofu-meat-alternatives" ? (
        <TufaCard />
      ) : null}
    </div>
  );
};

export default GroceryRoutes;
