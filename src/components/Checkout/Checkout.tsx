import { Button } from "antd";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { RiMapPinLine, RiShoppingBag2Fill } from "react-icons/ri";

const Checkout = () => {
  return (
    <div className="container checkout">
      <div className="add_address_item">
        <div className="delivery_address d-flex">
          <RiMapPinLine />
          <h4>Select a Delivery Address</h4>
        </div>
        <div className="button ">
          <Button style={{ width: "100%" }}>
            <GrAdd /> Add Address
          </Button>
        </div>
      </div>
      <div className="raver_bag py-3 px-2">
        <div>
          <RiShoppingBag2Fill />{" "}
          <span className="text-primary ">
            {" "}
            Add reusable bags? <AiOutlineInfoCircle />
          </span>
        </div>
      </div>
      <div className="amount d-flex justify-content-between text-secondary">
        <p>Payment options available on the next page</p>
        <p>৳9 Delivery charge included</p>
      </div>
      <div className="amount d-flex justify-content-end align-items-center">
        <h4 className="process">Process</h4>
        <h4>৳9444</h4>
      </div>
    </div>
  );
};

export default Checkout;
