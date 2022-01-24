import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/actionCreators/cartActions";
import { IGroceryItem } from "Types";

interface IProps {
  pd: IGroceryItem;
}

const GroceryShoppingCard = ({ pd }: IProps) => {
  const { image, name, price, quantity } = pd;
  const [isClick, setIsClick] = useState(true);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-5 ">
        <Card className="h-100">
          <Card.Body>
            <Card.Img variant="top" src={image} />
            <p className="text-secondary">{name}</p>
            <span style={{ fontSize: "13px" }}>{quantity}</span>
            <h5 className="secondary">
              ৳ {price}{" "}
              <span
                className="text-secondary underline"
                style={{ textDecoration: "line-through", fontSize: "15px" }}
              >
                ৳49
              </span>
            </h5>
          </Card.Body>
          {isClick ? (
            <button
              className="add-to-card-button "
              onClick={() => dispatch(addToCart(pd))}
            >
              <FaShoppingCart /> Add to beg
            </button>
          ) : (
            <button className="added-to-card-button d-flex justify-content-between align-items-center gap-5 ">
              <button onClick={() => setCount(count - 1)}>
                <AiOutlineMinus />
              </button>
              <span>{count} in beg</span>
              <button onClick={() => setCount(count + 1)}>
                <AiOutlinePlus />
              </button>
            </button>
          )}
        </Card>
      </div>
    </>
  );
};

export default GroceryShoppingCard;
