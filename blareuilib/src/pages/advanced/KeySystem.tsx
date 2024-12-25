import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const KeySystem = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Key System</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Implement key-based authentication in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Setting Up Key System</h2>
            <CodeBlock code={`local win = BlareLib:Create({
    Name = "Example Script",
    KeySettings = {
        UseKey = true,
        Key = "2",
        GrabFromSite = true,
        Site = "https://pastebin.com/raw/D2RWz0XT",
        Comment = "The key is 1 if GrabFromSite is off it is 2",
        Discord = "https://discord.gg/yourserver",
        KeyLink = "https://linkvertise.com/yourkey"
    }
})`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Tabs", href: "/components/tabs" }}
      />
    </div>
  );
};