import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ChevronDown, 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  GraduationCap, 
  Briefcase, 
  User, 
  Menu, 
  X,
  FileText,
  CheckCircle2,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'interviews', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Interviews', id: 'interviews' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const projects = [
    {
      title: "ACES HackSeries Website",
      category: "Web Development",
      description: "Official event website for HackSeries supporting 250+ participants. Features session info, registration, and backend data handling using Google AppScript.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Google AppScript"],
      icon: <Code size={24} className="text-blue-400" />
    },
    {
      title: "Computer Eng. Resources Hub",
      category: "Web Development",
      description: "Centralized resource hub for second-year Computer Engineering students. Organizes academic content, notes, and important links in an accessible format.",
      tech: ["HTML", "CSS", "JavaScript", "Google Sites"],
      icon: <Database size={24} className="text-purple-400" />
    },
    {
      title: "Water Quality & Bridge Health",
      category: "IoT System",
      description: "Integrated IoT system to monitor water quality parameters and bridge structural health using sensors and real-time data acquisition.",
      tech: ["IoT", "Embedded C", "Sensors", "Automation"],
      icon: <Cpu size={24} className="text-green-400" />
    },
    {
      title: "Bank Management System",
      category: "System Programming",
      description: "Terminal-based banking system featuring account creation, transactions, and file handling for data persistence.",
      tech: ["C Language", "File Handling", "Modular Programming"],
      icon: <Terminal size={24} className="text-yellow-400" />
    }
  ];

  const skills = {
    languages: ["C", "C++", "Java", "JavaScript", "SQL"],
    web: ["HTML5", "CSS3", "React", "SpringBoot", "Bootstrap"],
    database: ["MySQL", "MongoDB", "PostgreSQL", "JPA"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "Linux"]
  };

  const interviewData = {
    company: "Edgeverve Infosys",
    role: "System Engineer / Trainee",
    rounds: [
      {
        title: "Round 1: Online Assessment (OA)",
        type: "Coding Challenge",
        difficulty: "Medium",
        content: [
          "Duration: 3 Hours",
          "Total Questions: 3 Coding Problems",
          "Q1: Special Prime",
          "Q2: Magic Button",
          "Q3: (Logic/Dynamic Programming)"
        ],
        tips: "You have ample time (3 hours), so focus on optimizing your solution and handling edge cases."
      },
      {
        title: "Round 2: Technical Interview",
        type: "Live Coding & Discussion",
        difficulty: "Medium",
        intro: "A comprehensive round covering Projects, Theory, and Live Coding.",
        sections: [
          {
            name: "HR & General (Warm-up)",
            items: [
              "Introduce yourself (Asked to everyone).",
              "Which is your strongest programming language?",
              "How did you get interested in Software Engineering?",
              "Why did you choose this tech stack for your project?"
            ]
          },
          {
            name: "Project Discussion (Deep Dive)",
            items: [
              "Explain project architecture & APIs used.",
              "What was your specific contribution?",
              "How can you convert this into an AI-based solution?",
              "Database connectivity (JDBC) & Schema details."
            ]
          },
          {
            name: "Technical Theory",
            items: [
              "OOP: Real-world examples, Abstract vs Interface, Wrapper classes.",
              "OS: Ubuntu vs Windows, Shell commands (mkdir), Dynamic Memory.",
              "DB: SQL vs MongoDB, Joins, DDL vs DML, Views.",
              "SE: Agile vs Waterfall, First step of SDLC.",
              "Lang: Diff between Python/Java/C++, Pointers in C."
            ]
          },
          {
            name: "Live Coding: Arrays & Strings",
            items: [
              "Count perfect squares in an array.",
              "Rotate array by one / last position.",
              "Merge two sorted arrays.",
              "Find peak element / Local maxima & minima.",
              "Remove duplicates from string.",
              "Longest sequence of consecutive 1s.",
              "Next palindromic number."
            ]
          },
          {
            name: "Live Coding: Math & Logic",
            items: [
              "Triangular sum / Triangular number.",
              "Sum of prime factors.",
              "Product of range of Fibonacci series.",
              "Sum of numbers in range [1, N] not divisible by X or Y.",
              "Output Qs: Inheritance & Exception Handling."
            ]
          }
        ]
      }
    ],
    preparation: [
      "Prepare your project thoroughly: Know architecture, APIs, DB, and future scope.",
      "Revise OOP + SQL basics: These were asked to EVERY student.",
      "Practice simple DSA: Focus on Arrays, Strings, and Math problems.",
      "Practice speaking your logic: Live coding checks communication too.",
      "Build a clean resume: Don't add anything you can't explain."
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            SG<span className="text-teal-500">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-teal-400 ${activeSection === link.id ? 'text-teal-400' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 absolute w-full shadow-xl">
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-slate-300 hover:text-teal-400 py-2"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 font-medium text-sm animate-fade-in-up">
              👋 Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Soham Gadekar
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-400 font-light">
              Trainee at <span className="text-white font-semibold">Edgeverve Infosys</span>
            </h2>
            <p className="text-slate-400 max-w-lg leading-relaxed">
              A passionate Computer Engineering student and developer with a knack for building web applications, IoT systems, and leading technical communities.
            </p>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/SOHAM-GADEKAR" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all hover:scale-110 border border-slate-700"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/soham-gadekar/" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-full transition-all hover:scale-110 border border-blue-500/30"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:sohamg.3456@gmail.com"
                className="p-3 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-full transition-all hover:scale-110 border border-teal-500/30"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="pt-6 flex gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-teal-500/25"
              >
                Contact Me
              </button>
              <button 
                onClick={() => scrollToSection('interviews')}
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all"
              >
                Interview Exp.
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center relative">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-2xl rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden shadow-2xl">
                 <div className="text-center p-8">
                   <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">👨‍💻</div>
                   <h3 className="text-xl font-bold text-white">Soham Gadekar</h3>
                   <p className="text-teal-400 text-sm mt-1">Full Stack Developer</p>
                   <div className="mt-6 flex flex-wrap justify-center gap-2">
                     <span className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-400">React</span>
                     <span className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-400">Java</span>
                     <span className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-400">IoT</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-slate-500" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I am currently pursuing my <strong className="text-white">Bachelor of Engineering in Computer Engineering</strong> at Dr. D. Y. Patil Institute of Technology, Pune, with a CGPA of <span className="text-teal-400">8.54/10</span>.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently, I am working as a <strong className="text-white">Trainee at Edgeverve Infosys</strong>, gaining real-world industry experience. My journey involves a blend of technical development and leadership roles, having served as the <strong className="text-white">Sr. Technical Head for ACES</strong> and <strong className="text-white">Head Coordinator for Team RISE</strong>.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I thrive on solving complex problems, whether it's building dynamic web applications, designing IoT solutions for environmental monitoring, or organizing large-scale technical events for students.
              </p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-teal-400" /> Education
              </h3>
              <div className="space-y-4">
                <div className="relative pl-6 border-l-2 border-slate-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500"></div>
                  <h4 className="font-bold text-white">B.E. Computer Engineering</h4>
                  <p className="text-sm text-slate-400">Dr. D. Y. Patil Institute of Technology</p>
                  <p className="text-xs text-teal-400 mt-1">2022 - 2026</p>
                  <p className="text-xs text-slate-500 mt-1">CGPA: 8.54/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Edgeverve */}
            <div className="group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-all hover:shadow-2xl hover:shadow-teal-500/10">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Trainee</h3>
                    <p className="text-slate-400">Edgeverve Infosys</p>
                  </div>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm font-medium w-fit h-fit">
                  Present
                </span>
              </div>
              <p className="text-slate-300">
                Gaining hands-on experience in enterprise software development and industry best practices within a leading technology environment.
              </p>
            </div>

            {/* ACES */}
            <div className="group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-all hover:shadow-2xl hover:shadow-teal-500/10">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sr. Technical Head</h3>
                    <p className="text-slate-400">Association of Computer Eng. Students (ACES)</p>
                  </div>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 bg-slate-700 text-slate-300 rounded-full text-sm font-medium w-fit h-fit">
                  2024 - Present
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Built and maintained club event websites for registrations and outreach.</li>
                <li>Conducted technical sessions on Web Development and Git for 300+ students.</li>
                <li>Improved club visibility through SEO optimization and enhanced web presence.</li>
              </ul>
            </div>

            {/* Team RISE */}
            <div className="group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-all hover:shadow-2xl hover:shadow-teal-500/10">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-600/20 rounded-lg text-red-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Head Coordinator</h3>
                    <p className="text-slate-400">Team RISE (Social Activity Club)</p>
                  </div>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1 bg-slate-700 text-slate-300 rounded-full text-sm font-medium w-fit h-fit">
                  2025 - Present
                </span>
              </div>
              <p className="text-slate-300">
                Led planning and execution of social impact initiatives and encouraged student participation in civic awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Experience Section */}
      <section id="interviews" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interview Experience</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-4">My journey and insights to help future students.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Company Badge */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full md:w-1/3 shadow-lg">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">{interviewData.company}</h3>
                <p className="text-teal-400 font-medium mb-4">{interviewData.role}</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Rounds</span>
                    <span className="text-white">2 Rounds</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span>Round 1</span>
                    <span className="text-white">Online Assessment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Round 2</span>
                    <span className="text-white">Technical + Code</span>
                  </div>
                </div>
              </div>

              {/* Rounds Details */}
              <div className="w-full md:w-2/3 space-y-6">
                
                {/* Round 1 Card */}
                <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden hover:border-teal-500/50 transition-all">
                  <div className="p-6 border-b border-slate-800 bg-slate-800/50 flex justify-between items-center">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <FileText className="text-teal-400" size={20} />
                      {interviewData.rounds[0].title}
                    </h4>
                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs rounded-full">
                      {interviewData.rounds[0].difficulty}
                    </span>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-4">
                      {interviewData.rounds[0].content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="text-teal-500 mt-1 shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-slate-800/50 p-4 rounded-lg flex gap-3 items-start">
                      <HelpCircle className="text-yellow-500 shrink-0 mt-1" size={18} />
                      <p className="text-sm text-slate-400 italic">
                        <strong className="text-slate-200 not-italic">Pro Tip: </strong> 
                        {interviewData.rounds[0].tips}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Round 2 Card */}
                <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden hover:border-teal-500/50 transition-all">
                  <div className="p-6 border-b border-slate-800 bg-slate-800/50 flex justify-between items-center">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Code className="text-blue-400" size={20} />
                      {interviewData.rounds[1].title}
                    </h4>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                      {interviewData.rounds[1].difficulty}
                    </span>
                  </div>
                  
                  <div className="divide-y divide-slate-800">
                    {interviewData.rounds[1].sections.map((section, sIdx) => (
                      <div key={sIdx} className="p-6">
                        <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${sIdx === 0 ? 'bg-purple-500' : sIdx === 1 ? 'bg-teal-500' : sIdx === 2 ? 'bg-blue-500' : sIdx === 3 ? 'bg-orange-500' : 'bg-red-500'}`}></div>
                          {section.name}
                        </h5>
                        <div className="grid md:grid-cols-2 gap-3">
                          {section.items.map((q, qIdx) => (
                            <div key={qIdx} className="bg-slate-800 p-3 rounded border border-slate-700 text-sm text-slate-300 hover:text-white transition-colors">
                              {q}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preparation Guide Card */}
                 <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl border border-teal-500/30 overflow-hidden">
                  <div className="p-6 border-b border-slate-800/50 flex items-center gap-2">
                    <Lightbulb className="text-yellow-400" size={20} />
                    <h4 className="text-lg font-bold text-white">How to Prepare for Next Year</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {interviewData.preparation.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-teal-500 transition-all hover:-translate-y-2 duration-300 flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-800 rounded-lg">
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full border border-slate-700">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-teal-500/10 text-teal-400 text-xs rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-lg font-bold text-white capitalize mb-4 border-b border-slate-700 pb-2">
                  {category === 'web' ? 'Web Technologies' : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-teal-500 hover:text-teal-400 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-slate-900 to-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto">
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:sohamg.3456@gmail.com" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 group">
              <Mail className="w-8 h-8 text-teal-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300">sohamg.3456@gmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/soham-gadekar/" target="_blank" rel="noreferrer" className="flex flex-col items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 group">
              <Linkedin className="w-8 h-8 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300">LinkedIn Profile</span>
            </a>
          </div>

          <a 
            href="https://github.com/SOHAM-GADEKAR" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold rounded-lg transition-all"
          >
            <Github size={20} />
            Check out my GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800 bg-slate-900">
        <p>© {new Date().getFullYear()} Soham Gadekar. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;