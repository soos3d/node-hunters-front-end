import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

import logo from "../src/images/logo.png";

// color gradient bg-gradient-to-l from-purple-600 via-purple-700 to-purple-900

const Header = ({ lastUpdate }) => {
  return (
    <header className="header text-white shadow-md p-5"> 
      <div className="container mx-auto">
        <div className="navbar flex items-center justify-between">
          <div className="logo flex items-center">
            <img
              src={logo.src}
              alt="Nodes hunter logo"
              className="ml-5 h-auto"
            />
            <div className="container">
              <p className="font-cursive text-2xl font-bold uppercase tracking-wider">
                Nodes Hunter
              </p>
            </div>
          </div>
          <div className="links flex items-center space-x-5">
            <a
              target="_blank"
              href="https://github.com/soos3d/node-hunters-next"
              className="github-button bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <i className="fab fa-github"></i> Frontend
            </a>
            <a
              target="_blank"
              href="https://github.com/soos3d/nodes-hunter-server"
              className="github-button bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <i className="fab fa-github"></i> Backend
            </a>
            <a
              target="_blank"
              href="https://twitter.com/web3Dav3"
              className="twitter-button bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>
      <div class="logo relative pt-10 mb-20">
        <p class="text-3xl absolute w-full text-center">
          Explore Ethereum nodes providers
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-md shadow-md p-4 text-black w-1/2">
          <div className="text-xl font-medium mb-2">
            Latency Test Parameters
          </div>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Query the{" "}
              <code className="bg-gray-200 px-2 rounded">getBlockNumber</code>{" "}
              method using the{" "}
              <code className="bg-gray-200 px-2 rounded">Web3.js</code> library.
            </li>
            <li>Query an Ethereum mainnet node on a free plan.</li>
            <li>Test performed from a server deployed in New York City.</li>
            <li>
              Send 11 requests in a row, remove the first one, and calculate the
              average of the ten remaining requests.
            </li>
            <li>The results are updated every 5 minutes.</li>
            <p class="mx-auto font-bold mt-5 font-lg">
              The first request is eliminated as it is often non-representative.
            </p>
          </ul>
        </div>
      </div>

      <div className="update flex justify-between mt-10">
        <p className="last-update text-sm font-bold">
          Last Update: {lastUpdate}
        </p>
      </div>
    </header>
  );
};

export default Header;
