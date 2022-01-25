import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";

const reducers = combineReducers({
  carts: cartReducer,
});

export default reducers;
export type IRootState = ReturnType<typeof reducers>;
