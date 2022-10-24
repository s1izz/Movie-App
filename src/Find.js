import React from "react";
import "./Find.css";
import Nav from "./Nav";
import SearchIcon from "@mui/icons-material/Search";

function Find() {
  return (
    <div className="find">
      <div className="background__overlay">
        <Nav
        logo__classname="find__logo"
        span__color__classname="find__color"
        movie__logo__text__classname="find__movie__logo--text"
        logo__text__classname="find__logo--text"
        nav__link__classname="find__nav--link"
        nav__link__primary__classname="find__nav__link--primary"
        />
        <h2 className="find__sub-title">Browse our Movies</h2>
        <div className="find__search--wrapper">
          <input type="text" placeholder="search..." className="find__search--input" />
          <button className="find__search--btn">
            <SearchIcon className="searchIcon" />
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Find;
