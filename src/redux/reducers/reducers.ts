import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { groceryReducer } from './groceryReducer';

const reducers = combineReducers({
  carts: cartReducer,
  grocery: groceryReducer
});

export default reducers;
export type IRootState = ReturnType<typeof reducers>;
