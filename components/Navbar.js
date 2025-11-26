"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/chatbot", label: "Bot" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0C10]/90 backdrop-blur-xl shadow-lg shadow-black/20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group relative flex items-center gap-2 text-base font-bold tracking-tight transition-all duration-300 sm:text-lg lg:text-xl"
          onClick={closeMenu}
        >
          <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
            Hossain
          </span>
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">.dev</span>
          {/* Animated underline on hover */}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 text-xs font-medium sm:flex sm:gap-1 sm:text-sm lg:gap-2 lg:text-sm">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-2 py-1.5 transition-all duration-300 sm:px-2.5 sm:py-2 lg:px-4 lg:py-2 ${
                  active
                    ? "text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="relative z-50 flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 w-5 origin-center rounded-full bg-current transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 origin-center rounded-full bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 origin-center rounded-full bg-current transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 border-t border-white/10 bg-[#0B0C10]/98 px-4 py-4 backdrop-blur-xl">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/30"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
