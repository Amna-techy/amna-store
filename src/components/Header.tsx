import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  // State for managing the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Amna Store</h1>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (visible on larger screens) */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/">
            <a className="text-white hover:text-gray-300">Home</a>
          </Link>
          <Link href="/products">
            <a className="text-white hover:text-gray-300">Products</a>
          </Link>
          <Link href="/cart">
            <a className="text-white hover:text-gray-300">Cart</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-gray-300">About</a>
          </Link>
          <Link href="/login">
            <a className="text-white hover:text-gray-300">Login</a>
          </Link>
          <Link href="/signup">
            <a className="text-white hover:text-gray-300">Signup</a>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu (visible only on mobile screens) */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col items-center space-y-4 py-4 bg-blue-700">
          <Link href="/">
            <a className="text-white hover:text-gray-300">Home</a>
          </Link>
          <Link href="/products">
            <a className="text-white hover:text-gray-300">Products</a>
          </Link>
          <Link href="/cart">
            <a className="text-white hover:text-gray-300">Cart</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-gray-300">About</a>
          </Link>
          <Link href="/login">
            <a className="text-white hover:text-gray-300">Login</a>
          </Link>
          <Link href="/signup">
            <a className="text-white hover:text-gray-300">Signup</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
