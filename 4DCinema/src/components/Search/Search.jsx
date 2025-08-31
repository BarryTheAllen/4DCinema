import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import './Search.css';

const Search = () => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);
    
    return () => clearTimeout(handler);
  }, [value]);

  useEffect(() => {
    if (debouncedValue.trim()) {
      searchMovies(debouncedValue)
        .then(response => {
          setResults(response.data.items.slice(0, 5));
        })
        .catch(error => {
          console.error('Search error:', error);
          setResults([]);
        });
    } else {
      setResults([]);
    }
  }, [debouncedValue]);

  const handleMovieClick = (movie) => {
    setValue('');
    setResults([]);
    navigate(`/movie/${movie.kinopoiskId || movie.filmId}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск фильмов..."
        className="search-input"
      />
      
      {results.length > 0 && (
        <div className="search-results">
          {results.map(movie => (
            <div
              key={movie.kinopoiskId || movie.filmId}
              className="search-result-item"
              onClick={() => handleMovieClick(movie)}
            >
              {movie.nameRu || movie.nameEn}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;