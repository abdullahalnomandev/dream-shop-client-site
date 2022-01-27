import cartImage from "assets/images/cartImage.webp";
import shopping from "assets/images/shopping.jpg";
import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { AiFillShopping } from "react-icons/ai";
import { ImPower } from "react-icons/im";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "redux/reducers/reducers";
import ShoppingCart from "./ShoppingCart";

const ShoppingCartSidebar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useSelector((state: IRootState) => state.carts);
  console.log("cart", cart);

  const total = cart.reduce(
    (total, pd) => total + pd.price * (pd.count || 1),
    0
  );

  useEffect(() => {
    setTotalPrice(total);
  }, [total, cart]);
  return (
    <div>
      <div className="fixed_cart" onClick={handleShow}>
        <div className="item">
          <AiFillShopping />
          <h5>{cart.length} ITEMS</h5>
        </div>
        <div className="price-item">
          <h6>
            {" "}
            <span className="text-black"> ৳ </span> {totalPrice}{" "}
          </h6>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll={false}
        backdrop={true}
      >
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
            {!cart.length && (
              <div>
                <img className="img-fluid pt-4 ps-4" src={cartImage} alt="" />
                <h5 className="text-secondary text-center pt-3">
                  Your shopping bag is empty. Start shopping
                </h5>
              </div>
            )}
            {cart?.map((pd) => (
              <ShoppingCart pd={pd} />
            ))}
          </div>
        </Offcanvas.Body>
        {cart.length !== 0 && (
          <Link to="account/login">
            <div
              onClick={() => setShow(false)}
              className="place-order d-flex justify-content-center align-items-center py-1"
            >
              <h5 className="place">Place Order</h5>
              <h5>৳ {totalPrice}</h5>
            </div>
          </Link>
        )}
      </Offcanvas>
    </div>
  );
};

export default ShoppingCartSidebar;
