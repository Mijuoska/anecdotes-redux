import anecdoteService from '../services/anecdotes'

export const addVote = (anecdote) => {
  console.log(anecdote)
  const votedAnecdote = {...anecdote, votes: anecdote.votes + 1}
  return async (dispatch) => {
    console.log(votedAnecdote)
    const anecdote = await anecdoteService.updateAnecdote(votedAnecdote)
    dispatch(
      {
    type: 'VOTE',
    data: {
      id: anecdote.id
    }
  })
  }
  }


export const addAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
    type: 'NEW ANECDOTE',
    data: anecdote
  })
}
}


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
  dispatch({
    type: 'INIT_ANECDOTES',
    data: anecdotes
  })
}
}

export const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
  case 'VOTE': {
  const anecdoteToVote = state.find(anecdote => anecdote.id === action.data.id)
  const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
  const updatedAnecdotes = state.map(anecdote => anecdote.id !== votedAnecdote.id ? anecdote : votedAnecdote)
  return updatedAnecdotes.sort((a, b) => {
    if (a.votes > b.votes) {
      return -1
    } else if (a.votes < b.votes) {
      return 1
    } else {
      return 0
    }
  })
} case 'NEW ANECDOTE': {
    const newAnecdotes = [...state, action.data]
    return newAnecdotes.sort((a, b) => {
      if (a.votes > b.votes) {
        return -1
      } else if (a.votes < b.votes) {
        return 1
      } else {
        return 0
      }
    })
  }
  case 'INIT_ANECDOTES': {
    return action.data
  }
  default:
    return state
  }
}

export default anecdoteReducer 