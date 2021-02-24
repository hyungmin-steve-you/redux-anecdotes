import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseVote, addAnecdoteFor } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const anecdotesSortedByHighestVote = anecdotes.sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()


  const vote = (id) => {
    dispatch(increaseVote(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.addAnecdoteInput.value
    event.target.addAnecdoteInput.value = ''
    dispatch(addAnecdoteFor(anecdote))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesSortedByHighestVote.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="addAnecdoteInput" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App