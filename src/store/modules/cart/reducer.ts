import { Reducer } from "redux";
import { ICartReducer } from "./types";

const INITIAL_STATE: ICartReducer = {
    items: [],
  }

const cart: Reducer<ICartReducer> = () => {
  return INITIAL_STATE;
};

export default cart;
