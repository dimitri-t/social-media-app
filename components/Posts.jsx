import Post from './Post';
import { useState, useEffect } from 'react';
import faker from '@faker-js/faker';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

function Posts() {
  const [posts, setPosts] = useState([]);

  // Load posts from firebase
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          // snapshot is a real time listener, if its value changes in the db
          // it will provide the new value
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  // // Nice way of generating fake data from faker and storing it to an
  // // array without using a for loop
  // useEffect(() => {
  //   const fakePosts = [...Array(5)].map((_, i) => ({
  //     ...faker.helpers.contextualCard(),
  //     // Changing the id to the array index
  //     id: i,
  //   }));
  //   setPosts(fakePosts);
  // }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            avatar={post.data().profileImg}
            caption={post.data().caption}
            img={post.data().image}
          />
        );
      })}
    </div>
  );
}

export default Posts;
