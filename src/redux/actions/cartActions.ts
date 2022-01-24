import { ActionType } from "redux/actionsTypes";
import { IGroceryItem } from "./../../Types";

export interface addToCartAction {
  type: ActionType.ADD_TO_CART;
  payLoad: IGroceryItem;
}
