import React from 'react';
import Posts from './Posts';

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
      <section className='col-span-2'>
        <Posts />
      </section>
      <section>{/* Suggestions */}</section>
    </main>
  );
}

export default Feed;
