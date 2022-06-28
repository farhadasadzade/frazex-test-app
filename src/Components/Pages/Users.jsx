import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchUsers } from '../../redux/actions/users'

import User from '../User'

import ContentLoader from "react-content-loader"



const Users = () => {

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

    const users = useSelector(({users}) => users.users)
    const isLoaded = useSelector(({users}) => users.isLoaded)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

  return (
    <div className='main'>
        <div className="container">
            <div className="main__content">
                <div className="main__about">
                    <h2>Users</h2>
                    <h2>Posts</h2>
                </div>
                {isLoaded ? 
                    users.map((user) => <User {...user} />)
                    : loadingBlocks
                }
            </div>
        </div>
    </div>
  )
}

export default Users