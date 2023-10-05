import React from 'react';
import { createRoot } from 'react-dom/client';

const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <p>greetings created by <a href="https://github.com/eloylm">Icer00t</a></p>
    </>
  )
}

const App = () => {

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Santi" age={8 + 1}/>
      <Footer />
    </>
  )
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)

