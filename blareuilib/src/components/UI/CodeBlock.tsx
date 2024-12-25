import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'lua' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#2a2a2a] hover:bg-[#333] rounded-md text-sm text-gray-400 
                   transition-colors"
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="overflow-hidden rounded-lg bg-[#0d0d0d] border border-[#1a1a1a]">
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a]/50">
          <span className="text-xs font-medium text-gray-400">{language}</span>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-gray-300 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
}