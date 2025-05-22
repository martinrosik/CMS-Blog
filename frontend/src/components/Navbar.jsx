import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold hover:underline">
          Blog
        </Link>
        <nav className="flex gap-6 text-lg">
          <Link
            to="/"
            className="hover:underline hover:text-blue-200 transition"
          >
            Home
          </Link>
          <Link
            to="/posts"
            className="hover:underline hover:text-blue-200 transition"
          >
            Posts Panel
          </Link>
          <Link
            to="/admin"
            className="hover:underline hover:text-blue-200 transition"
          >
            Admin Panel
          </Link>
          <Link
            to="/login"
            className="hover:underline hover:text-blue-200 transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
