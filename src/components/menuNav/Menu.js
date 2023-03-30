import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu({ links }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="nav__container">
      {links.map((link, i) => (
        <ul
          className="nav__links-container"
          key={i}
        >
          <h1
            className="nav__links-title"
            onClick={() => setActiveDropdown(activeDropdown === i ? false : i)}
          >
            {link.title}
          </h1>
          {activeDropdown === i &&
            link.dropdownItems.map((item, j) => (
              <Link className="nav__links-item" key={j} to={item.href}>
                {item.icon}
                {item.text}
              </Link>
            ))}
        </ul>
      ))}
    </nav>
  );
}

export default Menu;
