import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm sm:flex-row">
        <p>Designed &amp; Built by Shravan Kumar · © {new Date().getFullYear()}</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
