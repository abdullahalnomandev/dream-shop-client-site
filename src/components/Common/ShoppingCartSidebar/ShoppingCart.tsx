import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeFromCart } from "redux/actionCreators/cartActions";
import { IGroceryItem } from "Types";

interface IProps {
  pd: IGroceryItem;
}
const ShoppingCart = ({ pd }: IProps) => {
  const [count, setCount] = useState(1);

  pd.count = count;
  const inCreaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    dispatch(removeFromCart(""));
  }, [count]);

  const dispatch = useDispatch();
  console.log("pd.count", pd.count, pd.name);

  return (
    <section className="grocery-section">
      <div className="groceryItem d-flex justify-content-start align-items-end">
        <div className="button-with-quantity  ">
          <IoIosArrowUp onClick={() => inCreaseCount()} />
          <p className="ps-1 text-secondary">{pd.count}</p>
          <IoIosArrowDown
            onClick={() => decreaseCount()}
            style={{ color: count === 1 ? "#ddd" : " " }}
          />
        </div>
        <div className="image-with-groceryName d-flex justify-content-start align-items-center">
          <div className="image">
            <img src={pd.image} alt="" />
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div className="groceryName " style={{ width: "135px" }}>
              <span className="text-primary">{pd.name}</span>
              <br />
              <span className="text-secondary " style={{ maxWidth: "100%" }}>
                {" "}
                ৳{pd.quantity}
              </span>
            </div>

            <div className="price d-flex justify-content-end align-items-center px-2 gap-3 ">
              <h6 className="text-secondary"> ৳ {pd.price}</h6>
              <ImCross onClick={() => dispatch(removeFromCart(pd.name))} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
