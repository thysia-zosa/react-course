import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      {/* relative to the route definition (i.e. root) or path definition (last /) */}
      <p><Link to='..' relative="path">Back</Link></p>
    </>
  );
};

export default ProductDetailPage;
