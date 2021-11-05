import { useEffect, useState } from "react";
import api from "../services/api";
import { IProduct } from "../store/modules/cart/types";

function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => setCatalog(response.data));
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => {
        return (
          <article key={product.id}>
            <h3>{product.title}</h3>
            <span>{product.price} reais</span>{" "}
            <button type="button">Comprar</button>
          </article>
        );
      })}
    </main>
  );
}

export default Catalog;
