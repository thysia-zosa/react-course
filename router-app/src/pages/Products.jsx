import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <h1>My Products</h1>
      <p>
        Go <Link to="/">back</Link>.
      </p>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
};

export default ProductsPage;
