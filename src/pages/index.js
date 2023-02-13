import React, { useState, useEffect } from 'react';

// Import components
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ProviderCard from '../../components/ProviderCard';


// Import scripts
import providersList from '../scripts/providersList';
import testNodeLatency from '../scripts/getLatency';

const UPDATE_TIME = 300000; // 5 minutes in ms

const sortProvidersByLatency = (providers, latencies) => {
  return providers.sort((provider1, provider2) => {
    const latency1 = latencies[provider1.name] || 0;
    const latency2 = latencies[provider2.name] || 0;
    return latency1 - latency2;
  });
};

const App = () => {
  const [latencies, setLatencies] = useState({});
  const [startTime, setStartTime] = useState(Date.now());
  const [lastUpdate, setLastUpdate] = useState(null);
  const [nextUpdate, setNextUpdate] = useState(null);

  useEffect(() => {
    setLastUpdate(new Date(startTime).toLocaleString());
  }, [startTime]);

  const [time, setTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (nextUpdate <= 0) {
        setNextUpdate(UPDATE_TIME / 1000);
      } else {
        setNextUpdate(prevNextUpdate => prevNextUpdate - 1);
      }
  
      const minutes = Math.floor(nextUpdate / 60);
      const seconds = nextUpdate % 60;
      setTime(`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [nextUpdate]);
  
  
  
  useEffect(() => {
    setNextUpdate(UPDATE_TIME / 1000);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      setStartTime(Date.now());

      const promises = providersList.map(async provider => {
        const latency = await testNodeLatency(provider.endpoint);
        return { [provider.name]: latency };
      });
  
      Promise.all(promises).then(results => {
        const latencies = results.reduce((acc, result) => ({ ...acc, ...result }), {});
        setLatencies(latencies);
      });
    }, UPDATE_TIME); // update every 5 minutes

    return () => clearInterval(intervalId);
  }, []);

  const updatedProviders = providersList.map(provider => {
    const updatedProvider = { ...provider };
    updatedProvider.status = latencies[provider.name] ? 'connected' : 'down';
    return updatedProvider;
  });

  const sortedProviders = sortProvidersByLatency(updatedProviders, latencies);

  return (
    <div>
      <Navbar />
      <Header lastUpdate={lastUpdate} nextUpdate={time} className />
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
                latency={latencies[provider.name]}
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



  
