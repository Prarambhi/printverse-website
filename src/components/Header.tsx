import  { useState } from 'react';
import { Menu, X, } from 'lucide-react';
import ThemeToggle from './ThemeToggle.tsx'; 
import logo from '../assets/logo.jpg';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
  <div className="flex justify-between items-center h-16 px-4">
    {/* Logo + Text */}
    <div className="flex items-center">
      <img
        src={logo}
        alt="Printverse Logo"
        className="h-10 w-auto object-contain"
      />
      <span
        className="font-bold text-gray-900 dark:text-white leading-none relative"
        style={{ fontSize: "1.5rem", marginLeft: "0.1rem", top: "0.15rem" }}
      >
        rintverse
      </span>
    </div>

    {/* Desktop Menu */}
    <nav className="hidden md:flex space-x-8 items-center">
      <button
        onClick={() => scrollToSection("home")}
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("services")}
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
      >
        Services
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("portfolio")}
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
      >
        Portfolio
      </button>
      <button
        onClick={() => scrollToSection("quote")}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Get Quote
      </button>
      <ThemeToggle />
    </nav>

    {/* Mobile Menu Button */}
    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  </div>
</header>


  );
};

export default Header;
