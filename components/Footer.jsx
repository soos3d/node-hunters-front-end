import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 py-4 mt-10">
      <div className=" mx-auto sm:px-6 lg:px-8 mb-5 text-center mt-5">
        <a
          className="bg-gray-800 hover:bg-gray-900 border border-zinc-50 text-white font-bold py-2 px-4 rounded-full mr-5"
          target="_blank"
          href="https://www.freepik.com/free-photo/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_26130561.htm#query=background&position=49&from_view=keyword&track=sph"
        >
          Background credit
        </a>
        <a
          target="_blank"
          href="https://github.com/soos3d/nodes-hunter-server"
          className="github-button bg-gray-800 hover:bg-gray-900 border border-zinc-50 text-white font-bold py-2 px-4 rounded-full mr-5"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/web3Dav3"
          className="twitter-button bg-gray-800 hover:bg-gray-900 border border-zinc-50 text-white font-bold py-2 px-4 rounded-full mr-5"
        >
          <i className="fab fa-twitter"></i>{" "}
        </a>
      </div>
      <p className="text-center text-gray-400 text-sm mt-5">
        &copy; {new Date().getFullYear()} Node Hunters
      </p>
    </footer>
  );
}

export default Footer;
