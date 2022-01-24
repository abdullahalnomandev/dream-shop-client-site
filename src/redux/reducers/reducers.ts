import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";

const reducers = combineReducers({
  carts: cartReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
