import Post from './Post';
import { useState, useEffect } from 'react';
import faker from '@faker-js/faker';

function Posts() {
  const [posts, setPosts] = useState([]);

  // Nice way of generating fake data from faker and storing it to an
  // array without using a for loop
  useEffect(() => {
    const fakePosts = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      // Changing the id to the array index
      id: i,
    }));
    setPosts(fakePosts);
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            avatar={post.avatar}
            caption={post.caption}
            img={post.avatar}
          />
        );
      })}
    </div>
  );
}

export default Posts;
