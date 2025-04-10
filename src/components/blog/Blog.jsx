import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  // const { blog } = props;
  // console.log(blog);
  // console.log(handleBookMark);
  return (
    <div>
      {/* <h1>{blog.id}</h1> */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{blog.author}</h3>
            <img className="w-16" src={blog.author_img} alt="" />
          </div>
          <h2 className="card-title">{blog.title}</h2>

          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>

          <div className="flex text-xl">
            {blog.hashtags.map(hashtag => (
              <p key={hashtag[0]}>{hashtag}</p>
            ))}
          </div>

          <div className=" flex justify-between items-center">
            <button onClick={() => handleBookMark(blog)}>
              <FaBookmark size={24} />
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleMarkAsRead(blog.reading_time,blog.id)}
            >
              Mark as Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
