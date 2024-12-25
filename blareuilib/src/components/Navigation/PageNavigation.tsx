import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PageNavigationProps {
  prevPage?: { name: string; href: string };
  nextPage?: { name: string; href: string };
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ prevPage, nextPage }) => {
  return (
    <div className="flex justify-between items-center mt-16 pt-8 border-t border-[#1a1a1a]">
      {prevPage ? (
        <a href={prevPage.href} className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
          <ArrowLeft size={16} />
          <span>{prevPage.name}</span>
        </a>
      ) : <div />}
      
      {nextPage && (
        <a href={nextPage.href} className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
          <span>{nextPage.name}</span>
          <ArrowRight size={16} />
        </a>
      )}
    </div>
  );
}