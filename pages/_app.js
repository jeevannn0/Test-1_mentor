// pages/_app.js
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Mentor</title>
        {/* <meta name="description" content="A description of MySite" /> */}
        <link rel="icon" href="/the-mentor.png" /> {/* Link to favicon */}
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
