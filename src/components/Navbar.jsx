import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyles = ({ isActive }) => 
    `text-sm font-medium transition-all px-4 py-2 rounded-full ${
      isActive ? "text-emerald-400 bg-emerald-500/10" : "text-zinc-500 hover:text-white"
    }`;

  return (
    <div className="fixed top-6 inset-x-0 max-w-2xl mx-auto z-[100] px-6">
      <nav className="flex items-center justify-between bg-[var(--site-bg)]/60 backdrop-blur-xl border border-emerald-500/10 p-2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.05)]">
        <NavLink to="/" className="pl-6 font-bold text-white tracking-tighter">
          <span className="text-emerald-500">My Resume</span>
        </NavLink>
        
        <div className="flex items-center gap-1">
          <NavLink to="/" className={linkStyles}>Home</NavLink>
          <NavLink to="/about" className={linkStyles}>About</NavLink>
          <NavLink to="/contact" className={linkStyles}>Contact</NavLink>
        </div>
      </nav>
    </div>
  );
}