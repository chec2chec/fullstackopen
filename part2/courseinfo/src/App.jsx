const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} name={part.name} size={part.exercises} />
      )}
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

const Total = ({parts}) => {
  const total = 
    parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  )
}

export default App