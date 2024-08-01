import React from 'react';
import './Filter.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="Filter">
      <label htmlFor="filter"></label>
      <select 
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">완료😀</option>
        <option value="active">아직안함😥</option>
      </select>
    </div>
  );
};

export default Filter;