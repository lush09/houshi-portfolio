"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getImagePath } from "@/utils/image";

export default function Hero() {
  const [animatedElements, setAnimatedElements] = useState<any[]>([]);

  useEffect(() => {
    const elements = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      x: Math.random() * 50 - 25,
      y: Math.random() * 50 - 25,
      duration: Math.random() * 10 + 10,
    }));
    setAnimatedElements(elements);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 md:pt-16 pb-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {animatedElements.map((el) => (
          <div
            key={el.id}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: el.width,
              height: el.height,
              top: el.top,
              left: el.left,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
          /* initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} */
          >
            <Image
              src={getImagePath("me.jpg")}
              alt="Shigeru Houshi"
              width={150}
              height={150}
              className="rounded-full border-4 border-primary/50 shadow-lg mx-auto mb-8"
            />
          </div>

          <div
          /* initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} */
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-primary leading-tight">
              Full-Stack Web and Mobile Developer
            </h1>
          </div>

          <div
          /* initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }} */
          >
            <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4 sm:px-0">
              I build interactive, and responsive web and mobile applications
              with a focus on user experience.
            </p>
          </div>

          <div
            /* initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }} */
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"
          >
            <Button size="lg" className="group">
              <a href="#projects">View My Works</a>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div
            /* initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }} */
            className="flex justify-center gap-6 mt-12"
          >
            <a
              href="https://github.com/lush09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shigeru-houshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/Cloud.SH11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
