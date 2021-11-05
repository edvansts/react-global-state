import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../services/api";
import { AddProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

function Catalog() {
  const dispatch = useDispatch();

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => setCatalog(response.data));
  }, []);

  function handleAddProductToCart(product: IProduct) {
    dispatch(AddProductToCart(product));
  }

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => {
        return (
          <article key={product.id}>
            <h3>{product.title}</h3>
            <span>{product.price} reais</span>{" "}
            <button
              type="button"
              onClick={() => handleAddProductToCart(product)}
            >
              Comprar
            </button>
          </article>
        );
      })}
    </main>
  );
}

export default Catalog;
