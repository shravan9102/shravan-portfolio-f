import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Skills, Experience, Projects, Education, Certifications } from "@/components/Sections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const ld = { "@context": "https://schema.org", "@type": "Person", name: "Shravan Kumar", jobTitle: "Data Scientist | AI/ML Engineer", email: "mailto:shravan.tec@gmail.com", address: "Indore, Madhya Pradesh, India", sameAs: ["https://www.linkedin.com/in/shravan91/", "https://github.com/shravan9102"] };
export default function Home() {
  return (<><a href="#top" className="sr-only z-[60] rounded bg-accent px-3 py-2 text-ink focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><Nav /><main id="top" tabIndex={-1} className="outline-none"><Hero /><About /><Skills /><Experience /><Projects /><Education /><Certifications /><Contact /></main><Footer /></>);
}
