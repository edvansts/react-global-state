import { useSelector } from "react-redux";

function Catalog() {
  const store = useSelector((state) => state);

  console.log(store);

  return (
    <div>
      <h1>Catalog</h1>
    </div>
  );
}

export default Catalog;
