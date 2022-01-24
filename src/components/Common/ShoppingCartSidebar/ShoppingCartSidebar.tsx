import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const ShoppingCartSidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        0 Items
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        scroll={true}
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>0 Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1>Let's Go</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ShoppingCartSidebar;
