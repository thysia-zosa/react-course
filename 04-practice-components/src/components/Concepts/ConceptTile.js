import Tile from "../UI/Tile";
import "./ConceptTile.css";

function ConceptTile({ image, title, description }) {
  return (
    <li>
      <Tile
        className="concept-tile"
        imgSrc={image}
        imgAlt={title}
        description={description}
      >
        <h2>{title}</h2>
      </Tile>
    </li>
  );
}

export default ConceptTile;
