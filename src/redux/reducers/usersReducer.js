const initialState = {
    users: [],
    isLoaded: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USERS':
            return {
                users: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default usersReducer