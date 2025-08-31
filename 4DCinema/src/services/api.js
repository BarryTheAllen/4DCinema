import axios from 'axios';

const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2';
const API_KEY = '7625a024-f74b-4152-a74a-8a93d85107eb';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'X-API-KEY': API_KEY,
    'Content-Type': 'application/json',
  },
});

export const getTopMovies = (type = 'TOP_100_POPULAR_FILMS') => 
  api.get(`/films/top?type=${type}`);

export const getMoviesByTheme = (keyword) => 
  api.get(`/films?keyword=${encodeURIComponent(keyword)}`);

export const getSeries = () => 
  api.get('/films?type=TV_SERIES');

export const searchMovies = (query) => 
  api.get(`/films?keyword=${encodeURIComponent(query)}`);

export const getMovieById = (id) => 
  api.get(`/films/${id}`);