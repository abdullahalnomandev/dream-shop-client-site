import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import { GrUserAdmin } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';



const AdminSidebar = () => {
    let navigate = useNavigate();
    const routeHandler = (route:string) => {
      navigate(route);
    };
    return (
        <div style={{background:'#ddd'}}>
            <SubMenu  title="Admin Dashboard" icon={<GrUserAdmin/>}  onTitleClick={() => routeHandler("/admin")} >
              <Menu.Item key="22">
                <Link to="/order">Customers' Order</Link>
              </Menu.Item>
              <Menu.Item key="23">
                <Link to="/">Winter Collection</Link>
              </Menu.Item>
              <SubMenu title="Food " onTitleClick={() => routeHandler("/fruits-vegetables")} >
                <Menu.Item>
                  <Link to="/dashboard/freshFood"> Fresh Food</Link>
                </Menu.Item>
                <Menu.Item key="24">
                  <Link to="/dashboard/freshVegetable"> Fresh Vegetable</Link>
                </Menu.Item>
                <Menu.Item key="26">
                  <Link to="/dashboard/tea"> Tea</Link>
                </Menu.Item>
                <Menu.Item key="27">
                  <Link to="/dashboard/coffee"> Coffee</Link>
                </Menu.Item>
                <Menu.Item key="28">
                  <Link to="/dashboard/juice"> Juice</Link>
                </Menu.Item>
                <Menu.Item key="29">
                  <Link to="/dashboard/softDrink"> Soft Drink</Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu>
        </div>
    );
};

export default AdminSidebar;