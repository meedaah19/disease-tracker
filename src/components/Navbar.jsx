function Navbar () {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Disease Tracker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#chart" className="hover:underline">Chart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
