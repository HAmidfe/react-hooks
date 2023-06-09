import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleTitleChange = (e) => {
    const title = e.target.value;
    onFilterChange({ title });
  };

  const handleRatingChange = (e) => {
    const rating = e.target.value;
    onFilterChange({ rating });
  };

  return (
    <div className="filter">
      <input type="text" placeholder="Filter by title" onChange={handleTitleChange} />
      <input type="number" min="1" max="10" placeholder="Filter by rating" onChange={handleRatingChange} />
    </div>
  );
};

export default Filter;

