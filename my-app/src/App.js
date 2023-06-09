import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieCard from './Movicard';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({ title: '', rating: '' });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    const { title, rating } = filters;
    const lowerCaseTitle = movie.title.toLowerCase();
    const lowerCaseFilterTitle = title.toLowerCase();

    return lowerCaseTitle.includes(lowerCaseFilterTitle) && movie.rating >= rating;
  });

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <h2>Add a new movie:</h2>
      <MovieCard onAddMovie={handleAddMovie} />
    </div>
  );
};

export default App;
