import useAuth from "hooks/useAuth";
import React from "react";
import { Dropdown, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { GrHelp } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import BootstsrapMobileSidebar from "./BootstsrapMobileSidebar";

const TopNavBar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("account/login");
  };

  return (
    <section className="container-fluid top-main sticky-top ">
      <div>
        <Navbar>
          <Navbar.Brand>
            <BootstsrapMobileSidebar />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
            <h5>
              DREAM <span className="text-danger">Shop</span>
            </h5>
          </Navbar.Brand>
          <Form className="d-flex w-100 d-none d-md-block">
            <FormControl
              type="search"
              placeholder="Search for products (e.g. eggs, milk, potato)"
              className="ms-2 w-100 mx-2"
              aria-label="Search"
            />
          </Form>

          <Nav className="w-100 main-logout-help">
            <Nav.Link
              as={Link}
              to="/t/help"
              style={{ borderLeft: "1px solid gray" }}
            >
              <span>
                <GrHelp /> <h6 style={{ display: "inline" }}>Help</h6>
              </span>
            </Nav.Link>

            {user.emailVerified ? (
              <button className="login-button" onClick={logOut}>
                Log Out
              </button>
            ) : (
              <button className="login-button" onClick={handleSignIn}>
                Sign In
              </button>
            )}
          </Nav>
          <div className="me-5 top-image">
            {user.email && (
              <Dropdown className="me-5">
                <Dropdown.Toggle
    
                  style={{ backgroundColor: "#62626200 ", border: "none" }}
                >
                  <img
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "100%",
                    }}
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  variant="dark"
                  className="me-5"
                  style={{ marginRight: "100px" }}
                >
                  <Dropdown.Item as={Link} to="/profile">
                    {user.displayName}
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/orders" active>
                    Your Orders
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/profile">
                    Your Profile
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </Navbar>
      </div>
    </section>
  );
};

export default TopNavBar;
