import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Header() {
  // Get session data
  const { data: session } = useSession();

  // modal state from recoil
  const [open, setOpen] = useRecoilState(modalState);

  // Get the router object
  const router = useRouter();

  return (
    <div className='flex justify-between items-center pr-6 pl-6 shadow-sm border-b bg-white sticky top-0 z-50'>
      {/* Left */}
      <div>
        <h1
          onClick={() => router.push('/')}
          className='cursor-pointer font-semibold text-2xl'
        >
          App
        </h1>
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

      {/* Right part, only show if signed in */}
      {session ? (
        <div className='flex justify-end space-x-4 items-center'>
          <HomeIcon onClick={() => router.push('/')} className='navBtn ' />
          <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
          <HeartIcon className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />
          <img
            onClick={signOut}
            src={session?.user?.image}
            alt=''
            className='h-8 w-8 rounded-full cursor-pointer'
          />
        </div>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </div>
  );
}

export default Header;
