import React from 'react';

const ProviderCard = ({ image, title, link, description, status, latency }) => {
  return (
    <div
      className="provider-card flex items-center justify-between items-center rounded overflow-hidden mb-3 p-4 border-gray-200 bg-white"
      style={{
        boxShadow:
          'inset 0px 1px 0px rgba(0,0,0,.1), inset 0px -1px 0px 1px rgba(0,0,0,.1)',
      }}
    >
      <div className="flex">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="font-medium text-[16px] text-black"
        >
          <img className="w-10 h-10 rounded " src={image} alt={title} />
        </a>
        <div className="flex flex-col ml-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="font-medium text-[16px] text-black"
          >
            {title} ↗
          </a>
          <div className="font-mono text-[12px] text-gray-400">
            {description}
          </div>
        </div>
      </div>

      <div className="flex flex-col min-w-[97px]">
        <p className="text-[12px] text-gray-400">Latency:</p>
        <p className="font-medium text-[16px] text-black">
          {status === 'connected' ? (
            `${latency} ms`
          ) : (
            <p className="w-max px-1.5 mt-[6px] mb-[3px] rounded bg-red-500 text-white text-[10px] font-bold">
              Doesn't respond
            </p>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProviderCard;
