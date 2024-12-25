import React from 'react';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative">
      <button 
        onClick={copyToClipboard}
        className="absolute right-4 top-4 p-2 hover:bg-gray-700 rounded-lg"
        title="Copy to clipboard"
      >
        <Copy size={16} />
      </button>
      <pre className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
        <code className="text-gray-100">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;