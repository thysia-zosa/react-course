import Tile from "../UI/Tile";
import "./Header.css";

function Header({ imgSrc, imgAlt, title, description }) {
  return (
    <header>
      <img src={imgSrc} alt={imgAlt} />
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export default Header;
