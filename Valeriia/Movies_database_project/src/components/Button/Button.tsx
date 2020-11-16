import React from "react";
import "./Button.scss";

interface IButtonProps {
  buttonName: string;
  onClick(): void;
  className?: string;
}

const Button = ({ buttonName, onClick, className }: IButtonProps) => (
  <button
    onClick={onClick}
    type="button"
    className={`button ${className ? className : ""}`}
  >
    {buttonName}
  </button>
);

export default Button;
