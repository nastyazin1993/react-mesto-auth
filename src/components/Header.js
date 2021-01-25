import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn, email, signOut }) {
  const { pathname } = useLocation();
  const linkText = `${pathname === "/sign-in" ? "Регистрация" : "Войти"}`;
  const linkPath = `${pathname === "/sign-in" ? "/sign-up" : "/sign-in"}`;

  return (
    <header className="header">
      <div className="header__logo"></div>
      {loggedIn ? (
        <div className="header__info-desktop">
          <span>{email}</span>
          <button className="header__link" onClick={signOut}>
            Выйти
          </button>
        </div>
      ) : (
        <Link to={linkPath} className="button link header__link">
          {linkText}
        </Link>
      )}
    </header>
  );
}

export default Header;
