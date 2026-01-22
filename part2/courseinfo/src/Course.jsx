export const Course = ({course}) => {
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
    <h2>{props.name}</h2>
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