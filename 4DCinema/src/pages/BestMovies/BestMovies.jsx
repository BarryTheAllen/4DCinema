import { useState, useEffect } from 'react';
import { getTopMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import './BestMovies.css';

const BestMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopMovies('TOP_250_BEST_FILMS')
      .then(response => {
        setMovies(response.data.films);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching best movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="best-movies">
      <h1>Топ 250 лучших фильмов</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default BestMovies;