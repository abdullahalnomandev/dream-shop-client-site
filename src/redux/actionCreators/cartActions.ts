import { ActionType } from "redux/actionsTypes";
import { IGroceryItem } from "../../Types";

export const addToCart = (payLoad: IGroceryItem) => {
  return { type: ActionType.ADD_TO_CART, payLoad };
};

export const removeFromCart = (payLoad: String) => {
  return { type: ActionType.REMOVE_FROM_CART, payLoad };
};

export const clearCart = () => {
  return { type: ActionType.CLEAR_CART };
};
