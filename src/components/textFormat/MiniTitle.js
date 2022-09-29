import React from 'react';
import './textFormat.css';


const MiniTitle = ({title, icon}) => {
    return (
        <h2 className='mini-title'>{icon}{title}</h2>
    )
}

export default MiniTitle