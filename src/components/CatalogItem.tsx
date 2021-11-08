import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { AddProductToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface IProps {
  product: IProduct;
}

function CatalogItem({ product }: IProps) {
  const dispatch = useDispatch();

  const isLoading = useSelector<IState, boolean>((state) => {
    return state.cart.loadingAddCardProducts.includes(product.id);
  });

  const hasFailedAddStock = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockProducts.includes(product.id);
  });

  function handleAddProductToCart() {
    dispatch(AddProductToCartRequest(product));
  }

  return (
    <article>
      <h3>{product.title}</h3>
      <span>{product.price} reais</span>{" "}
      <button
        disabled={isLoading}
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>
      {hasFailedAddStock && (
        <span style={{ color: "red" }}>Falha ao adicionar produto</span>
      )}
      {isLoading && <strong>Loading...</strong>}
    </article>
  );
}

export default CatalogItem;
