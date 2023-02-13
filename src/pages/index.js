import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import components
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ProviderCard from '../../components/ProviderCard';

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
    const fetchLatencies = async () => {
      try {
        const response = await fetch(`https://nodes-hunter-server-inyie.ondigitalocean.app/results`);
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

  const updatedProviders = providersList.map(provider => {
    const updatedProvider = { ...provider };
    updatedProvider.status = latencies[provider.index] ? 'connected' : 'down';
    updatedProvider.latency = latencies[provider.index] || 0;
    return updatedProvider;
  });

  const sortedProviders = sortProvidersByLatency(updatedProviders, latencies);

  return (
    <div>
      <Navbar />
      <Header lastUpdate={lastUpdate} />
      <div className='flex mt-10 justify-center items-center'>
        <div className='grid grid-cols-4 gap-10 ml-5 mr-5'>
          {sortedProviders.map(provider => (
            <div className='ml-5 mb-10' style={{ display: 'inline-block', margin: 'auto' }} key={provider.name}>
              <ProviderCard
                key={provider.name}
                image={provider.image}
                title={provider.title}
                link={provider.link}
                description={provider.description}
                status={provider.status}
                latency={provider.latency}
                style={{ height: '120px', width: '120px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};  

export default App;