import { ActionType } from "redux/actionsTypes";
import { IGroceryItem } from "./../../Types";

interface addToCartAction {
  type: ActionType.ADD_TO_CART;
  payLoad: IGroceryItem;
}

interface removeFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payLoad: String;
}

interface clearCartFromAction {
  type: ActionType.CLEAR_CART;
}
interface restartFromCart {
  type: ActionType.RESTART_FROM_CART;
}
export type cartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartFromAction
  | restartFromCart;
