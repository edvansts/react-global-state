import { all, takeLatest } from "redux-saga/effects";

export function checkProductStock() {
  console.log("adicionado");
}

export default all([takeLatest("ADD_PRODUCT_TO_CART", checkProductStock)]);
