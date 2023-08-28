import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>My Products</h1>
      <p>
        Go <Link to="/">back</Link>.
      </p>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            {/* absolute: */}
            {/* <Link to={`/products/${product.id}`}>{product.title}</Link> */}
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
