import { Switch } from "antd";
import useAuth from "hooks/useAuth";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiMapPinLine, RiShoppingBag2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "redux/reducers/reducers";
import BookingServices from "services/Booking/BookingServices";
import { IBooking } from "Types";
import CheckoutModel from "./CheckoutModel";

const Checkout = () => {
  const { cart } = useSelector((state: IRootState) => state.carts);
  const [booking, setBooking] = useState<IBooking[]>([]);
  const { user } = useAuth();
  const total = cart.reduce((total, pd) => total + pd.price * (pd.count || 1),  0 );
  const [switchChecked, setSwitchChecked] = useState(false);
  const [isDisable, setIsDisable] = useState<boolean | undefined>(false);
  const [handlePostBook, setHandlePostBook] = useState(false);

  const onChange = (checked: any) => {
    setSwitchChecked(checked);
  };

  //Get OWN Book
  BookingServices.getOwnBooking(user.email).then((res) => {
    setBooking(res);
  });

  const handleDelete = (e: any, id: string) => {
    BookingServices.deleteBooking(id).then((res) => {
      if (res) {
        alert("Your Order has been Success");
      }
    });
    e.target.parentNode.style.display = "none";
  };
  return (
    <div className="container">
      {!cart.length && (
        <div className="ms-5 px-5">
          <div className="col-md-6 row ">
            <div className="col-md-12 ">
              <h5>
                Order Id :{" "}
                <span className="text-success">{booking[0]._id}</span>
              </h5>
              <h6>Delivery Address</h6>
              <p>{booking[0].address}</p>
              <p>Phone:{booking[0].phone}</p>
              <p>{booking[0].userName}</p>
              <button
                className="btn-danger px-2 py-1"
                onClick={(e) => handleDelete(e, `${booking[0]._id}`)}
              >
                Cancel Order
              </button>
            </div>
            <Link to="/orders">
              <button className="btn-info rounded w-50 my-5">My orders</button>
            </Link>
          </div>
        </div>
      )}
      {cart.length && (
        <div className=" checkout">
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
                total={total}
                handlePostBook={handlePostBook}
              />
            </div>
          </div>
          <div className="raver_bag py-3 px-2 d-flex justify-content-between">
            <div>
              <RiShoppingBag2Fill />{" "}
              <span className="text-primary ">
                Add reusable bags? <AiOutlineInfoCircle />
              </span>
            </div>
            <div>
              <h5
                style={{ display: "inline" }}
                className={switchChecked ? "text-secondary px-2" : "d-none"}
              >
                ৳7
              </h5>
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
          <div className="amount d-flex justify-content-between text-secondary">
            <p>Payment options available on the next page</p>
            <p>৳9 Delivery charge included</p>
          </div>
          <div className="amount d-flex justify-content-end align-items-center">
            <button
              disabled={!isDisable}
              className="process_button"
              onClick={() => setHandlePostBook(true)}
            >
              <span  className="process"  style={{ background: isDisable ? "" : "#ddd" }} >
                Process
              </span>
              <span className="process2"  style={{ background: isDisable ? "" : "#ddd" }}  >
                ৳ {switchChecked ? `${total + 7}` : `${total}`}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
