import React, { useState } from 'react';
import axios from 'axios';
import './Comments.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Comments = ({ comments,setAddComment,phoneId }) => {
  const [user] = useAuthState(auth);
  const [commentText, setCommentText] = useState('');

  const handlePostComment = async () => {
    try {
      const postData = {
        userEmail: user?.email, // Assuming you have the user's email in Firebase auth
        userName: user?.displayName,
        userImage: user?.photoURL,
        deviceId: phoneId, // Replace with the actual device ID
        text: commentText,
      };

      // Make the POST request
      await axios.post('http://localhost:2000/api/comments', postData);

      // Clear the input field after successful post
      setCommentText('');
      setAddComment(true)
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };
const handleDeleteComment = async (deviceId, commentId) => {
  try {
    // Make a DELETE request to the backend
    await axios.delete(`http://localhost:2000/api/comments/${deviceId}/${commentId}`);

    // Refetch comments or update state as needed
    // For example, you can use the queryClient.invalidateQueries('comments');
  } catch (error) {
    console.error('Error deleting comment:', error);
    // Handle error state if needed
  }
};


  return (
    <div className='w-full relative flex flex-col justify-end h-[800px]'>
      <div className='w-full'>
        <div className='w-full flex h-[720px] overflow-y-scroll comment-scrollbar flex-col gap-5 my-6'>
          {comments.map((c, i) => (
            <div key={i} className='w-full flex gap-3'>
              <div className='max-w-10 w-full h-10  rounded-full'>
                <img src={c.userImage} className='w-full rounded-full' alt='' />
              </div>
              <div className=''>
                <p className='text-xs text-left capitalize pb-1'>{c.userName}</p>
                <div className='bg-slate-200 p-5 rounded-md relative'>
                  {
                    c.userEmail === user?.email &&
                    <div onClick={()=>handleDeleteComment(phoneId,c._id)} className='absolute h-6 w-6 bg-red-500 rounded-full  flex justify-center items-center top-[-8px] right-[-8px] z-10 cursor-pointer' >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-5" fill="none" viewBox="0 0 24 24" stroke="#fff">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>

                  }

                  <p className='text-sm font-inter'>{c.comment}</p>
                </div>
                <div className='py-1'>
                  <p className='text-xs text-right'>
                    {new Date(c.timestamp).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex gap-3 justify-center items-center'>
          <input
            className='w-full h-10 border-2 border-black rounded px-2'
            type='text'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button className='h-10 bg-black text-white rounded text-lg max-w-20 flex justify-center items-center w-full' onClick={handlePostComment}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
