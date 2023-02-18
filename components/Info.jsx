import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import logo from '../src/images/logo.png';

const Info = ({ lastUpdate }) => {
  return (
    <section className="col-span-4 text-black">
      {/* <div className="text-4xl font-bold mb-2">
        Explore Ethereum nodes providers
      </div> */}

      <div className="text-xl font-medium mb-4">Latency Test Parameters</div>
      <ul className="list-disc pl-5 text-sm">
        <li>
          Query the{' '}
          <code className="bg-gray-200 px-2 rounded">getBlockNumber</code>{' '}
          method using the{' '}
          <code className="bg-gray-200 px-2 rounded">Web3.js</code> library.
        </li>
        <li>Query an Ethereum mainnet node on a free plan.</li>
        <li>Test performed from a server deployed in New York City.</li>
        <li>
          Send 11 requests in a row, remove the first one, and calculate the
          average of the ten remaining requests.
        </li>
        <li>The results are updated every 5 minutes.</li>
        <p className="mx-auto font-bold mt-5 font-lg">
          The first request is eliminated as it is often non-representative.
        </p>
      </ul>

      <div className="update flex justify-between mt-10">
        <p className="last-update text-sm font-bold">
          Last Update: {lastUpdate}
        </p>
      </div>
    </section>
  );
};

export default Info;
