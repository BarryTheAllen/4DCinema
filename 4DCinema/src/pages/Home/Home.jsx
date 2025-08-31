import { useState, useEffect } from 'react';
import { getTopMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopMovies('TOP_100_POPULAR_FILMS')
      .then(response => {
        setMovies(response.data.films);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="home">
      <h1>Добро пожаловать в 4D Cinema</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;