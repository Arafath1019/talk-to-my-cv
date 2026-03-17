"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Officer (Software) - IT Development Division",
    company: "Dutch-Bangla Bank PLC",
    period: "August 2025 - Present",
    description: "Leading the development of AI-driven applications and robust backend systems for the banking sector.",
    highlights: [
      "Developing Python-based AI applications using LLMs to extract data from Bank & CIB Statements, NIDs, and Invoices with dynamic JSON schemas.",
      "Architecting Java/Spring Boot backend systems connected to Oracle databases.",
    ],
  },
  {
    id: 2,
    role: "MTO (Software) - IT Development Division",
    company: "Dutch-Bangla Bank PLC",
    period: "August 2024 - August 2025",
    description: "Contributed to core banking applications, focusing on scalable APIs and secure data pipelines.",
    highlights: [
      "Engineered backend systems with Node.js (Express & TypeScript) integrating PostgreSQL and NoSQL databases.",
      "Implemented security best practices including JWT role-based authentication.",
    ],
  },
  {
    id: 3,
    role: "Senior Software Engineer",
    company: "Bangladesh Japan Information & Technology (BJIT) Limited",
    period: "July 2024 - August 2024",
    description: "Designed and optimized serverless cloud infrastructure on AWS.",
    highlights: [
      "Developed serverless applications via AWS Lambda integrating DynamoDB and S3.",
      "Ensured visibility and traceability via logging in AWS CloudWatch.",
    ],
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Bangladesh Japan Information & Technology (BJIT) Limited",
    period: "April 2021 - June 2024",
    description: "Full-stack development experience building high-performance web applications.",
    highlights: [
      "Built dynamic client-side applications using React and Next.js.",
      "Implemented comprehensive state management with Redux and interactive data visualization with Chart.js.",
      "Achieved 1st place in the Web Technology Training under BJIT Academy."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative max-w-5xl mx-auto px-6">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          My journey transitioning from Full-Stack to AI and Cloud Engineering, building solutions for top-tier fintech environments.
        </p>
      </motion.div>

      <div className="relative border-l border-zinc-800/50 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
        {/* Central timeline line for desktop view */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800/50 -translate-x-1/2"></div>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 mt-1.5 md:mt-0 w-5 h-5 rounded-full border-4 border-[#09090b] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />

              {/* Content Card */}
              <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div className="bento-card relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`flex items-center gap-2 text-blue-400 text-sm font-medium mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-100 mb-1">{exp.role}</h3>
                  <div className={`flex items-center gap-2 text-zinc-300 font-medium mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4 text-zinc-500" />
                    {exp.company}
                  </div>
                  
                  <p className="text-zinc-400 mb-6">{exp.description}</p>
                  
                  <ul className={`space-y-3 ${index % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex flex-row items-start gap-3 max-w-md">
                        <ChevronRight className={`w-5 h-5 text-blue-500/50 shrink-0 mt-0.5 ${index % 2 === 0 ? "md:hidden" : ""}`} />
                        <span className={`text-sm text-zinc-400 ${index % 2 === 0 ? "md:text-right" : ""}`}>{highlight}</span>
                        <ChevronRight className={`w-5 h-5 text-blue-500/50 shrink-0 mt-0.5 hidden ${index % 2 === 0 ? "md:block" : ""}`} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Spacer for desktop alignment */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
