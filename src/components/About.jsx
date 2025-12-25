import React from 'react';

export default function About() {
  const skills = [
    { category: "Languages", items: "Python, C, C++, Java, JavaScript, HTML/CSS" },
    { category: "Frameworks/Libraries", items: "React, Node.js, Tailwind CSS, NumPy, OpenCV" },
    { category: "AI & Robotics", items: "ML/DL Architectures, Computer Vision, Arduino/Microcontrollers" },
    { category: "Soft Skills", items: "Strategic Problem Solving, Collaborative Teamwork, Technical Communication" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16 bg-[var(--site-bg)]">
      {/* Bio Section */}
      <section className="space-y-6 border-l-2 border-emerald-500/20 pl-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
        <p className="text-lg leading-relaxed text-zinc-400">
          I am currently a first-year undergraduate student studying <span className="text-emerald-400 font-medium">Electronics Engineering (VLSI Design)</span>. 
          <br></br>I enjoy combining hardware theory with software implementation, specifically within the <span className="text-white">healthcare and first-aid sector</span> using ML/DL.
        </p>
      </section>

      {/* Unified Journey Block (Education & Experience) */}
      <section className="p-8 rounded-3xl border border-emerald-500/10 bg-zinc-900/20 space-y-12">
        {/* Experience Sub-section */}
        <div>
          <h3 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-emerald-500/30"></span> Experience
          </h3>
          <div className="pl-4 border-l border-zinc-800">
            <h4 className="text-2xl font-bold text-white">Software Technician</h4>
            <a 
              href="https://uasdtu.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400/80 hover:text-emerald-400 transition-colors"
            >
              UAS-DTU (Unmanned Aerial Systems Lab)
            </a>
            <span className="text-zinc-500 text-sm italic"> • [2025-Present]</span>
            <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
              Contributing to software stacks for autonomous aerial vehicles and system integration.
            </p>
          </div>
        </div>

        {/* Education Sub-section */}
        <div className="space-y-10">
          <h3 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-emerald-500/30"></span> Education
          </h3>
          
          <div className="pl-4 border-l border-zinc-800 space-y-8">
            <div>
              <h4 className="text-xl font-bold text-white">B. Tech in Electronics Engineering (VLSI)</h4>
              <a href="https://www.google.com/maps/place/Delhi+Technological+University/@28.7499533,77.1175194,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0138a74f7da7:0xf09fad683c23bd5d!8m2!3d28.7499533!4d77.1175194!16zL20vMGI1ajdq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer" className="text-emerald-400/80 hover:text-emerald-400 transition-colors">
                Delhi Technological University
              </a>
              <p className="text-zinc-500 text-sm italic mt-1">2025 - Present</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">11th - 12th Grade</h4>
              <a href="https://www.google.com/maps/place/Pace+IIT+%26+Medical+%7C+One+of+the+Best+IIT+JEE+%26+NEET+Institute+in+Palava/@19.1646599,73.0718495,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bf8013ab1c6f:0x5e9387b86f46bded!8m2!3d19.1646549!4d73.0744191!16s%2Fg%2F11rxzgrk4p?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer" className="text-emerald-400/80 hover:text-emerald-400 transition-colors">
                PACE Junior Science College, Mumbai
              </a>
              <p className="text-zinc-500 text-sm italic mt-1">2023 - 2025</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">Secondary Schooling</h4>
              <a href="https://www.google.com/maps/place/Lokhandwala+Foundation+School/@19.1974828,72.8722088,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b76ad325e83b:0xfe2cb9f1f01ef41c!8m2!3d19.1974778!4d72.8747784!16s%2Fm%2F04cwqc6?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer" className="text-emerald-400/80 hover:text-emerald-400 transition-colors">
                Lokhandwala Foundation School, Mumbai
              </a>
              <p className="text-zinc-500 text-sm italic mt-1">2009 - 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive Block */}
      <section className="p-8 rounded-3xl border border-emerald-500/10 bg-zinc-900/20">
        <h3 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-emerald-500/30"></span> Technical Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider italic">
                {skill.category}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}