const initialState = "ALL"

export const changeFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        filter: filter
    }
}

const filterReducer = (state = initialState, action) => {
    if (action.type == 'SET_FILTER') {
        return action.filter
    }
    return state
}

export default filterReducer