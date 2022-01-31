import { Switch } from "antd";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiMapPinLine, RiShoppingBag2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers/reducers";
import CheckoutModel from "./CheckoutModel";

const Checkout = () => {
  const { cart } = useSelector((state: IRootState) => state.carts);

  const total = cart.reduce(
    (total, pd) => total + pd.price * (pd.count || 1),
    0
  );
  const [switchChecked, setSwitchChecked] = useState(true);
  const [isDisable, setIsDisable] = useState<boolean | undefined>(false);

  const onChange = (checked: any) => {
    setSwitchChecked(checked);
  };

  console.log("switchChecked", switchChecked);

  return (
    <div className="container checkout">
      <div className="add_address_item">
        <div className="delivery_address d-flex">
          <RiMapPinLine />
          <h4>Select a Delivery Address</h4>
        </div>
        <div className="button ">
          <CheckoutModel
            switchChecked={switchChecked}
            setIsDisable={setIsDisable}
            isDisable={isDisable}
          />
        </div>
      </div>
      <div className="raver_bag py-3 px-2 d-flex justify-content-between">
        <div>
          <RiShoppingBag2Fill />{" "}
          <span className="text-primary ">
            {" "}
            Add reusable bags? <AiOutlineInfoCircle />
          </span>
        </div>
        <div>
          <h5
            style={{ display: "inline" }}
            className={switchChecked ? "text-secondary px-2" : "d-none"}
          >
            ৳7
          </h5>{" "}
          <Switch defaultChecked onChange={onChange} />
        </div>
      </div>
      <div className="amount d-flex justify-content-between text-secondary">
        <p>Payment options available on the next page</p>
        <p>৳9 Delivery charge included</p>
      </div>
      <div className="amount d-flex justify-content-end align-items-center">
        <button disabled={!isDisable}>
          <span
            className="process"
            style={{ background: isDisable ? "" : "#ddd" }}
          >
            Process
          </span>
          <span
            className="process2"
            style={{ background: isDisable ? "" : "#ddd" }}
          >
            ৳ {switchChecked ? `${total + 7}` : `${total}`}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
