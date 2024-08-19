const Navbar = () => {
    return (
      <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-black">
        <a href="#" className="hover:text-red-600 transition-colors">
          Filosofi Logo
        </a>
        <a href="#" className="hover:text-red-600 transition-colors">
          Sejarah Kemerdekaan
        </a>
        <a href="#" className="hover:text-red-600 transition-colors">
          About Us
        </a>
      </nav>
    );
  };
  
  export default Navbar;
  