import { Reducer } from "redux";
import { ActionTypes, ICartReducer } from "./types";
import produce from "immer";

const INITIAL_STATE: ICartReducer = {
  items: [],
  failedStockProducts: [],
  loadingAddCardProducts: [],
};

const cart: Reducer<ICartReducer> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartRequest:
        const { product: requestProduct } = action.payload;

        if (!draft.loadingAddCardProducts.includes(requestProduct.id))
          draft.loadingAddCardProducts.push(requestProduct.id);

        break;
      case ActionTypes.addProductToCartSuccess:
        const { product: successProduct } = action.payload;

        const productIndex = draft.items.findIndex(
          (item) => item.product.id === successProduct.id
        );

        const loadingProductSuccessIndex =
          draft.loadingAddCardProducts.findIndex(
            (id) => id === successProduct.id
          );

        draft.loadingAddCardProducts.splice(loadingProductSuccessIndex, 1);

        if (productIndex >= 0) {
          draft.items[productIndex].quantity++;
        } else {
          draft.items.push({
            product: successProduct,
            quantity: 1,
          });
        }

        break;
      case ActionTypes.addProductToCartFailure:
        const { productId } = action.payload;

        const loadingProductFailureIndex =
          draft.loadingAddCardProducts.findIndex((id) => id === productId);

        draft.loadingAddCardProducts.splice(loadingProductFailureIndex, 1);

        if (!draft.failedStockProducts.includes(productId))
          draft.failedStockProducts.push(productId);

        break;
      default:
        return draft;
    }
  });
};

export default cart;
