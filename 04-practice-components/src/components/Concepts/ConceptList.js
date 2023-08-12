import "./ConceptList.css";
import ConceptTile from "./ConceptTile";

function ConceptList({ concepts }) {
  return (
    <ul className="concept-list">
      {concepts.map((concept, index) => {
        return (
          <ConceptTile
            key={index}
            image={concept.image}
            title={concept.title}
            description={concept.description}
          />
        );
      })}
    </ul>
  );
}

export default ConceptList;
