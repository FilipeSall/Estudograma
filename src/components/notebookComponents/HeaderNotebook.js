import React, { useState } from 'react';
import './HeaderNotebook.css';
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { Link } from 'react-router-dom';

function HeaderNotebook({ img, alt, folders }) {

  const [openedFolderIndex, setOpenedFolderIndex] = useState(null)

  const handleFolderClick = (index) => {
    if (openedFolderIndex === index) {
      setOpenedFolderIndex(null);
    } else {
      setOpenedFolderIndex(index);
    }
  }

  return (
    <header className='header__notebook-container'>
      <div className='icon__header-notebook'>
        <img src={img} alt={alt} />
      </div>
      <div className='header__notebook-folders'>
        {folders ? (
          <ul>
            {folders.map((folder, i) => (
              <li key={i} onClick={() => handleFolderClick(i)}>
                {openedFolderIndex === i ? <FcOpenedFolder /> : <FcFolder />}
                {folder.title}
                {openedFolderIndex === i && (
                  <ul>
                    {folder.subfolders.map((subPast, j) => (
                      <li key={j}>
                        <Link to={subPast.path}>{subPast.title}</Link>
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
      </div>
    </header>
  )
}

export default HeaderNotebook
