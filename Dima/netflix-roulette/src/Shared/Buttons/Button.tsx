import React from 'react'

interface IButton {
  buttonContent: string
  active?: string
  buttonHandler?: () => void
} 

export default function ( { buttonContent, buttonHandler, active }: IButton ) {
  let activeSerchButton
  if(buttonContent === 'Title' && active === 'Title') {
    activeSerchButton = 'button-active'
  } else if(buttonContent === 'Genre' && active === 'Genre') {
    activeSerchButton = 'button-active'
  } else if(buttonContent === 'relise date' && active === 'relise date'){
    activeSerchButton = 'button-active'
  } else if(buttonContent === 'raiting' && active === 'raiting'){
    activeSerchButton = 'button-active'
  } else if(buttonContent === 'Search'){
    activeSerchButton = 'button-active'
  }

  return (
    <button
      className={ activeSerchButton }
      onClick={ buttonHandler }
    >{ buttonContent }</button>
  )
}
