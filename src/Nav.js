import React from "react";
import "./Nav.css";
import logo from "./assets/logo.png";

function Nav({logo__classname, movie__logo__text__classname,logo__text__classname, span__color__classname, nav__link__classname, nav__link__primary__classname}) {
  return (
    <div className="nav">
      <a href="/">
        <div className="nav__left">
          <figure className="img__wrapper">
            <img className={logo__classname} src={logo} alt="" />
          </figure>
          <div className={logo__text__classname}>
            <span className={movie__logo__text__classname}>Movie</span><span className={span__color__classname}>Favs</span>
          </div>
        </div>
      </a>
      <div className="nav__right">
        <a href="/" className={nav__link__classname}>Home</a>
        <a href="/searchPage" className={nav__link__classname}>Find a Movie</a>
        <a href="" className={nav__link__primary__classname}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Nav;
