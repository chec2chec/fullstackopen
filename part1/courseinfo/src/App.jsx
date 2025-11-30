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
      <Content
        name1={part1} size1={exercises1}
        name2={part2} size2={exercises2}
        name3={part3} size3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.name1} size={props.size1} />
      <Part name={props.name2} size={props.size2} />
      <Part name={props.name3} size={props.size3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.size}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

export default App