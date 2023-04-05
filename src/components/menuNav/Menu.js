import React from 'react';
import './Menu.css';
import './shortcuts.css';

function Menu({ shortcuts }) {

  return (
    <nav className="nav__container">
      <div className="links__nav-container">
          {shortcuts && (
            <>
              {shortcuts.map((shortcut, i) => (
                <div className={`shortcut__img-container ${shortcut.img}`} key={i}>
                  <a href={shortcut.href} target="__blank" className={`shortcut__container`}>
                    <h1>{shortcut.title}</h1>
                    <p className="shortcut-text">{shortcut.text}</p>
                  </a>
                </div>
              ))}
            </>
          )}
      </div>
    </nav>
  );
}

export default Menu;
