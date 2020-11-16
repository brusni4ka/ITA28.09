import React from "react";
import "./Input.scss";

interface IInputProps {
  value: string;
  onChange(term: string): void;
  onKeyPress(e: React.SyntheticEvent): void;
}

const Input = ({ value, onChange, onKeyPress }: IInputProps) => (
  <input
    type="text"
    name="search-field"
    className="input"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyPress={(e) => onKeyPress(e)}
  ></input>
);

export default Input;
