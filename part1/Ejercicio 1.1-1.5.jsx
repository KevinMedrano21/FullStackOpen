
const Header = (props) =>{
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )
};

const Part =(props)=>{

  return(
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props)=>{
  return(
    <div>
      <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props)=>{
  return(
    <div>
      <p>Number of exercises{props.sumexercises}</p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development';

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  const sumexercises = parts.reduce((sum, part) => sum + part.exercises, 0);


  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total sumexercises ={sumexercises} />
    </div>
  )
}

export default App
