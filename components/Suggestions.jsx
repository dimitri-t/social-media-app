import { useState, useEffect } from 'react';
import faker from '@faker-js/faker';
import Suggestion from './Suggestion';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  // Nice way of generating fake data from faker and storing it to an
  // array without using a for loop
  useEffect(() => {
    const fakeUserData = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      // Changing the id to the array index
      id: i,
    }));
    setSuggestions(fakeUserData);
  }, []);

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5 space-x-4'>
        <h3 className='text-sm font-bold text-gray-400'>
          Suggested Users to Follow
        </h3>
        <button className='text-gray-600 font-semibold'>See all</button>
      </div>
      {suggestions.map((suggestion) => {
        return (
          <Suggestion
            key={suggestion.id}
            id={suggestion.id}
            username={suggestion.username}
            avatar={suggestion.avatar}
          />
        );
      })}
    </div>
  );
}

export default Suggestions;
