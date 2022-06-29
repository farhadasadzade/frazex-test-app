const initialState = {
    comments: [],
}

const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_COMMENTS':
            return {
                comments: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default commentsReducer