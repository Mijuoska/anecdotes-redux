import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'




const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if (state.filter == 'ALL') {
        return state.anecdotes
        } else {
            return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
        }
    })

    const dispatch = useDispatch()
     
    const voteAnecdote = (id) => {
        const anecdote = anecdotes.find(anecdote => anecdote.id == id)
         dispatch(addVote(anecdote))
         dispatch(setNotification(`You voted '${anecdote.content}'`, 5000))
     }
return (
 <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      </div>
      )
      }

    export default AnecdoteList