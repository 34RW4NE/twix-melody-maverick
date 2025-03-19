
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Music, Sparkles, Star, Play } from 'lucide-react';
import waveformSvg from '../assets/images/waveform.svg';

const HeroSection = () => {
  const waveformRef = useRef<HTMLDivElement>(null);

  // Animated bars for the waveform effect
  const AnimatedBars = () => {
    return (
      <div className="flex items-end gap-[3px] h-12 mb-6">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className={`w-1 bg-twix-gold rounded-full ${
              i % 4 === 0 
                ? "h-8 animate-waveform-1" 
                : i % 3 === 0 
                ? "h-6 animate-waveform-2" 
                : i % 2 === 0 
                ? "h-10 animate-waveform-3" 
                : "h-4 animate-waveform-4"
            }`}
            style={{ 
              animationDelay: `${i * 0.1}s`, 
              opacity: i % 2 === 0 ? 0.8 : 1 
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 px-6 overflow-hidden relative">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-twix-gold/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-twix-gold/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-6 items-center">
        <div className="order-2 md:order-1 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 mb-6 backdrop-blur-sm border border-black/10">
            <div className="w-2 h-2 rounded-full bg-twix-gold animate-pulse" />
            <span className="text-xs font-medium opacity-70">Now serving music</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            The smoothest <br />
            <span className="text-twix-gold inline-block relative">
              music experience
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q75,9 150,5 Q225,0 300,5" stroke="#FFB800" strokeWidth="2" fill="none" />
              </svg>
            </span> <br />
            for Discord
          </h1>
          
          <p className="text-lg opacity-75 mb-8 max-w-lg">
            Twix Bot delivers crystal-clear audio, seamless playback, and intuitive commands to enhance your server's music experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="bg-twix-gold hover:bg-twix-gold/90 text-black rounded-full py-6 px-8 text-md font-medium transition-all group flex items-center">
              <Sparkles size={18} className="mr-2 transition-all group-hover:rotate-12" />
              Add to Discord
            </Button>
            <Button variant="outline" className="border-twix-gold text-twix-chocolate hover:bg-twix-gold/5 rounded-full py-6 px-8 text-md font-medium transition-all group">
              <Play size={18} className="mr-2 transition-transform group-hover:translate-x-1" />
              See it in action
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                  <span className="text-xs font-semibold text-slate-600">{String.fromCharCode(65 + i)}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <Star size={14} className="text-twix-gold fill-twix-gold" />
                <Star size={14} className="text-twix-gold fill-twix-gold" />
                <Star size={14} className="text-twix-gold fill-twix-gold" />
                <Star size={14} className="text-twix-gold fill-twix-gold" />
                <Star size={14} className="text-twix-gold fill-twix-gold" />
              </div>
              <p className="text-xs opacity-75">From 500+ satisfied servers</p>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-twix-gold/30 to-twix-caramel/30 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-gradient-shift"></div>
            <div className="relative bg-white rounded-2xl shadow-xl border border-black/5 p-6 overflow-hidden backdrop-blur-sm">
              <div className="absolute -right-6 -top-6 w-16 h-16 bg-twix-gold/20 rounded-full blur-xl" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
                  <Music size={18} className="text-twix-gold" />
                </div>
                <div>
                  <h3 className="font-semibold">Twix Music Bot</h3>
                  <p className="text-xs opacity-60">Connected to #music-lounge</p>
                </div>
              </div>
              
              <div className="bg-black/5 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium">Now Playing</p>
                  <div className="px-2 py-0.5 rounded-full bg-twix-gold/10 text-twix-gold text-xs font-medium">LIVE</div>
                </div>
                
                <h4 className="font-semibold mb-1">Africa</h4>
                <p className="text-sm opacity-60 mb-3">Toto - Toto IV</p>
                
                <AnimatedBars />
                
                <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-[35%] bg-twix-gold rounded-full" />
                </div>
                
                <div className="flex justify-between text-xs mt-1 opacity-60">
                  <span>1:24</span>
                  <span>4:55</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-black/5 p-3 rounded-lg text-center">
                  <p className="text-sm font-semibold mb-1">Queue</p>
                  <p className="text-xs opacity-60">12 tracks</p>
                </div>
                <div className="bg-black/5 p-3 rounded-lg text-center">
                  <p className="text-sm font-semibold mb-1">Listeners</p>
                  <p className="text-xs opacity-60">8 members</p>
                </div>
              </div>
              
              <div className="text-xs border border-slate-200 rounded-lg p-2">
                <code className="font-mono opacity-70">!play Africa by Toto</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
