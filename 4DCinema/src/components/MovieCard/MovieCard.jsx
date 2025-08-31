import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.kinopoiskId || movie.filmId}`, { 
      state: { movie } 
    });
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img
        src={movie.posterUrlPreview}
        alt={movie.nameRu || movie.nameEn}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.nameRu || movie.nameEn}</h3>
        <p className="movie-year">{movie.year}</p>
        <p className="movie-rating">⭐ {movie.ratingKinopoisk || movie.ratingImdb || 'N/A'}</p>
      </div>
    </div>
  );
};

export default MovieCard;