
import React, { useRef, useEffect } from 'react';
import { Headphones, Calendar, Sparkles, Disc3, Search, Zap, Bookmark, List, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300",
        "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-twix-gold/10 rounded-lg flex items-center justify-center mb-4 text-twix-gold">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Headphones size={24} />,
      title: "Crystal Clear Audio",
      description: "Experience high-quality audio streaming with optimal bitrates for Discord's platform."
    },
    {
      icon: <Search size={24} />,
      title: "Advanced Search",
      description: "Find any song across multiple platforms including YouTube, Spotify, SoundCloud, and more."
    },
    {
      icon: <List size={24} />,
      title: "Smart Queue System",
      description: "Create, save, and manage playlists with an intuitive queue management system."
    },
    {
      icon: <Disc3 size={24} />,
      title: "DJ Mode",
      description: "Give specific roles DJ permissions to manage music in your server."
    },
    {
      icon: <Calendar size={24} />,
      title: "Scheduled Playback",
      description: "Schedule music sessions for events, meetings, or regular hangouts."
    },
    {
      icon: <Volume2 size={24} />,
      title: "Audio Effects",
      description: "Apply bass boost, nightcore, vaporwave, and other effects to your music."
    },
    {
      icon: <Bookmark size={24} />,
      title: "Smart Recommendations",
      description: "Get personalized music recommendations based on your server's listening history."
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Minimal latency with optimized performance for instantaneous responses."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Sleek Interface",
      description: "Intuitive and beautiful embeds that make controlling your music a pleasure."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-twix-gold/10 mb-4">
            <Sparkles size={14} className="text-twix-gold" />
            <span className="text-xs font-medium text-twix-gold">Premium Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need for perfect <br className="hidden md:block" /> Discord music sessions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Twix Bot combines powerful features with an intuitive interface to deliver the ultimate music experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={100 + (index * 50)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
