
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div 
      className={cn(
        "border-b border-slate-200 last:border-0 transition-all duration-300", 
        isOpen ? "pb-6" : "pb-0"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        className="py-6 w-full flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp size={20} className="text-twix-gold flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />
        )}
      </button>
      
      <div 
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-slate-600 pb-2">{answer}</div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "How do I add Twix Bot to my Discord server?",
      answer: (
        <>
          <p>Adding Twix Bot is simple:</p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Click the "Add to Discord" button above</li>
            <li>Select the server you want to add Twix Bot to</li>
            <li>Authorize the required permissions</li>
            <li>Complete the verification (if prompted)</li>
            <li>Once added, use <code className="bg-slate-100 px-1 rounded">!help</code> to get started</li>
          </ol>
        </>
      )
    },
    {
      question: "Is Twix Bot completely free to use?",
      answer: (
        <>
          <p>Twix Bot offers both free and premium tiers:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li className="text-sm"><span className="font-medium">Free Tier:</span> Includes all essential music playback features, basic commands, and standard audio quality</li>
            <li className="text-sm"><span className="font-medium">Premium Tier:</span> Unlocks higher audio quality, unlimited queue length, audio effects, DJ roles, and priority support</li>
          </ul>
          <p className="mt-2 text-sm">The free tier is generous and sufficient for most servers, with no time limits on usage.</p>
        </>
      )
    },
    {
      question: "What music platforms does Twix Bot support?",
      answer: (
        <p>
          Twix Bot supports a wide range of music sources including YouTube, Spotify, SoundCloud, Bandcamp, Twitch streams, 
          direct links, and local files. This means you can seamlessly play music from almost any popular platform without 
          having to switch between different bots.
        </p>
      )
    },
    {
      question: "How many people can listen at once?",
      answer: (
        <p>
          There's no limit to how many members can listen to music played by Twix Bot simultaneously. 
          As long as users are in the voice channel, everyone can enjoy the music. This makes it perfect for 
          community events, gaming sessions, or just hanging out with friends.
        </p>
      )
    },
    {
      question: "Can I control who has permission to use music commands?",
      answer: (
        <>
          <p>Yes, Twix Bot offers robust permission controls:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li className="text-sm">Set up DJ roles that have exclusive control over music playback</li>
            <li className="text-sm">Configure command permissions based on Discord's role system</li>
            <li className="text-sm">Restrict certain commands to specific channels</li>
            <li className="text-sm">Create custom command prefixes for your server</li>
          </ul>
          <p className="mt-2 text-sm">This ensures you have complete control over who can manage the music in your server.</p>
        </>
      )
    },
    {
      question: "What if I need help or have technical issues?",
      answer: (
        <p>
          Twix Bot offers multiple support channels. You can join our official Discord support server
          where our team and community can help troubleshoot issues. Premium users receive priority support
          with faster response times. You can also check our documentation for common issues and solutions.
        </p>
      )
    },
  ];
  
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-twix-gold/10 mb-4">
            <HelpCircle size={14} className="text-twix-gold" />
            <span className="text-xs font-medium text-twix-gold">Questions & Answers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 mx-auto">
            Everything you need to know about Twix Bot. Can't find the answer you're looking for? 
            <a href="#" className="text-twix-gold hover:underline ml-1">Contact our support</a>.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onClick={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
