"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, Mail, Github, Linkedin } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import { personalInfo, skills } from "@/lib/data";

export default function ResumePage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
              <p className="text-2xl text-primary mb-4">{personalInfo.title}</p>
              <p className="text-muted-foreground mb-4">{personalInfo.bio}</p>
              <a href={personalInfo.resumeUrl} download className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                <Download className="w-4 h-4" />
                Download PDF Resume
              </a>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Experience</h2>
                {/* Add experience entries here */}
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Skills</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.map((cat) => (
                    <div key={cat.category}>
                      <h3 className="font-semibold mb-2">{cat.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((s) => (
                          <span key={s.name} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{s.name}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
