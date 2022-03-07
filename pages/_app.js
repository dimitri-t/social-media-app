import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';

// Destructure page props to get the session data
// SessionProvider also takes care of keeping the session updated
// and synced between browser tabs and windows.
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
