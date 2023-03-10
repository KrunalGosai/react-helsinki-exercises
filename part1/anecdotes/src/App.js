import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const [copy, setCopy] = useState({...points})
  const [maxInd, setMaxInd] = useState(0);

  const displayRandomAnecdotes = () => {
    let newIndex = getRandomInt(0,6)
    console.log("newIndex",newIndex)
    setSelected(newIndex);
  }
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const voteAnecdotes = () => {
    copy[selected] = copy[selected]+1;
    setCopy({...copy});
    console.log(copy);
    let copyValues = Object.values(copy);
    console.log("copyValues",copyValues)
    let ind = copyValues.indexOf(Math.max(...copyValues));
    console.log("max value",Math.max(...copyValues))
    setMaxInd(ind);
    console.log("maxInd",maxInd)
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {copy[selected]} Votes</p>
      <button onClick={voteAnecdotes}>Vote</button>
      <button onClick={displayRandomAnecdotes}>Next Anecdotes</button>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[maxInd]}</p>
      <p>has {copy[maxInd]} Votes</p>
    </div>
  )
}

export default App