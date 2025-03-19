
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ChevronRight, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CommandProps {
  command: string;
  description: string;
  example?: string;
}

const CommandItem: React.FC<CommandProps> = ({ command, description, example }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-b border-slate-100 pb-4 mb-4 last:border-none">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center mb-2">
            <ChevronRight size={16} className="text-twix-gold mr-2" />
            <code className="font-mono text-sm bg-slate-100 px-2 py-1 rounded">{command}</code>
            <button 
              onClick={copyToClipboard}
              className="ml-2 p-1 rounded-md hover:bg-slate-100 transition-colors"
              aria-label="Copy command"
            >
              {copied ? (
                <Check size={14} className="text-green-500" />
              ) : (
                <Copy size={14} className="text-slate-400" />
              )}
            </button>
          </div>
          <p className="text-sm text-slate-600">{description}</p>
          {example && (
            <div className="mt-2 bg-slate-50 p-2 rounded border border-slate-100">
              <code className="text-xs text-slate-500 font-mono">{example}</code>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CommandsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const basicCommands = [
    {
      command: "!play <song>",
      description: "Play a song from YouTube, Spotify, or SoundCloud.",
      example: "!play Africa by Toto"
    },
    {
      command: "!pause",
      description: "Pause the currently playing track."
    },
    {
      command: "!resume",
      description: "Resume playback of a paused track."
    },
    {
      command: "!skip",
      description: "Skip to the next song in the queue."
    },
    {
      command: "!stop",
      description: "Stop playback and clear the queue."
    }
  ];
  
  const queueCommands = [
    {
      command: "!queue",
      description: "Display the current queue of songs."
    },
    {
      command: "!clear",
      description: "Clear all songs from the queue."
    },
    {
      command: "!remove <position>",
      description: "Remove a specific song from the queue.",
      example: "!remove 3"
    },
    {
      command: "!shuffle",
      description: "Shuffle the songs in the queue."
    },
    {
      command: "!loop",
      description: "Toggle looping for the current song or queue."
    }
  ];
  
  const advancedCommands = [
    {
      command: "!search <query>",
      description: "Search for a song and select from results.",
      example: "!search lo-fi beats"
    },
    {
      command: "!volume <level>",
      description: "Adjust the volume from 0-100%.",
      example: "!volume 75"
    },
    {
      command: "!playlist <url>",
      description: "Load and play a playlist from YouTube or Spotify.",
      example: "!playlist https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
    },
    {
      command: "!lyrics",
      description: "Display lyrics for the currently playing song."
    },
    {
      command: "!effect <name>",
      description: "Apply an audio effect to the playback.",
      example: "!effect bassboost"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="commands" 
      ref={sectionRef}
      className="py-20 px-6 bg-white relative opacity-0 translate-y-10 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 mb-4">
            <Terminal size={14} className="text-twix-chocolate" />
            <span className="text-xs font-medium text-twix-chocolate">Easy Commands</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple commands for powerful control</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Control Twix Bot with intuitive commands designed for smooth operation by all server members.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden max-w-4xl mx-auto">
          <div className="bg-slate-50 p-4 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-mono ml-2 text-slate-500">twix-bot-commands.txt</span>
            </div>
          </div>
          
          <div className="p-6">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="queue">Queue</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="mt-0">
                {basicCommands.map((cmd, index) => (
                  <CommandItem 
                    key={index}
                    command={cmd.command}
                    description={cmd.description}
                    example={cmd.example}
                  />
                ))}
              </TabsContent>
              
              <TabsContent value="queue" className="mt-0">
                {queueCommands.map((cmd, index) => (
                  <CommandItem 
                    key={index}
                    command={cmd.command}
                    description={cmd.description}
                    example={cmd.example}
                  />
                ))}
              </TabsContent>
              
              <TabsContent value="advanced" className="mt-0">
                {advancedCommands.map((cmd, index) => (
                  <CommandItem 
                    key={index}
                    command={cmd.command}
                    description={cmd.description}
                    example={cmd.example}
                  />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mb-4">Want to see all available commands?</p>
          <Button variant="outline" className="border-twix-gold text-twix-chocolate hover:bg-twix-gold/5 rounded-full py-4 px-6">
            View Full Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommandsSection;
