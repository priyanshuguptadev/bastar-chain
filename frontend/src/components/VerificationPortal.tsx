import React, { useState } from "react";
import { Button } from "@/components/UI/button";
import { fetchArtDetails } from "@/types";
import ResultsDisplay from "./ResultsDisplay";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/UI/card";
import { Search, ShieldCheck, Link2 } from "lucide-react";
import axios from "axios";



const VerificationPortal: React.FC = () => {
  const [artId, setArtId] = useState<string>("");
  const [artDetails, setArtDetails] = useState<fetchArtDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [verificationAttempted, setVerificationAttempted] =
    useState<boolean>(false);

  const handleVerify = async () => {
    if (!artId.trim()) {
      toast.error("Please enter a valid Art ID");
      return;
    }

    setIsLoading(true);
    setIsVerified(false);
    setVerificationAttempted(true);
    console.log("inside handle");

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_PUBLIC_BACKEND_URL}/verify`, {
        productID: artId,
      });
      setArtDetails(data);
      setIsVerified(true);
      toast.success("Art piece verified successfully on blockchain");
    } catch (error) {
      console.error(error);
      setArtDetails(null);
      toast.error(
        error instanceof Error ? error.message : "Verification failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      <Card className="web3-card overflow-hidden">
        <div className="blockchain-border w-full h-1 absolute top-0 left-0"></div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-5 w-5 text-bastar-brown dark:text-bastar-cornsilk" />
            <h2 className="text-xl md:text-2xl font-semibold">
              Blockchain Verification
            </h2>
          </div>

          <p className="text-bastar-brown/80 dark:text-bastar-cornsilk/80 mb-6">
            Enter the Art Token ID to verify its authenticity and view details
            from the immutable ledger
          </p>

          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-bastar-brown/50 dark:text-bastar-cornsilk/50">
              0x
            </div>
            <input
              type="text"
              value={artId}
              onChange={(e) => setArtId(e.target.value)}
              placeholder="Enter Token ID (e.g., 8F3A21D7C9)"
              className="bastar-input pl-10 pr-32 font-mono"
            />
            <Button
              type="button"
              onClick={handleVerify}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-bastar-brown to-bastar-chocolate text-white hover:from-bastar-chocolate hover:to-bastar-brown transition-all duration-300 dark:from-bastar-peru dark:to-bastar-brown"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Verifying
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Verify
                </span>
              )}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <div className="text-xs bg-bastar-peru/10 text-bastar-brown dark:bg-bastar-peru/20 dark:text-bastar-cornsilk rounded-full px-3 py-1 flex items-center">
              <Link2 className="h-3 w-3 mr-1" />
              <span>Blockchain Verified</span>
            </div>
            <div className="text-xs bg-bastar-peru/10 text-bastar-brown dark:bg-bastar-peru/20 dark:text-bastar-cornsilk rounded-full px-3 py-1">
              Immutable Ledger
            </div>
            <div className="text-xs bg-bastar-peru/10 text-bastar-brown dark:bg-bastar-peru/20 dark:text-bastar-cornsilk rounded-full px-3 py-1">
              Decentralized
            </div>
          </div>
        </CardContent>
      </Card>

      {verificationAttempted && (
        <div className="mt-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <svg
              className="h-5 w-5 text-bastar-brown dark:text-bastar-cornsilk"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-lg font-semibold text-bastar-brown dark:text-bastar-cornsilk">
              Blockchain Results
            </h3>
          </div>
          <ResultsDisplay artDetails={artDetails} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default VerificationPortal;
