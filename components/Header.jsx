import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import providersList from "../src/scripts/providersList";

import logo from "../public/logo_new.png";

// color gradient bg-gradient-to-l from-purple-600 via-purple-700 to-purple-900

const Header = ({ lastUpdate }) => {
  return (
    <header className="header text-white">
      <div class="bg-gray-900 w-full">
        <div class="navbar flex flex-col items-center md:flex-row justify-between">
          <div class="logo flex items-center">
            <img
              src={logo.src}
              alt="Nodes hunter logo"
              class="ml-2 md:ml-5 h-10 md:h-auto"
              style={{ width: "100px", height: "100px" }}
            />
            <div class="container">
              <p class="font-cursive text-xl md:text-3xl font-bold uppercase tracking-wider text-yellow-300 text-glow ml-2 md:ml-5">
                Node Hunters
              </p>
            </div>
          </div>
          <div class="sm:px-6 lg:px-8 mb-5 text-center mt-5 md:mt-0">
            <a
              target="_blank"
              href="https://github.com/soos3d/nodes-hunter-server"
              class="github-button bg-gray-800 hover:bg-gray-900 border border-zinc-50 text-white font-bold py-2 px-3 md:px-4 rounded-full mr-2 md:mr-5"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/web3Dav3"
              class="twitter-button bg-gray-800 hover:bg-gray-900 border border-zinc-50 text-white font-bold py-2 px-3 md:px-4 rounded-full mr-2 md:mr-5"
            >
              <i class="fab fa-twitter"></i>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="logo relative pt-5 mb-5 md:pt-10 md:mb-10">
        <h1 className="text-2xl md:text-3xl font-cursive absolute w-full text-center text-yellow-300 text-glow">
          Explore Ethereum nodes providers
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center w-full md:w-1/2">
          <div className="p-6 text-stone-400 border-b-8 border-yellow-400 rounded-r-lg font-bold">
            <div className="text-xl md:text-2xl font-medium mb-2 text-yellow-300">
              Latency Test Parameters
            </div>
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>
                Query the{" "}
                <code className="bg-gray-200 px-2 rounded">getBlockNumber</code>{" "}
                method using the{" "}
                <code className="bg-gray-200 px-2 rounded">Web3.js</code>{" "}
                library.
              </li>
              <li>Query an Ethereum mainnet node on a free plan.</li>
              <li>Test performed from a server deployed in New York City.</li>
              <li>
                Send 11 requests, remove the 1st, average the 10 remaining.
              </li>
              <li>The test runs every 15 minutes.</li>
              <p className="mx-auto font-bold mt-5 font-lg">
                NOTE: The first request is eliminated as it is often
                non-representative.
              </p>
              <p className="mx-auto font-bold font-lg">
                NOTE: The locations displayed are approximations.
              </p>
            </ul>
          </div>
        </div>

        <div class="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-5 sm:p-10 w-full sm:w-1/2 mt-10 sm:mr-5 items-center border-l-4 border-t-4 border-yellow-500">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
            <div class="bg-gray-700 rounded-lg px-4 py-2 flex flex-col justify-center">
              <p class="text-white font-bold mb-2 sm:mb-5">
                Providers tracked:
              </p>
              <p class="text-yellow-300 text-glow font-bold">
                {providersList.length}
              </p>
            </div>
            <div class="bg-gray-700 rounded-lg px-4 py-2 flex flex-col justify-center">
              <p class="text-white font-bold mb-2 sm:mb-5">Locations tested:</p>
              <p class="text-yellow-300 text-glow font-bold">{"1"}</p>
            </div>
            <div class="bg-gray-700 rounded-lg px-4 py-2 flex flex-col justify-center">
              <p class="text-white font-bold mb-2 sm:mb-5">Last Update:</p>
              <p class="text-yellow-300 text-glow font-bold text-sm">
                {lastUpdate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
