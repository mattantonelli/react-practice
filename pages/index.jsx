import Layout from "@/components/layout";
import Link from "next/link";

export default function ReactPractice() {
  return (
    <Layout>
      <h2>React Practice</h2>
      <ul>
        <li><Link href="/quick-start">Quick Start</Link></li>
        <li><Link href="/tic-tac-toe">Tic-Tac-Toe</Link></li>
      </ul>
    </Layout>
  )
}