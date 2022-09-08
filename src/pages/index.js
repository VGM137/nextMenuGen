import Head from 'next/head';
import MenuGen from '../containers/MenuGen';

export default function Home() {
  return (
    <>
      <Head>
        <title>Menu Generator</title>
      </Head>
      <MenuGen />
    </>
  );
}
