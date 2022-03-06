import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <div className='flex justify-between items-center pr-6 pl-6 shadow-sm border-b bg-white sticky top-0 z-50'>
      {/* Left */}
      <div>
        <h1 className='font-semibold text-2xl'>App</h1>
      </div>
      {/* Middle */}
      <div>
        <div className='mt-1 relative p-3 rounded-md'>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-500' />
          </div>
          <input
            className='bg-gray-50 block w-full pl-10 rounded-md border-gray-300 text-sm focus:ring-black focus:border-black'
            type='text'
            placeholder='Search'
          />
        </div>
      </div>
      {/* Right */}
      <div className='flex space-x-4'>
        <HomeIcon className='h-7 w-7' />
        <PlusCircleIcon className='h-7 w-7' />
        <HeartIcon className='h-7 w-7' />
      </div>
    </div>
  );
}

export default Header;
