import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import TopMovies from './pages/TopMovies/TopMovies';
import PopularMovies from './pages/PopularMovies/PopularMovies';
import BestMovies from './pages/BestMovies/BestMovies';
import CategoryMovies from './pages/CategoryMovies/CategoryMovies';
import Series from './pages/Series/Series';
import SearchResults from './pages/SearchResults/SearchResults';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top" element={<TopMovies />} />
            <Route path="/popular" element={<PopularMovies />} />
            <Route path="/best" element={<BestMovies />} />
            <Route path="/category/:category" element={<CategoryMovies />} />
            <Route path="/serials" element={<Series />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;