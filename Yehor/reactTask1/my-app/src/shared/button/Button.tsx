import React from 'react';
import './Button.css';

interface IContentProps {
    content: String
    handler(): void
}

function Button({ content, handler }: IContentProps) {
    return <button onClick={handler}>{content}</button>
}

export default Button;