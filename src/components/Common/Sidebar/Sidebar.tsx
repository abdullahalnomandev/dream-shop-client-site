import React, { FC, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import TopNavBar from "./TopNavBar";

const SidebarNav = styled.div<{ sidebar: boolean }>`
  width: 200px;
  height: 100vh;
  background-color: #221a06;
  position: fixed;
  overflow: auto;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
`;

const NavIcon = styled(Link)`
  display: flex;
  align-items: center;
  height: 3rem;
  font-size: 1rem;
  margin-left: 2rem;
`;

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div
        className="main-nav container-fluid row "
        style={{ backgroundColor: "#fdd670" }}
      >
        <div className="navbar col-sm-7">
          <>
            <NavIcon to="#" onClick={showSidebar}>
              <AiOutlineMenu style={{ color: "black", fontSize: "30px" }} />
            </NavIcon>
          </>
          <>
            <h4 style={{ fontFamily: "fantasy" }}>
              DREAM <span className="text-danger">Shop</span>
            </h4>
          </>

          <>
            <input
              type="text"
              className="w-50 form-control"
              name=""
              id=""
              placeholder="Search for products (e.g. eggs, milk, potato)  "
            />
            <button
              style={{
                marginLeft: "-18%",
                backgroundColor: "#fff",
                border: "none",
                outline: "none",
              }}
            >
              <BsSearch
                style={{
                  color: "black",
                }}
              />
            </button>
          </>
        </div>
        <div className="col-sm-5  d-none d-sm-block header-items ">
          <TopNavBar />
        </div>
      </div>
      <SidebarNav sidebar={sidebar}>
        <>
          <NavIcon to="#" onClick={showSidebar}>
            <AiOutlineClose style={{ fontSize: "25px" }} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index} setSidebar={setSidebar} />;
          })}
        </>
      </SidebarNav>
    </IconContext.Provider>
  );
};

export default Sidebar;
