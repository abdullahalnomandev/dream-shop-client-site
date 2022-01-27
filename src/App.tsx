import GroceryRoutes from "components/Common/GroceryRoutes/GroceryRoutes";
import ShoppingCartSidebar from "components/Common/ShoppingCartSidebar/ShoppingCartSidebar";
import TopNavBar from "components/Common/Sidebar/TopNavBar";
import BeveragesMenu from "components/Home/FoodMenu/Beverages/BeveragesMenu";
import FruitsAndVegetableMenue from "components/Home/FoodMenu/FruitsAndVegetables/FruitsAndVegetableMenue";
import MeatAndFishMenu from "components/Home/FoodMenu/MeatAndFish/MeatAndFishMenu";
import LoginUsers from "pages/LoginUsers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {
  Configurations,
  History,
  Order,
  Overview,
  Revenue,
  Users,
} from "./pages/Overview";

const App = () => {
  return (
    <Router>
      <TopNavBar />
      <ShoppingCartSidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/grocery" element={<Home />}></Route>
        <Route path="/grocery/:panel" element={<GroceryRoutes />}></Route>
        <Route
          path="/fruits-vegetables"
          element={<FruitsAndVegetableMenue />}
        ></Route>
        <Route path="/beverages" element={<BeveragesMenu />}></Route>
        <Route path="/meat-fish" element={<MeatAndFishMenu />}></Route>
        <Route path="account/login" element={<LoginUsers />}></Route>
        {/* Rest */}
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/overview/users" element={<Users />}></Route>
        <Route path="/overview/revenue" element={<Revenue />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/configurations" element={Configurations}></Route>
      </Routes>
    </Router>
  );
};

export default App;
