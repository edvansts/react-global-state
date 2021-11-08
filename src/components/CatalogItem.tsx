import React from "react";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface IProps {
  product: IProduct;
}

function CatalogItem({ product }: IProps) {
  const dispatch = useDispatch();

  function handleAddProductToCart() {
    dispatch(AddProductToCart(product));
  }

  return (
    <article>
      <h3>{product.title}</h3>
      <span>{product.price} reais</span>{" "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
}

export default CatalogItem;
