import React from 'react';
import { ChevronDown } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-900 w-full p-4 border-r border-gray-800">
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2 text-sm text-gray-400">
            <span>GETTING STARTED</span>
            <ChevronDown size={16} />
          </div>
          <div className="space-y-1">
            <a href="#" className="block px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400">Introduction</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Installation</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Quick Start</a>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2 text-sm text-gray-400">
            <span>COMPONENTS</span>
            <ChevronDown size={16} />
          </div>
          <div className="space-y-1">
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Windows</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Tabs</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Buttons</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Toggles</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Sliders</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Dropdowns</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Notifications</a>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2 text-sm text-gray-400">
            <span>ADVANCED</span>
            <ChevronDown size={16} />
          </div>
          <div className="space-y-1">
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Key System</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Theming</a>
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-800">Best Practices</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;