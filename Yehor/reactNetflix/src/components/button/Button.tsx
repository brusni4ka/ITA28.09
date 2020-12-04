import React from "react";
import "./Button.css";

interface IContentProps {
  content: string;
  styleClass?: string;
  handler?(): void;
}

function Button({ content, styleClass, handler }: IContentProps) {
  return (
    <button onClick={handler} className={styleClass}>
      {content}{" "}
    </button>
  );
}

export default Button;
