import React from 'react'
import './Button.css'
const Button = ({buttonName}) => {
  return (
    <div className='button'>
        <button>{buttonName}</button>
    </div>
  )
}

export default Button