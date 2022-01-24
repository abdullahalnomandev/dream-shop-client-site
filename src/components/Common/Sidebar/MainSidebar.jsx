import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import logo from "assets/images/download.jpg";
import React from "react";
import { FcBarChart } from "react-icons/fc";

const MainSidebar = () => {
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            {/* <AiFillHome /> */}
            <img className="w-25" src={logo} alt="" />
          </NavIcon>
          <NavText>Winter Collection</NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <FcBarChart />
          </NavIcon>
          <NavText>Charts</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>Line Chart</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Bar Chart</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default MainSidebar;
