import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem } from "../modeles/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
  setSidebar: React.Dispatch<React.SetStateAction<any>>;
};

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  font-size: 0.9rem;
  padding: 1rem;
  text-decoration: none;
  color: #ffffff;
  &:focus {
    background-color: #1f1f1b;
    border-left: 4px solid #fdd670;
  }

  &:hover {
    background-color: #1f1f1b;
    border-left: 4px solid #fdd670;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  font-size: 0.9rem;
  padding-left: 3rem;
  text-decoration: none;
  color: #ffffff;

  &:active {
    background-color: black;
  }
  &:hover {
    background-color: black;
  }
`;

const Submenu: FC<SidebarLinkProps> = ({ item, setSidebar }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          <p>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</p>
        </div>
      </SidebarLink>
      {subnav &&
        item?.subnav?.map((subnavItem, index) => {
          return (
            <DropdownLink
              to={subnavItem.path}
              key={index}
              onClick={() => setSidebar(false)}
            >
              {subnavItem.icon}
              <SidebarLabel>{subnavItem.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default Submenu;
