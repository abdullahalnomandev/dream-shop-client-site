import loader from 'assets/images/loader.gif';
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Checkout = React.lazy(() => import("components/Checkout/Checkout"));
const GroceryRoutes = React.lazy( () => import("components/Routes/GroceryRoutes/GroceryRoutes"));
const ShoppingCartSidebar = React.lazy(() => import("components/Common/ShoppingCartSidebar/ShoppingCartSidebar"));
const MainSidebar = React.lazy(() => import("components/Sidebar/MainSidebar"));
const BeveragesMenu = React.lazy( () => import("components/Home/FoodMenu/Beverages/BeveragesMenu"));
const FruitsAndVegetableMenue = React.lazy( () => import(  "components/Home/FoodMenu/FruitsAndVegetables/FruitsAndVegetableMenue"));
const MeatAndFishMenu = React.lazy(() => import("components/Home/FoodMenu/MeatAndFish/MeatAndFishMenu"));
const PrivateRoute = React.lazy(() => import("components/Login/PrivateRoute/PrivateRoute"));
const Register = React.lazy(() => import("components/Login/Register"));
const AuthProvider = React.lazy(() => import("context/AuthProvider"));
const DashboardPages = React.lazy(() => import("pages/DashboardPages"));
const HelpPage = React.lazy(() => import("pages/HelpPage"));
const LoginUser = React.lazy(() => import("pages/LoginUser"));
const Home = React.lazy(() => import("./pages/Home"));
const Order = React.lazy(() => import("components/AdminDashboard/CustomarsOrder/Order"));
const CustomorOder = React.lazy(() => import("components/CustomorOrder/CustomorOder"));
const AddAdmin = React.lazy(() => import("components/AdminDashboard/AddAdmin/AddAdmin"));
const Profile = React.lazy(() => import("pages/Profile"));
const User = React.lazy(() => import("components/AdminDashboard/User/User"));


const AppRouter: React.FC = ({ children }) => {
  return (
    <Suspense fallback={<div className='text-center'><img className='img-fluid' src={loader} alt="" /></div>}>
      <AuthProvider>
        <Router>
          {children}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1">
                <MainSidebar  />
              </div>
              <div className="col-md-11 px-5">
                <ShoppingCartSidebar />
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/grocery" element={<Home />}></Route>
                  <Route path="/grocery/:panel"  element={<GroceryRoutes />}></Route>
                  <Route path="/fruits-vegetables" element={<FruitsAndVegetableMenue />}></Route>
                  <Route path="/beverages" element={<BeveragesMenu />}></Route>
                  <Route path="/meat-fish" element={<MeatAndFishMenu />}></Route>
                  <Route path="account/login" element={<LoginUser />}></Route>
                  <Route path="account/register" element={<Register />}></Route>
                  <Route path="/t/help" element={<HelpPage />}></Route>
                  <Route path="/dashboard/:page" element={<DashboardPages />}></Route>
                  <Route path="/checkout" element={<PrivateRoute> <Checkout /> </PrivateRoute> } ></Route>
                  <Route path="/order" element={<PrivateRoute> <Order /></PrivateRoute> } ></Route>
                  <Route path="/addAdmin" element={ <AddAdmin /> } ></Route>
                  <Route path="/orders" element={<PrivateRoute><CustomorOder /></PrivateRoute>  } ></Route>
                  <Route path="/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>} ></Route>
                  <Route path="/users" element={<PrivateRoute><User /> </PrivateRoute>  } ></Route>
                  <Route path="*" element={ <Home /> } ></Route>
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </AuthProvider>
    </Suspense>
  );
};

export default AppRouter;
