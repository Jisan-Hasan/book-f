export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Book Catalog</h1>
        <ul className="space-x-4 flex">
          <li>
            <a href="#all-books" className="text-gray-200 hover:text-gray-100">
              All Books
            </a>
          </li>
          <li>
            <a href="#sign-in" className="text-gray-200 hover:text-gray-100">
              Sign In
            </a>
          </li>
          <li>
            <a href="#sign-up" className="text-gray-200 hover:text-gray-100">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
