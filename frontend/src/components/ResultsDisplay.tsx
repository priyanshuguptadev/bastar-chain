import React from "react";
import { fetchArtDetails } from "@/types";
interface ResultsDisplayProps {
  artDetails: fetchArtDetails | null;
  isLoading: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  artDetails,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="animate-pulse bastar-card space-y-4">
        <div className="h-8 bg-bastar-peru/20 dark:bg-bastar-peru/10 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-bastar-peru/20 dark:bg-bastar-peru/10 rounded"></div>
          <div className="h-4 bg-bastar-peru/20 dark:bg-bastar-peru/10 rounded w-5/6"></div>
          <div className="h-4 bg-bastar-peru/20 dark:bg-bastar-peru/10 rounded w-4/6"></div>
        </div>
        <div className="h-48 bg-bastar-peru/20 dark:bg-bastar-peru/10 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 bg-bastar-peru/20 dark:bg-bastar-peru/10 rounded w-3/6"></div>
          <div className="h-4 bg-bastar-peru/20 dark:bg-bastar-peru/10 rounded w-2/6"></div>
        </div>
      </div>
    );
  }

  if (!artDetails) {
    return (
      <div className="bastar-card flex flex-col items-center justify-center p-10 text-center">
        <svg
          className="w-16 h-16 text-bastar-peru mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        <h3 className="text-xl font-semibold mb-2 text-bastar-brown dark:text-bastar-cornsilk">
          Verification Failed
        </h3>
        <p className="text-bastar-brown/80 dark:text-bastar-cornsilk/80">
          The art piece could not be found on the blockchain.
        </p>
      </div>
    );
  }

  return (
    <div className="bastar-card animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-bastar-brown dark:text-bastar-cornsilk">
          {artDetails.artName}
        </h3>
        <div className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium">
          Verified
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          {artDetails.imageUrl ? (
            <img
              src={artDetails.imageUrl}
              alt={artDetails.artName}
              className="w-full h-64 object-contain bg-white dark:bg-bastar-brown/20 rounded-md border border-bastar-peru/30 dark:border-bastar-peru/20"
            />
          ) : (
            <div className="w-full h-64 bg-gray-100 dark:bg-bastar-brown/20 rounded-md border border-bastar-peru/30 dark:border-bastar-peru/20 flex items-center justify-center text-bastar-brown/60 dark:text-bastar-cornsilk/60">
              No image available
            </div>
          )}
        </div>

        <div className="md:w-1/2 space-y-3">
          <div>
            <p className="text-sm text-bastar-brown/70 dark:text-bastar-cornsilk/70">
              Artisan
            </p>
            <p className="font-medium text-bastar-brown dark:text-bastar-cornsilk">
              {artDetails.artist}
            </p>
          </div>

          <div>
            <p className="text-sm text-bastar-brown/70 dark:text-bastar-cornsilk/70">
              Registered On
            </p>
            <p className="font-medium text-bastar-brown dark:text-bastar-cornsilk">
              {artDetails.date}
            </p>
          </div>
        </div>
      </div>

      {artDetails.description && (
        <div className="mt-6">
          <p className="text-sm text-bastar-brown/70 dark:text-bastar-cornsilk/70">
            Description
          </p>
          <p className="mt-1 text-bastar-brown dark:text-bastar-cornsilk">
            {artDetails.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
