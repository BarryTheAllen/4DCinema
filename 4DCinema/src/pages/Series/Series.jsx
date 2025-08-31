import React, { useState, useEffect } from 'react';
import { getSeries } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import './Series.css';

const Series = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSeries()
      .then(response => {
        setMovies(response.data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching series:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="series">
      <h1>Все сериалы</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Series;