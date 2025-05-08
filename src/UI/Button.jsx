import React from 'react'
import "../UI/Button.css"

function Button({color, size, children, handleSubmit,type, handleDelete}) {
    const classNames = `btn btn-${color} btn-${size}`
  return (
    <button className={classNames} onSubmit={handleSubmit} type={type} onClick={handleDelete}>
      {children}
    </button>
  )
}
export default Button;