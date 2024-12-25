import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  active?: boolean;
}

interface NavSectionProps {
  title: string;
  items: NavItem[];
}

export const NavSection: React.FC<NavSectionProps> = ({ title, items }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 text-xs text-gray-500">
        <span>{title}</span>
        <ChevronDown size={14} />
      </div>
      <div className="space-y-1">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`block px-3 py-2 rounded-md text-sm transition-colors ${
              item.active
                ? 'bg-[#1a1a1a] text-gray-200'
                : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-200'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}