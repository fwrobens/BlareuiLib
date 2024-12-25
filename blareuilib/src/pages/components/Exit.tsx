import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Exit = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Exit</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Close and clean up the UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Exit Function</h2>
            <CodeBlock code={`win:Exit()`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Separator", href: "/components/separator" }}
        nextPage={{ name: "Sections", href: "/components/sections" }}
      />
    </div>
  );
};