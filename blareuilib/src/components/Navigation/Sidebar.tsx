import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const sections = [
  {
    title: 'GETTING STARTED',
    items: [
      { name: 'Introduction', path: '/' },
      { name: 'Installation', path: '/installation' }
    ]
  },
  {
    title: 'COMPONENTS',
    items: [
      { name: 'Windows', path: '/components/windows' },
      { name: 'Tabs', path: '/components/tabs' },
      { name: 'Sections', path: '/components/sections' },
      { name: 'Labels', path: '/components/labels' },
      { name: 'Buttons', path: '/components/buttons' },
      { name: 'Keybinds', path: '/components/keybinds' },
      { name: 'Toggles', path: '/components/toggles' },
      { name: 'Notifications', path: '/components/notifications' },
      { name: 'Sliders', path: '/components/sliders' },
      { name: 'Dropdowns', path: '/components/dropdowns' },
      { name: 'Textbox', path: '/components/textbox' },
      { name: 'Separator', path: '/components/separator' },
      { name: 'Exit', path: '/components/exit' }
    ]
  },
  {
    title: 'ADVANCED',
    items: [
      { name: 'Key System', path: '/advanced/key-system' },
      { name: 'Example', path: '/example' }
    ]
  }
];

export const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(sections.map(s => s.title));

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-[#0A0A0A] border-r border-[#1a1a1a] overflow-y-auto">
      <div className="p-4 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full mb-2 text-xs text-gray-500 hover:text-gray-400"
            >
              <span>{section.title}</span>
              {expandedSections.includes(section.title) ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRight size={14} />
              )}
            </button>
            {expandedSections.includes(section.title) && (
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive
                          ? 'bg-[#1a1a1a] text-gray-200'
                          : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-gray-200'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};