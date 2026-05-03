import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="navbar-container top-bar-content">
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-orange-600">Contact Us</a>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <a href="#" className="hover:text-orange-600">FAQ</a>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium transition">
            Log In/Register
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="navbar-container main-navbar-content">
          
          {/* Left - Logo */}
          <div className="logo-section">
            <div className="logo-icon">📚</div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              <span className="text-green-500">Boi</span>
              <span className="text-orange-500"> Pori</span>
            </h1>
          </div>

          {/* Center - Search */}
          <div className="search-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by Books (ex. text)"
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="flex items-center pr-2 gap-2">
                <select className="bg-white px-3 py-2 rounded-xl border border-gray-300 text-sm">
                  <option>Book</option>
                  <option>Author</option>
                  <option>Category</option>
                </select>
                <button
                  className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-xl transition"
                  onClick={() => console.log("Searching:", searchTerm)}
                >
                  🔍
                </button>
              </div>
            </div>
          </div>

          {/* Right - Links */}
          <div className="right-section">
            <a href="#" className="hover:text-orange-600">My Account</a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a href="#" className="hover:text-orange-600">My BookList</a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
