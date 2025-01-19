import React from 'react'
import './Button.css'

const Button = ({buttonText, handleClick, backgroundColor='blue', textColor='white'}) => {
  return (
    <button
    className='btn'
    onClick={handleClick}
    style={{'backgroundColor': backgroundColor, 'color': textColor}}
    >
        {buttonText}
    </button>
  )
}

export default Button