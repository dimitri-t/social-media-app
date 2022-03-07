import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

// This runs on the browser
// Code snippet from next-auth docs
function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14'>
        <h1 className='font-semibold text-lg pb-2'>
          Complete user authentication handled through Next Auth
        </h1>

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className='p-3 bg-blue-500 rounded-lg text-white'
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

// Happens in the middle server through SSR
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
