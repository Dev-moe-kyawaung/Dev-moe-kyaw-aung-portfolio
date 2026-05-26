"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import { personalInfo, skills } from "@/lib/data";

export default function ResumePage() {
  return (
    <div className="py-20">
