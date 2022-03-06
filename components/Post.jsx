import React from 'react';
import {
  BookmarkIcon,
  DotsHorizontalIcon,
  ChatIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header part of the post */}
      <div className='flex items-center p-5'>
        <img
          src={userImg}
          className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
          alt=''
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5 cursor-pointer' />
      </div>

      {/* Image part of the post */}
      <img src={img} className='object-cover w-full' alt='' />

      {/* Buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn' />
        </div>
        <BookmarkIcon className='btn' />
      </div>

      {/* Caption */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username} </span> {caption}
      </p>

      {/* Comments */}

      {/* Leave a comment box */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          type='text'
          placeholder='Add a comment...'
          className='border-none flex-1 focus:ring-0 outline-none'
        />
        <button className='text-blue-400 font-bold prevent'>Post</button>
      </form>
    </div>
  );
}

export default Post;
