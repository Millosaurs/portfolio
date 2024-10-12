'use client'

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Image from "next/image"
import Link from "next/link"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiAngular, SiVuedotjs, SiNextdotjs, SiTailwindcss, SiBootstrap, SiFramer, SiBackbonedotjs } from 'react-icons/si'
import { Home, InfoIcon, Briefcase, User } from 'lucide-react' 

const aboutData = {
  title: "About Me",
  description: `Hi, I'm Sharan Shrivatsav, a Computer Science major with a passion for coding and freelancing. I love coffee and am skilled in various programming languages including JavaScript, HTML, CSS, Next.js, Python, Java, and C++. As a dedicated student and freelancer, I'm continually honing my technical abilities and exploring new opportunities in the tech world.

I specialize in creating sleek, neat, and user-friendly websites that provide satisfaction to both our clients and us. My focus is on designing intuitive interfaces that enhance the user experience while ensuring the aesthetics are modern and appealing. By leveraging the latest technologies and best practices in web development, I aim to deliver high-quality websites that meet the unique needs and goals of each client. My commitment to excellence ensures that every project is completed with precision, attention to detail, and a dedication to customer satisfaction.`,
  image: "https://e1.pxfuel.com/desktop-wallpaper/26/610/desktop-wallpaper-full-black-solid-black-amoled.jpg",
  skills: [
    { name: "HTML/CSS", icon: SiHtml5 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Angular", icon: SiAngular },
    { name: "Vue", icon: SiVuedotjs },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Backbone.js", icon: SiBackbonedotjs },
  ],
  experiences: [
    {
      title: "Freelance Web Developer",
      duration: "2020 - Present",
      description: "Developed multiple websites for clients across various industries, utilizing technologies such as React, Next.js, and Tailwind CSS.",
      subExperiences: [
        {
          title: "E-commerce Website",
          description: "Built a fully functional e-commerce website using Next.js, integrating payment gateways and ensuring a seamless user experience.",
        },
        {
          title: "Portfolio Website",
          description: "Designed and developed a portfolio website for a photographer, showcasing their work in a visually appealing manner.",
        },
      ],
    },
    {
      title: "Student in CS Major",
      duration: "2019 - Present",
      description: "Pursuing a degree in Computer Science, focusing on web development and related technologies.",
      subExperiences: [
        {
          title: "Web Technologies",
          description: "Studied and applied web technologies such as HTML, CSS, JavaScript, and React.",
        },
        {
          title: "Programming Fundamentals",
          description: "Developed a strong foundation in programming principles, data structures, and algorithms.",
        },
      ],
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "I specialize in creating sleek, neat, and user-friendly websites that provide satisfaction to both our clients and us. My focus is on designing intuitive interfaces that enhance the user experience while ensuring the aesthetics are modern and appealing.",
      price: 99.99
    },
    {
      title: "Freelancing",
      description: "As a dedicated student and freelancer, I'm continually honing my technical abilities and exploring new opportunities in the tech world. I have developed multiple websites for clients across various industries, utilizing technologies such as React, Next.js, and Tailwind CSS.",
      price: 149.99
    },
    {
      title: "UI/UX Design",
      description: "I have a keen eye for design and a strong understanding of user experience principles. I can help you create intuitive and visually appealing interfaces for your web applications.",
      price: 299.99
    },
    {
      title: "Code Review",
      description: "Get a comprehensive code review from a senior frontend developer. I'll provide detailed feedback and suggestions to improve the quality of your code.",
      price: 399.99
    },
    {
      title: "1-on-1 Mentoring",
      description: "Book a personal mentoring session to accelerate your frontend learning. I'll provide guidance and support to help you achieve your learning goals.",
      price: 499.99
    },
  ]
}

const SkillCard = ({ skill }: { skill: any }) => (
  <Tooltip>
    <TooltipTrigger>
      <div className="bg-black border border-white/20 rounded-lg p-4 text-center opacity-100 h-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <skill.icon className="text-white text-4xl mb-2" />
        <p className="font-semibold text-white">{skill.name}</p>
      </div>
    </TooltipTrigger>
    <TooltipContent>
      {`${skill.name}`}
    </TooltipContent>
  </Tooltip>
);

const ExperienceCard = ({ experience }: { experience: any }) => (
  <div className="bg-black border border-white/20 rounded-lg p-4 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
    <p className="text-sm mb-4">{experience.duration}</p>
    <p className="text-xs mb-4">{experience.description}</p>
    {experience.subExperiences && (
      <ul className="list-disc pl-5">
        {experience.subExperiences.map((subExperience: { title: string; description: string }) => (
          <li key={subExperience.title} className="text-xs mb-2">
            <strong>{subExperience.title}:</strong> {subExperience.description}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const ServiceCard = ({ service }: { service: any }) => (
  <div className="bg-black border border-white/20 rounded-lg p-4 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
    <p className="text-xs mb-4">{service.description}</p>
    <p className="text-xs mb-4 border-t border-white/20 pt-4">Price: ${service.price}</p>
  </div>
);

export default function About() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)


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
              src={aboutData.image}
              alt="About background"
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              {aboutData.title}
            </motion.h1>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 glow-button shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              Get in Touch
            </Button>
          </div>
        </header>
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
        <section className="py-16">
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
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              Details
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              {aboutData.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </motion.p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aboutData.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
            
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              Experience
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutData.experiences.map((experience) => (
                <ExperienceCard key={experience.title} experience={experience} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutData.services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
            <div className="flex justify-center p-16">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 glow-button shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              Know More
            </Button>
            </div>
          </div>
        </section>
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
