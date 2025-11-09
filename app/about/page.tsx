import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Page</h1>
        <p className="text-lg text-gray-700 mb-4">
          This is a sample about page to demonstrate routing in Next.js.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          You can create more pages by adding files to the app directory!
        </p>
        
        <Link 
          href="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
