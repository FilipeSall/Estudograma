import React, { useState } from 'react';
import './HeaderNotebook.css';
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { Link, useLocation } from 'react-router-dom';

function HeaderNotebook({ img, alt, folders }) {

  const [openedFolderIndex, setOpenedFolderIndex] = useState(null);
  const location = useLocation();

  const handleFolderClick = (index) => {
    if (openedFolderIndex === index) {
      setOpenedFolderIndex(null);
    } else {
      setOpenedFolderIndex(index);
    }
  }

  return (
    <header className="header__notebook-container section-notebook-anime">
      <div className="icon__header-notebook">
        <img src={img} alt={alt} />
      </div>
      {folders ? (
        <ul className='folder__container'>
          {folders.map((folder, i) => (
            <li key={i}>
              <div onClick={() => handleFolderClick(i)}>
              <Link className="folder" to={folder.path}>
                  {location.pathname.includes(folder.path) ? (
                    <FcOpenedFolder size={38} />
                  ) : (
                    <FcFolder size={38} />
                  )}
                  {folder.title}
                </Link>
              </div>
              {openedFolderIndex === i && (
                <ul>
                  {folder.subfolders.map((subPast, j) => (
                    <li key={j} className='subfolder'>
                      <a href={subPast.path}>{subPast.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <h1>Sem pastas no momento</h1>
      )}
    </header>
  )
}

export default HeaderNotebook
