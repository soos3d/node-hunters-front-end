import React, { useState, useEffect } from 'react';

// Import components
import Header from '../../components/Header';
import ProviderCard from '../../components/ProviderCard';
import Footer from '../../components/Footer';

// Import scripts
import providersList from '../scripts/providersList';

const UPDATE_TIME_IN_MS = 1020000; // 17 minutes in milliseconds

const sortProvidersByLatency = (providers, latencies) => {
  return providers.sort((provider1, provider2) => {
    const latency1 = provider1.status === 'down' ? Number.MAX_VALUE : (latencies[provider1.index] || 0);
    const latency2 = provider2.status === 'down' ? Number.MAX_VALUE : (latencies[provider2.index] || 0);
    return latency1 - latency2;
  });
};

const App = () => {
  const [latencies, setLatencies] = useState([]);
  const [settings, setSettings] = useState([]);
  const [location, setLocation] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    // Set the page title
    document.title = 'Node Hunters';
  }, []);  

  useEffect(() => {
    // Fetch the latencies from the server
    const fetchLatencies = async () => {
      try {
        const response = await fetch(`https://api.nodehunters.xyz/results`);
        const result = await response.json();
        setLatencies(result.results);

        // Set the last update time
        const date = new Date(result.lastRun);
        const readableDate = date.toLocaleString();
        setLastUpdate(readableDate);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the settings from the server
    const fetchSettings = async () => {
      try {
        const response = await fetch(`https://api.nodehunters.xyz/settings`);
        const result = await response.json();
        setSettings(result.settingsResults);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the location from the server
    const fetchLocation = async () => {
      try {
        const response = await fetch(`https://api.nodehunters.xyz/location`);
        const result = await response.json();
        setLocation(result.location);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the data initially and then at regular intervals
    fetchLatencies();
    fetchSettings();
    fetchLocation();
    const intervalId = setInterval(() => {
      fetchLatencies();
      fetchSettings();
      fetchLocation();
    }, UPDATE_TIME_IN_MS);

    // Clear the interval on unmounting
    return () => clearInterval(intervalId);
  }, []);

  // Update the providers with the latest data
  const updatedProviders = providersList.map(provider => {
    const updatedProvider = { ...provider };
    updatedProvider.status = latencies[provider.index] ? 'connected' : 'down';
    updatedProvider.latency = latencies[provider.index] || 0;

    const region = location[provider.index]?.[0];
    const country = location[provider.index]?.[1];

    updatedProvider.tooltipText = [
      `Location: ${region}, ${country}\n`,
      `Provider: ${location[provider.index]?.[2] ?? "N/A"}\n`, 
      `Archive: ${settings[provider.index]?.[0] ? 'Yes' : 'No'}\n`, // add a check for the first item in the settings array
      `Debug & Trace: ${settings[provider.index]?.[1] ? 'Yes' : 'No'}\n`, // add a check for the second item in the settings array
      `Client version: ${settings[provider.index]?.[2] ?? "N/A"}`, // add a check for the third item in the settings array
    ];
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
                tooltipText={provider.tooltipText}
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