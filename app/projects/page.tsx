'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip"
import Image from "next/image"
import Link from "next/link"
import placeholder from '../imgs/placeholder.jpg'
import { Home, InfoIcon, Briefcase, User } from 'lucide-react' 

export default function Projects() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const portfolioData = {
    name: "My Portfolio",
    title: "Welcome to My Projects",
    about: "Here are some of my featured projects.",
    projects: [
      { id: 1, title: "Project 1", description: "A brief description of the project and its key features.", image: placeholder },
      { id: 2, title: "Project 2", description: "Another exciting project with cutting-edge technology.", image: placeholder },
      { id: 3, title: "Project 3", description: "An innovative solution for common problems.", image: placeholder },
      { id: 4, title: "Project 4", description: "A groundbreaking application pushing the boundaries of tech.", image: placeholder },
      { id: 5, title: "Project 5", description: "An efficient tool designed to streamline workflows.", image: placeholder },
      { id: 6, title: "Project 6", description: "A user-centric platform focused on accessibility.", image: placeholder },
      { id: 7, title: "Project 7", description: "An AI-powered analytics dashboard for business intelligence.", image: placeholder },
      { id: 8, title: "Project 8", description: "A blockchain-based solution for secure digital identity management.", image: placeholder },
      { id: 9, title: "Project 9", description: "An IoT platform for smart home automation and energy efficiency.", image: placeholder },
      { id: 10, title: "Project 10", description: "A machine learning model for predictive maintenance in manufacturing.", image: placeholder },
    ],
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ 
            repeat: 1,
            duration: 0.6,
            ease: "easeInOut"
          }}
          className="text-4xl"
        >
          &lt; &gt;
        </motion.div>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground font-mono">
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://e1.pxfuel.com/desktop-wallpaper/26/610/desktop-wallpaper-full-black-solid-black-amoled.jpg"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
            >
              My projects
            </motion.h1>

          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
        <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: sidebarOpen ? 0 : "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 bottom-0 w-64 bg-black text-white z-50 p-4 border-r border-white/10"
          >
            <Button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 bg-transparent hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </Button>
            <nav className="flex flex-col items-center mt-8 space-y-6">
              <div className="mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="48px"
                  height="48px"
                  fillRule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M37,13l-8,-10l5.5,10l-9.5,9v-17l1,-2l-1.5,0.5l-0.5,-2.5l-0.5,2.5l-1.5,-0.5l1,2v17l-9.5,-9l5.5,-10l-8,10l11,10.5l-11,10.5l12,12l1,1l1,-1l12,-12l-11,-10.5zM14.5,34l8.5,-8.5v17.447zM33.5,34l-8.5,8.947v-17.447z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <ul className="space-y-4 text-center">
                <li>
                  <Link href="/" className="hover:text-gray-300">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300">About</Link>
                </li>
                <li>
                  <Link href="/recent-work" className="hover:text-gray-300">Recent Work</Link>
                </li>
                <li>
                  <Link href="/store" className="hover:text-gray-300">Store</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                </li>
              </ul>
            </nav>
          </motion.aside>
          <Button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-4 left-4 z-40 bg-black text-white hover:bg-white hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
            id="projects"
          >
            <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {portfolioData.projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-lg h-64"
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 hover:opacity-100">
                      <div className="p-6 h-full flex flex-col justify-end">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm mb-4">{project.description}</p>
                        <Button variant="outline" size="sm" className="self-start text-white border-white hover:bg-white hover:text-black glow-button">
                          View Project
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>

        <footer className="bg-black text-white py-8 border-t border-white/20">
          <div className="flex container mx-auto px-4 text-center justify-between">
            <p>&copy; 2024 Sharan Shrivatsav. All rights reserved.</p>
            <p>k........</p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}
