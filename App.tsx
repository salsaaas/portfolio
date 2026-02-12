import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Linkedin,
  Mail,
  ChevronRight,
  FileText,
  MapPin,
  Briefcase,
  BookOpen,
  Award,
  ArrowUpRight,
  Sparkles,
  Zap,
  TrendingUp,
} from 'lucide-react';
import {
  PROJECTS,
  EXPERIENCES,
  HIGHLIGHTS,
  PUBLICATION,
  HARD_SKILLS,
  SOFT_SKILLS,
  EMAIL,
} from './constants';

// ✅ Pastikan link LinkedIn sesuai yang kamu mau (dipakai di seluruh file)
const LINKEDIN_URL = 'https://www.linkedin.com/in/salsabila-ss/';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publication', href: '#publication' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-base md:text-xl font-bold tracking-tight text-slate-900 inline-flex items-center max-w-[68vw] md:max-w-none"
          onClick={() => setIsOpen(false)}
        >
          <span className="truncate">Salsabila Septi Sukmayanti</span>
          <span className="ml-2 inline-block w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ✅ CTA kanan: LinkedIn menonjol + Hire Me */}
          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 inline-flex items-center gap-2"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* ✅ Mobile CTA biar jelas juga */}
          <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-5 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="w-full px-5 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Mail size={20} />
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1.5 bg-blue-600 mt-6 rounded-full mx-auto"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 overflow-visible">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles size={14} className="mr-2" />
            AI & Data Science Professional
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
            Better decisions start with <span className="text-blue-600">Data and AI.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8">
            Machine Learning • Forecasting • Analytics • Stakeholder Collaboration
          </p>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
            Informatics graduate focused on building practical AI solutions and transforming complex data into decision-ready insights—
            from forecasting and analytics to cross-team execution.
          </p>

          {/* Central Profile Image with Animated Floating Badges */}
          <div className="relative inline-block mb-16 group">
            <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-10 rounded-full scale-150 -z-10"></div>

            <div className="relative w-64 h-80 md:w-80 md:h-[420px] mx-auto rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-10 transition-all duration-500 group-hover:shadow-blue-200">
              <img
                src="/profile_photo.png"
                alt="Salsabila Septi Sukmayanti"
                className="object-cover w-full h-full transition-all duration-700 scale-105 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
                }}
              />
            </div>

            {/* Badge 1 */}
            <div className="absolute top-10 -left-10 md:-left-32 animate-float z-20">
              <div className="bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Award size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Academic Honors</p>
                  <p className="text-sm font-bold text-slate-900">Cum Laude • GPA 3.86/4.00</p>
                </div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="absolute top-36 -right-20 md:top-28 md:-right-60 animate-float-delayed z-20">
              <div className="bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                  <TrendingUp size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Research Publication</p>
                  <p className="text-sm font-bold text-slate-900">International Publication (Scopus Q3)</p>
                </div>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="absolute -bottom-8 -right-2 md:-bottom-10 md:-right-24 animate-float-slow z-20">
              <div className="bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Zap size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Professional Program</p>
                  <p className="text-sm font-bold text-slate-900">Machine Learning Cohort Bangkit'24</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 mt-4">
            <a
              href="#contact"
              className="px-16 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:translate-y-[-4px] hover:shadow-2xl transition-all shadow-xl shadow-slate-200 text-lg"
            >
              Get in Touch
            </a>

            <div className="flex items-center gap-6">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-50 rounded-2xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="p-4 bg-slate-50 rounded-2xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100"
                aria-label="Email"
                title="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all text-center"
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <div className="font-bold text-slate-900 text-sm mb-1">{h.label}</div>
                <div className="text-slate-500 text-xs">{h.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="About Me" />

          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            I’m a data-driven professional with an Informatics background, experienced in delivering end-to-end solutions—
            from data preparation and modeling to clear communication of results for business decisions.
          </p>

          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            I enjoy bridging technical teams and stakeholders by translating complex analyses into actionable insights,
            ensuring AI and analytics solutions are practical, measurable, and aligned with business objectives.
          </p>

          <p className="text-xl text-slate-600 leading-relaxed">
            With strong ownership and teamwork experience, I’m interested in applying forecasting, machine learning, and analytics
            to drive growth and operational efficiency—especially in FMCG, beauty, and technology industries.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of my work in data forecasting, computer vision, and process automation."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Briefcase size={20} />
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Problem</h4>
                    <p className="text-slate-600 line-clamp-2">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Approach</h4>
                    <p className="text-slate-600 line-clamp-2">{project.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Result</h4>
                    <p className="text-slate-600 line-clamp-2">{project.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    Case Study
                  </button>
                  <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-400 text-sm font-bold rounded-xl cursor-not-allowed">
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Section */}
      <section id="publication" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Research & Publications" subtitle="Academic contributions in utility consumption analytics." />
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                  Featured Paper
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{PUBLICATION.title}</h3>
                <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-400">
                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-blue-500" />
                    <span>{PUBLICATION.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-blue-500" />
                    <span>{PUBLICATION.contribution}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Methodology</p>
                    <p className="text-slate-300">{PUBLICATION.method}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Key Result</p>
                    <p className="text-slate-300">{PUBLICATION.result}</p>
                  </div>
                </div>
                <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-blue-50 transition-all flex items-center gap-2">
                  Read on Scopus
                  <ArrowUpRight size={20} />
                </button>
              </div>
              <div className="hidden lg:block w-1/3">
                <div className="aspect-[3/4] bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-12 h-1 bg-slate-700 mb-8"></div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <div
                        key={n}
                        className={`h-2 bg-slate-700 rounded-full ${n % 2 === 0 ? 'w-full' : 'w-2/3'}`}
                      ></div>
                    ))}
                  </div>
                  <div className="mt-12 w-full aspect-square bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <MapPin size={40} className="text-blue-600 opacity-30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Experience" />
          <div className="space-y-6">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-blue-100 transition-colors"
              >
                <div className="md:w-1/4">
                  <p className="text-blue-600 font-bold text-sm mb-2">{exp.period}</p>
                  <h4 className="text-xl font-bold text-slate-900">{exp.company}</h4>
                </div>
                <div className="flex-1">
                  <h5 className="text-xl font-semibold text-slate-800 mb-4">{exp.role}</h5>
                  <ul className="space-y-3">
                    {exp.impacts.map((impact, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-600">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Expertise & Skills" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600">
                  <BookOpen size={20} />
                </div>
                Hard Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {HARD_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-slate-50 border border-slate-100 text-slate-700 font-medium rounded-2xl hover:border-blue-200 hover:bg-blue-50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Briefcase size={20} />
                </div>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {SOFT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-slate-50 border border-slate-100 text-slate-700 font-medium rounded-2xl hover:border-blue-200 hover:bg-blue-50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Education" />
          <div className="max-w-3xl mx-auto text-left">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-200">
                  <BookOpen size={30} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Telkom University</h3>
                  <p className="text-xl text-slate-600 mb-4">Informatics</p>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-full text-slate-900 font-bold">
                    GPA 3.86 / 4.00
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <span className="text-blue-600 uppercase text-xs">Cum Laude</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader
                title="Let's Collaborate"
                subtitle="Open to roles, projects, and collaborations—especially where data and AI can drive measurable business impact."
              />
              <div className="space-y-8 mb-12">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="text-xl font-bold text-slate-900">{EMAIL}</p>
                  </div>
                </a>

                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">LinkedIn</p>
                    <p className="text-xl font-bold text-slate-900">Salsabila Septi Sukmayanti</p>
                  </div>
                </a>
              </div>
              <p className="text-lg text-slate-500 font-medium italic">“Let’s build something impactful with data.”</p>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:${EMAIL}?subject=Portfolio%20Inquiry%20-%20Salsabila%20Septi%20Sukmayanti`;
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-tight">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-tight">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-tight">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:translate-y-[-2px] hover:shadow-xl transition-all flex items-center justify-center gap-3"
                >
                  Send Message
                  <ChevronRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 font-medium">© {new Date().getFullYear()} Salsabila Septi Sukmayanti</p>
          <div className="flex gap-10">
            <a href="#about" className="text-sm font-bold text-slate-900 hover:text-blue-600">
              About
            </a>
            <a href="#projects" className="text-sm font-bold text-slate-900 hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="text-sm font-bold text-slate-900 hover:text-blue-600">
              Contact
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-slate-400 hover:text-blue-600 transition-colors"
              aria-label="Email"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
