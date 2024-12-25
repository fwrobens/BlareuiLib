import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Textbox = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Textbox</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create text input fields in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Textbox</h2>
            <CodeBlock code={`maintab:Textbox('Textbox Text', function(text)
    print("Input text:", text)
end) --> Default, CallBack`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Keybinds", href: "/components/keybinds" }}
        nextPage={{ name: "Separator", href: "/components/separator" }}
      />
    </div>
  );
};