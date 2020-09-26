export const displayVote = (anecdote) => {
    return {
        type: 'VOTED',
        content: anecdote
    }
}

export const displayCreated = (anecdote) => {
    return {
        type: 'CREATED',
        content: anecdote
    }
}

export const clearMessage = () => {
    return  {
        type: 'CLEAR',
        content: ''
    }
}

const notificationReducer = (state = "", action) => {
    switch(action.type) {
        case('VOTED'):
            return `You voted '${action.content}'`
         case('CREATED'):
            return `You created new anecdote: '${action.content}'`
        case('CLEAR'):
           return action.content
            
        default:
            return state

        } 

    }


export default notificationReducer