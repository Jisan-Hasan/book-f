export default function Home() {
  return (
    <main className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Recently Added Books</h2>
      <ul>
        {/* Render the list of recently added books here */}
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:underline">
            Book 1
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:underline">
            Book 2
          </a>
        </li>
        {/* Repeat for the remaining books */}
      </ul>
    </main>
  );
}
