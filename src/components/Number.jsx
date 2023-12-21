import "./Number.css";
import React from 'react'

const Number = ({ clickEventHandler }) => {
  return (
    <div className="numberContainer">
        <div className="btn_group">
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>C</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>(</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>)</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>AC</button>
        </div>
        <div className="btn_group">
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>7</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>8</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>9</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>+</button>
        </div>
        <div className="btn_group">
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>4</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>5</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>6</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>-</button>
        </div>
        <div className="btn_group">
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>1</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>2</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>3</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>*</button>
        </div>
        <div className="btn_group">
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>0</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>.</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>00</button>
          <button className="btn" onClick={(e)=> clickEventHandler(e.target.innerText)}>/</button>
        </div>
        <div className="btn_group">
          <button className="btn name">HELLO</button>
          <button className="btn calculat" onClick={(e)=> clickEventHandler(e.target.innerText)}>=</button>
        </div>
    </div>
  )
}

export default Number;