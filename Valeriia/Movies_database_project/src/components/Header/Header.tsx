import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import "./Header.scss";

interface IHeaderProps {
  isLinkToShow: boolean;
}

const Header = ({ isLinkToShow }: IHeaderProps) => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Logo />
        {isLinkToShow && (
          <Link to="/" className="header__link">
            SEARCH
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
