import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'asdas',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'this is dope',
  },
  {
    id: '234',
    username: 'sdasdasd',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'this is dodsddpe',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            caption={post.caption}
            img={post.img}
          />
        );
      })}
    </div>
  );
}

export default Posts;
