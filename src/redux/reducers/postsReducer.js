const initialState = {
    posts: [],
    isLoaded: false,
    isPostLoaded: false,
    postComments: [],
    postsCounts: 0
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_POSTS':
            return {
                posts: action.payload,
                isLoaded: true,
                postsCounts: action.payload.length
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        case 'SET_POST_LOADED':
            return {
                ...state,
                isPostLoaded: action.payload
            }
        case 'SET_POST_COMMENTS':
            return {
                ...state,
                postComments: action.payload,
                isPostLoaded: true
            }
        default:
            return {
                ...state
            }
    }
}

export default postsReducer