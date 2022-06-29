import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/actions/posts'
import { fetchUsers } from '../../redux/actions/users'


const Home = () => {

    const dispatch = useDispatch()

    const userCounts = useSelector(({users}) => users.userCounts)
    const postCounts = useSelector(({posts}) => posts.postsCounts)

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchPosts())
    }, [dispatch])

  return (
    <div className='main'>
        <div className="container">
            <div className="main__content">
                <div className="main__about">
                    <div className="main__info">
                        Users registered: {userCounts}
                    </div>
                    <div className="main__info">
                        Posted tweets: {postCounts}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home