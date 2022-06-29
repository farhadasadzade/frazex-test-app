import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import ReactPaginate from 'react-paginate';

import { fetchComments } from '../../redux/actions/comments'

import Comment from '../Comment'

const Comments = () => {

    const dispatch = useDispatch()

    const comments = useSelector(({comments}) => comments.comments)

    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

  
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(comments.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(comments.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, comments]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % comments.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='main'>
        <div className="container">
            <div className="main__content">
                <div className="main__about">
                    <h2>Comments</h2>
                </div>
                <table>
                  <thead>
                    <tr>
                      <td>CommentId</td>
                      <td>UserName</td>
                      <td>CommentBody</td>
                    </tr>
                  </thead>
                  <tbody>
                  { 
                    currentItems?.map((comment) => <Comment key={comment.id}  {...comment}/> )
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

export default Comments
