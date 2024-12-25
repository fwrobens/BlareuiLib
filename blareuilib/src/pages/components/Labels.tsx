import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Labels = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Labels</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create and manage labels in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Labels</h2>
            <CodeBlock code={`maintab:Label('Label Name', 'Label Text') --> The label name is specifically used for the edit label function which requires the label name to be the same to edit.`} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Editing Labels</h2>
            <CodeBlock code={`maintab:EditLabel('Label Name', 'New Text')
--> Label Name, New Text`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Notifications", href: "/components/notifications" }}
        nextPage={{ name: "Keybinds", href: "/components/keybinds" }}
      />
    </div>
  );
};