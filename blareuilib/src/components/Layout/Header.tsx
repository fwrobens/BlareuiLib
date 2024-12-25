import React from 'react';
import { Menu, Github, Search } from 'lucide-react';
import { SearchBar } from '../UI/SearchBar';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="h-16 border-b border-[#1a1a1a] bg-[#0A0A0A]/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-full px-4 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-6">
          <button onClick={toggleSidebar} className="p-2 hover:bg-[#1a1a1a] rounded-md transition-colors">
            <Menu size={20} className="text-gray-400" />
          </button>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-200">BlareUI</span>
            <div className="px-2 py-0.5 rounded-full bg-[#1a1a1a] text-xs font-medium text-gray-400">
              v1.0.0
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <SearchBar />
          <a 
            href="https://github.com/SleepyVibesAlt/BlareUI-Library" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 hover:bg-[#1a1a1a] rounded-md transition-colors"
          >
            <Github size={20} className="text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
}