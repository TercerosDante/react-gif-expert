import React from 'react'
import PropTypes from 'prop-types';
import { GiftGridItem } from './GiftGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <div className="wrapper">
      <h3>{category}</h3>
      { loading && <p className="loading" >loading...</p> }
      <div className="card-container">
        {
          images.map((img) => {
            return (
              <GiftGridItem key={img.id} { ...img } />
            );
          })
        }
      </div>
    </div>
  )
}

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired
};
