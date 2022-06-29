import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchPosts } from '../../redux/actions/posts'

import Post from '../Post'

import ContentLoader from "react-content-loader"

import ReactPaginate from 'react-paginate';

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
                {isLoaded ? 
                    currentItems.map((post) => <Post key={post.postId} {...post} />)
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

export default Posts