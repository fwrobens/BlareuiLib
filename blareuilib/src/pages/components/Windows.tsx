import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Windows = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Windows</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create and manage windows in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Window</h2>
            <CodeBlock code={`local win = BlareLib:Create({
    Name = "Example Window",
    StartupSound = {
        Toggle = true,
        SoundID = "rbxassetid://6958727243",
        TimePosition = 1
    }
})`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Installation", href: "/installation" }}
        nextPage={{ name: "Tabs", href: "/components/tabs" }}
      />
    </div>
  );
};