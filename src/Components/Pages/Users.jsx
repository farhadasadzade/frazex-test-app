import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchUsers } from '../../redux/actions/users'

import ReactPaginate from 'react-paginate';

import User from '../User';


const Users = () => {

    const dispatch = useDispatch()

    const users = useSelector(({users}) => users.users)

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
                <table>
                  <thead>
                    <tr>
                      <td>UserId</td>
                      <td>UserName</td>
                      <td>UserEmail</td>
                    </tr>
                  </thead>
                  <tbody>
                  { 
                    currentItems?.map((user) => <User key={user.userId}  {...user}/> )
                  }
                  </tbody>
                </table>
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