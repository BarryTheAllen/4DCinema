import { useLocation } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return <div className="no-results">Фильм не найден</div>;
  }

  return (
    <div className="search-results-page">
      <h1>Результаты поиска</h1>
      <div className="movie-container">
        <MovieCard movie={movie} />
      </div>
    </div>
  );
};

export default SearchResults;