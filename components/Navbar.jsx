import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../src/images/logo.png';

const Navbar = () => (
  <nav className="navbar bg-gray-800 py-4">
    <div className="container mx-auto">
      <div className="navbar__container flex items-center justify-between">
        <div className="logo__container flex items-center">
          <img src={logo.src} alt="Logo" className="ml-10" />
          <p className="navbar__title text-3xl ml-5 font-bold text-white">Nodes Hunter</p>
        </div>
        <div className="navbar__links flex items-center">
          <button className="navbar__github-button bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full mr-5">
            <a target="_blank" href="https://github.com/soos3d/node-hunters-next">
              <i className="fab fa-github fa-2x"></i> Frontend
            </a>
          </button>
          <button className="navbar__github-button bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full mr-5">
            <a target="_blank" href="https://github.com/soos3d/nodes-hunter-server">
              <i className="fab fa-github fa-2x"></i> Backend
            </a>
          </button>
          <button className="navbar__twitter-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-10">
            <a target="_blank" href="https://twitter.com/web3Dav3">
              <i className="fab fa-twitter fa-2x"></i> Twitter
            </a>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
