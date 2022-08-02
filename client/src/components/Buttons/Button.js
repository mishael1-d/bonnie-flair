import React from 'react'
import './Button.css'

function Button({type, text}) {
  return (
    <button className={type === 'primary'? 'btn btn-primary':'btn btn-secondary'}>{text}</button>
  )
}

export default Button