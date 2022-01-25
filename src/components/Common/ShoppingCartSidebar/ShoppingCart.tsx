import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IGroceryItem } from "Types";

interface IProps {
  pd: IGroceryItem;
}

const ShoppingCart = ({ pd }: IProps) => {
  return (
    <section className="grocery-section">
      <div className="groceryItem d-flex justify-content-start align-items-end">
        <div className="button-with-quantity ">
          <IoIosArrowUp />
          <p>1</p>
          <IoIosArrowDown />
        </div>
        <div className="image-with-groceryName d-flex justify-content-start align-items-center">
          <div className="image">
            <img src={pd.image} alt="" />
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div className="groceryName">
              <span className="text-primary">{pd.name}</span>
              <br />
              <span className="text-secondary "> ৳{pd.quantity}</span>
            </div>

            <div className="price d-flex justify-content-end align-items-center">
              <h5> ৳ {pd.price}</h5>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
