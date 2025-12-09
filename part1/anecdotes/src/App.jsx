import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialVotes = {};
  anecdotes.forEach((a, i) => {
    initialVotes[i] = 0;
  });

  const getRandom = () => {
    return Math.floor(Math.random() * anecdotes.length);
  }

  const random = getRandom();

  const [selected, setSelected] = useState(random)
  const [votes, setVotes] = useState(initialVotes)

  const handleVoteClick = () => {
    const copy = { ...votes }
    copy[selected] += 1
    setVotes(copy)
  }

  const handleNextAnecdoteClick = () => {
    setSelected(selected < anecdotes.length - 1 ? selected + 1 : 0)
  }

  return (
    <div>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}/>
      <Button text="vote" onClick={handleVoteClick}/>
      <Button text="next anecdote" onClick={handleNextAnecdoteClick}/>
    </div>
  )
}

const Anecdote = ({text, votes}) => {
  return (
    <div>
      <div>{text}</div>
      <div>has {votes} votes</div>
    </div>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default App
