import React, { useState } from 'react';

const PostDetail = ({ post, onBack }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <button className="btn btn-secondary mb-3" onClick={onBack}>← वापस जाएं</button>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <button className="btn btn-outline-primary me-2" onClick={handleLike}>
        👍 Like ({likes})
      </button>

      <div className="mt-4">
        <h5>कमेंट करें:</h5>
        <input
          className="form-control"
          type="text"
          placeholder="अपना कमेंट लिखें..."
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <button className="btn btn-success mt-2" onClick={handleAddComment}>
          कमेंट जोड़ें
        </button>
        <ul className="list-group mt-3">
          {comments.map((comment, index) => (
            <li key={index} className="list-group-item">{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDetail;
