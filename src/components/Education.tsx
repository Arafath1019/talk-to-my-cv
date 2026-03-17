"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Award, ExternalLink, Cloud } from "lucide-react";

export default function Education() {
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
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="education" className="py-24 relative max-w-5xl mx-auto px-6">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] -z-10" />

      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">
          Education & <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Academic background and recognized industry credentials that form the foundation of my engineering expertise.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Education Credentials */}
        <motion.div variants={item} className="bento-card group flex flex-col h-full bg-zinc-900/30">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-zinc-800/50 rounded-xl text-blue-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100">Academic Degrees</h3>
          </div>

          <div className="space-y-8 flex-grow">
            <div className="relative pl-6 border-l border-zinc-700/50">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-500 border-2 border-zinc-900 group-hover:bg-blue-400 transition-colors" />
              <h4 className="text-lg font-bold text-zinc-200">Bachelor of Science (B.Sc.)</h4>
              <p className="text-zinc-400 font-medium mb-1">Chittagong University of Engineering & Technology (CUET)</p>
              <p className="text-zinc-500 text-sm">Computer Science and Engineering</p>
            </div>

            <div className="relative pl-6 border-l border-zinc-700/50">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-600 border-2 border-zinc-900 group-hover:bg-cyan-400 transition-colors" />
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="text-md font-bold text-zinc-200">HSC</h4>
                  <p className="text-zinc-400 text-sm">Dhaka Imperial College</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-zinc-800/80 rounded border border-zinc-700 text-zinc-400">2013-2015</span>
              </div>
            </div>

            <div className="relative pl-6 border-l border-zinc-700/50">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-900 group-hover:bg-zinc-400 transition-colors" />
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="text-md font-bold text-zinc-200">SSC</h4>
                  <p className="text-zinc-400 text-sm">Faizur Rahman Ideal Institute, Dhaka</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-zinc-800/80 rounded border border-zinc-700 text-zinc-400">2009-2013</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Credentials */}
        <motion.div variants={item} className="space-y-6">
          <div className="bento-card relative group overflow-hidden h-48 border-orange-500/20 hover:border-orange-500/40 transform transition-transform">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] group-hover:bg-orange-500/20 transition-all z-0" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-orange-400 shadow-inner">
                  <Cloud className="w-6 h-6" />
                </div>
                <Award className="w-5 h-5 text-zinc-600 group-hover:text-orange-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-100 mt-4 leading-tight">AWS Certified<br/>Cloud Practitioner (CLF-C01)</h3>
                <div className="flex items-center justify-between mt-3 text-sm text-zinc-400">
                  <span className="font-medium text-orange-500/80">Issued: Feb 2022</span>
                  <span className="bg-zinc-800/60 px-2.5 py-1 rounded text-xs select-none">AWS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card relative group overflow-hidden h-48 border-blue-500/20 hover:border-blue-500/40">
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-all z-0" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-blue-400 shadow-inner">
                  <Award className="w-6 h-6" />
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-100 mt-4 leading-tight">Scrum Team Member<br/>Accredited Certification</h3>
                <div className="flex items-center justify-between mt-3 text-sm text-zinc-400">
                  <span className="font-medium text-blue-500/80">Issued: Jul 2021</span>
                  <span className="bg-zinc-800/60 px-2.5 py-1 rounded text-xs select-none">scrum-institute.org</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
