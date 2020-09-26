import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { displayVote, clearMessage } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if (state.filter == 'ALL') {
        return state.anecdotes
        } else {
            return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        }
    })
    const dispatch = useDispatch()
     
    const voteAnecdote = (id) => {
         dispatch(addVote(id))
         const anecdote = anecdotes.find(anecdote => anecdote.id == id)
         dispatch(displayVote(anecdote.content))
         setTimeout(()=> {
             dispatch(clearMessage())
        }, 5000)
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