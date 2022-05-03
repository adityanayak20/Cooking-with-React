import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks'

export default function App() {
  console.log('Render App');
  return (
    <>
      Counter
      <Counter initialCount = {0}/>
      CounterHooks
      <CounterHooks initialCount = {0}/>
    </>
  )
}

// <div>
//       Counter
//       <Counter initialCount = {0}/>
//       Counter Hooks
//       <CounterHooks initialCount = {0}/>
// </div>