import React, {useState, useContext}  from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({initialCount}) {
  console.log('Render Counter Hooks');

  const [state, setState] = useState({count: initialCount})
  const theme = useContext(ThemeContext)

  return (
    <div>
     <button style={theme} onClick={() => setState({count: state.count - 1})}>-</button>
     <span>{state.count}</span>
     <button style={theme} onClick={() => setState(prevState => {return {count: prevState.count + 1}})}>+</button>
    </div>
  )
} 
