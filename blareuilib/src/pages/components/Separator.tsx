import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Separator = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Separator</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Add visual separators between UI elements.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Separator</h2>
            <CodeBlock code={`maintab:Separator()`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Textbox", href: "/components/textbox" }}
        nextPage={{ name: "Exit", href: "/components/exit" }}
      />
    </div>
  );
};