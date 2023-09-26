import React from 'react';
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom';

const Hello = () => {
  return (
    <div>
      <p>Hello Word</p>
    </div>
  )
}

const App = () => {
 
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
