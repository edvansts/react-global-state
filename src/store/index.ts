import { createStore } from "redux";
import RootReducer from "./modules/RootReducer";

const store = createStore(RootReducer);

export default store;
