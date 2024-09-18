import React, { useState } from 'react';
import './App.scss';
import avatar from './images/bozai.png';

// Comment List data
const defaultList = [
  {
    rpid: 3,
    user: {
      uid: '13258165',
      avatar: '',
      uname: 'Jay Zhou',
    },
    content: 'Nice, well done',
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: 'Song Xu',
    },
    content: 'I search for you thousands of times, from dawn till dusk.',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: 'John',
    },
    content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
    ctime: '10-19 09:00',
    like: 66,
  },
];

// Current logged-in user info
const user = {
  uid: '30009257',
  avatar,
  uname: 'John',
};

const App = () => {
  const [comments, setComments] = useState(defaultList);
  const [activeTab, setActiveTab] = useState('hot'); // Default to 'Top'
  const [newComment, setNewComment] = useState(''); // State for new comment

  // Function to delete a comment
  const handleDelete = (rpid: number) => {
    const updatedComments = comments.filter(comment => comment.rpid !== rpid);
    setComments(updatedComments);
  };

  // Function to post a new comment
  const handlePost = () => {
    if (newComment.trim() === '') return; // Prevent empty comments

    const newCommentObject = {
      rpid: comments.length + 1, // Generate a new rpid
      user: {
        uid: user.uid,
        avatar: user.avatar,
        uname: user.uname,
      },
      content: newComment,
      ctime: new Date().toLocaleString(),
      like: 0,
    };
    setComments([newCommentObject, ...comments]); // Add new comment to the top
    setNewComment(''); // Clear the input after posting
  };

  // Sorting comments based on the active tab
  const sortedComments = [...comments].sort((a, b) => {
    if (activeTab === 'hot') {
      return b.like - a.like; // Sort by likes (descending)
    } else {
      return new Date(b.ctime).getTime() - new Date(a.ctime).getTime(); // Sort by ctime (newest first)
    }
  });

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            <span className="total-reply">{comments.length}</span>
          </li>
          <li className="nav-sort">
            {/* Highlight the active tab */}
            <span
              className={`nav-item ${activeTab === 'hot' ? 'active' : ''}`}
              onClick={() => setActiveTab('hot')}
            >
              Top
            </span>
            <span
              className={`nav-item ${activeTab === 'newest' ? 'active' : ''}`}
              onClick={() => setActiveTab('newest')}
            >
              Newest
            </span>
          </li>
        </ul>
      </div>

      {/* Comment Input */}
      <div className="reply-wrap">
        <div className="box-normal">
          {/* Current logged-in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={user.avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* Comment Input Field */}
            <textarea
              className="reply-box-textarea"
              placeholder="Tell something..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            {/* Post Button */}
            <div className="reply-box-send" onClick={handlePost}>
              <div className="send-text">Post</div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment List */}
      <div className="reply-list">
        {sortedComments.map((comment) => (
          <div key={comment.rpid} className="reply-item">
            {/* Profile Avatar */}
            <div className="root-reply-avatar">
              <div className="bili-avatar">
                <img
                  className="bili-avatar-img"
                  src={comment.user.avatar || avatar}
                  alt="Profile"
                />
              </div>
            </div>
            {/* Content */}
            <div className="content-wrap">
              <div className="user-info">
                <div className="user-name">{comment.user.uname}</div>
              </div>
              <div className="root-reply">
                <span className="reply-content">{comment.content}</span>
                <div className="reply-info">
                  {/* Comment Time and Likes */}
                  <span className="reply-time">{comment.ctime}</span>
                  <span className="reply-like">Like: {comment.like}</span>
                  {/* Delete Button */}
                  <span className="delete-btn" onClick={() => handleDelete(comment.rpid)}>
                    Delete
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;