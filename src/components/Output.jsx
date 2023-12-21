import "./Output.css";
import React from 'react'

const Output = ({output}) => {
  return (
    <div className="outputContainer">
        <div className="innerOutputContainer">
          {output}
        </div>
    </div>
  )
}

export default Output;