import React from 'react';
import './SectionNotebook.css';

function SectionNotebook({ children }) {
    return (
        <section className="section__notebook-container">
            <div className="notebook">
                {children}
            </div>
        </section>
    );
}

export default SectionNotebook;
