import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Tabs = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Tabs</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create and manage tabs within windows.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Tabs</h2>
            <CodeBlock code={`local maintab = win:Tab('Main', 'rbxassetid://6034837797') --> Name, Icon

-- Create sections within tabs
maintab:Section('Section 1')`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Windows", href: "/components/windows" }}
        nextPage={{ name: "Key System", href: "/advanced/key-system" }}
      />
    </div>
  );
};