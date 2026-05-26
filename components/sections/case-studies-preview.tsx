"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";

export default function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep dives into challenging projects and how I solved complex problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/case-studies/${study.id}`}>
                <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                  <div className="p-8">
                    <span className="text-sm text-primary font-medium">
                      {study.duration}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {study.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {study.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="text-success">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
