"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code, Figma, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const skills = [
    "JavaScript",
    "HTML/CSS",
    "React",
    "MySQL",
    "WordPress",
    "Figma",
    "Laravel",
    "UI/UX Design",
  ]

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Building responsive and performant web applications with modern technologies.",
    },
    {
      icon: <Figma className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Full Stack Solutions",
      description: "End-to-end development from database design to frontend implementation.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-gray-300">
              I'm a passionate developer with a keen eye for user experience. My goal is to create engaging digital
              experiences that are both functional and beautiful.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a recent Computer Science graduate from Columban College, I've worked on a variety of academic projects from editorial
                websites to learning and fitness mobile applications.
              </p>
              <p>
                I specialize in creating responsive, accessible, and performant web and mobile experiences with a focus on smooth
                and intuitive user interfaces.
              </p>
              <p>
                When I'm not coding, I enjoy playing video games, watching sports (Football, Basketball, Combat, etc.) or experimenting with new technologies.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    {service.icon}
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
