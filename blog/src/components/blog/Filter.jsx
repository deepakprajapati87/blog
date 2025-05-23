import React from 'react';

const Filter = ({ categories, onSelectCategory }) => {
  return (
    <div className="mb-3">
      <select className="form-select" onChange={e => onSelectCategory(e.target.value)}>
        <option value="">सभी कैटेगरी</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
