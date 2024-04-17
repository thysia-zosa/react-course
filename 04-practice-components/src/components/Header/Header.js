import Tile from "../UI/Tile";
import "./Header.css";

function Header({ imgSrc, imgAlt, title, description }) {
  return (
    <Tile
      className="header"
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      description={description}
    >
      <h1>{title}</h1>
    </Tile>
  );
}

export default Header;
