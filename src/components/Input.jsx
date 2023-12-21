import "./Input.css";
import React from 'react'

const Input = ({input}) => {
  return (
    <div className="inputContainer">
        <div className="innerContainer">
          {input}
        </div>
    </div>
  )
}

export default Input;