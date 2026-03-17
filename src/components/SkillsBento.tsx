"use client";

import { motion, Variants } from "framer-motion";
import {
  Database,
  Server,
  Component,
  Cloud,
  BrainCircuit,
  Code,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function SkillsBento() {
  const [highlightedType, setHighlightedType] = useState<string | null>(null);

  useEffect(() => {
    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string; type: string }>;
      if (customEvent.detail.type === "skill") {
        setHighlightedType(customEvent.detail.id);
        setTimeout(() => setHighlightedType(null), 3000);
      }
    };

    globalThis.addEventListener("highlight-item", handleHighlight);
    return () =>
      globalThis.removeEventListener("highlight-item", handleHighlight);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section id="skills" className="py-24 relative max-w-5xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">
          Core <span className="text-gradient">Competencies</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          A blend of software engineering disciplines, focusing on
          high-performance backends, AI integration, and modern cloud
          infrastructure.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
      >
        {/* AI / Data Processing - Large spanning 2 cols */}
        <motion.div
          variants={item}
          className={cn(
            "bento-card relative overflow-hidden group md:col-span-2 flex flex-col justify-end p-8 transition-all duration-500",
            highlightedType === "ai"
              ? "ring-2 ring-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.01]"
              : "",
          )}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0 transition-all duration-500 group-hover:bg-purple-500/20" />
          <BrainCircuit className="w-10 h-10 text-purple-400 mb-6 z-10" />
          <h3 className="text-2xl font-bold text-zinc-100 mb-2 z-10">
            AI & Data Processing
          </h3>
          <p className="text-zinc-400 z-10 max-w-md">
            Leveraging{" "}
            <strong className="text-zinc-200">
              Large Language Models (LLMs)
            </strong>{" "}
            for complex document data extraction systems. Expertise in Prompt
            Engineering and JSON Schema Design for AI outputs.
          </p>
        </motion.div>

        {/* Backend & APIs */}
        <motion.div
          variants={item}
          className="bento-card relative overflow-hidden group flex flex-col p-8"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0 transition-all duration-500 group-hover:bg-blue-500/20" />
          <Server className="w-8 h-8 text-blue-400 mb-auto z-10" />
          <div className="z-10 mt-6">
            <h3 className="text-xl font-bold text-zinc-100 mb-2">
              Backend Dev
            </h3>
            <p className="text-zinc-400 text-sm">
              Spring Boot, FastAPI, Node.js, Express. Secure & scalable RESTful
              APIs.
            </p>
          </div>
        </motion.div>

        {/* Cloud & DevOps */}
        <motion.div
          variants={item}
          className="bento-card relative overflow-hidden group flex flex-col p-8"
        >
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl z-0 transition-all duration-500 group-hover:bg-orange-500/20" />
          <Cloud className="w-8 h-8 text-orange-400 mb-auto z-10" />
          <div className="z-10 mt-6">
            <h3 className="text-xl font-bold text-zinc-100 mb-2">
              Cloud Engine
            </h3>
            <p className="text-zinc-400 text-sm">
              AWS Lambda, DynamoDB, S3, Docker architectures.
            </p>
          </div>
        </motion.div>

        {/* Frontend - Large spanning 2 cols */}
        <motion.div
          variants={item}
          className="bento-card relative overflow-hidden group md:col-span-2 flex justify-between items-end p-8"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] z-0" />
          <div className="z-10 max-w-sm">
            <Component className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-bold text-zinc-100 mb-2">
              Frontend Interfaces
            </h3>
            <p className="text-zinc-400">
              Building dynamic, highly interactive web experiences with{" "}
              <strong className="text-zinc-200">ReactJS, NextJS</strong>, and
              Tailwind CSS.
            </p>
          </div>
          <div className="z-10 hidden md:grid grid-cols-2 gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
            {["React", "Next.js", "Redux", "Sass"].map((skill) => (
              <div
                key={skill}
                className="px-3 py-1 border border-zinc-700 rounded-md text-xs text-zinc-300 backdrop-blur-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Languages */}
        <motion.div
          variants={item}
          className="bento-card md:col-span-3 flex flex-wrap gap-4 items-center justify-center p-6 border-dashed border-zinc-800"
        >
          <Code className="w-5 h-5 text-zinc-500 mr-2" />
          {["Java", "Python", "TypeScript", "JavaScript", "SQL", "PL/SQL"].map(
            (lang) => (
              <span
                key={lang}
                className="px-4 py-2 bg-zinc-900/50 rounded-full text-zinc-300 font-medium text-sm border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                {lang}
              </span>
            ),
          )}
        </motion.div>

        {/* Databases */}
        <motion.div
          variants={item}
          className="bento-card md:col-span-3 flex flex-wrap gap-4 items-center justify-center p-6 bg-zinc-900/20"
        >
          <Database className="w-5 h-5 text-zinc-500 mr-2" />
          {[
            "Oracle Database",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "DynamoDB",
          ].map((db) => (
            <span
              key={db}
              className="text-zinc-400 font-medium text-sm hover:text-blue-400 transition-colors cursor-default"
            >
              {db}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
