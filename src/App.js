import React, {createContext, useState} from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks'

export const ThemeContext = createContext()

export default function App() {
  console.log('Render App');
  const [theme, setTheme] = useState('red');
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      Counter
      <Counter initialCount = {0}/>
      CounterHooks
      <CounterHooks initialCount = {0}/>
      <button onClick={() => setTheme(prevTheme => {return prevTheme==='red'?'green':'red'})}>Toggle Theme</button>
      </ThemeContext.Provider>
  )
}
