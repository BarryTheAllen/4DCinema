import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.kinopoiskId} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;