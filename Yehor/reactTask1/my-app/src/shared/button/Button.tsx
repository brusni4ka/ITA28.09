import React from 'react';
import './Button.css';

interface IContentProps {
    content: String
}

function Button({ content }: IContentProps) {
    return <button>{content}</button>
}

export default Button;