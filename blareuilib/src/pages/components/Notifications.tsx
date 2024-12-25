import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Notifications = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Notifications</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create notifications and reactive notifications in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Notification</h2>
            <CodeBlock code={`BlareLib:CreateNotification("Success", "Operation completed successfully!", 3)
--> Title, Description, Duration`} />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Reactive Notification</h2>
            <CodeBlock code={`win:ReactiveNotification("Confirm Action", "Are you sure you want to proceed?"):Connect(function(confirmed)
    if confirmed then
        print("User clicked confirm")
    else
        print("User clicked deny")
    end
end) --> Title, Description`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Dropdowns", href: "/components/dropdowns" }}
        nextPage={{ name: "Key System", href: "/advanced/key-system" }}
      />
    </div>
  );
};