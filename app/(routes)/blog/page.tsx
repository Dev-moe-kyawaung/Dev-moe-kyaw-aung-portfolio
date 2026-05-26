"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import StaggerContainer from "@/components/animations/stagger-container";
import FadeIn from "@/components/animations/fade-in";

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about Android development
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <FadeIn key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <article className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl">📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-muted rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
