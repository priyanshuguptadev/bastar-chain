
import React from 'react';
import { Button } from '@/components/UI/button';
import { Key } from 'lucide-react';

interface IdGeneratorProps {
  artId: string;
  onGenerate: () => void;
}

const IdGenerator: React.FC<IdGeneratorProps> = ({ artId, onGenerate }) => {
  return (
    <div className="mb-4">
      <label htmlFor="artId" className="bastar-label flex items-center gap-1">
        <Key className="h-4 w-4" />
        <span>Blockchain Art ID</span>
      </label>
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            id="artId"
            value={artId || ""}
            readOnly
            className="bastar-input bg-white/50 flex-1 pl-10 font-mono text-sm"
            placeholder="Auto-generated Token ID"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-bastar-brown/50">
            0x
          </div>
        </div>
        <Button 
          type="button" 
          onClick={onGenerate}
          className="bg-gradient-to-r from-bastar-peru to-bastar-chocolate text-white hover:from-bastar-chocolate hover:to-bastar-peru transition-all duration-300 shadow-md"
        >
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Generate Token
          </span>
        </Button>
      </div>
      <p className="text-xs text-bastar-brown/60 mt-1">
        This unique token ID will be stored on the blockchain for verification
      </p>
    </div>
  );
};

export default IdGenerator;
