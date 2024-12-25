import React from 'react';
import { CodeBlock } from '../components/UI/CodeBlock';
import { PageNavigation } from '../components/Navigation/PageNavigation';

export const Installation = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Installation</h1>
        <div className="space-y-6">
          <div className="text-gray-400 space-y-4">
            <p>BlareUI has a maximum limit of 7 tabs per window.</p>
          </div>

          <CodeBlock code={`local BlareLib = loadstring(game:HttpGet("https://raw.githubusercontent.com/SleepyVibesAlt/BlareUI-Library/refs/heads/main/BlareUI.lua"))()
assert(BlareLib, "Failed to load BlareLib")`} />
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <CodeBlock code={`local win = BlareLib:Create({
    Name = "Example Script",
    KeySettings = {
        UseKey = true,
        Key = "2",
        GrabFromSite = true,
        Site = "https://pastebin.com/raw/D2RWz0XT",
        Comment = "The key is 1 if GrabFromSite is off it is 2",
        Discord = "https://discord.gg/yourserver",
        KeyLink = "https://linkvertise.com/yourkey"
    },
    StartupSound = {
        Toggle = true,
        SoundID = "rbxassetid://6958727243",
        TimePosition = 1
    }
})`} />
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Introduction", href: "/" }}
        nextPage={{ name: "Windows", href: "/components/windows" }}
      />
    </div>
  );
};