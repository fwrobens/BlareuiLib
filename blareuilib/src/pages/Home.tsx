import React from 'react';
import { UpdateLog } from '../components/UI/UpdateLog';
import { PageNavigation } from '../components/Navigation/PageNavigation';

export const Home = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">BlareUI Documentation</h1>
        <div className="space-y-4 text-gray-400">
          <p>Blare Library Made & Managed By Sleepyvibes</p>
          <p>Blare Library documentation made by K2rt.fx</p>
          <p>Repository: <a href="https://github.com/SleepyVibesAlt/BlareUI-Library" className="text-blue-400 hover:underline">https://github.com/SleepyVibesAlt/BlareUI-Library</a></p>
          <p>License: MIT</p>
          <p>This is the only verified documetation for the BlareUI Library.</p>
        </div>
      </section>

      <UpdateLog />

      <PageNavigation 
        nextPage={{ name: "Installation", href: "/installation" }}
      />
    </div>
  );
};