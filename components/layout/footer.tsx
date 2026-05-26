import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Moe Kyaw Aung</h3>
            <p className="text-muted-foreground mb-4">
              Senior Android Developer building exceptional mobile experiences with Kotlin and Jetpack Compose.
            </p>
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-lg hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-lg hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-lg hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 bg-muted rounded-lg hover:bg-primary/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Moe Kyaw Aung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
