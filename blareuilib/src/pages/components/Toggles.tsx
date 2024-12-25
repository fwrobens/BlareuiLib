import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Toggles = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Toggles</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create toggle switches in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Toggles</h2>
            <CodeBlock code={`maintab:Toggle('Toggle Text', function(state)
    print("Toggle state:", state)
end) --> Default, CallBack`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Buttons", href: "/components/buttons" }}
        nextPage={{ name: "Sliders", href: "/components/sliders" }}
      />
    </div>
  );
};