"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, FolderGit2 } from "lucide-react";
import { profile } from "@/lib/data";
function useTyping(words: string[]) {
  const [i, setI] = useState(0); const [n, setN] = useState(0); const [del, setDel] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => { setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  useEffect(() => {
    if (reduced) return;
    const w = words[i]; let t: ReturnType<typeof setTimeout>;
    if (!del && n < w.length) t = setTimeout(() => setN(n + 1), 80);
    else if (!del) t = setTimeout(() => setDel(true), 1400);
    else if (n > 0) t = setTimeout(() => setN(n - 1), 40);
    else { setDel(false); setI((i + 1) % words.length); }
    return () => clearTimeout(t);
  }, [n, del, i, words, reduced]);
  return reduced ? words.join(" · ") : words[i].slice(0, n);
}
function NeuralVisual() {
  const layers = [[60, 140, 220, 300], [40, 110, 180, 250, 320], [90, 160, 230, 300], [150, 230]];
  const xs = [50, 150, 250, 350];
  return (
    <svg viewBox="0 0 400 360" role="img" aria-label="Abstract neural network illustration" className="w-full max-w-md">
      {layers.slice(0, -1).map((l, a) => l.map((y1, b) => layers[a + 1].map((y2, c) => (
        <line key={`${a}${b}${c}`} x1={xs[a]} y1={y1} x2={xs[a + 1]} y2={y2} stroke="#3b82f6" strokeOpacity=".25" />))))}
      {layers.map((l, a) => l.map((y, b) => (
        <motion.circle key={`${a}-${b}`} cx={xs[a]} cy={y} r="9" fill={a % 2 ? "#8b5cf6" : "#22d3ee"} fillOpacity=".85"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: (a + b) * 0.3 }} />)))}
    </svg>
  );
}
export default function Hero() {
  const typed = useTyping(profile.roles);
  return (
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm text-accent">Hello, I&apos;m</p>
        <h1 className="mt-2 text-5xl font-bold text-white sm:text-6xl">{profile.name}</h1>
        <p className="mt-3 text-lg text-slate-400">{profile.title}</p>
        <p className="mt-4 h-8 text-xl font-medium text-white" aria-live="off">{typed}<span className="ml-0.5 animate-pulse text-accent">|</span></p>
        <p className="mt-4 max-w-xl text-slate-400">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary"><FolderGit2 size={16} />View My Projects</a>
          <a href="/resume.pdf" download="Shravan_Kumar_Data_Scientist_AI_ML_Engineer.pdf" className="btn btn-ghost"><Download size={16} />Download Resume</a>
          <a href="#contact" className="btn btn-ghost"><Mail size={16} />Contact Me</a>
        </div>
        <div className="mt-6 flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent"><Linkedin /></a>
        </div>
      </motion.div>
      <div className="glass flex items-center justify-center p-6"><NeuralVisual /></div>
    </section>
  );
}
