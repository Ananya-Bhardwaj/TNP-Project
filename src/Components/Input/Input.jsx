import React from 'react'
import './Input.css'

const Input = ({label, placeholder, type}) => {
  return (
    <>
    <div className="input-container">
        <input 
          placeholder={placeholder}
          type={type}
          className={label}
          />
        </div>
    </>
  )
}

export default Input