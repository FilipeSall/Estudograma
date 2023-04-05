import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import useClickOutside from '../../hooks/useClickOutside.js';
import './navlinks.css'

function NavLinks({ links }) {
    const [items, setItems] = useState(links.map(() => ({ isOpen: false, isActive: false })));
    const dropdownRef = useRef(null);

    const handleItemClick = (index) => {
        setItems((prevItems) =>
            prevItems.map((item, i) => ({
                isOpen: index === i ? !item.isOpen : false,
                isActive: index === i ? !item.isActive : false,
            }))
        );
    };

    const handleClickOutside = () => {
        setItems((prevItems) =>
            prevItems.map((item) => ({
                ...item,
                isOpen: false,
                isActive: false,
            }))
        );
    };

    useClickOutside(dropdownRef, handleClickOutside);

    return (
        <div className="nav__links-wrapper" ref={dropdownRef}>
            {links.map((link, i) => (
                <ul className={`nav__links-container`} key={i}>
                    <h1
                        className={`nav__links-title ${items[i].isActive ? "activeNav" : "inactiveNav"
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
    );
}

export default NavLinks;
