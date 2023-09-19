import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>React Practice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container mt-2">{children}</main>
    </>
  );
}