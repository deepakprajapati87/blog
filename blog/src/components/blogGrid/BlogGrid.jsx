import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogGrid.css';
import { PiNotePencilThin } from "react-icons/pi";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoTimeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const API_URL = import.meta.env.VITE_API_URL;

export const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/blogs`)
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleLike = async (id) => {
    await axios.post(`${API_URL}/api/blogs/${id}/like`);
    const res = await axios.get(`${API_URL}/api/blogs`);
    setBlogs(res.data);
  };

  const handleComment = async (id) => {
    const comment = prompt("Write comments");
    if (comment) {
      await axios.post(`${API_URL}/api/blogs/${id}/comment`, {
        username: "Guest",
        text: comment
      });
      const res = await axios.get(`${API_URL}/api/blogs`);
      setBlogs(res.data);
    }
  };

  return (
    <>
      {blogs.map((blog) => (
        <div className='col-lg-6 col-md-6 col-sm-12 mb-4' key={blog._id}>
          <div className='card'>
            <img src={blog.image} className="card-img-top" alt={blog.title} />
            <div className="card-body p-5">
              <div className='blog-item-content'>
                <div className='blog-item-meta bg-gray py-1 px-2'>
                  <div className='text-muted text-capitalize mr-3'><PiNotePencilThin /> {blog.community}</div>
                  <div className='text-muted text-capitalize mr-3'><TfiCommentAlt /> {blog.comments.length} Comments</div>
                  <div className='text-muted text-capitalize mr-3'><IoTimeOutline /> {blog.date}</div>
                </div>
              </div>
              <h3 className="card-title mt-3 mb-3"> <NavLink>{blog.caption}</NavLink> </h3>
              <p className='mb-4'>{blog.description}</p>
              <Button className='mr-2' onClick={() => handleLike(blog._id)}>❤️ {blog.likes} Like</Button>
              <Button onClick={() => handleComment(blog._id)}>💬 Comment</Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
