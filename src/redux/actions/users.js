import axios from "axios"

export const fetchUsers = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get('https://my-json-server.typicode.com/farhadasadzade/frazex-test-app/users').then(({data}) => {
        dispatch(setUsers(data))
    })
}

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})

export const setUserLoaded = val => ({
    type: 'SET_USER_LOADED',
    payload: val
})

const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users
})

const setUserPosts = (posts) => ({
    type: 'SET_USER_POSTS',
    payload: posts
})

export const fetchUserPosts = (userId) => (dispatch) => {
    dispatch(setUserLoaded(false))
    axios.get(`https://my-json-server.typicode.com/farhadasadzade/frazex-test-app/users/${userId}/posts`)
        .then(({data}) => {
            dispatch(setUserPosts(data))
        })
}