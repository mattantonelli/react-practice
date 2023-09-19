import CounterButton from '@/components/counter-button';
import FruitList from '@/components/fruit-list';
import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" }
  ];

  return (
    <Layout>
      <Head>
        <title>Quick Start</title>
      </Head>
      <div className="d-inline-flex flex-column">
        <h1>Hello React</h1>

        <FruitList fruits={fruits}></FruitList>

        <div className="d-flex flex-column">
          <CounterButton count={count} onClick={handleClick} />
          <CounterButton count={count} onClick={handleClick} />
        </div>

        <Link href="/" className="mt-2">Go Home</Link>
      </div>
    </Layout>
  )
}
