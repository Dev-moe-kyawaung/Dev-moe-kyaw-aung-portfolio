"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import { submitContactForm, ContactFormData } from "@/actions/contact";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(data);
      setSubmitResult(result);
      reset();
    } catch (error) {
      setSubmitResult({
        success: false,
        message: error instanceof Error ? error.message : "Failed to submit form",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-error">*</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? "border-error" : "border-border"
                  } bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-error text-sm mt-1">Name is required</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-error">*</span>
                </label>
                <input
                  {...register("email", { required: true, pattern: /^[^s@]+@[^s@]+.[^s@]+$/ })}
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-error" : "border-border"
                  } bg-background focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-error text-sm mt-1">Valid email is required</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? "border-error" : "border-border"
                  } bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-error text-sm mt-1">Message is required</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>

              {submitResult && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitResult.success ? "bg-success/10 text-success" : "bg-error/10 text-error"
                  }`}
                >
                  {submitResult.message}
                </motion.div>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
