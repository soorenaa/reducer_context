import { useContext, useState } from "react";

import ReactPaginate from "react-paginate";
import ImageBox from "../../components/imagebox/ImageBox";

import "./pagination.css";
import { AppContext } from "../../contexts/imageListContext";

const Pagination = ({ postPerPage }) => {

  const {post}=useContext(AppContext)


  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + postPerPage;

  const currentPosts = post.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(post.length / postPerPage);

  const handlePageClick = (e) => {
    const newOffset = e.selected * postPerPage;

    setItemOffset(newOffset);

    console.log(e.selected);
  };

  return (
    <>
      <ImageBox currentPostsPagination={currentPosts} />
      <ReactPaginate
        containerClassName="paginationbody"
        pageClassName="pagination"
        activeClassName="active"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel={"«"}
        nextLabel={"»"}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
