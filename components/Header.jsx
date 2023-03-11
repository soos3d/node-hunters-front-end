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
                Node Hunters
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="logo relative pt-10 mb-20">
        <p className="text-3xl absolute w-full text-center">
          Explore Ethereum nodes providers
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-md shadow-md p-4 text-black w-1/2 border border-violet-700 border-2">
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
            <li>The results are updated every 15 minutes.</li>
            <p className="mx-auto font-bold mt-5 font-lg">
              NOTE: The first request is eliminated as it is often non-representative.
            </p>
            <p className="mx-auto font-bold font-lg">
              NOTE: The locations displayed are approximations.
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
