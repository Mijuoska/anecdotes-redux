import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { displayCreated, clearMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


  const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value;
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(addAnecdote(newAnecdote))
        dispatch(displayCreated(newAnecdote.content))
        setTimeout(() => {
            dispatch(clearMessage())
        }, 5000)
  }


      return (
          <div>
           <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
      </div>
      )
  }

  export default AnecdoteForm