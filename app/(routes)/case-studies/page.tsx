"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import StaggerContainer from "@/components/animations/stagger-container";
import FadeIn from "@/components/animations/fade-in";

export default function CaseStudiesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In-depth analysis of challenging projects and the solutions I implemented
          </p>
        </FadeIn>

        <StaggerContainer className="space-y-8">
          {caseStudies.map((study) => (
            <FadeIn key={study.id}>
              <Link href={`/case-studies/${study.id}`}>
                <div className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <span className="text-sm text-primary font-medium">
                        {study.duration}
                      </span>
                      <h2 className="text-3xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-4">
                        {study.subtitle}
                      </p>
                      <p className="text-muted-foreground mb-6">{study.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <span className="text-success font-bold">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
