
import React from 'react';
import { TabItem } from '@/types';
import { cn } from '@/lib/utils';

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-1 border-b border-bastar-peru/30 dark:border-bastar-peru/20 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-4 py-2 text-sm md:text-base font-medium transition-all duration-200 border-b-2 -mb-[2px]",
            activeTab === tab.id
              ? "border-bastar-peru text-bastar-brown dark:text-bastar-cornsilk dark:border-bastar-peru"
              : "border-transparent text-bastar-brown/70 dark:text-bastar-cornsilk/70 hover:text-bastar-brown dark:hover:text-bastar-cornsilk hover:border-bastar-peru/30 dark:hover:border-bastar-peru/50"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
