import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  restartCart,
} from "redux/actionCreators/cartActions";
import { IRootState } from "redux/reducers/reducers";
import { IGroceryItem } from "Types";
interface IProps {
  pd: IGroceryItem;
}

const GroceryShoppingCard = ({ pd }: IProps) => {
  const { image, name, price, quantity } = pd;
  const dispatch = useDispatch();
  const { cart } = useSelector((state: IRootState) => state.carts);
  const cartItem = cart.find((cartId) => cartId.price === price);

  let increaseQuantity = cart.find((product) => product.price === price);
  const inCreaseCount = () => {
    if (increaseQuantity) {
      increaseQuantity.count += 1;
      dispatch(restartCart());
      console.log("iiiii", increaseQuantity);
    }
  };
  const decreaseCount = () => {
    if (increaseQuantity) {
      if (increaseQuantity.count > 1) {
        increaseQuantity.count -= 1;
        dispatch(restartCart());
      } else {
        dispatch(removeFromCart(name));
      }
    }
  };

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 text-center mb-5  ">
        <Card className="h-100 ">
          <Card.Body className="grocery-shopping-card">
            <div className="grocery_body">
              <h1>Add to Shopping Bag</h1>
              <button onClick={() => inCreaseCount()}>+</button>
              <br />
              <h5>{pd.count * pd.price}</h5>
              <button onClick={() => decreaseCount()}>-</button> <br />
              <button>
                Details <BiRightArrow />
              </button>
            </div>
            <div className="grocery-card">
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
            </div>
          </Card.Body>

          {!cartItem && (
            <button
              className="add-to-card-button "
              onClick={() => dispatch(addToCart(pd))}
            >
              <FaShoppingCart /> Add to beg
            </button>
          )}

          {cartItem && (
            <button className="added-to-card-button d-flex justify-content-between align-items-center gap-5 ">
              <button onClick={() => decreaseCount()}>
                <AiOutlineMinus />
              </button>

              <span onClick={() => inCreaseCount()}>
                {pd.count} Added to beg
              </span>
              <button onClick={() => inCreaseCount()}>
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
