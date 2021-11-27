import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((prev) => {
      if (inputValue.trim().length && !prev.includes(inputValue)) {
        const newVal = [inputValue, ...prev];
        setInputValue('');
        return newVal;
      }
      return prev;
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="add-category-input"
        type="text"
        placeholder="Add category"
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

