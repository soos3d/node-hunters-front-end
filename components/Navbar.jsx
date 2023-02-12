import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => (
  <nav className="bg-gray-800 py-4">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <p className="text-3xl ml-5 font-bold text-white">Nodes Hunter</p>
        <div className="flex items-center">
        <button class="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full mr-5">
          <a target='blank' href="https://github.com/your-github-username/node-hunter">
            <i className="fab fa-github fa-2x"></i> Github
          </a>
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-5">
          <a href="https://twitter.com/your-twitter-username">
            <i className="fab fa-twitter fa-2x"></i> Twitter
          </a>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;



