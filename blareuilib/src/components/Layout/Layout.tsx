import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from '../Navigation/Sidebar';

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200">
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex pt-16">
        <div 
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed md:relative z-30 transition-transform duration-300 w-72 h-[calc(100vh-4rem)]`}
        >
          <Sidebar />
        </div>

        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-20"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className={`flex-1 px-6 pb-16 max-w-4xl mx-auto transition-all duration-300 ${
          sidebarOpen && !isMobile ? 'ml-72' : ''
        }`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};