import React from 'react';
import './textFormat.css';

const Title = ({title, id}) => {
  return (
    <h1 className='titleSection' id={id}> {title} </h1>
  )
}

export default Title