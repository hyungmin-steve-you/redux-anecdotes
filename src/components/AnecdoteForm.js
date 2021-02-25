import React from 'react'
import { addAnecdoteFor } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { addNotification, removeNotification } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.addAnecdoteInput.value
    event.target.addAnecdoteInput.value = ''
    dispatch(addAnecdoteFor(anecdote))
    dispatch(addNotification(anecdote))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="addAnecdoteInput" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm