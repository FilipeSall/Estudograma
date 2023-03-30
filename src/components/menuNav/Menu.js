import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function Menu({ links, img, alt }) {
  const [items, setItems] = useState(links.map(() => ({ isOpen: false, isActive: false })));

  const handleItemClick = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => ({
        isOpen: index === i ? !item.isOpen : false,
        isActive: index === i ? !item.isActive : false,
      }))
    );
  };

  return (
    <nav className="nav__container">
      <img className='nav-img' src={img} alt={alt} />
      <div className="nav__links-wrapper">
        {links.map((link, i) => (
          <ul
            className={`nav__links-container`}
            key={i}
          >
            <h1
              className={`nav__links-title ${items[i].isActive ? 'activeNav' : 'inactiveNav'}`}
              onClick={() => handleItemClick(i)}
            >
              {link.title}{items[i].isOpen === true ? <IoMdArrowDropup /> :<IoMdArrowDropdown /> }
            </h1>
            {items[i].isOpen &&
              link.dropdownItems.map((item, j) => (
                <Link className="nav__links-item" key={j} to={item.href}>
                  {item.icon}
                  {item.text}
                </Link>
              ))}
          </ul>
        ))}
      </div>
    </nav>
  );
}

export default Menu;