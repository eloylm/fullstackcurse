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
      <p>{props.name}. Number of exercises {props.cant}</p>
    </div>
    
  )
}



const Content = (props) => {
  const part1 = props.name1
  const exercises1 = props.ex1
  const part2 = props.name2
  const exercises2 = props.ex2
  const part3 = props.name3
  const exercises3 = props.ex3
  
  return (
    <>
    <Part name={part1} cant={exercises1}/>
    <Part name={part2} cant={exercises2}/>
    <Part name={part3} cant={exercises3}/>
   </>
   )
}
const Total = (props) => {
  
  return (
    <>
    {props.ex1+props.ex2+props.ex3}
    </>         
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
     <Header name={course} />
      <p><Content name1={part1} name2={part2} name3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}/> </p>
      <p>Total of exercises: <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/></p>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
