import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

  const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const createAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value;
        event.target.anecdote.value = ""
        props.addAnecdote(content)
        dispatch(setNotification(`You created new anecdote: '${content}'`, 5000))
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


  


  export default 
    connect(null, { addAnecdote }
    )
    (AnecdoteForm)