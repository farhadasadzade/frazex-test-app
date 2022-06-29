import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchUsers } from '../../redux/actions/users'

import User from '../User'

import ContentLoader from "react-content-loader"

import ReactPaginate from 'react-paginate';


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

    
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='main'>
        <div className="container">
            <div className="main__content">
                <div className="main__about">
                    <h2>Users</h2>
                </div>
                {isLoaded ? 
                    currentItems.map((user) => <User key={user.userId} {...user} />)
                    : loadingBlocks
                }
                <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName='page-num'
              previousLinkClassName='page-num'
              nextLinkClassName='page-num'
              activeLinkClassName='active'
            />
            </div>
        </div>
    </div>
  )
}

export default Users