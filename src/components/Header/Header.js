import React, { useEffect, useState } from 'react';
import Clock from '../Clock/Clock';
import LinkBtn from '../linkbtn/LinkBtn';
import './header.css';
import { MdOutlineDesignServices, MdRemoveRedEye, MdSave } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";
import { useLocation } from 'react-router-dom';


function Header() {

  const location = useLocation();
  const [buttons, setButtons] = useState(() =>
    [
      {
        link: "/",
        text: "Início",
        icon: <SiCoffeescript />,
        className: "header-btn",
        state: location.pathname === "/",
      },
      {
        link: "/front-end",
        text: "Front-end",
        icon: <MdRemoveRedEye />,
        className: "header-btn",
        state: location.pathname === "/front-end",
      },
      {
        link: "/back-end",
        text: "Back-end",
        icon: <MdSave />,
        className: "header-btn",
        state: location.pathname === "/back-end",
      },
      {
        link: "/ui-ux",
        text: "UI/UX design",
        icon: <MdOutlineDesignServices />,
        className: "header-btn",
        state: location.pathname === "/ui-ux",
      },
    ]);

  useEffect(() => {
    setButtons((prevState) => {
      return prevState.map((button) => {
        return {
          ...button,
          state: button.link === location.pathname,
        };
      });
    });
  }, [location.pathname]);

  const handleClick = (index) => {
    setButtons((prevState) => {
      return prevState.map((button, i) => {
        if (i === index) {
          return {
            ...button,
            state: true,
          };
        } else {
          return {
            ...button,
            state: false,
          };
        }
      });
    });
  };

  return (
    <header className="header-container flex-row">
      <Clock />
      <div className="btn-container flex-row">
        {buttons.map((button, index) => (
          <LinkBtn
            key={index}
            link={button.link}
            className={button.className}
            text={button.text}
            icon={button.icon}
            handleClick={() => handleClick(index)}
            state={button.state}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;