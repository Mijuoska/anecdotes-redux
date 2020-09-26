export const setNotification = (message, timeout) => {
    return async dispatch => {
        dispatch(
            {type: 'SET',
        content: message}
        )
        setTimeout(() => {
            dispatch({type: 'CLEAR', content: ''})
            
            }, timeout)
    }
} 


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