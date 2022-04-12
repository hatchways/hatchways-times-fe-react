import React from "react";
import blogs from "../data/blogs.json";
import Pagination from "./Pagination";
import BlogPost from "./BlogPost";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const currentPaginationData = blogs.posts.slice(0, 15);

  const updateRowsPerPage = () => {};
  const updatePage = () => {};

  return (
    <div>
      <Pagination
        currentPage={1}
        totalCount={blogs.posts.length}
        pageSize={15}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      {currentPaginationData.map((blog) => (
        <BlogPost
          key={blog.id}
          author={blog.author}
          title={blog.title}
          excerpt={blog.excerpt}
          featureImage={blog.image}
        />
      ))}
    </div>
  );
}

export default BlogList;
