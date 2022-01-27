import { useState } from "react";
import { Modal } from "react-bootstrap";
import { BiRightArrow } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { MdArrowLeft } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/actionCreators/cartActions";
import { IGroceryItem } from "Types";
interface IProps {
  pd: IGroceryItem;
  decreaseCount: () => void;
  inCreaseCount: () => void;
  cartItem: IGroceryItem | undefined;
}

const GroceryShoppingDialog = ({
  pd,
  inCreaseCount,
  decreaseCount,
  cartItem,
}: IProps) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  const dispatch = useDispatch();
  return (
    <section>
      <button className="details me-2" onClick={() => handleShow()}>
        Details <BiRightArrow />
      </button>
      <Modal size="lg" show={show} centered onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <div className="container-fluid row dialog pb-5">
          <div className="col-md-6 image">
            <img className="img-fluid" src={pd.image} alt="" />
          </div>
          <div className="col-md-6 product-content">
            <h4>{pd.name}</h4>
            <span className="text-secondary">{pd.quantity}</span>
            <div className="d-flex justify-content-between align-items-center price">
              <h2>৳ {pd.price}</h2>{" "}
              <h4>
                <MdArrowLeft /> <span>100% OFF</span>
              </h4>
            </div>
            <div className="item-add-remove-content d-flex justify-content-between align-items-center">
              <div className="add-remove">
                {!cartItem ? (
                  <>
                    <button>
                      <FaMinus />
                    </button>{" "}
                    <h5> 0</h5>
                    <button onClick={() => dispatch(addToCart(pd))}>
                      <BsPlusLg />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => decreaseCount()}>
                      <FaMinus />
                    </button>{" "}
                    <h5> {pd.count}</h5>
                    <button onClick={() => inCreaseCount()}>
                      <BsPlusLg />
                    </button>
                  </>
                )}
              </div>
              <button className="buy" onClick={() => setShow(false)}>
                Buy Now
              </button>
            </div>
            <p style={{ textAlign: "justify", fontSize: "13px" }}>
              Green coconut or young coconut is a very popular fruit all over
              the world. Green coconut produces more water than the brown or
              mature coconut. It is a complete food rich in calories, vitamins,
              and minerals. One whole green coconut contains roughly 140
              calories, 28 grams of carbohydrates, 2 grams fiber, 3 grams fat,
              and 2 grams of protein. Coconut water is a very refreshing drink
              to beat tropical summer thirst. It is also a very good source of
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default GroceryShoppingDialog;
