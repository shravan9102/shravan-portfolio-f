"use client";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Loader2 } from "lucide-react";
import { Section } from "./ui";
import { profile } from "@/lib/data";
// Formspree form IDs are public by design. The env var wins; the fallback is your form so it still works if the variable is missing at build time.
const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim() || "xaeolkvw";
type State = "idle" | "sending" | "success" | "error";
export default function Contact() {
  const [state, setState] = useState<State>("idle");
  const [err, setErr] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formId || state === "sending") return;
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
      if (!res.ok) { const j = await res.json().catch(() => null); throw new Error(j?.errors?.map((x: { message: string }) => x.message).join(", ") || `Request failed (${res.status})`); }
      setState("success"); form.reset();
    } catch (e) { setErr(e instanceof Error ? e.message : ""); setState("error"); }
  }
  const f = "mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white focus:border-accent focus:outline-none";
  const info = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's Work Together">
      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="space-y-3">
          {info.map(({ icon: I, label, href }) => (
            <li key={label}><a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass flex items-center gap-3 p-4 transition hover:border-accent/40"><I className="text-accent" size={20} />{label}</a></li>))}
        </ul>
        <form onSubmit={onSubmit} className="glass space-y-4 p-6" aria-busy={state === "sending"}>
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
          {["name", "email", "subject"].map((n) => (
            <label key={n} className="block text-sm capitalize">{n}
              <input name={n} type={n === "email" ? "email" : "text"} autoComplete={n === "subject" ? "off" : n} required className={f} /></label>))}
          <label className="block text-sm">Message<textarea name="message" rows={5} required className={f} /></label>
          {!formId && <p role="status" className="text-xs text-amber-300">Form is not configured yet, so it cannot send messages. Please email <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a> directly.</p>}
          <button type="submit" disabled={!formId || state === "sending"} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50">
            {state === "sending" && <Loader2 size={16} className="animate-spin" />}{state === "sending" ? "Sending…" : "Send Message"}</button>
          <p className="text-xs text-slate-400">Prefer email? <a className="text-accent underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p role="status" aria-live="polite" className="text-sm">
            {state === "success" && <span className="text-emerald-400">Thanks! Your message was sent.</span>}
            {state === "error" && <span className="text-red-400">Could not send{err ? ` (${err})` : ""}. Please email me directly.</span>}</p>
        </form>
      </div>
    </Section>
  );
}
