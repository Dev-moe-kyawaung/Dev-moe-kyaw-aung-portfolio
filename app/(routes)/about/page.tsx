import { motion } from "framer-motion";
import {personalInfo, skills } from "@/lib/data";
import FadeIn from "@/components/animations/fade-in";

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground mb-8">{personalInfo.bio}</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Quick Info</h2>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-muted-foreground">Name</dt>
                    <dd className="font-medium">{personalInfo.name}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Title</dt>
                    <dd className="font-medium">{personalInfo.title}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-medium">{personalInfo.location}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Email</dt>
                    <dd className="font-medium">{personalInfo.email}</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Expertise</h2>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">✓ Android Development (8+ years)</li>
                  <li className="flex items-center gap-2">✓ Kotlin & Jetpack Compose</li>
                  <li className="flex items-center gap-2">✓ Clean Architecture</li>
                  <li className="flex items-center gap-2">✓ Team Leadership</li>
                  <li className="flex items-center gap-2">✓ Code Review & Mentoring</li>
                </ul>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">My Journey</h2>
              <p className="text-muted-foreground mb-4">
                I started my Android development journey in 2017, beginning with Java and XML layouts. 
                As Android evolved, I embraced Kotlin from day one and have been passionate about it ever since.
              </p>
              <p className="text-muted-foreground mb-4">
                When Jetpack Compose was announced, I immediately started experimenting with it and 
                now consider it my primary UI toolkit. I believe in writing clean, maintainable code 
                and following best practices in Android development.
              </p>
              <p className="text-muted-foreground">
                Outside of work, I contribute to open-source projects, write technical blog posts, 
                and mentor aspiring Android developers. I&apos;m always learning and staying updated 
                with the latest Android developments.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
