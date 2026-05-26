import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCaseStudyById, getProjectById } from "@/lib/data";
import FadeIn from "@/components/animations/fade-in";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = [
    { slug: "ecommerce-performance" },
    { slug: "banking-app-security" },
    { slug: "ecommerce-app" },
    { slug: "fitness-tracker" },
    { slug: "news-reader" },
    { slug: "task-manager" },
  ];

  return caseStudies;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyById(slug) || getProjectById(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {caseStudy.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              {("subtitle" in caseStudy && caseStudy.subtitle) || caseStudy.description}
            </motion.p>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Challenge</h2>
              <p className="text-muted-foreground">
                {("challenge" in caseStudy && caseStudy.challenge) || "Detailed challenge description"}
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Solution</h2>
              <p className="text-muted-foreground">
                {("solution" in caseStudy && caseStudy.solution) || "Detailed solution description"}
              </p>
            </div>

            {("results" in caseStudy && caseStudy.results) && (
              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Results</h2>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-success font-bold text-lg">✓</span>
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
