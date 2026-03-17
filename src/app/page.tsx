import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import SkillsBento from "@/components/SkillsBento";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-50"></div>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-[100px] pointer-events-none -z-20"></div>

      <Hero />
      
      {/* Subtle Divider */}
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8" />
      
      <Experience />
      
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8" />
      
      <SkillsBento />
      
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8" />
      
      <Projects />
      
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8" />
      
      <Education />

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-zinc-800/50 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Yeasin Arafath. Crafted with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
