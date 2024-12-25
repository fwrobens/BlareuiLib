import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface SearchResult {
  title: string;
  href: string;
  section: string;
}

const searchData: SearchResult[] = [
  { title: 'Installation', href: '/installation', section: 'Getting Started' },
  { title: 'Windows', href: '/components/windows', section: 'Components' },
  { title: 'Tabs', href: '/components/tabs', section: 'Components' },
  { title: 'Key System', href: '/advanced/key-system', section: 'Advanced' },
  // Add more search data as needed
];

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={16} className="text-gray-500" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documentation..."
          className="w-64 py-2 pl-9 pr-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-sm text-gray-200 
                   placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500
                   transition-all duration-200"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-400"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md shadow-lg overflow-hidden">
          <div className="max-h-80 overflow-y-auto">
            {results.map((result, index) => (
              <a
                key={index}
                href={result.href}
                className="block px-4 py-2 hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="text-sm text-gray-200">{result.title}</div>
                <div className="text-xs text-gray-500">{result.section}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}