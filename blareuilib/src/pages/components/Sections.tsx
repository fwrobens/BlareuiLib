import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Sections = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Sections</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create organized sections in your UI tabs.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Section</h2>
            <CodeBlock code={`maintab:Section('Section 1')`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Exit", href: "/components/exit" }}
        nextPage={{ name: "Key System", href: "/advanced/key-system" }}
      />
    </div>
  );
};