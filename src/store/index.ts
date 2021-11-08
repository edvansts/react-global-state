import { createStore } from "redux";
import { ICartReducer } from "./modules/cart/types";
import RootReducer from "./modules/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IState {
  cart: ICartReducer;
}

const store = createStore(RootReducer, composeWithDevTools());

export default store;
