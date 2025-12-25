import React from 'react';

export default function Home() {
  const projects = [
    { 
      title: "Casualty Detection", 
      desc: "Built an OpenCV-based vision system to detect shapes and colors and prioritize casualties.", 
      tags: ["Python", "OpenCV", "Numpy"],
      url: "https://github.com/DK3ROX/UAS-DTU-Recruitment-Test" 
    },
    { 
      title: "Letter \"M\" Detection", 
      desc: "Developed an OpenCV-based system to detect the letter “M” in real time and compute orientation.", 
      tags: ["Python", "OpenCV", "Numpy"],
      url: "https://github.com/DK3ROX/UAS-DTU-Letter-M-Detection" 
    },
    { 
      title: "Line Following Robot", 
      desc: "Built an Arduino-based line-following robot using IR sensors and PWM motor speed control.", 
      tags: ["Arduino", "C++"],
      url: "/LFR Project File.pdf"
    },
    { 
      title: "Autonomous UAV & Rover Development", 
      desc: "Built and calibrated autonomous drones and rovers using Pixhawk flight controllers and Mission Planner for real-time mission orchestration.", 
      tags: ["ArduPilot", "Mission Planner", "Robotics", "Avionics"],
      url: "https://drive.google.com/drive/folders/1bZcBBZdXO-mi2uhsWA2gvodrcHobcesD" 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-32 bg-[var(--site-bg)]">
      {/* Hero Section */}
      <section>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-8 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open for opportunities
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.8] mb-10">
          Hi! I'm <br /> <span className="text-emerald-500">Darsh Kuchhal</span>
        </h1>
        <div className="flex flex-wrap gap-x-4 text-emerald-500/60 font-mono text-sm uppercase tracking-widest mb-10">
          <span>Student</span> | <span>Aspiring Engineer</span> | <span>Tech Enthusiast</span>
        </div>
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
          I am a motivated student with a strong interest in <span className="text-emerald-400">software development</span> and <span className="text-emerald-400">robotics</span>.
        </p>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <h3 className="text-3xl font-bold text-white tracking-tighter italic">Featured Projects</h3>
        
        {/* Alignment Fix: Using items-stretch (default) to ensure row height consistency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a 
              key={i} 
              href={p.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              /* Fix: Added 'flex flex-col h-full' to make the link container fill the grid cell height */
              className="group relative p-8 rounded-3xl border border-emerald-500/10 bg-zinc-900/10 hover:bg-emerald-500/[0.03] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Glow Border Effect */}
              <div className="absolute inset-0 rounded-3xl border border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    →
                  </span>
                </div>

                {/* Fix: Added 'flex-grow' so this pushes the tags to the bottom of the card */}
                <p className="text-zinc-500 mb-6 flex-grow leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}