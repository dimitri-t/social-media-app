function Suggestion({ avatar, username }) {
  return (
    <div className='flex items-center justify-between mt-2'>
      <div className='flex items-center mb-2'>
        <img src={avatar} className='rounded-full w-10 h-10 mr-2' alt='' />
        <h1 className='font-semibold truncate'>{username}</h1>
      </div>
      <h1 className='text-blue-400 font-bold text-sm ml-5'>Follow</h1>
    </div>
  );
}

export default Suggestion;
