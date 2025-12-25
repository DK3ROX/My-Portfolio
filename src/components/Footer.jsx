export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-900 text-center bg-[var(--site-bg)]">
      <p className="text-zinc-600 text-sm">
        © {new Date().getFullYear()} Darsh Kuchhal. All rights reserved.
      </p>
    </footer>
  );
}