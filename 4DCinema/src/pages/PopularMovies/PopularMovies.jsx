import { useState, useEffect } from 'react';
import { getTopMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import './PopularMovies.css';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopMovies('TOP_100_POPULAR_FILMS')
      .then(response => {
        setMovies(response.data.films);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching popular movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="popular-movies">
      <h1>Топ 100 популярных фильмов</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default PopularMovies;