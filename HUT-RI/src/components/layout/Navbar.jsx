import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex justify-between items-center p-4 md:p-8  font-bold">
            <img
                src="../src/assets/logo79.png"
                alt="Logo 79"
                className="w-32 md:w-40 h-auto animate-bounce"
            />

            {/* Desktop NavBar */}
            <nav className="hidden md:flex space-x-6 text-gray-800 text-lg lg:text-xl">
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

            {/* Mobile Menu Icon */}
            <div className="md:hidden z-50">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile NavBar */}
            {isOpen && (
                <nav className="flex flex-col space-y-8 justify-center items-end font-bold text-slate-700 absolute h-full z-40 left-0 bottom-0 w-full backdrop-blur-lg p-4 md:hidden shadow-lg text-xl">
                    <a href="#" className="hover:text-red-500 transition-colors hover:underline hover:underline-offset-8">
                        Filosofi Logo
                    </a>
                    <a href="#" className="hover:text-red-600 transition-colors hover:underline hover:underline-offset-8">
                        Sejarah Kemerdekaan
                    </a>
                    <a href="#" className="hover:text-red-600 transition-colors hover:underline hover:underline-offset-8">
                        About Us
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
