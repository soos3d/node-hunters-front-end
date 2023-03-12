import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const ProviderCard = ({
  image,
  title,
  link,
  description,
  plan,
  status,
  latency,
  tooltipText,
}) => {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg border-4 ${
        status === "connected" ? "border-blue-700" : "border-gray-400"
      } ${status === "connected" ? "bg-white" : "bg-gray-300"}`}
    >
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img
          className={`w-full shadow-lg ${
            status === "connected" ? "" : "opacity-50 brightness-50"
          }`}
          src={image}
          alt={title}
        />
      </a>
      <div className="px-6 py-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="font-bold text-xl mb-2 underline text-violet-800"
        >
          {title}
        </a>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base">{plan}</p>
      </div>
      <div className="flex justify-center mb-2 ">
        <div
          className={`p-2 rounded text-white text-xs font-bold ${
            status === "connected" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status === "connected" ? "Responsive" : "Unresponsive"}
        </div>
        {status === "connected" && (
          <span
            className="tooltip ml-5 mt-1"
            data-tooltip={tooltipText.join("\n")}
          >
            <i className="fa fa-info-circle"></i>
          </span>
        )}
      </div>
      <div className="px-6 py-4 bg-gray-200">
        <p
          className={`text-gray-700 text-center ${
            status === "connected" ? "" : "opacity-50"
          }`}
        >
          Latency: {status === "connected" ? latency + " ms" : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProviderCard;
