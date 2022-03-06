import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Media App</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Header />
      <Feed />
      {/* Modal */}
    </div>
  );
}
