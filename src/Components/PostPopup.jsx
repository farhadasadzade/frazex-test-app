import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPostComments } from '../redux/actions/posts';

import Comment from './Comment';

const PostPopup = ({setActive, postTitle, postId}) => {

  const dispatch = useDispatch()

  const isLoaded = useSelector(({posts}) => posts.isPostLoaded)
  const postComments = useSelector(({posts}) => posts.postComments)

  useEffect(() => {
    dispatch(fetchPostComments(postId))
  }, [dispatch, postId])

  return (
    <div className='popup'>
        <div className="popup__back"></div>
        <div className="popup__block">
            <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} />
            <h2>{postTitle}'s comments</h2>
            <div className="popup__content">
                {!isLoaded ? <div className="loader"></div> : 
                  postComments?.length > 0 ? 
                        <table>
                          <thead>
                            <tr>
                              <td>PostId</td>
                              <td>PostTitle</td>
                              <td>PostBody</td>
                            </tr>
                          </thead>
                          <tbody>
                            {postComments?.map((comment) => <Comment key={comment.id} {...comment} />)}
                          </tbody>
                        </table> 
                    : <p>This post dont have comment yet.</p>
                }
            </div>
        </div>
    </div>
  )
}

export default PostPopup