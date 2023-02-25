import React, { useState, useEffect } from 'react';

// Import components
import Header from '../../components/Header';
import ProviderCard from '../../components/ProviderCard';
import Footer from '../../components/Footer';

// Import scripts
import providersList from '../scripts/providersList';

const UPDATE_TIME = 420000;

const sortProvidersByLatency = (providers, latencies) => {
  return providers.sort((provider1, provider2) => {
    const latency1 = provider1.status === 'down' ? Number.MAX_VALUE : (latencies[provider1.index] || 0);
    const latency2 = provider2.status === 'down' ? Number.MAX_VALUE : (latencies[provider2.index] || 0);
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
      <Header lastUpdate={lastUpdate} />
      <div className='flex mt-10 justify-center items-center'>
        <div className='grid grid-cols-5 gap-10 ml-5 mr-5'>
          {sortedProviders.map(provider => (
            <div className='ml-5 mb-10' style={{ display: 'inline-block', margin: 'auto' }} key={provider.name}>
              <ProviderCard
                key={provider.name}
                image={provider.image}
                title={provider.title}
                link={provider.link}
                description={provider.description}
                tooltipText={[`Location: ${"metaverse"}\n`, `Archive: ${"No"}\n`, `Debug & Trace: ${"Yes"}\n`]}
                status={provider.status}
                latency={provider.latency}
                style={{ height: '120px', width: '120px' }}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};  

export default App;