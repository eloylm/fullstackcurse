import React from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

const Header = (props) => {
  return (
    <>
    <h1>{props.name}</h1>
    </>
  )
}
const Part = (props) => { 
  return (
    <div>
      <p>Part1: {props.name}. Number of exercises{props.cant}</p>
    </div>
    
  )
}
 
const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
    <Part name={part1} cant={exercises1}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      {props.total}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
     <Header name={course} />
      <p><Content />      </p>
      <p>Total of exercises: <Total total={exercises1 + exercises2 + exercises3} /></p>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
