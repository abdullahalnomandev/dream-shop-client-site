import shopping from "assets/images/shopping.jpg";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { ImPower } from "react-icons/im";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers/reducers";
import ShoppingCart from "./ShoppingCart";

const ShoppingCartSidebar = () => {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cart } = useSelector((state: IRootState) => state.carts);
  console.log("grogery Item", cart[0]?.name);

  return (
    <div>
      <button
        onClick={handleShow}
        style={{
          width: "60px",
          height: "60px",
          right: "0%",
          top: " 50%",
          position: "fixed",
          zIndex: "1",
        }}
      >
        {cart.length} Items
      </button>

      <Offcanvas show={show} placement="end" scroll={true} backdrop={false}>
        <div className="shopping-cart-header d-flex justify-content-between align-items-center ">
          <div>
            <img className="img-fluid " src={shopping} alt="" />
            <h5>{cart.length} ITEMS</h5>
          </div>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
        <h5 className="express">
          <ImPower /> Express Delivery
        </h5>

        <Offcanvas.Body>
          <div className="row">
            {cart?.map((pd) => (
              <ShoppingCart pd={pd} />
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ShoppingCartSidebar;
