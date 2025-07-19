"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  GraduationCap,
  Briefcase,
  User,
  ChevronDown,
  Award,
  ExternalLink,
  Calendar,
  Folder,
  Star,
  Eye,
  FileText,
  Menu,
  X,
} from "lucide-react"

// Enhanced Button Component with new theme
const Button = ({ children, className = "", variant = "default", size = "default", onClick, ...props }: any) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 hover:shadow-2xl active:scale-95 relative overflow-hidden group"

  const variants = {
    default:
      "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/25",
    outline:
      "border-2 border-purple-500 text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 bg-transparent hover:border-purple-600 hover:text-purple-700 hover:shadow-lg hover:shadow-purple-200/50",
    secondary:
      "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 hover:shadow-lg hover:shadow-gray-200/50",
  }

  const sizes = {
    default: "h-12 px-6 py-3 text-sm",
    sm: "h-10 px-4 text-sm",
    lg: "h-14 px-8 text-base",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="relative z-10">{children}</span>
    </button>
  )
}

// Enhanced Card Components with new theme
const Card = ({ children, className = "", ...props }: any) => (
  <div
    className={`rounded-2xl border border-purple-100/50 bg-white/80 backdrop-blur-sm shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:border-purple-200/50 ${className}`}
    {...props}
  >
    {children}
  </div>
)

const CardHeader = ({ children, className = "", ...props }: any) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "", ...props }: any) => (
  <h3
    className={`text-2xl font-bold leading-none tracking-tight transition-colors duration-300 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ${className}`}
    {...props}
  >
    {children}
  </h3>
)

const CardDescription = ({ children, className = "", ...props }: any) => (
  <p className={`text-sm text-gray-600 transition-colors duration-300 ${className}`} {...props}>
    {children}
  </p>
)

const CardContent = ({ children, className = "", ...props }: any) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

// Enhanced Badge Component with new theme
const Badge = ({ children, className = "", variant = "default", ...props }: any) => {
  const variants = {
    default:
      "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-purple-500/25",
    secondary:
      "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-purple-100 hover:to-blue-100 hover:text-purple-800",
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// Enhanced Intersection Observer Hook
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return [setRef, isInView] as const
}

// Enhanced Mouse Trail Effect
const useMouseTrail = () => {
  useEffect(() => {
    const trail = document.getElementById("mouse-trail")
    if (!trail) return

    const handleMouseMove = (e: MouseEvent) => {
      const dots = trail.children
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i] as HTMLElement
        setTimeout(() => {
          dot.style.left = e.clientX + "px"
          dot.style.top = e.clientY + "px"
        }, i * 30)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])
}

// Enhanced Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0, ...props }: any) => {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

// Enhanced Background Effects with new theme
const BackgroundEffects = () => {
  return (
    <>
      {/* Enhanced Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50/30 to-indigo-50/50 animate-gradient-shift"></div>

        {/* Enhanced Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-xl animate-float-reverse"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-2xl animate-float"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-indigo-300/20 to-purple-300/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-3/4 right-1/3 w-28 h-28 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-xl animate-float-reverse"></div>

        {/* Enhanced Geometric Patterns */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-400/40 rotate-45 animate-spin-reverse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-400/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-purple-400/40 rotate-45 animate-spin-reverse"></div>

        {/* Additional geometric shapes */}
        <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-blue-500/30 animate-pulse"></div>
        <div className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-purple-500/30 animate-pulse"></div>

        {/* Enhanced Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q150,50 300,100 T600,100"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M100,0 Q200,150 300,50 T500,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line-reverse"
          />
          <path
            d="M50,200 Q250,100 450,200 T750,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line-delayed"
          />
        </svg>

        {/* Enhanced Particle System */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-16 gap-2 h-full">
            {[...Array(256)].map((_, i) => (
              <div
                key={i}
                className="border border-purple-300 animate-grid-fade"
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Interactive Mouse Trail */}
      <div id="mouse-trail" className="fixed pointer-events-none z-50">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400/40 to-blue-400/40 rounded-full animate-trail"
            style={{ animationDelay: `${i * 0.08}s` }}
          ></div>
        ))}
      </div>
    </>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Add mouse trail hook
  useMouseTrail()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "skills", "certificates", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const skills = {
    tools: ["Microsoft Office", "Microsoft Team", "Github", "MySQL", "Visual Studio Code"],
    hardSkills: [
      "System Analysis",
      "SDLC",
      "Agile & Scrum Methodologies",
      "Programming & Scripting Languages (PHP, Laravel, JavaScript, Node.js, Python, Java, C++, VB .NET)",
      "Database Management (MySQL, SQL Server, PostgreSQL)",
      "Version Control (Git, Github)",
      "Basic Data Analysis (Excel, SQL, Python/Pandas)",
    ],
    softSkills: ["Problem Solving", "Critical Thinking", "Time Management", "Effective Communication"],
    languages: ["Indonesian - Native", "English - Native"],
  }

  const certificates = [
    {
      title: "Front-End Web Developer Expert",
      issuer: "Dicoding Indonesia",
      date: "December 2023",
      credentialId: "81P2V1L9YPOY",
      image: "/placeholder.svg?height=200&width=300&text=Front-End+Expert+Certificate",
      skills: ["HTML", "CSS", "JavaScript", "React", "CI/CD", "Mobile First Approach", "Automation Testing"],
      verifyUrl: "https://www.dicoding.com/certificates/81P2V1L9YPOY",
      type: "online",
    },
    {
      title: "Back-End Application",
      issuer: "Dicoding Indonesia",
      date: "December 2023",
      credentialId: "6RPNVKRMRZ2M",
      image: "/placeholder.svg?height=200&width=300&text=Back-End+Certificate",
      skills: ["Node.js", "NPM", "RESTful API", "Postman"],
      verifyUrl: "https://www.dicoding.com/certificates/6RPNVKRMRZ2M",
      type: "online",
    },
    {
      title: "Front-End and Back-End Kampus Merdeka Batch 5",
      issuer: "Dicoding X Kampus Merdeka",
      date: "December 2023",
      credentialId: "DCD/SIB5/GRAD/XXIII-12/F497YB322",
      image: "/placeholder.svg?height=200&width=300&text=MSIB+Certificate",
      skills: [
        "Javascript",
        "Git",
        "Github",
        "Front-End",
        "Back-End",
        "Soft skill & Career Development",
        "Capstone/Final Project",
      ],
      pdfUrl: "/certificates/MSIB.pdf",
      type: "pdf",
    },
    {
      title: "Python Basic",
      issuer: "Dicoding Indonesia",
      date: "December 2023",
      credentialId: "KEXL805MRZG2",
      image: "/placeholder.svg?height=200&width=300&text=Python+Certificate",
      skills: ["Data", "OOP", "Unit Testing"],
      verifyUrl: "https://www.dicoding.com/certificates/KEXL805MRZG2",
      type: "online",
    },
  ]

  const projects = [
    {
      title: "PATRAN ( Padang Transportasi Rancak )",
      description:
        "A digital map-based web application for visualizing transportation routes in Padang city. Built during internship at Department of Communication and Informatics.",
      image: "/placeholder.svg?height=300&width=400&text=PATRAN+Project",
      technologies: ["Laravel", "Php Native", "CodeIgniter", "MySQL", "Google Maps API", "Bootstrap"],
      category: "Web Application",
      status: "Completed",
      date: "August 2024",
      features: [
        "Interactive map visualization",
        "Route optimization algorithms",
        "Admin panel for managing routes and users",
        "Admin dashboard",
      ],
      githubUrl: "https://github.com/khoirul55/transportation-routes",
      liveUrl: "https://transport-routes-padang.com",
      highlights: ["Government Project", "Team Collaboration", "Production Ready"],
    },
    {
      title: "Edugot",
      description:
        "EduGot is a web-based application designed to address Indonesia's growing household waste problem by introducing an innovative organic waste solution: black soldier fly larvae, also known as maggots.",
      image: "/placeholder.svg?height=300&width=400&text=Edugot+Project",
      technologies: ["Laravel", "Restful API", "MySQL", "Bootstrap", "Javascript"],
      category: "Full Stack",
      status: "Completed",
      date: "December 2024",
      features: [
        "Educational content on maggot-based waste management",
        "Online maggot ordering system",
        "Consultation request feature",
        "Admin dashboard to manage users & orders",
        "Order management system",
      ],
      githubUrl: "https://github.com/khoirul55/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.khoirul.dev",
      highlights: ["Sustainability", "E-commerce Integration", "User Education"],
    },
    {
      title: "Point Of Sale With Fifo Method",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      image: "/placeholder.svg?height=300&width=400&text=POS+FIFO+Project",
      technologies: ["Php Native", "Node.js", "Laravel", "MySQL", "Bootstrap", "Chart.js"],
      category: "Web Application",
      status: "Completed",
      date: "March 2025",
      features: [
        "Inventory management using FIFO logic",
        "Real-time stock tracking",
        "Sales transaction interface (cashier)",
        "Purchase history & reporting",
        "Multi-user access: Manager & Cashier roles",
      ],
      githubUrl: "https://github.com/khoirul55/task-manager",
      liveUrl: "https://taskmanager.khoirul.dev",
      highlights: ["Inventory Logic", "Multi-role System", "Real-time Stock Updates"],
    },
    {
      title: "AHP and TOPSIS-Based Decision Support System for Sunscreen Selection",
      description:
        "A decision support system that combines AHP and TOPSIS methods to assist users in selecting the most suitable sunscreen based on multiple criteria.",
      image: "/placeholder.svg?height=300&width=400&text=AHP+TOPSIS+Project",
      technologies: ["PHP Native", "MySQL", "Node.js", "Chart.js"],
      category: "Web Application",
      status: "Completed",
      date: "Mei 2024",
      features: [
        "Pairwise comparison matrix input (AHP)",
        "Criteria and alternative weight calculation",
        "TOPSIS ranking algorithm implementation",
        "Sunscreen product selection result display",
        "Admin panel to manage data input",
      ],
      githubUrl: "https://github.com/khoirul55/weather-app",
      liveUrl: "https://weather.khoirul.dev",
      highlights: ["Decision Support", "Multi-Criteria Analysis", "Case Study"],
    },
  ]

  const navigationItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />

      {/* Enhanced Navigation with Mobile Support */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-purple-200/50 transition-all duration-300 shadow-lg shadow-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
              KG
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-600 hover:scale-110 relative px-3 py-2 rounded-lg ${
                    activeSection === item.id 
                      ? "text-purple-600 bg-purple-50" 
                      : "text-gray-600 hover:bg-purple-50/50"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-purple-200/50 shadow-xl">
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id 
                        ? "text-purple-600 bg-purple-50" 
                        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50/50"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Enhanced Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 bg-purple-300/20 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-blue-300/20 rounded-full opacity-60 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-indigo-300/20 rounded-full opacity-60 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-200/20 rounded-full opacity-60 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            {/* Enhanced Profile Photo */}
            <div className="relative mb-12">
              {/* Enhanced background decorative elements */}
              <div className="absolute inset-0 -m-6">
                <div className="w-full h-full bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 -m-4">
                <div className="w-full h-full bg-gradient-to-r from-purple-300 to-blue-400 rounded-full opacity-30 animate-ping"></div>
              </div>
              <div className="absolute inset-0 -m-2">
                <div className="w-full h-full bg-gradient-to-r from-purple-200 to-blue-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>

              {/* Main photo container */}
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-full p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-3">
                  <div className="w-full h-full rounded-full p-1 bg-white">
                    <img
                      src="/placeholder.svg?height=300&width=300&text=Khoirul+Gunawan"
                      alt="Khoirul Gunawan"
                      className="w-full h-full rounded-full object-cover shadow-xl hover:shadow-2xl transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Enhanced floating elements */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg animate-bounce"></div>
                <div
                  className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute top-1/2 -right-6 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute top-1/4 -left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: "1.5s" }}></div>
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute inset-0 -m-12 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-indigo-400/20 rounded-full blur-2xl"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
              {["K", "h", "o", "i", "r", "u", "l", " ", "G", "u", "n", "a", "w", "a", "n"].map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block hover:animate-bounce transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent ${
                    letter === " " ? "mx-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>

            <p
              className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 max-w-4xl mx-auto animate-slide-up font-semibold"
              style={{ animationDelay: "0.3s" }}
            >
              Information Systems Graduate | Technology Solution Enthusiast
            </p>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed"
              style={{ animationDelay: "0.6s" }}
            >
              Combining logic, creativity, and empathy to build helpful tools through technology.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.9s" }}
            >
              <Button size="lg" onClick={() => scrollToSection("contact")} className="text-base px-8 py-4">
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")} className="text-base px-8 py-4">
                View My Work
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400 hover:text-purple-600 transition-colors duration-300" />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto animate-expand rounded-full"></div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-purple-50/80 to-blue-50/80 hover:from-purple-100/80 hover:to-blue-100/80 transition-all duration-500 backdrop-blur-sm">
                <CardContent className="p-0">
                  <User className="w-16 h-16 text-purple-600 mb-6 animate-pulse hover:animate-spin transition-all duration-300" />
                  <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-300 mb-6">
                    I am an Information Systems graduate with a passion for creating meaningful and practical solutions
                    through technology. My experience includes designing systems, developing digital tools, and aligning
                    technology with everyday needs in both personal and professional environments.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-300">
                    With a strong foundation in software development and analytical thinking, I enjoy transforming ideas into
                    user-friendly and impactful solutions that solve real-world problems. I combine logic, creativity, and empathy to build technology that is both effective and relevant.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400} className="space-y-6">
              {[
                { icon: MapPin, text: "Padang, West Sumatra 26216", color: "text-purple-600" },
                { icon: Phone, text: "+6285384839718", color: "text-blue-600" },
                { icon: Mail, text: "khoirulgunawan55@email.com", color: "text-indigo-600" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-purple-200/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className={`w-7 h-7 ${item.color} group-hover:scale-125 transition-transform duration-300`} />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-lg">
                    {item.text}
                  </span>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://github.com/khoirul55", "_blank")}
                  className="group flex-1"
                >
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://www.linkedin.com/in/khoirul-gunawan-285300227/", "_blank")}
                  className="group flex-1"
                >
                  <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  LinkedIn
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-gray-50/80 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto animate-expand rounded-full"></div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card className="max-w-5xl mx-auto shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-t-2xl hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 transition-all duration-300 p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <GraduationCap className="w-12 h-12 animate-pulse hover:animate-spin transition-all duration-300 flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-2xl sm:text-3xl text-white mb-2">Bachelor's Degree in Information Systems</CardTitle>
                    <CardDescription className="text-purple-100 text-lg">
                      Universitas Putra Indonesia YPTK Padang
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 p-6 rounded-xl transition-all duration-300 border border-transparent hover:border-purple-200/50">
                    <h4 className="font-bold text-gray-900 mb-3 group-hover:text-purple-700 text-xl">Duration</h4>
                    <p className="text-gray-600 group-hover:text-gray-800 text-lg">September 2021 – May 2025</p>
                  </div>
                  <div className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-6 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200/50">
                    <h4 className="font-bold text-gray-900 mb-3 group-hover:text-blue-700 text-xl">GPA</h4>
                    <p className="text-gray-600 group-hover:text-gray-800 text-lg">3.32/4.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto animate-expand rounded-full"></div>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              {
                icon: Briefcase,
                title: "Programmer - Internship",
                company: "Department of Communication and Informatics, Padang",
                period: "August 2024 – September 2024",
                tasks: [
                  "Developed projects using Laravel & CodeIgniter",
                  "Designed UI and backend for a digital map-based transportation route visualization",
                  "Collaborated in a team using Git and presented results to stakeholders",
                ],
                color: "from-purple-500 to-blue-500",
              },
              {
                icon: Code,
                title: "Divisi Programmer - Member",
                company: "UKM IT Cybernetix, Padang",
                period: "September 2022 – May 2025",
                tasks: [
                  "Developed internal web & mobile-based applications",
                  "Participated in UI/UX design, debugging, and team coding sessions",
                  "Used GitHub, Figma, PHP, and Laravel in collaborative projects",
                ],
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: GraduationCap,
                title: "Front-End and Back-End Developer",
                company: "Independent Study MSIB – Kampus Merdeka Program (Dicoding), Bandung",
                period: "August 2023 – December 2023",
                tasks: [
                  "Learned various web development technologies: HTML, CSS, JavaScript, Node.js, Git, GitHub, REST APIs, SQL & NoSQL databases, and UI/UX design with Figma",
                  "Built a web application with user authentication and REST API integration using Node.js and Express",
                  "Collaborated in a team to complete a final project based on React and APIs, following agile processes",
                  "Completed several classes and certifications from Dicoding as proof of competence",
                ],
                color: "from-indigo-500 to-purple-500",
              },
            ].map((exp, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 group overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${exp.color} text-white group-hover:scale-105 transition-all duration-300 p-6`}>
                    <div className="flex flex-col lg:flex-row items-start justify-between space-y-4 lg:space-y-0">
                      <div className="flex items-start space-x-4 flex-1">
                        <exp.icon className="w-10 h-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <CardTitle className="text-xl sm:text-2xl text-white group-hover:scale-105 transition-transform duration-300">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg text-purple-100 group-hover:text-white transition-colors duration-300 mt-2">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-gray-700">
                      {exp.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-start space-x-3 group/item hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 p-3 rounded-lg transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <span className="group-hover/item:text-purple-700 transition-colors duration-300 text-base leading-relaxed">
                            {task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50/80 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto animate-expand rounded-full"></div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Tools", items: skills.tools, color: "from-purple-600 to-blue-600" },
              { title: "Hard Skills", items: skills.hardSkills, color: "from-blue-600 to-indigo-600" },
              { title: "Soft Skills", items: skills.softSkills, color: "from-indigo-600 to-purple-600" },
              { title: "Languages", items: skills.languages, color: "from-purple-600 to-pink-600" },
            ].map((category, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 group hover:scale-105 h-full">
                  <CardHeader className={`bg-gradient-to-br ${category.color} text-white rounded-t-2xl group-hover:scale-105 transition-all duration-300 p-6`}>
                    <CardTitle className="text-xl text-white group-hover:scale-110 transition-transform duration-300">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 flex-1">
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs animate-fade-in hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 hover:text-purple-800 hover:border-purple-300 transition-all duration-300 px-3 py-1"
                          style={{ animationDelay: `${skillIndex * 50}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certificates Section */}
      <section id="certificates" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Certificates
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto animate-expand rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              Professional certifications and achievements that validate my skills and expertise in web development.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 group overflow-hidden h-full flex flex-col">
                  {/* Certificate Image */}
                  <div className="relative h-56 flex-shrink-0 overflow-hidden">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                        <Award className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                    </div>
                    {cert.type === "pdf" && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-blue-100/90 text-blue-800 shadow-lg">
                          <FileText className="w-3 h-3 mr-1" />
                          PDF
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Certificate Content */}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Header Info */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-purple-600 font-semibold mb-2 text-base">{cert.issuer}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {cert.date}
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">ID: {cert.credentialId}</p>
                    </div>

                    {/* Skills */}
                    <div className="mb-6 flex-1">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 6).map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 hover:text-purple-800 transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {cert.skills.length > 6 && (
                          <Badge variant="secondary" className="text-xs">
                            +{cert.skills.length - 6} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                      {cert.type === "online" && cert.verifyUrl ? (
                        <Button
                          size="sm"
                          onClick={() => window.open(cert.verifyUrl, "_blank")}
                          className="w-full group/btn"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                          Verify Certificate
                        </Button>
                      ) : cert.type === "pdf" && cert.pdfUrl ? (
                        <Button
                          size="sm"
                          onClick={() => window.open(cert.pdfUrl, "_blank")}
                          className="w-full group/btn"
                        >
                          <FileText className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                          View Certificate
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50/80 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto animate-expand rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              A showcase of my recent projects demonstrating my skills in web development, problem-solving, and creative
              thinking.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 group overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800 shadow-lg">
                        <Folder className="w-3 h-3 mr-1" />
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={
                          project.status === "Completed" 
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg" 
                            : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-gray-500 text-sm mb-4">
                            <Calendar className="w-4 h-4 mr-2" />
                            {project.date}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed text-base">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 text-base">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                              <Star className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 text-base">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 hover:text-purple-800 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <Badge
                              key={highlightIndex}
                              variant="default"
                              className="text-xs bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-auto pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="flex-1 group/btn"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="flex-1 group/btn"
                      >
                        <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact\
