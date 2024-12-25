import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Dropdowns = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Dropdowns</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create dropdown menus in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Dropdowns</h2>
            <CodeBlock code={`maintab:Dropdown('Dropdown Text', {'Option 1', 'Option 2', 'Option 3'}, function(selected)
    print("Selected:", selected)
end) --> Default, Options, CallBack`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Sliders", href: "/components/sliders" }}
        nextPage={{ name: "Key System", href: "/advanced/key-system" }}
      />
    </div>
  );
};