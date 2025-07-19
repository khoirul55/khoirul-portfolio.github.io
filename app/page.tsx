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
} from "lucide-react"

// Simple Button Component with animations
const Button = ({ children, className = "", variant = "default", size = "default", onClick, ...props }: any) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 hover:shadow-lg active:scale-95"

  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-200",
    outline:
      "border border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent hover:border-emerald-700 hover:text-emerald-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-gray-200",
  }

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-base",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

// Animated Card Components
const Card = ({ children, className = "", ...props }: any) => (
  <div
    className={`rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
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
    className={`text-2xl font-semibold leading-none tracking-tight transition-colors duration-300 ${className}`}
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

// Animated Badge Component
const Badge = ({ children, className = "", variant = "default", ...props }: any) => {
  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// Intersection Observer Hook for scroll animations
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

// Mouse Trail Effect Hook
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
        }, i * 50)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])
}

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0, ...props }: any) => {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

// CV Download Function
const downloadCV = () => {
  // Create a temporary link element
  const link = document.createElement("a")
  link.href = "/cv/Khoirul_Gunawan_CV.pdf" // Path to your CV file
  link.download = "Khoirul_Gunawan_CV.pdf" // Filename for download
  link.target = "_blank"

  // Append to body, click, and remove
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Alternative method using fetch for better browser compatibility
const downloadCVWithFetch = async () => {
  try {
    const response = await fetch("/cv/Khoirul_Gunawan_CV.pdf")
    if (!response.ok) {
      throw new Error("CV file not found")
    }

    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Khoirul_Gunawan_CV.pdf"

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Clean up the URL object
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Error downloading CV:", error)
    // Fallback: open CV in new tab if download fails
    window.open("/cv/Khoirul_Gunawan_CV.pdf", "_blank")
  }
}

// Background Effects Component
const BackgroundEffects = () => {
  return (
    <>
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50 animate-gradient-shift"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-lg animate-float-reverse"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-xl animate-float"></div>

        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-teal-400/30 rotate-45 animate-spin-reverse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-400/30 rotate-45 animate-spin-reverse"></div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q150,50 300,100 T600,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M100,0 Q200,150 300,50 T500,100"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-draw-line-reverse"
          />
        </svg>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border border-emerald-200 animate-grid-fade"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Mouse Trail */}
      <div id="mouse-trail" className="fixed pointer-events-none z-50">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-trail"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

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
      image: "/certificates/front-end web developer expert.png",
      skills: ["HTML", "CSS", "JavaScript", "React", "CI/CD", "Mobile First Approach", "Automation Testing"],
      verifyUrl: "https://www.dicoding.com/certificates/81P2V1L9YPOY",
      type: "online",
    },
    {
      title: "Back-End Application",
      issuer: "Dicoding Indonesia",
      date: "December 2023",
      credentialId: "6RPNVKRMRZ2M",
      image: "/certificates/back-end.png",
      skills: ["Node.js", "NPM", "RESTful API", "Postman"],
      verifyUrl: "https://www.dicoding.com/certificates/6RPNVKRMRZ2M",
      type: "online",
    },
    {
      title: "Front-End and Back-End Kampus Merdeka Batch 5",
      issuer: "Dicoding X Kampus Merdeka",
      date: "December 2023",
      credentialId: "DCD/SIB5/GRAD/XXIII-12/F497YB322",
      image: "/certificates/MSIB.png",
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
      image: "/certificates/python.png",
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
      image: "/projects/patran.png",
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
        "EduGot is a web-based application designed to address Indonesia's growing household waste problem by introducing an innovative organic waste solution: black soldier fly larvae, also known as maggots. These larvae are capable of breaking down organic waste into nutrient-rich compost efficiently.",
      image: "/projects/Edugot.jpg",
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
      image: "/projects/posfifo.png",
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
        "A decision support system that combines AHP and TOPSIS methods to assist users in selecting the most suitable sunscreen based on multiple criteria. Designed as a case study for Warzuqni Official.",
      image: "/projects/ahptopsis.jpg",
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

  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900 hover:text-emerald-600 transition-colors duration-300 cursor-pointer">
              KG
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "education", label: "Education" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "certificates", label: "Certificates" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-emerald-600 hover:scale-110 relative ${
                    activeSection === item.id ? "text-emerald-600" : "text-gray-600"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Enhanced Animations */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-100 rounded-full opacity-20 animate-float-delayed"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            {/* Enhanced Profile Photo */}
            <div className="relative mb-12">
              {/* Background decorative elements */}
              <div className="absolute inset-0 -m-4">
                <div className="w-full h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 -m-2">
                <div className="w-full h-full bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full opacity-30 animate-ping"></div>
              </div>

              {/* Main photo container */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full p-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-3">
                  <div className="w-full h-full rounded-full p-1 bg-white">
                    <img
                      src="/KhoirulGunawan.jpg"
                      alt="Khoirul Gunawan"
                      className="w-full h-full rounded-full object-cover shadow-lg hover:shadow-2xl transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full shadow-lg animate-bounce"></div>
                <div
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-teal-500 rounded-full shadow-lg animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute top-1/2 -right-4 w-4 h-4 bg-cyan-500 rounded-full shadow-lg animate-pulse"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
              <span className="inline-block hover:animate-bounce">K</span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "0.1s" }}>
                h
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "0.2s" }}>
                o
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "0.3s" }}>
                i
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "0.4s" }}>
                r
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "0.5s" }}>
                u
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "0.6s" }}>
                l
              </span>
              <span className="inline-block mx-4"></span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "0.7s" }}>
                G
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "0.8s" }}>
                u
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "0.9s" }}>
                n
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "1.0s" }}>
                a
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "1.1s" }}>
                w
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "1.2s" }}>
                a
              </span>
              <span className="inline-block hover:animate-bounce" style={{ animationDelay: "1.3s" }}>
                n
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              Information Systems Graduate | Technology Solution Enthusiast
            </p>
            <p
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              Combining logic, creativity, and empathy to build helpful tools through technology.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.9s" }}
            >
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 hover:text-emerald-600 transition-colors duration-300" />
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same... */}
      {/* About Section with Staggered Animations */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              About Me
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto animate-expand"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-500">
                <CardContent className="p-0">
                  <User className="w-12 h-12 text-emerald-600 mb-6 animate-pulse hover:animate-spin transition-all duration-300" />
                  <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-300">
                    I am an Information Systems graduate with a passion for creating meaningful and practical solutions
                    through technology. My experience includes designing systems, developing digital tools, and aligning
                    technology with everyday needs in both personal and professional environments. With a strong
                    foundation in software development and analytical thinking, I enjoy transforming ideas into
                    user-friendly and impactful solutions that solve real-world problems.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg mt-4 hover:text-gray-900 transition-colors duration-300">
                    I combine logic, creativity, and empathy to build technology that is both effective and relevant. I
                    am committed to continuous learning, innovation, and collaboration to make technology work better
                    for everyone.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400} className="space-y-6">
              {[
                { icon: MapPin, text: "Padang, West Sumatra 26216" },
                { icon: Phone, text: "+6285384839718" },
                { icon: Mail, text: "khoirulgunawan55@email.com" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group hover:bg-emerald-50 p-3 rounded-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 group-hover:text-emerald-700 transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}

              <div className="flex space-x-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://github.com/khoirul55", "_blank")}
                  className="group"
                >
                  <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://www.linkedin.com/in/khoirul-gunawan-285300227/", "_blank")}
                  className="group"
                >
                  <Linkedin className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  LinkedIn
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              Education
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto animate-expand"></div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card className="max-w-4xl mx-auto shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-8 h-8 animate-pulse hover:animate-spin transition-all duration-300" />
                  <div>
                    <CardTitle className="text-2xl text-white">Bachelor's Degree in Information Systems</CardTitle>
                    <CardDescription className="text-emerald-100">
                      Universitas Putra Indonesia YPTK Padang
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group hover:bg-emerald-50 p-4 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700">Duration</h4>
                    <p className="text-gray-600 group-hover:text-gray-800">September 2021 – May 2025</p>
                  </div>
                  <div className="group hover:bg-emerald-50 p-4 rounded-lg transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700">GPA</h4>
                    <p className="text-gray-600 group-hover:text-gray-800">3.32/4.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section with Staggered Cards */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              Experience
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto animate-expand"></div>
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
              },
            ].map((exp, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="shadow-lg border-0 hover:shadow-2xl transition-all duration-500 group">
                  <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <exp.icon className="w-8 h-8 text-emerald-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        <div>
                          <CardTitle className="text-xl group-hover:text-emerald-700 transition-colors duration-300">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg group-hover:text-gray-700 transition-colors duration-300">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="group-hover:bg-emerald-100 group-hover:text-emerald-800">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2 text-gray-700">
                      {exp.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-start space-x-2 group/item hover:bg-emerald-50 p-2 rounded transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <span className="group-hover/item:text-emerald-700 transition-colors duration-300">
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

      {/* Skills Section with Animated Cards */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              Skills
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto animate-expand"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Tools", items: skills.tools },
              { title: "Hard Skills", items: skills.hardSkills },
              { title: "Soft Skills", items: skills.softSkills },
              { title: "Languages", items: skills.languages },
            ].map((category, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="shadow-lg border-0 hover:shadow-2xl transition-all duration-500 group hover:scale-105">
                  <CardHeader className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-t-lg group-hover:from-emerald-700 group-hover:to-teal-700 transition-all duration-300">
                    <CardTitle className="text-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs animate-fade-in hover:bg-emerald-100 hover:text-emerald-800 hover:border-emerald-300"
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

      {/* Certificates Section - IMPROVED LAYOUT */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              Certificates
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto animate-expand"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my skills and expertise in web development.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="shadow-lg border-0 hover:shadow-2xl transition-all duration-500 group overflow-hidden h-full flex flex-col">
                  {/* Certificate Image */}
                  <div className="relative h-48 flex-shrink-0">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" className="bg-emerald-600 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                    </div>
                    {cert.type === "pdf" && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
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
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-emerald-600 font-semibold mb-1 text-sm">{cert.issuer}</p>
                      <div className="flex items-center text-gray-500 text-xs mb-3">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.date}
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">ID: {cert.credentialId}</p>
                    </div>

                    {/* Skills - Fixed Height */}
                    <div className="mb-6 flex-1">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 6).map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-300"
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

                    {/* Action Button - Always at bottom */}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              Projects
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto animate-expand"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              A showcase of my recent projects demonstrating my skills in web development, problem-solving, and creative
              thinking.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="shadow-lg border-0 hover:shadow-2xl transition-all duration-500 group overflow-hidden h-full">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        <Folder className="w-3 h-3 mr-1" />
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={
                          project.status === "Completed" ? "bg-emerald-600 text-white" : "bg-yellow-500 text-white"
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
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-gray-500 text-sm mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.date}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                              <Star className="w-3 h-3 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <Badge
                              key={highlightIndex}
                              variant="default"
                              className="text-xs bg-emerald-100 text-emerald-800 border-emerald-200"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto animate-expand"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect and create
              something amazing together!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300} className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Email Contact */}
                  <div
                    className="text-center group hover:bg-emerald-50 p-4 rounded-lg transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "mailto:khoirulgunawan55@email.com?subject=Hello%20Khoirul&body=Hi%20Khoirul,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
                        "_blank",
                      )
                    }
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-8 h-8 text-emerald-600 group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      Email
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm">
                      khoirulgunawan55@email.com
                    </p>
                    <p className="text-xs text-emerald-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to send email
                    </p>
                  </div>

                  {/* WhatsApp Contact */}
                  <div
                    className="text-center group hover:bg-emerald-50 p-4 rounded-lg transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://wa.me/6285384839718?text=Hi%20Khoirul,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
                        "_blank",
                      )
                    }
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-8 h-8 text-emerald-600 group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm">
                      +62 853-8483-9718
                    </p>
                    <p className="text-xs text-emerald-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to chat on WhatsApp
                    </p>
                  </div>

                  {/* Location Contact */}
                  <div
                    className="text-center group hover:bg-emerald-50 p-4 rounded-lg transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      window.open("https://www.google.com/maps/search/Padang,+West+Sumatra+26216", "_blank")
                    }
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-8 h-8 text-emerald-600 group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                      Location
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm">
                      Padang, West Sumatra 26216
                    </p>
                    <p className="text-xs text-emerald-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view on Google Maps
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        "mailto:khoirulgunawan55@email.com?subject=Hello%20Khoirul&body=Hi%20Khoirul,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
                        "_blank",
                      )
                    }
                    className="group"
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Send Email
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://wa.me/6285384839718?text=Hi%20Khoirul,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
                        "_blank",
                      )
                    }
                    className="group"
                  >
                    <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Chat on WhatsApp
                  </Button>

                  <Button size="lg" variant="secondary" onClick={downloadCVWithFetch} className="group">
                    <FileText className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Khoirul Gunawan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
