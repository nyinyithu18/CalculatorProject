import './App.css';
import Input from './components/Input';
import Number from './components/Number';
import Output from './components/Output';
import { useState } from 'react';


function App() {

  const [ output, setOutput ] = useState(0);
  const [ input, setInput ] = useState(0);

  const clickEventHandler = (value) =>{

    if(value == 'C'){
      setOutput(0)
      setInput(0)
    }else if(value == '='){
      setOutput(eval(input))
      setInput(0)
    }else if(value == 'AC'){
      if(input != 0){
        input.length == 1 ? setInput(input) : setInput(input.slice(0, input.length - 1))
      }
    }else{
      input == 0 ? setInput(value) : setInput(input + value)
    }

  }

  return (
    <div className="container">
      <div className='containerFrame'>
        <h1 className='welcom'>Welcom To Calculator Project</h1>
        <Output output={output}/>
        <Input input={input}/>
        <Number clickEventHandler={clickEventHandler}/>
      </div>
    </div>
  );
}

export default App;
