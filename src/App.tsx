import Checkout from "components/Checkout/Checkout";
import GroceryRoutes from "components/Common/GroceryRoutes/GroceryRoutes";
import ShoppingCartSidebar from "components/Common/ShoppingCartSidebar/ShoppingCartSidebar";
import MainSidebar from "components/Common/Sidebar/MainSidebar";
import TopNavBar from "components/Common/Sidebar/TopNavBar";
import BeveragesMenu from "components/Home/FoodMenu/Beverages/BeveragesMenu";
import FruitsAndVegetableMenue from "components/Home/FoodMenu/FruitsAndVegetables/FruitsAndVegetableMenue";
import MeatAndFishMenu from "components/Home/FoodMenu/MeatAndFish/MeatAndFishMenu";
import Register from "components/Login/Register";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import AuthProvider from "context/AuthProvider";
import LoginUser from "pages/LoginUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <TopNavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1">
              <MainSidebar />
            </div>
            <div className="col-md-11 px-5">
              <ShoppingCartSidebar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/grocery" element={<Home />}></Route>
                <Route
                  path="/grocery/:panel"
                  element={<GroceryRoutes />}
                ></Route>
                <Route
                  path="/fruits-vegetables"
                  element={<FruitsAndVegetableMenue />}
                ></Route>
                <Route path="/beverages" element={<BeveragesMenu />}></Route>
                <Route path="/meat-fish" element={<MeatAndFishMenu />}></Route>
                <Route path="account/login" element={<LoginUser />}></Route>
                <Route path="account/register" element={<Register />}></Route>
                <Route
                  path="/checkout"
                  element={
                    <PrivateRoute>
                      {" "}
                      <Checkout />{" "}
                    </PrivateRoute>
                  }
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
