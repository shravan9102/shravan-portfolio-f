"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const links = ["about", "skills", "experience", "projects", "education", "certifications", "contact"];
export default function Nav() {
  const [active, setActive] = useState(""); const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    links.forEach((l) => { const el = document.getElementById(l); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-lg">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label="Shravan Kumar, back to top" className="group flex items-center gap-2.5 font-display">
          <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 via-brand to-violet text-sm font-bold text-white shadow-lg shadow-brand/30 transition duration-300 group-hover:rotate-3 group-hover:scale-105">SK</span>
          <span className="whitespace-nowrap text-base font-bold tracking-tight text-white sm:text-lg">Shravan Kumar</span>
        </a>
        <ul className="hidden gap-0.5 lg:flex">
          {links.map((l) => (<li key={l}><a href={`#${l}`} aria-current={active === l ? "page" : undefined}
            className={`rounded-md px-3 py-2 text-sm capitalize transition ${active === l ? "bg-white/10 text-accent" : "hover:text-white"}`}>{l}</a></li>))}
        </ul>
        <button className="grid h-11 w-11 place-items-center rounded-lg hover:bg-white/10 lg:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (<ul id="mobile-menu" className="border-t border-white/10 bg-ink px-5 py-3 lg:hidden">
        {links.map((l) => (<li key={l}><a href={`#${l}`} onClick={() => setOpen(false)} className="block rounded-md px-2 py-3 text-base capitalize hover:bg-white/5 hover:text-white">{l}</a></li>))}</ul>)}
    </header>
  );
}
