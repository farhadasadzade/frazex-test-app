import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchPosts } from '../../redux/actions/posts'

import Post from '../Post'

import ReactPaginate from 'react-paginate';

const Posts = () => {

    const dispatch = useDispatch()

    const posts = useSelector(({posts}) => posts.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, posts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='main'>
        <div className="container">
            <div className="main__content">
                <div className="main__about">
                    <h2>Posts</h2>
                </div>
                <table>
                  <thead>
                    <tr>
                      <td>PostId</td>
                      <td>PostTitle</td>
                      <td>PostBody</td>
                    </tr>
                  </thead>
                  <tbody>
                  {currentItems?.map((post) => <Post key={post.postId} {...post} />)}
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

export default Posts