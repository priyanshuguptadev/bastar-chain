
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative rounded-full p-1.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-bastar-peru/50",
        theme === 'dark' ? 'bg-bastar-brown/20' : 'bg-bastar-cornsilk'
      )}
      aria-label="Toggle theme"
    >
      <Sun className={cn(
        "h-5 w-5 transition-transform duration-300",
        theme === 'dark' ? 'rotate-90 scale-0 text-bastar-cornsilk' : 'rotate-0 scale-100 text-bastar-brown'
      )} />
      
      <Moon className={cn(
        "absolute top-1.5 left-1.5 h-5 w-5 transition-transform duration-300",
        theme === 'light' ? 'rotate-90 scale-0 text-bastar-brown' : 'rotate-0 scale-100 text-bastar-cornsilk'
      )} />
    </button>
  );
};

export default ThemeToggle;
