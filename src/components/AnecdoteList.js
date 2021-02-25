import React from 'react'
import { increaseVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { voteNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = useSelector(state => state.anecdote)
  const anecdotesSortedByHighestVote = anecdotes.sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = (id, content) => {
    dispatch(increaseVote(id))
    dispatch(voteNotification(content))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div>
      {anecdotesSortedByHighestVote.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList