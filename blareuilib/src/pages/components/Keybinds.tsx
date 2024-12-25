import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Keybinds = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Keybinds</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create and manage keyboard shortcuts in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Keybinds</h2>
            <CodeBlock code={`maintab:Keybind('Keybind Text', Enum.KeyCode.F, function(key)
    print("New keybind:", key)
end) --> Default, Key, CallBack`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Labels", href: "/components/labels" }}
        nextPage={{ name: "Textbox", href: "/components/textbox" }}
      />
    </div>
  );
};