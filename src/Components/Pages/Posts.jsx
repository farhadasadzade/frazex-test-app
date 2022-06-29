import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchPosts } from '../../redux/actions/posts'

import Post from '../Post'

import ContentLoader from "react-content-loader"

const Posts = () => {
    const loadingBlocks = Array(10).fill(0).map((item, index) => <ContentLoader key={index}
    speed={2}
    width={900}
    height={82}
    viewBox="0 0 900 72"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <rect x="0" y="0" rx="20" ry="20" width="900" height="72" />
  </ContentLoader>)

    const dispatch = useDispatch()

    const posts = useSelector(({posts}) => posts.posts)
    const isLoaded = useSelector(({posts}) =>  posts.isLoaded)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

  return (
    <div className='main'>
        <div className="container">
            <div className="main__content">
                <div className="main__about">
                    <h2>Posts</h2>
                </div>
                {isLoaded ? 
                    posts.map((post) => <Post key={post.postId} {...post} />)
                    : loadingBlocks
                }
            </div>
        </div>
    </div>
  )
}

export default Posts