import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl mb-6 text-center font-bold">Welcome to My App</h1>
        <div className="mb-4">
          <Link href="/login"
            className="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-4">
            Login

          </Link>
          <Link href="/signup"
            className="block text-center bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Sign Up

          </Link>
        </div>
      </div>
    </div>
  );
}


