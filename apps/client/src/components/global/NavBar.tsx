const NavBar = () => {
  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="text-lg font-bold">ACME STORE</div>

        {/* Navigation Links */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400">
            All
          </a>
          <a href="#" className="hover:text-gray-400">
            Shirts
          </a>
          <a href="#" className="hover:text-gray-400">
            Stickers
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-md">
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent text-sm focus:outline-none text-white placeholder-gray-500"
          />
          <button className="text-gray-500 hover:text-white">🔍</button>
        </div>

        {/* Cart Icon */}
        <button className="text-gray-500 hover:text-white ml-4">🛒</button>
      </div>
    </nav>
  )
}

export default NavBar
