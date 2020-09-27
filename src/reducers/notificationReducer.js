    let timeoutId

export const setNotification = (message, timeout) => {
    return async dispatch => {
        dispatch(
            {type: 'SET',
        content: message}
        )
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
         timeoutId = setTimeout(() => {
            dispatch({type: 'CLEAR', content: ''})
            
            }, timeout)

    }
} 

// Notification is set --> timeout is set for clear message 

const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case('SET'):
            return action.content
        case('CLEAR'):
           return action.content
            
        default:
            return state

        } 

    }


export default notificationReducer