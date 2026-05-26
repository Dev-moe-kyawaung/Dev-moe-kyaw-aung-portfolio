"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import StaggerContainer from "@/components/animations/stagger-container";
import FadeIn from "@/components/animations/fade-in";

export default function SkillsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive overview of my technical expertise in Android development
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <FadeIn key={category.category}>
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                  {category.category}
                </h2>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}/5
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
