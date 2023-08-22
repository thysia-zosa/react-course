import Movie from './Movie';
import styles from './MoviesList.module.css';

const MovieList = ({movies}) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
