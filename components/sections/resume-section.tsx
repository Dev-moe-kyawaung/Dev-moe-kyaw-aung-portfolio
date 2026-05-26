"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, MapPin, Calendar } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience & Resume
            </h2>
            <p className="text-muted-foreground">
              Professional background and career highlights
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
                <p className="text-primary font-semibold mb-4">{personalInfo.title}</p>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>8+ years experience</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h4 className="text-xl font-semibold mb-6">Work Experience</h4>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="mb-1">
                    <span className="text-sm text-primary font-medium">Senior Android Developer</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Tech Company • 2022 - Present
                  </div>
                  <p className="text-muted-foreground">
                    Leading Android development team, architecting scalable applications, and mentoring junior developers.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full" />
                  <div className="mb-1">
                    <span className="text-sm font-medium">Android Developer</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Startup Inc • 2019 - 2022
                  </div>
                  <p className="text-muted-foreground">
                    Developed multiple award-winning Android apps with 1M+ downloads using Kotlin and MVVM architecture.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full" />
                  <div className="mb-1">
                    <span className="text-sm font-medium">Junior Android Developer</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Digital Agency • 2017 - 2019
                  </div>
                  <p className="text-muted-foreground">
                    Built client applications and learned best practices in Android development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
