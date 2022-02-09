import { ActionType } from "redux/actionsTypes";
import { IGroceryItem } from "./../../Types";

interface addToGroceryAction {
  type: ActionType.ADD_TO_GROCERY;
  payLoad: IGroceryItem;
}


interface clearGroceryFromAction {
  type: ActionType.CLEAR_GROCERY;
}

export type GroceryAction =
  | addToGroceryAction
  | clearGroceryFromAction

