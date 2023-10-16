import React from 'react';
import { Img } from './FeaturedMovieImageStyles';
import PropTypes from 'prop-types';

export default function renderHomeMainImage(props){
return <Img 
opacity={props.opacity}
src={props.image} 
alt="featured movie" 
/>
}

renderHomeMainImage.propTypes = {
    opacity: PropTypes.number,
    image: PropTypes.string.isRequired
  }