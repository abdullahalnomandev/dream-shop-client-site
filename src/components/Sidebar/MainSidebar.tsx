import { Layout, Menu } from "antd";
import useAuth from "hooks/useAuth";
import { MdFoodBank } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const { SubMenu } = Menu;
const { Sider } = Layout;
const MainSidebar = () => {
  const { admin } = useAuth();
  let navigate = useNavigate();
  const routeHandler = (route: string) => {
    navigate(route);
  };

  return (
    <div>
      <Layout className="top-main-sidebar">
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            {admin && <AdminSidebar />}
            <Menu.Item>
              <Link to="/fruits-vegetables"> Winter Collection</Link>
            </Menu.Item>

            <Menu.Item>
              <Link to="/beverages"> Popular</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/meat-fish"> Flash Sales</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/meat-fish/meat"> Cooking</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/grocery/soft-drinks"> Soft Drink</Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              icon={<MdFoodBank style={{ fontSize: "30px" }} />}
              title="Food"
              onTitleClick={() => routeHandler("/grocery")}
            >
              <SubMenu
                title="Fruits & vegetable "
                onTitleClick={() => routeHandler("/fruits-vegetables")}
              >
                <Menu.Item>
                  <Link to="/grocery/fresh-fruit"> Fresh Food</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/"> Fresh Vegetable</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                title="Meat & Fish "
                onTitleClick={() => routeHandler("/meat-fish")}
              >
                <Menu.Item key="3">
                  <Link to="/grocery/meat"> Meet</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/grocery/frozen-fish"> Frozen Fish</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  Dried Fish
                  <Link to="/grocery/dried-fish"> Dried Fish</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/grocery/tofu-meat-alternatives">
                    Tofu & Meat Alternatives
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                title="Beverages"
                onTitleClick={() => routeHandler("/beverages")}
              >
                <Menu.Item key="7">
                  <Link to="/grocery/tea-coffee"> Tea</Link>
                </Menu.Item>
                <Menu.Item key="8">
                  <Link to="/grocery/coffee-2"> coffee</Link>
                </Menu.Item>
                <Menu.Item key="9">
                  <Link to="/grocery/juice"> Juice</Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link to="/grocery/soft-drinks"> Soft Drink</Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
};

export default MainSidebar;
