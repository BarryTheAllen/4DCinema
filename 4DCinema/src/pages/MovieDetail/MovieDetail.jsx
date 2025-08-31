import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from '../../services/api';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieById(id)
      .then(response => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (!movie) return <div className="error">Фильм не найден</div>;

  return (
    <div className="movie-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Назад
      </button>
      
      <div className="movie-detail-content">
        <div className="movie-poster-large">
          <img
            src={movie.posterUrl}
            alt={movie.nameRu || movie.nameEn}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x600?text=No+Image';
            }}
          />
        </div>
        
        <div className="movie-info-detail">
          <h1>{movie.nameRu || movie.nameEn}</h1>
          <p className="movie-original-name">{movie.nameEn && movie.nameEn}</p>
          
          <div className="movie-meta">
            <div className="rating">
              <span className="rating-label">Рейтинг Кинопоиск:</span>
              <span className="rating-value">{movie.ratingKinopoisk || 'N/A'}</span>
            </div>
            
            <div className="rating">
              <span className="rating-label">Рейтинг IMDB:</span>
              <span className="rating-value">{movie.ratingImdb || 'N/A'}</span>
            </div>
            
            <div className="movie-year">
              <span>Год: </span>
              {movie.year}
            </div>
            
            <div className="movie-length">
              <span>Продолжительность: </span>
              {movie.filmLength} мин
            </div>
            
            <div className="movie-countries">
              <span>Страны: </span>
              {movie.countries?.map(c => c.country).join(', ')}
            </div>
            
            <div className="movie-genres">
              <span>Жанры: </span>
              {movie.genres?.map(g => g.genre).join(', ')}
            </div>
          </div>
          
          <div className="movie-description">
            <h3>Описание</h3>
            <p>{movie.description || 'Описание отсутствует'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;