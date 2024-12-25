import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Buttons = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Buttons</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create interactive buttons in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Buttons</h2>
            <CodeBlock code={`maintab:Button('Button Name', function()
    print('Button Pressed')
end) --> Name, CallBack`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Tabs", href: "/components/tabs" }}
        nextPage={{ name: "Toggles", href: "/components/toggles" }}
      />
    </div>
  );
};