"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, ExternalLink, Github, Linkedin, Code2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-12 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 w-full"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Hi, I&apos;m Yeasin Arafath <br />
          <span className="text-gradient">Software Engineer.</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          Dedicated Software Engineer with a proven track record of architecting scalable backend systems, cloud-native solutions, and modern web applications. Expert in <strong className="text-zinc-200">Java, Python,</strong> and <strong className="text-zinc-200">Node.js</strong>, specialized in AI-driven innovation and High-Performance APIs.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
          <a href="mailto:arafath.yeasin1019@gmail.com" className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all">
            <Mail className="w-4 h-4" /> Get in touch
          </a>
          <a href="#experience" className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 px-6 py-3 rounded-full font-semibold hover:bg-zinc-800 hover:text-white transition-all">
            View Experience
          </a>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SocialCard
            href="https://www.linkedin.com/in/yeasin-arafath-2a5293164/"
            icon={<Linkedin className="w-5 h-5 text-blue-400" />}
            title="LinkedIn"
            handle="yeasin-arafath"
          />
          <SocialCard
            href="https://github.com/Arafath1019"
            icon={<Github className="w-5 h-5 text-zinc-300" />}
            title="GitHub"
            handle="@Arafath1019"
          />
          <SocialCard
            href="http://leetcode.com/Arafath1019"
            icon={<Code2 className="w-5 h-5 text-yellow-500" />}
            title="LeetCode"
            handle="Arafath1019"
          />
          <div className="bento-card group flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-green-400" />
              <h3 className="font-medium text-zinc-200">Phone</h3>
            </div>
            <p className="text-sm text-zinc-400">01760927903</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialCard({ href, icon, title, handle }: { href: string; icon: React.ReactNode; title: string; handle: string }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="bento-card group flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        {icon}
        <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
      </div>
      <div>
        <h3 className="font-medium text-zinc-200">{title}</h3>
        <p className="text-sm text-zinc-500 mt-1">{handle}</p>
      </div>
    </Link>
  );
}
