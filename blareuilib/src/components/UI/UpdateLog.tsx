import React from 'react';
import { Clock } from 'lucide-react';

interface Update {
  version: string;
  changes: string[];
}

const updates: Update[] = [
  {
    version: "v1.1.0",
    changes: [
      "Added Notification System",
      "Added Key System",
      "Added Spicy new animations",
      "Added Reaction Notification",
      "Added New Icons"
    ]
  },
  {
    version: "v1.0.0",
    changes: [
      "Initial release",
      "Basic UI components",
      "Documentation structure"
    ]
  }
];

export const UpdateLog = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <Clock size={24} />
        <h2>Update Log</h2>
      </div>
      <div className="space-y-8">
        {updates.map((update) => (
          <div key={update.version} className="relative pl-4 border-l-2 border-[#2a2a2a]">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#2a2a2a]" />
            <div className="mb-2">
              <h3 className="text-lg font-semibold">{update.version}</h3>
            </div>
            <ul className="space-y-2">
              {update.changes.map((change, index) => (
                <li key={index} className="text-gray-300">• {change}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};