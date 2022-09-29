import React from 'react';
import './textFormat.css';

const Image = ({src, alt}) => {
  return (
    <img src={src} alt={alt} className='image' />
  )
}

export default Image