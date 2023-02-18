import React, { useState, useEffect } from 'react';

// Import components
import Header from '../../components/Header';
import ProviderCard from '../../components/ProviderCard';
import Info from '../../components/Info';

// Import scripts
import providersList from '../scripts/providersList';

const UPDATE_TIME = 420000;

const sortProvidersByLatency = (providers, latencies) => {
  return providers.sort((provider1, provider2) => {
    const latency1 = latencies[provider1.index] || 0;
    const latency2 = latencies[provider2.index] || 0;
    return latency1 - latency2;
  });
};

const App = () => {
  const [latencies, setLatencies] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    // Change the title
    document.title = 'Nodes Hunter';
  }, []);

  useEffect(() => {
    const fetchLatencies = async () => {
      try {
        const response = await fetch(
          `https://nodes-hunter-server-inyie.ondigitalocean.app/results`
        );
        const result = await response.json();
        setLatencies(result.results);
        const date = new Date(result.lastRun);
        const readableDate = date.toLocaleString();
        setLastUpdate(readableDate);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatencies();
    const intervalId = setInterval(fetchLatencies, UPDATE_TIME);

    return () => clearInterval(intervalId);
  }, []);

  const updatedProviders = providersList.map((provider) => {
    const updatedProvider = { ...provider };
    updatedProvider.status = latencies[provider.index] ? 'connected' : 'down';
    updatedProvider.latency = latencies[provider.index] || 0;
    return updatedProvider;
  });

  const sortedProviders = sortProvidersByLatency(updatedProviders, latencies);

  return (
    <div
      style={{ backgroundColor: 'rgb(250,250,249)' }}
      className="container mx-auto"
    >
      <Header />
      <div
        className="text-4xl font-bold my-10 text-black"
        // style={{ maxWidth: '1000px', margin: 'auto' }}
      >
        Explore Ethereum nodes providers
      </div>
      <div
        className="grid grid-cols-10 gap-8"
        // style={{ maxWidth: '1000px', margin: 'auto' }}
      >
        {/* <div className="col-span-1"></div> */}
        {/* ⬇ for Info  component col-span-4, class is inside */}
        <div
          className="col-span-6 overflow-y-scroll"
          style={{ height: 'calc(100vh - 192px)' }}
        >
          <div className="flex flex-col">
            {sortedProviders.map((provider, index) => (
              <ProviderCard
                key={index}
                image={provider.image}
                title={provider.title}
                link={provider.link}
                description={provider.description}
                status={provider.status}
                latency={provider.latency}
                style={{}}
              />
            ))}
          </div>
        </div>
        <Info lastUpdate={lastUpdate} />

        {/* <div className="col-span-1"></div> */}
      </div>
    </div>
  );
};

export default App;
