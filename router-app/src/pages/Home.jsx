import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
        {/* NOT: Go to <a href="/products">the list of products</a>. */}
      </p>
    </>
  );
};

export default HomePage;
