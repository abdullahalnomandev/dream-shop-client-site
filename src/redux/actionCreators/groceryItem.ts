import { ActionType } from "redux/actionsTypes";
import { IGroceryItem } from "../../Types";

export const addToGrocery = (payLoad: IGroceryItem) => {

  return { type: ActionType.ADD_TO_GROCERY, payLoad };
};

export const clearGrocery = () => {
  return { type: ActionType.CLEAR_GROCERY };
};


