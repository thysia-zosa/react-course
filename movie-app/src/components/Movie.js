import styles from "./Movie.module.css";

const Movie = ({ title, releaseDate, openingText }) => {
  return (
    <li className={styles.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
