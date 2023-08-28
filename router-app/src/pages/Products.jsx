import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <h1>My Products</h1>
      <p>
        Go <Link to="/">back</Link>.
      </p>
    </>
  );
};

export default ProductsPage;
