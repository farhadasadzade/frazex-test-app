const initialState = {
    users: [],
    isLoaded: false,
    isUserLoaded: false,
    userPosts: [],
    userCounts: 0
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USERS':
            return {
                users: action.payload,
                isLoaded: true,
                userCounts: action.payload.length
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        case 'SET_USER_LOADED':
            return {
                ...state,
                isUserLoaded: action.payload
            }
        case 'SET_USER_POSTS':
            return {
                ...state,
                userPosts: action.payload,
                isUserLoaded: true
            }
        default:
            return {
                ...state
            }
    }
}

export default usersReducer