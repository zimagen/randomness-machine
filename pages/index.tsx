import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-red-500">
      <div>hellow, Randomness machine!!!!</div>
      <Link href="/gacha-list">
        <a>Gacha List</a>
      </Link>
    </main>
  )
}
