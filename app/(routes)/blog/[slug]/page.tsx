import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogPostById } from "@/lib/data";
import FadeIn from "@/components/animations/fade-in";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [{ slug: "jetpack-compose-best-practices" }, { slug: "folder-structure-android" }, { slug: "kotlin-coroutines-guide" }];
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostById(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <article className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-8 flex items-center justify-center">
              <span className="text-8xl">📝</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              <div className="text-muted-foreground">
                {post.content}
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </div>
  );
}
