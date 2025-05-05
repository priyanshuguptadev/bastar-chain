
import React from 'react';
import { Shield } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-bastar-brown to-bastar-chocolate text-white py-4 px-4 md:px-8 shadow-md relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8" />
          <h1 className="text-xl md:text-2xl font-bold">BastarChain</h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
