import React, { useEffect, useState } from 'react';
import './SectionNotebook.css';

function SectionNotebook({ children }) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <section className="section__notebook-container">
            <div className="notebook">{children}</div>
            {visible && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    &#9650; Topo
                </button>
            )}
        </section>
    );
}

export default SectionNotebook;
