import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTopMovies, getMoviesByTheme } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import { CATEGORIES } from '../../constants/categories';
import './CategoryMovies.css';

const CategoryMovies = () => {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');

    const categoryData = CATEGORIES.find(c => c.value === category);
    
    if (!categoryData) {
      setError('Категория не найдена');
      setLoading(false);
      return;
    }

    if (categoryData.type === 'top') {
      getTopMovies(categoryData.value)
        .then(response => {
          setMovies(response.data.films || []);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching top movies:', error);
          setError('Ошибка загрузки данных');
          setLoading(false);
        });
    } else if (categoryData.type === 'theme') {
      getMoviesByTheme(categoryData.value)
        .then(response => {
          setMovies(response.data.items || []);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching theme movies:', error);
          setError('Ошибка загрузки данных');
          setLoading(false);
        });
    }
  }, [category]);

  const categoryTitle = CATEGORIES.find(c => c.value === category)?.title || category;

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;
  if (movies.length === 0) return <div className="no-movies">Фильмы не найдены</div>;

  return (
    <div className="category-movies">
      <h1>{categoryTitle}</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default CategoryMovies;