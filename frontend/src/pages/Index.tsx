
import React, { useState } from 'react';
import { fetchArtDetails, TabItem } from '@/types';
import Header from '@/components/Header';
import TabNavigation from '@/components/UI/TabNavigation';
import ArtisanRegistrationForm from '@/components/ArtisanRegistrationForm';
import VerificationPortal from '@/components/VerificationPortal';
import { Card, CardContent } from '@/components/UI/card';
import { Database, Shield } from 'lucide-react';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('registration');
  
  const tabs: TabItem[] = [
    { id: 'registration', label: 'Artisan Registration' },
    { id: 'verification', label: 'Art Verification' }
  ];
  
  const handleRegister = (artDetails: fetchArtDetails) => {
    console.log('Art piece registered:', artDetails);
    // In a real app, you might want to:
    // 1. Update some global state
    // 2. Navigate to a success page
    // 3. Show more detailed information
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-bastar-cornsilk to-bastar-cornsilk/90 dark:from-bastar-brown/30 dark:to-bastar-chocolate/30 hex-pattern">
      <Header />
      
      <main className="container mx-auto py-10 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">

          <Card className="mb-8 web3-card overflow-hidden relative">
            <CardContent className="p-0">
              <TabNavigation 
                tabs={tabs} 
                activeTab={activeTab} 
                onTabChange={setActiveTab} 
              />
            </CardContent>
          </Card>
          
          <div className="relative">
            {activeTab === 'registration' ? (
              <ArtisanRegistrationForm />
            ) : (
              <VerificationPortal />
            )}
          </div>
        </div>
      </main>
      
      <footer className="relative mt-20 py-8 bg-gradient-to-r from-bastar-chocolate to-bastar-brown dark:from-bastar-brown/80 dark:to-bastar-chocolate/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hex-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="w-6 h-6 mr-2" />
              <span className="text-xl font-semibold">BastarChain</span>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-4 text-center">
            <p className="text-sm text-bastar-cornsilk/80">
              © {new Date().getFullYear()} BastarChain | Preserving Cultural Heritage Through Blockchain
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
