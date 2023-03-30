import React, { useRef, useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import useClickOutside from "../../hooks/useClickOutside";

function Menu({ links, img, alt }) {

  //Estadis iniciais
  const [items, setItems] = useState(links.map(() => ({ isOpen: false, isActive: false })));
  const dropdownRef = useRef(null);

  //Função do click do Link do NaMenu, onde ele ativa o estado proprio e desativa os outros estados dos outros Links
  const handleItemClick = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => ({
        isOpen: index === i ? !item.isOpen : false,
        isActive: index === i ? !item.isActive : false,
      }))
    );
  };

  //Clicar fora do componente, remove todos os estados de ativos
  const handleClickOutside = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isOpen: false,
        isActive: false,
      }))
    );
  };

  //Custom hook para fechar o dropdown ao clicar fora do componente do useref
  useClickOutside(dropdownRef, handleClickOutside);

  return (
    <nav className="nav__container">
      <img className="nav-img" src={img} alt={alt} />
      <div className="nav__links-wrapper" ref={dropdownRef}>
        {links.map((link, i) => (
          <ul className={`nav__links-container`} key={i}>
            <h1
              className={`nav__links-title ${
                items[i].isActive ? "activeNav" : "inactiveNav"
              }`}
              onClick={() => handleItemClick(i)}
            >
              {link.title}
              {items[i].isOpen === true ? (
                <IoMdArrowDropdown size={34} />
              ) : (
                <IoMdArrowDropup size={34} />
              )}
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