import axios from "axios"

export const fetchPosts = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get('https://my-json-server.typicode.com/farhadasadzade/frazex-test-app/posts').then(({data}) => {
        dispatch(setPosts(data))
    })
}

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})

export const setPostLoaded = val => ({
    type: 'SET_POST_LOADED',
    payload: val
})

const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
})

const setPostComments = (posts) => ({
    type: 'SET_POST_COMMENTS',
    payload: posts
})

export const fetchPostComments = (postId) => (dispatch) => {
    dispatch(setPostLoaded(false))
    axios.get(`https://my-json-server.typicode.com/farhadasadzade/frazex-test-app/posts/${postId}/comments`)
        .then(({data}) => {
            dispatch(setPostComments(data))
        })
}