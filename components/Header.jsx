import React, { useEffect, useState } from "react";

const Header = ({ lastUpdate, nextUpdate }) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimer(nextUpdate);
    }
  }, [nextUpdate]);

  return (
    <div className="bg-gray-800 text-white shadow-md p-10">
      <p className="text-lg mt-5">
        This page displays the latency of different providers and updates the
        information every 5 minutes.
      </p>
      <p className="text-2xl mt-5 text-orange-500">The latency test is conducted based on the following parameters: </p>
      <ul className="list-disc pl-5 mt-2">
        <li>Query the <code className="bg-gray-700 px-2 rounded">getBlockNumber</code> method using the <code className="bg-gray-700 px-2 rounded">Web3.js</code> library.</li>
        <li>Query an Ethereum mainnet node on a free plan.</li>
        <li>Send 11 requests in a row, remove the first one, and calculate the average of the ten remainings. This is done because the first request can often be non-representative, as some providers have an authorization process during the first request.</li>
      </ul>
      <div className="flex justify-between mt-10">
        <p className="text-sm font-bold">Last Update: {lastUpdate}</p>
        <p className="text-sm font-bold">Next Update in: {timer}</p>
      </div>
    </div>
  );
  
  
};

export default Header;
