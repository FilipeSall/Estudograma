import React from 'react'

const WordStyle = ({ font, children }) => {
    return (
        <span className={`${font === 'bold' ? 'bold' : 'italic'}`}>{children}</span>
    )
}

export default WordStyle