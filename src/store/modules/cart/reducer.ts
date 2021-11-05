import { Reducer } from "redux";
import { ICartReducer } from "./types";

const INITIAL_STATE: ICartReducer = {
  items: [],
};

const cart: Reducer<ICartReducer> = (state, action) => {
  switch(action.type) {
    default: return INITIAL_STATE
  }
};

export default cart;
