"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Mail, Send, Code, Sparkles, CheckCircle2, ArrowRight, Briefcase, MessageSquare } from "lucide-react";

// --- Inline SVG Paper Plane Icon ---
const PaperPlaneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    fill="currentColor"
  >
    <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 32.7 2.4 41.5l213.9 103.5c1.4.7 2.8 1.4 4.3 1.9c.7.2 1.5.5 2.2.7c26.9 8.9 57.6-5.8 67.2-31.4l123.6-328.3c1.9-4.3.9-9.6-2.8-12.7s-8.1-4.3-12.5-2.5L476 3.2zM277.5 428.6l103.5-213.9c8.9-18.1-5.8-57.6-31.4-67.2l-328.3-123.6c-4.3-1.9-9.6-.9-12.7 2.8s-4.3 8.1-2.5 12.5l264.4 264.4z" />
  </svg>
);

// --- Main Contact Client Component ---
export default function ContactClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hossain.taufiq@northsouth.edu",
      href: "mailto:hossain.taufiq@northsouth.edu",
      color: "cyan",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hossain-taufiq",
      href: "https://www.linkedin.com/in/hossain-taufiq/",
      color: "blue",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/hosain-taufiq",
      href: "https://github.com/hosain-taufiq",
      color: "gray",
    },
  ];

  const availability = {
    status: "Available for new projects",
    responseTime: "Usually within 24 hours",
    location: "Dhaka, Bangladesh",
  };

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-12 sm:pb-16">
      {/* Header Section */}
      <div className="space-y-3 sm:space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
          <MessageSquare className="h-3.5 w-3.5 text-cyan-400 sm:h-4 sm:w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300 sm:text-xs">
            Let&apos;s Connect
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Get In Touch
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-white/70 sm:text-base md:text-lg px-4">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: Contact Form */}
        <div className="space-y-6 sm:space-y-8 rounded-xl sm:rounded-2xl border border-white/5 bg-black/30 p-5 sm:p-6 md:p-8 lg:p-10">
          <div className="space-y-1.5 sm:space-y-2">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Send a Message</h2>
            <p className="text-xs text-white/60 sm:text-sm">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {isSubmitted && (
            <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
              <p className="text-sm text-green-300">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Full Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Email Address <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project, goals, timeline, or any questions you have..."
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 resize-y focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <PaperPlaneIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Contact Information */}
        <div className="space-y-8">
          {/* Availability Status */}
          <div className="rounded-2xl border border-white/5 bg-black/30 p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm font-semibold text-green-400">
                {availability.status}
              </span>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <FaClock className="h-4 w-4 text-cyan-400" />
                <span>{availability.responseTime}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="h-4 w-4 text-cyan-400" />
                <span>{availability.location}</span>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact Methods</h3>
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10"
                >
                  <div className={`rounded-lg bg-cyan-500/10 p-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 text-cyan-400`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                      {contact.label}
                    </p>
                    <p className="text-sm font-semibold text-white truncate group-hover:text-cyan-300 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </a>
              );
            })}
          </div>

          {/* Why Work With Me */}
          <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Why Work With Me?</h3>
            </div>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>3+ years of professional development experience</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Full-stack expertise: MERN, Django, React Native</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>AI/ML research background in RAG & LLMs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Proven track record: 10+ projects delivered</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Startup founder with product-building experience</span>
              </li>
            </ul>
          </div>

          {/* Code Snippet Decoration */}
          <div className="rounded-lg border border-white/10 bg-[#0a0a0f] p-4 font-mono text-xs">
            <div className="mb-3 flex items-center gap-2">
              <Code className="h-3 w-3 text-cyan-400" />
              <span className="text-cyan-400">contact.js</span>
            </div>
            <div className="space-y-1 text-white/70">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">connect</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-400">async</span>{" "}
                <span className="text-white">()</span>{" "}
                <span className="text-white">=&gt;</span> {"{"}
              </div>
              <div className="pl-4">
                <span className="text-green-400">return</span>{" "}
                <span className="text-white">collaboration</span>
                <span className="text-white">;</span>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 sm:p-12 text-center">
        <Sparkles className="mx-auto h-12 w-12 text-cyan-400 mb-4" />
        <h2 className="text-2xl font-bold text-white mb-3 sm:text-3xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto max-w-2xl text-base text-white/70 mb-6 sm:text-lg">
          Whether you&apos;re looking to build a web application, mobile app, or integrate AI capabilities, 
          I&apos;m here to help bring your vision to life.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hossain.taufiq@northsouth.edu"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-600"
          >
            Schedule a Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}