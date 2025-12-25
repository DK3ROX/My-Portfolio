import React from 'react';

export default function Contact() {
  const links = [
    { label: "Email", val: "d3kuchhal@gmail.com", url: "mailto:d3kuchhal@gmail.com" },
    { label: "LinkedIn", val: "linkedin.com/in/darsh-kuchhal", url: "https://www.linkedin.com/in/darsh-kuchhal-88726b28b/" },
    { label: "GitHub", val: "github.com/DK3ROX", url: "https://github.com/DK3ROX" },
    { label: "Instagram", val: "@darsh_kuchhal", url: "https://www.instagram.com/darsh_kuchhal/" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 bg-[var(--site-bg)] min-h-[70vh]">
      <h2 className="text-5xl font-bold text-white mb-4 tracking-tight italic">Get in Touch</h2>
      <p className="text-xl text-zinc-500 mb-12">Let's build something extraordinary together.</p>

      <div className="grid grid-cols-1 gap-4">
        {links.map((l) => (
          <a 
            key={l.label} 
            href={l.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-8 rounded-2xl border border-emerald-500/10 bg-zinc-900/5 hover:border-emerald-500/40 hover:bg-emerald-500/[0.02] transition-all group"
          >
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">{l.label}</span>
            <div className="flex justify-between items-center mt-2">
               <p className="text-2xl text-white font-medium">{l.val}</p>
               <span className="text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}