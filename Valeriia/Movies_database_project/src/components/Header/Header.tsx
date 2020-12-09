import React from "react";
import Logo from "../Logo";
import { useHistory } from "react-router-dom";
import "./Header.scss";
import Button from "../Button";

interface IHeaderProps {
  isLinkToShow: boolean;
}

const Header = ({ isLinkToShow }: IHeaderProps) => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header__wrapper">
        <Logo />
        {isLinkToShow && (
          <Button
            buttonName="SEARCH"
            onClick={() => history.push("/")}
            className="header__link"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
