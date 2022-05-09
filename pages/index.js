import Layout from "../components/Layout";
import Link from 'next/link'

export default function Home() {
  return (
    <Layout >
      <Link href="/deepweb">
      <label>Bienvenido</label>
      </Link>
      
      <div className="container">
        <span >La </span>
        <span >M</span>
        <span >a</span>
        <span >li</span>
        <span >CIA</span>
      </div>
    </Layout>
  )
}
