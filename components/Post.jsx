import { useState, useEffect } from 'react';
import {
  BookmarkIcon,
  DotsHorizontalIcon,
  ChatIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import {
  addDoc,
  serverTimestamp,
  collection,
  onSnapshot,
  orderBy,
  setDoc,
  doc,
  query,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

function Post({ id, username, avatar, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  // load likes
  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uuid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uuid), {
        username: session.user.username,
      });
    }
  };

  // load comments
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'descending')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment('');
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  // seraches if the current user id is in the likes array
  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uuid) !== -1
      ),
    [likes]
  );

  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header part of the post */}
      <div className='flex items-center p-5'>
        <img
          src={avatar}
          className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
          alt=''
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5 cursor-pointer' />
      </div>

      {/* Image part of the post */}
      <img src={img} className='object-cover w-full' alt='' />

      {/* Buttons */}
      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            {hasLiked ? (
              <HeartIconFilled onClick={likePost} className='btn' />
            ) : (
              <HeartIcon onClick={likePost} className='btn' />
            )}
            <ChatIcon className='btn' />
            <PaperAirplaneIcon className='btn' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}

      {/* Caption */}
      <p className='p-5 truncate'>
        {likes.length > 0 && <p className='font-bold'>{likes.length} likes</p>}
        <span className='font-bold mr-1'>{username} </span> {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map((comment) => (
            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
              <img
                className='h-7 rounded-full'
                src={comment.data().userImage}
                alt=''
              />
              <p className='text-sm flex-1'>
                <span className='font-bold'>{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Leave a comment box */}
      {session && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7' />
          <input
            type='text'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Add a comment...'
            className='border-none flex-1 focus:ring-0 outline-none'
          />
          <button
            type='submit'
            disable={!comment.trim()}
            onClick={sendComment}
            className='text-blue-400 font-bold prevent'
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
