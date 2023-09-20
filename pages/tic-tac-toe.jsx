import Game from "@/components/tic-tac-toe/game";
import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Square() {
  return (
    <Layout>
      <Head>
        <title>Tic-Tac-Toe</title>
      </Head>
      <div className="d-flex flex-inline flex-column align-items-center mt-4">
        <h1>Tic-Tac-Toe</h1>
        <Game />
        <Link href="/">Go Home</Link>
      </div>
    </Layout>
  );
}