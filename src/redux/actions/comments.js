import axios from "axios"

export const fetchComments = () => (dispatch) => {
    axios.get('https://my-json-server.typicode.com/farhadasadzade/frazex-test-app/comments').then(({data}) => {
        dispatch(setComments(data))
    })
}

const setComments = (comments) => ({
    type: 'SET_COMMENTS',
    payload: comments
})