import React, { useState } from 'react';
import { CodeBlock } from '../components/UI/CodeBlock';
import { PageNavigation } from '../components/Navigation/PageNavigation';
import { ChevronDown, ChevronUp } from 'lucide-react';

const exampleCode = `local BlareLib = loadstring(game:HttpGet("https://raw.githubusercontent.com/SleepyVibesAlt/BlareUI-Library/refs/heads/main/BlareUI.lua"))()
assert(BlareLib, "Failed to load BlareLib")

local win = BlareLib:Create({
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
})

local maintab = win:Tab('Main', 'rbxassetid://6034837797')
local charactertab = win:Tab('Character', 'rbxassetid://6034287594')
local uitab = win:Tab('UI', 'rbxassetid://6034509993')

uitab:Button('Destroy GUI', function()
    win:Exit()
end)

maintab:Toggle('Aimbot', function(isEnabled)
    aimbot = isEnabled
    print("Aimbot toggled:", isEnabled)
end)

maintab:Textbox('FOV', function(value)
    fov = tonumber(value)
    print("FOV set to:", fov)
end)

maintab:Slider('FOV', 30, 0, 120, function(value)
    fov = value
    print("FOV adjusted to:", value)
end)

maintab:Label('info_label', 'This is a label')

maintab:Dropdown("Select Option", {"Option 1", "Option 2", "Option 3"}, function(selected)
    print("Selected: " .. selected)
end)

maintab:Button('Edit Label', function()
    maintab:EditLabel('info_label', 'Updated Label Text')
    print("Label text updated.")
end)

maintab:Comment('This is a comment')

BlareLib:CreateNotification("Success", "Operation completed successfully!", 3)

maintab:Keybind('Keybind Text', Enum.KeyCode.F, function(key)
    print("New keybind:", key)
end)

maintab:Separator()
maintab:Section('Section 1')

task.wait(10)

win:ReactiveNotification("Confirm Action", "Are you sure you want to proceed?"):Connect(function(confirmed)
    if confirmed then
        print("User clicked confirm")
    else
        print("User clicked deny")
    end
end)`;

export const Example = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Complete Example</h1>
        <div className="space-y-6">
          <p className="text-gray-400">An example on how to use this ui lib with the components.</p>
          
          <div className="mb-8 relative">
            <img 
              src="https://media.discordapp.net/attachments/1228075336118567024/1321562663813386301/IMG_1056.png?ex=676db0a4&is=676c5f24&hm=4c8f2028089fd8a79a4a366b8e4ee9bd2015300a68ccc36489d80480a0c72cf3&=&format=webp&quality=lossless&width=717&height=395" 
              alt="BlareUI Example"
              onClick={() => setIsImageExpanded(true)}
              className="rounded-lg border border-[#1a1a1a] w-full max-w-[500px] cursor-pointer hover:opacity-90 transition-opacity"
            />
            {isImageExpanded && (
              <div 
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                onClick={() => setIsImageExpanded(false)}
              >
                <img 
                  src="https://media.discordapp.net/attachments/1228075336118567024/1321562663813386301/IMG_1056.png?ex=676db0a4&is=676c5f24&hm=4c8f2028089fd8a79a4a366b8e4ee9bd2015300a68ccc36489d80480a0c72cf3&=&format=webp&quality=lossless&width=717&height=395"
                  alt="BlareUI Example"
                  className="max-w-full max-h-[90vh] rounded-lg"
                />
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-md text-sm text-gray-400 transition-colors"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp size={16} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} />
                    Show More
                  </>
                )}
              </button>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? '' : 'max-h-[400px]'} relative`}>
              <CodeBlock code={exampleCode} />
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              )}
            </div>
          </div>
        </div>
      </section>

      <PageNavigation 
        prevPage={{ name: "Key System", href: "/advanced/key-system" }}
      />
    </div>
  );
};