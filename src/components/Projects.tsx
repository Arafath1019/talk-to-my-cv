"use client";

import { motion } from "framer-motion";
import { FolderGit2, Cpu, Cloud, Layers, LayoutTemplate, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "AI Document Data Extraction System",
    description: "Developed a Python-based AI application leveraging Large Language Models (LLMs) to automatically extract structured data from diverse financial documents like Bank Statements, CIB Statements, and Invoices using dynamic JSON schemas.",
    tags: ["Python", "LLMs", "JSON Schema", "AI Integration"],
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: 2,
    title: "AWS Serverless Data Pipeline",
    description: "Architected a fully serverless cloud infrastructure on AWS. Automated complex data workflows using Python Lambda functions integrated with DynamoDB, S3, and CloudWatch for high-visibility pipeline traceability.",
    tags: ["AWS Lambda", "DynamoDB", "S3", "CloudWatch", "Python"],
    icon: <Cloud className="w-6 h-6 text-orange-400" />,
    color: "from-orange-500/20 to-transparent",
  },
  {
    id: 3,
    title: "Banking Microservices Architecture",
    description: "Engineered scalable and secure backend systems using Node.js, Express, and TypeScript. Implemented JWT role-based authentication, Redis caching, and RabbitMQ message brokering connected to PostgreSQL.",
    tags: ["Node.js", "TypeScript", "Microservices", "PostgreSQL", "RabbitMQ"],
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: 4,
    title: "Modern Portfolio & Dashboards",
    description: "Built dynamic, responsive client-side applications using Next.js and React. Followed Atomic Design principles to create reusable UI components, integrated Redux and interactive Chart.js visualizations.",
    tags: ["Next.js", "React", "Redux", "Chart.js", "Tailwind CSS"],
    icon: <LayoutTemplate className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500/20 to-transparent",
  },
];

export default function Projects() {
  const [highlightedId, setHighlightedId] = useState<number | null>(null);

  useEffect(() => {
    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string; type: string }>;
      if (customEvent.detail.type === "project") {
        setHighlightedId(Number.parseInt(customEvent.detail.id));
        setTimeout(() => setHighlightedId(null), 3000); // Clear highlight after 3s
      }
    };

    globalThis.addEventListener("highlight-item", handleHighlight);
    return () => globalThis.removeEventListener("highlight-item", handleHighlight);
  }, []);

  return (
    <section id="projects" className="py-24 relative max-w-5xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">
          Key <span className="text-gradient">Architectures</span> & Projects
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Highlighting major systems engineered across enterprise environments, focusing on AI, Cloud, and scalable backend design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className={cn(
               "bento-card group flex flex-col h-full relative overflow-hidden transition-all duration-500",
               highlightedId === project.id ? "ring-2 ring-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.02]" : ""
            )}
          >
            {/* Subtle Gradient Overlay */}
            <div className={cn(
              "absolute -top-32 -right-32 w-64 h-64 bg-linear-to-bl",
              project.color,
              "rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            )} />
            
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:border-zinc-700 transition-colors">
                {project.icon}
              </div>
              <FolderGit2 className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            </div>

            <h3 className="text-xl font-bold text-zinc-100 mb-3">{project.title}</h3>
            <p className="text-zinc-400 text-sm mb-8 grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-zinc-900/40 text-zinc-400 text-xs font-medium rounded-md border border-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Hover indicator line */}
            <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-500 to-cyan-400 w-0 group-hover:w-full transition-all duration-500 ease-out" />
            
            {/* Ask Bot Button */}
            <div className="absolute top-4 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
               <button
                  onClick={(e) => {
                    e.stopPropagation();
                    globalThis.dispatchEvent(
                      new CustomEvent("ask-bot", {
                        detail: `Tell me more about the project: ${project.title}.`,
                      })
                    );
                    globalThis.dispatchEvent(
                      new CustomEvent("highlight-item", {
                        detail: { id: project.id.toString(), type: "project" },
                      })
                    );
                  }}
                  className="p-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 rounded-full border border-blue-500/20 transition-all"
                  title="Ask about this project"
               >
                 <MessageCircle className="w-4 h-4" />
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
