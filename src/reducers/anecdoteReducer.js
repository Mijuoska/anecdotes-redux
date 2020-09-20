const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export const addVote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id: id
    }
  }
}

export const addAnecdote = (content) => {
  return {
    type: 'NEW ANECDOTE',
    data: {
      content: content,
      id: getId(),
      votes: 0
    }
  }
}

export const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
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
  }
  return state
}

export default reducer 