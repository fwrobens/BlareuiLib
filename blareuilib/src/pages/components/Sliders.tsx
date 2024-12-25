import React from 'react';
import { CodeBlock } from '../../components/UI/CodeBlock';
import { PageNavigation } from '../../components/Navigation/PageNavigation';

export const Sliders = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Sliders</h1>
        <div className="space-y-6">
          <p className="text-gray-400">Create value sliders in your UI.</p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Creating Sliders</h2>
            <CodeBlock code={`maintab:Slider('Slider Text', 50, 0, 100, function(value)
    print("Slider value:", value)
end) --> Default, Min, Max, CallBack`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Toggles", href: "/components/toggles" }}
        nextPage={{ name: "Dropdowns", href: "/components/dropdowns" }}
      />
    </div>
  );
};