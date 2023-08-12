import './Tile.css';

function Tile(props) {
  return (
    <div className={props.className}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      {props.children}
      <p>{props.description}</p>
    </div>
  );
}

export default Tile;
