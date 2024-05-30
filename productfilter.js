import React from 'react';

const productfilter = ({ filters, onFilterChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={filters.name}
        onChange={e => onFilterChange('name', e.target.value)}
      />
      {/* Add more filters as needed */}
    </div>
  );
};

export default productfilter;
