import TopNavBar from "components/Common/Sidebar/TopNavBar";
import Beverages from "components/Home/FoodMenu/Beverages/Beverages";
import FruitsVegetables from "components/Home/FoodMenu/FruitsVegetables/FruitsVegetables";
import Snacks from "components/Home/FoodMenu/Snacks/Snacks";
import React from "react";
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
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/grocery" element={<Home />}></Route>
        <Route path="/fruits-vegetables" element={<FruitsVegetables />}></Route>
        <Route path="/beverages" element={<Beverages />}></Route>
        <Route path="/snacks" element={<Snacks />}></Route>

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
