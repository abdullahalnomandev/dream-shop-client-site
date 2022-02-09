import { ActionType } from "redux/actionsTypes";
import { IGroceryItem } from "../../Types";
import { GroceryAction } from './../actions/cartActions copy';

interface state {
  grocery: IGroceryItem[];
}

const initialState = {
  grocery: [],
};

export const groceryReducer = ( state: state = initialState,action: GroceryAction) => {
  switch (action.type) {
    case ActionType.ADD_TO_GROCERY: {
      return { ...state, grocery: [ action.payLoad] };
    }
    case ActionType.CLEAR_GROCERY: {
      return { ...state, grocery: [ ] };
    }

    default: {
      return state;
    }
  }
};
