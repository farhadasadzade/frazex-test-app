import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPosts } from '../redux/actions/users';
import Post from './Post';

const UserPopup = ({setActive, userName, userId}) => {

    const dispatch = useDispatch()

    const userPosts = useSelector(({users}) => users.userPosts)
    const isLoaded = useSelector(({users}) => users.isUserLoaded)

    useEffect(() => {

        dispatch(fetchUserPosts(userId))

        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, [dispatch, userId])

  return (
    <div className='popup'>
        <div className="popup__back"></div>
        <div className="popup__block">
            <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} />
            <h2>{userName}'s posts</h2>
            <div className="popup__content">
                  {!isLoaded ? <div className="loader"></div> : 
                    userPosts?.length > 0 ? 
                        <table>
                          <thead>
                            <tr>
                              <td>PostId</td>
                              <td>PostTitle</td>
                              <td>PostBody</td>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              userPosts.map((post) => {
                                return <Post key={post.postId} {...post} />
                              })
                            }
                          </tbody>
                        </table>
                        : <p>This user dont have post yet.</p>
                  }
            </div>
        </div>
    </div>
  )
}

export default UserPopup