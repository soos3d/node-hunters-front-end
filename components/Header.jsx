import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import Logo from '../src/images/logo-full.svg';

const Header = () => {
  return (
    <header className="header text-white py-5">
      <div className="mx-auto">
        <div className="navbar flex items-center justify-between">
          <img src={Logo.src} alt="Nodes hunter logo" className="h-6" />

          <div className="links flex items-center space-x-3">
            {[
              {
                href: 'https://github.com/soos3d/node-hunters-next',
                uniqueClassName: 'github-button bg-black hover:bg-slate-700',
                icon: 'fa-github',
                label: 'Frontend',
              },
              {
                href: 'https://github.com/soos3d/nodes-hunter-server',
                uniqueClassName: 'github-button bg-black hover:bg-slate-700',
                icon: 'fa-github',
                label: 'Backend',
              },
              {
                href: 'https://twitter.com/web3Dav3',
                uniqueClassName: 'twitter-button bg-sky-600 hover:bg-sky-700',
                icon: 'fa-twitter',
                label: 'Twitter',
              },
            ].map((item, index) => {
              return (
                <a
                  key={index}
                  target="_blank"
                  href={item.href}
                  className={
                    item.uniqueClassName +
                    ' ' +
                    'font-bold py-1 px-3 rounded-full'
                  }
                >
                  <i className={'fab mr-2' + ' ' + item.icon}></i>
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
