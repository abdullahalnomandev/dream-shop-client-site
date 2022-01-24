import { cartAction } from "redux/actions/cartActions";
import { ActionType } from "redux/actionsTypes";
import { IGroceryItem } from "./../../Types";

interface state {
  cart: IGroceryItem[];
}

const initialState = {
  cart: [],
};

export const cartReducer = (
  state: state = initialState,
  action: cartAction
) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART: {
      return { ...state, cart: [...state.cart, action.payLoad] };
    }

    default: {
      return state;
    }
  }
};
