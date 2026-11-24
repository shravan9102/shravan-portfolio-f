
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Globe,
  Github,
  GraduationCap,
  Award,
  Briefcase,
  FileText,
  Code2,
  BarChart3,
  Brain,
  Network,
  Sparkles,
  ScanEye,
  Rocket,
  Database,
  Cpu,
} from "lucide-react";

import { Reveal, Section } from "./ui";
import {
  skills,
  experience,
  projects,
  education,
  certifications,
  type Project,
} from "@/lib/data";

const isGithub = (u?: string) =>
  !!u && u.startsWith("https://github.com/");

// Experience company logo / badge component
function Badge({
  name,
  logo,
}: {
  name: string;
  logo?: string;
}) {
  return (
    <div
      className="hidden h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:grid"
      aria-label={`${name} logo`}
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      ) : (
        <Briefcase size={20} className="text-accent" />
      )}
    </div>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <Reveal className="glass max-w-3xl space-y-4 p-6 leading-relaxed">
        <p>
          I&apos;m an entry-level Data Scientist and AI/ML Engineer currently
          pursuing an M.Tech in Computer Science (AI &amp; ML) at Medicaps
          University, with an SGPA of 9.0. I hold a B.E. in Computer Science
          Engineering from RKDF University.
        </p>

        <p>
          I have completed five internships in Data Science and Data
          Analytics, and have hands-on experience with Python, SQL, Machine
          Learning, Deep Learning, NLP, and Generative AI. I enjoy building
          and deploying AI applications end to end using FastAPI, Streamlit,
          and Docker.
        </p>

        <p>
          I&apos;m looking for entry-level roles as a Data Scientist, AI/ML
          Engineer, Machine Learning Engineer, or Generative AI Engineer.
        </p>
      </Reveal>
    </Section>
  );
}

const skillIcons = [
  Code2,
  BarChart3,
  Brain,
  Network,
  Sparkles,
  ScanEye,
  Rocket,
  Database,
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = skillIcons[i % skillIcons.length];

          return (
            <Reveal
              key={s.group}
              delay={i * 0.04}
              className="glass h-full p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/30"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-accent"
                >
                  <Icon size={18} />
                </span>

                <h3 className="font-semibold text-white">{s.group}</h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li key={it} className="chip">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internships"
    >
      <ol className="relative space-y-6 border-l border-white/10 pl-6">
        {experience.map((e, i) => (
          <Reveal key={e.org} delay={i * 0.05}>
            <li className="glass relative flex gap-4 p-5 transition hover:border-accent/30">
              <span className="absolute -left-[33px] top-6 grid h-5 w-5 place-items-center rounded-full bg-ink ring-2 ring-accent">
                <Briefcase size={10} className="text-accent" />
              </span>

              <Badge name={e.org} logo={e.logo} />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-white">
                    {e.role} ·{" "}
                    <span className="text-accent">{e.org}</span>
                  </h3>

                  <span className="text-sm text-slate-400">
                    {e.period} · Remote
                  </span>
                </div>

                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                {e.certificate && (
                  <a
                    href={e.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost mt-4 !py-1.5"
                  >
                    <FileText size={14} />
                    View certificate
                  </a>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function Preview({ p }: { p: Project }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-brand/25 via-navy to-violet/25">
      {p.image && !failed ? (
        <>
          <Image
            src={p.image}
            alt={
              p.isScreenshot
                ? `${p.title} screenshot`
                : `Illustration for ${p.title}`
            }
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            onError={() => setFailed(true)}
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          {!p.isScreenshot && (
            <span className="absolute left-3 top-3 rounded-md bg-ink/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-300 backdrop-blur">
              Illustration
            </span>
          )}
        </>
      ) : (
        <div className="grid h-full place-items-center p-4 text-center">
          <div>
            <Cpu className="mx-auto text-accent/70" />
            <p className="mt-2 text-sm font-medium text-white">
              {p.title}
            </p>
            <p className="text-xs text-slate-400">{p.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const cats = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const [cat, setCat] = useState("All");

  const shown = projects.filter(
    (p) => cat === "All" || p.category === cat
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Projects"
    >
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects"
      >
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`btn ${
              cat === c ? "btn-primary" : "btn-ghost"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} projects
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {shown.map((p) => (
          <article
            key={p.title}
            className="glass group flex flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_40px_-15px_rgba(34,211,238,.35)]"
          >
            <Preview p={p} />

            <div className="mt-5 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">
                {p.title}
              </h3>

              <span className="shrink-0 text-xs text-slate-400">
                {p.date}
              </span>
            </div>

            <span className="mt-1 text-xs font-medium text-accent">
              {p.category}
            </span>

            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
              {p.points.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Technologies"
            >
              {p.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${l.label}: ${p.title} (opens in new tab)`}
                  className={`btn ${
                    l.label === "Official Website"
                      ? "btn-ghost"
                      : "btn-primary"
                  }`}
                >
                  {l.label === "Official Website" ? (
                    <Globe size={14} />
                  ) : (
                    <ExternalLink size={14} />
                  )}
                  {l.label}
                </a>
              ))}

              {isGithub(p.github) && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository: ${p.title} (opens in new tab)`}
                  className="btn btn-ghost"
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}

              {!p.links.length && !isGithub(p.github) && (
                <span className="text-xs text-slate-500">
                  Demo / repository link to be added
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e) => (
          <Reveal key={e.degree} className="glass p-6">
            <GraduationCap className="text-accent" />

            <h3 className="mt-3 font-semibold text-white">
              {e.degree}
            </h3>

            <p>{e.school}</p>

            <p className="text-sm text-slate-400">{e.period}</p>

            <p className="mt-2 font-medium text-accent">
              {e.detail}
            </p>

            <p className="mt-2 text-sm">{e.extra}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <Reveal
            key={c.name}
            className="glass h-full p-5 transition hover:border-violet/40"
          >
            <Award className="text-violet" />

            <h3 className="mt-3 font-medium text-white">
              {c.name}
            </h3>

            <p>{c.issuer}</p>

            <p className="text-xs text-slate-400">{c.date}</p>

            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
              >
                <ExternalLink size={13} />
                View credential
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
