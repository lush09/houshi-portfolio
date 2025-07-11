"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import Image from "next/image";
import { getImagePath } from "@/utils/image";

export default function Projects() {
  const ref = useRef(null);
  const [isInView] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // setIsInView(entry.isIntersecting); // Removed as per edit hint
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "DAILEKTO: A Language Learning Application - 2025",
      description:
        "A school project building a language learning app for the Sambal dialect. Used React Native, Gemma for the LLM, and Firebase for backend/authentication.",
      image: "/dailekto.png",
      tags: ["React Native", "Gemma", "Firebase", "Expo"],
      githubUrl: "https://github.com/lush09/DIALEKTOapp",
      category: "Mobile App",
    },
    {
      id: 2,
      title: "Callio: Gamify Your Fitness Journey - 2024",
      description:
        "A school project to gamify fitness. Used React Native for the mobile app and SQLite for the local database. Focused on the combat system, quizzes, and database design.",
      image: "/callio.png",
      tags: ["React Native", "Expo", "SQLite"],
      githubUrl: "https://github.com/lush09/callio-fitapp",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "Web-based Editorial Platform - 2023",
      description:
        "A school project involving a web-based editorial platform. Handled backend development with PHP and MySQL, and integrated MSAL for SSO. Contributed to the frontend with HTML/CSS and Bootstrap.",
      image: "/tpp.png",
      tags: ["HTML", "CSS", "PHP", "MySQL", "JavaScript", "MSAL", "Bootstrap"],
      githubUrl: null,
      category: "Web App",
    },
    // --- Practice/Experiments ---
    {
      id: 4,
      title: "Social Media Wall Prac",
      description:
        "Used Next.js with Supabase (PostgreSQL) to create a social media wall. Experimented with real-time data and authentication.",
      image: "/mywall.png",
      tags: ["Next.js", "Supabase", "PostgreSQL"],
      githubUrl: "https://github.com/lush09/mywall.git",
      liveUrl: "https://mywall-seven.vercel.app/",
      category: "Practice/Experiments",
    },
    {
      id: 5,
      title: "TicTacToe",
      description:
        "A TicTacToe game using shadcn/ui, Next.js, and Tailwind CSS. Practice for UI libraries and state management.",
      image: "/tictactoe.png",
      tags: ["Next.js", "shadcn/ui", "Tailwind CSS"],
      githubUrl: "https://github.com/lush09/tictactoe",
      liveUrl: "https://tictactoe-ten-blush.vercel.app/",
      category: "Practice/Experiments",
    },
    {
      id: 6,
      title: "Marketplace Prac",
      description:
        "A marketplace practice app using Next.js and Supabase. Focused on authentication, CRUD, and real-time features.",
      image: "/marketplace.png",
      tags: ["Next.js", "Supabase"],
      githubUrl: "https://github.com/lush09/marketplace-task",
      liveUrl: "https://marketplace-task-kappa.vercel.app/",
      category: "Practice/Experiments",
    },
    {
      id: 7,
      title: "E-Commerce Prac",
      description:
        "A fullstack e-commerce practice app using MySQL and React. Practiced backend and frontend integration.",
      image: "/scandi-task.png",
      tags: ["React", "MySQL", "Fullstack"],
      githubUrl: "https://github.com/lush09/fullstack-task",
      liveUrl: "https://scandiweb-fullstack-task-snf4.vercel.app/all",
      category: "Practice/Experiments",
    },
  ];

  const filters = ["All", "Web App", "Mobile App", "Practice/Experiments"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-gray-300">
            Check out some of my recent work
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(4); // Reset to show first 4 projects when filter changes
                }}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <div key={project.id}>
              <Card className="overflow-hidden bg-gray-900 border-gray-800 h-full flex flex-col">
                <div className="relative overflow-hidden group">
                  <div className="relative w-full h-64">
                    <Image
                      src={getImagePath(project.image)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.githubUrl ? (
                        <Button size="sm" variant="secondary" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary" disabled>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" variant="secondary" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="py-4 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-800"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-4">
                  {project.githubUrl ? (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      disabled
                    >
                      View Project
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
