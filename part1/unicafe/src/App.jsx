import { useState } from 'react'

const Statistics = (props) => {
  return (
      <div>
        good {props.good}<br/>
        neutral {props.neutral}<br/>
        bad {props.bad}<br/>
        average {((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / (props.good + props.neutral + props.bad)}<br/>
        positive {(props.good / (props.good + props.neutral + props.bad)) * 100} %
      </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button handleClick={handleGoodClick} text="good"/>
        <Button handleClick={handleNeutralClick} text="neutral"/>
        <Button handleClick={handleBadClick} text="bad"/>
      </p>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default App
