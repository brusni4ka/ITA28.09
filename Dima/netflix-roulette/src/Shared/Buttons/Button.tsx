import React from 'react';
import IButton from '../../interfaces/IButton'

export default function Button ({ buttonContent, buttonHandler, isActive }: IButton) {
  let activeSerchButton = isActive ? 'button-active' : 'button-default';

  return (
    <button className = { activeSerchButton } onClick = { buttonHandler }>
      { buttonContent }
    </button>
  );
};
