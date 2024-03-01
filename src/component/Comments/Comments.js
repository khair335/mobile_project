import React from 'react';
import './Comments.css'
const Comments = () => {
const comment = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'This is the first comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'February 15, 2024',
    userImgUrl: 'path/to/user1.jpg'
  },
  {
    id: 2,
    name: 'Jane Doe',
    comment: 'A second comment with more details and insights.',
    date: 'February 16, 2024',
    userImgUrl: 'path/to/user2.jpg'
  },
  {
    id: 3,
    name: 'Alice Smith',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
    date: 'February 17, 2024',
    userImgUrl: 'path/to/user3.jpg'
  },
  {
    id: 4,
    name: 'Bob Johnson',
    comment: 'Yet another comment with some different content.',
    date: 'February 18, 2024',
    userImgUrl: 'path/to/user4.jpg'
  },
  {
    id: 5,
    name: 'Eve Williams',
    comment: 'Fifth comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'February 19, 2024',
    userImgUrl: 'path/to/user5.jpg'
  },
  {
    id: 6,
    name: 'Charlie Brown',
    comment: 'Comment number six. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'February 20, 2024',
    userImgUrl: 'path/to/user6.jpg'
  },
  {
    id: 7,
    name: 'Grace Davis',
    comment: 'Seventh comment with a bit more content. Lorem ipsum dolor sit amet.',
    date: 'February 21, 2024',
    userImgUrl: 'path/to/user7.jpg'
  },
  {
    id: 8,
    name: 'David Miller',
    comment: 'Comment number eight with additional details.',
    date: 'February 22, 2024',
    userImgUrl: 'path/to/user8.jpg'
  },
  {
    id: 9,
    name: 'Sophia White',
    comment: 'Ninth comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'February 23, 2024',
    userImgUrl: 'path/to/user9.jpg'
  },
  {
    id: 10,
    name: 'Michael Black',
    comment: 'Comment number ten. A bit longer comment content to showcase variations.',
    date: 'February 24, 2024',
    userImgUrl: 'path/to/user10.jpg'
  },
  {
    id: 11,
    name: 'Olivia Green',
    comment: 'The eleventh comment with unique content and insights.',
    date: 'February 25, 2024',
    userImgUrl: 'path/to/user11.jpg'
  },
];

  return (
    <div className='w-full relative flex flex-col justify-end h-[800px]'>
      <div className='w-full'>
        <div className='w-full flex h-[720px] overflow-y-scroll comment-scrollbar flex-col gap-5 my-6'>
          {
            comment.map((c, i) => <div className='w-full flex gap-3'>
              <div className='max-w-10 w-full h-10 bg-slate-300 rounded-full'>

              </div>
              <div className=''>
                <p className='text-xs text-left'>{c.name}</p>
                <div className='bg-slate-200 p-5 rounded-md'>
                  <p className='text-sm font-inter'>
                  {c.comment}
                  </p>
                </div>
                <div className='py-1'>
                  <p className='text-xs text-right'>{c.date}</p>
                </div>
              </div>
            </div>)
          }


        </div>
        <div className='w-full flex gap-3 justify-center items-center'>
          <input className='w-full h-10 border-2 border-black rounded px-2' type="text" />
          <button className='h-10 bg-black text-white rounded text-lg max-w-20 flex justify-center items-center w-full'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;