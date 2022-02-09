import { Card } from "react-bootstrap";
import {
  AiFillMinusCircle,
  AiOutlineMinus,
  AiOutlinePlus
} from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  restartCart
} from "redux/actionCreators/cartActions";
import { IRootState } from "redux/reducers/reducers";
import { IGroceryItem } from "Types";
import GroceryShoppingDialog from "./GroceryShoppingDialog";

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
              <h4 className="mt-1">৳{pd.count * price}</h4>
              <h2>Add to Shopping Bag</h2>
              {!cartItem ? (
                <>
                  <BsFillPlusCircleFill
                    onClick={() => dispatch(addToCart(pd))}
                  />
                  <br />
                </>
              ) : (
                <>
                  <AiFillMinusCircle onClick={() => decreaseCount()} />
                  <span>{pd.count}</span>
                  <BsFillPlusCircleFill onClick={() => inCreaseCount()} />{" "}
                  <br />
                </>
              )}
              <GroceryShoppingDialog
                pd={pd}
                inCreaseCount={inCreaseCount}
                decreaseCount={decreaseCount}
                cartItem={cartItem}
              />
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
          {!cartItem ? (
            <>
              <button
                className="add-to-card-button mt-2"
                onClick={() => dispatch(addToCart(pd))}
              >
                <FaShoppingCart /> Add to beg
              </button>
            </>
          ) : (
            <>
              <button className="added-to-card-button d-flex justify-content-between align-items-center mt-2">
                <button onClick={() => decreaseCount()}>
                  <AiOutlineMinus />
                </button>
                <span onClick={() => inCreaseCount()}>
                  {pd.count} Added to beg{" "}
                </span>
                <button onClick={() => inCreaseCount()}>
                  <AiOutlinePlus />
                </button>
              </button>
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default GroceryShoppingCard;
