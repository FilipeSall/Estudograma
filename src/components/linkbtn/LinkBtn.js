import React from "react";
import "./linkbtn.css";
import { Link } from "react-router-dom";

function LinkBtn({ link, className, text, icon, handleClick, state }) {

  const displayIcon = icon ? <span className="icon">{icon}</span> : null;
  const activeClass = state ? 'active' : '';

  return (
    <Link to={link} className={`flex-row fit ${className} ${activeClass}`} onClick={handleClick}>
        {displayIcon}
      <div className={!activeClass ? 'text-container' : ''}>
        <p>{text}</p>
      </div>
    </Link>
  );
}

export default LinkBtn;
