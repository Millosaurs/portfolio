'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import placeholder from './imgs/placeholder.jpg'

const portfolioData = {
  name: "Sharan Shrivatsav",
  title: "Frontend Developer & UI/UX Enthusiast",
  about: `I'm a passionate frontend developer with a keen eye for design. I specialize in creating
          intuitive and performant web applications using cutting-edge technologies.
          With a strong focus on user experience and modern frontend frameworks,
          I bring creativity and technical expertise to every project I undertake.`,
  projects: [
    { id: 1, title: "Project 1", description: "A brief description of the project and its key features.", image: placeholder },
    { id: 2, title: "Project 2", description: "Another exciting project with cutting-edge technology.", image: placeholder },
    { id: 3, title: "Project 3", description: "An innovative solution for common problems.", image: placeholder },
  ],
  recentWork: [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description: "Revamped the user interface and improved the overall user experience of a major e-commerce platform.",
      contribution: "Led the frontend development team, implemented new features, and optimized performance.",
      contributionPercentage: 80,
      timeTaken: "4 months",
      image: placeholder,
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Developed a real-time analytics dashboard with AI-driven insights for a fintech startup.",
      contribution: "Designed and implemented the dashboard UI, integrated with backend APIs, and ensured responsive design.",
      contributionPercentage: 75,
      timeTaken: "3 months",
      image: placeholder,
    },
    {
      id: 3,
      title: "Mobile-First Social Media App",
      description: "Created a mobile-first social media application focused on privacy and user engagement.",
      contribution: "Developed the frontend using React Native, implemented real-time features, and optimized for various device sizes.",
      contributionPercentage: 90,
      timeTaken: "6 months",
      image: placeholder,
    },
  ],
  storeItems: [
    { id: 1, name: "Premium Code Review", price: 99.99, description: "Get a comprehensive code review from a senior frontend developer." },
    { id: 2, name: "1-on-1 Mentoring Session", price: 149.99, description: "Book a personal mentoring session to accelerate your frontend learning." },
    { id: 3, name: "Custom UI/UX Consultation", price: 299.99, description: "Get expert advice on your project's user interface and user experience." },
  ],
}

export default function Component() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cart, setCart] = useState<Array<{ id: number; quantity: number }>>([])

  const displayedProjects = showAllProjects ? portfolioData.projects : portfolioData.projects.slice(0, 3)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const addToCart = (itemId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id: itemId, quantity: 1 }];
      }
    });
  };

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
      <div className="min-h-screen bg-black text-white font-mono">
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
              {portfolioData.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8"
            >
              {portfolioData.title}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Contact Me
              </Button>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </motion.div>
          </div>
        </header>

        <div className="flex">
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
                  <Link href="/projects" className="hover:text-gray-300">Projects</Link>
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

          <main className="flex-1">
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

            <div className="container mx-auto px-4 py-16">
              <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
                id="about"
              >
                <h2 className="text-5xl font-semibold mb-6">About Me</h2>
                <p className="text-lg leading-relaxed">
                  {portfolioData.about}
                </p>
              </motion.section>

              <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-16"
                id="projects"
              >
                <h2 className="text-5xl font-semibold mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {displayedProjects.map((project) => (
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
                            <Button variant="outline" size="sm" className="self-start text-white border-white hover:bg-white hover:text-black">
                              View Project
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <div className="mt-8 text-center">
                  <Button 
                    onClick={() => setShowAllProjects(!showAllProjects)} 
                    className="bg-white text-black  hover:bg-gray-200"
                  >
                    {showAllProjects ? "Show Less" : "View All Projects"}
                  </Button>
                </div>
              </motion.section>

              <motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="mb-16"
  id="recent-work"
>
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12">
    Recent Work
  </h1>
  <div className="space-y-12 sm:space-y-16 md:space-y-24">
    {portfolioData.recentWork.map((work) => (
      <motion.div
        key={work.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-lg bg-black border border-white/10"
        style={{ width: '100%' }}
      >
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] pt-96"> {/* Added pt-16 for padding */}
          <Image
            src={work.image}
            alt={work.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4">
                {work.title}
              </h3>
              <p className="text-gray-300 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm">
                {work.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
                <div className="w-full sm:w-[48%] mb-4 sm:mb-0">
                  <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                    My Contribution:
                  </h4>
                  <p className="text-xs sm:text-sm mb-1">{work.contribution}</p>
                  <div className="mt-2 bg-gray-800 h-2 rounded-full">
                    <div
                      className="bg-white h-full rounded-full"
                      style={{ width: `${work.contributionPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs sm:text-sm mt-1">
                    {work.contributionPercentage}% of project
                  </p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-white/10"></div>
                <div className="w-full sm:w-[48%]">
                  <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                    Time Taken:
                  </h4>
                  <p className="text-xs sm:text-sm">{work.timeTaken}</p>
                </div>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200 text-xs sm:text-sm px-3 py-2">
                Know More
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>




              <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-16"
                id="store"
              >
                <h2 className="text-3xl font-semibold mb-6">Store</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioData.storeItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-black p-6 rounded-lg border border-white/10 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm mb-4">{item.description}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                        <Button 
                          size="sm" 
                          className="bg-white text-black hover:bg-gray-200"
                          onClick={() => addToCart(item.id)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-16 text-center"
                id="contact"
              >
                <h2 className="text-4xl font-bold mb-6">Ready to Start Your Next Frontend Project?</h2>
                <p className="text-xl mb-8">Let's collaborate and bring your UI/UX ideas to life!</p>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Get in Touch
                </Button>
              </motion.section>
            </div>
          </main>
        </div>

        <footer className="bg-black text-white py-8 border-t border-white/10">
          <div className="flex flex-col container mx-auto px-4 text-center justify-between gap-2">
            <p>&copy; 2024 Sharan Shrivatsav. All rights reserved.</p>
            <p>k........</p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}