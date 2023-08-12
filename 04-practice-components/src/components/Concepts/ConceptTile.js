import Tile from "../UI/Tile";
import "./ConceptTile.css";

function ConceptTile({ image, title, description }) {
  return (
    <li className="concept-tile">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default ConceptTile;
