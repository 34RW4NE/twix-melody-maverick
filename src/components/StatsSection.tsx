
import React, { useRef, useEffect, useState } from 'react';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Users, Music, Server, Headphones } from 'lucide-react';

const data = [
  { name: 'Jan', servers: 1200, users: 15000, songs: 28000 },
  { name: 'Feb', servers: 1500, users: 19000, songs: 35000 },
  { name: 'Mar', servers: 2000, users: 26000, songs: 42000 },
  { name: 'Apr', servers: 2400, users: 31000, songs: 48000 },
  { name: 'May', servers: 2700, users: 36000, songs: 55000 },
  { name: 'Jun', servers: 3100, users: 42000, songs: 65000 },
  { name: 'Jul', servers: 3500, users: 48000, songs: 72000 },
  { name: 'Aug', servers: 4200, users: 56000, songs: 86000 },
];

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color, delay }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/,/g, ''));
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          setTimeout(() => {
            if (cardRef.current) {
              cardRef.current.classList.add('opacity-100', 'translate-y-0');
            }
            
            const duration = 2000; // ms
            const interval = 50; // ms
            const steps = duration / interval;
            const increment = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, interval);
          }, delay);
        }
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
  }, [target, delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-center justify-between opacity-0 translate-y-8 transition-all duration-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div>
        <div className="text-2xl font-bold mb-1">{count.toLocaleString()}</div>
        <div className="text-sm text-slate-500">{label}</div>
      </div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
        {icon}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
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

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);
  
  return (
    <section id="stats" className="py-20 px-6 bg-slate-50 relative">
      <div className="absolute -top-10 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-twix-gold/10 mb-4">
            <Server size={14} className="text-twix-gold" />
            <span className="text-xs font-medium text-twix-gold">Growing Fast</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by thousands of Discord servers</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join the community of servers enhancing their Discord experience with Twix Bot.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            icon={<Server size={24} className="text-white" />}
            value="5,000" 
            label="Active Servers" 
            color="bg-blue-500"
            delay={100} 
          />
          <StatCard 
            icon={<Users size={24} className="text-white" />}
            value="875,000" 
            label="Discord Users" 
            color="bg-purple-500"
            delay={200} 
          />
          <StatCard 
            icon={<Music size={24} className="text-white" />}
            value="12,500,000" 
            label="Songs Played" 
            color="bg-twix-gold"
            delay={300} 
          />
          <StatCard 
            icon={<Headphones size={24} className="text-white" />}
            value="2,800,000" 
            label="Listening Hours" 
            color="bg-green-500"
            delay={400} 
          />
        </div>
        
        <div 
          ref={chartRef}
          className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 opacity-0 translate-y-10 transition-all duration-500"
          style={{ transitionDelay: "300ms" }}
        >
          <h3 className="text-xl font-semibold mb-6">Growth Over Time</h3>
          
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="serverGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFB800" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FFB800" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis 
                  tickFormatter={(value) => value.toLocaleString()} 
                  tick={{ fontSize: 12 }} 
                  tickLine={false} 
                  axisLine={false} 
                  width={60}
                />
                <Tooltip 
                  formatter={(value: number) => [value.toLocaleString(), '']}
                  contentStyle={{ 
                    borderRadius: 8, 
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
                    border: '1px solid #f0f0f0' 
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="servers" 
                  stroke="#FFB800" 
                  fillOpacity={1} 
                  fill="url(#serverGradient)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
