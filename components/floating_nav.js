"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  Info,
  Rocket,
  BookOpen,
  Briefcase,
  Mail,
  X,
  Compass,
} from "lucide-react";

// --- Navigation Data ---
const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/projects", label: "Projects", icon: Rocket },
  { href: "/research", label: "Research", icon: BookOpen },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
];

// Helper to calculate icon/text positions on a quarter circle
const getRadialPosition = (index, total, radius) => {
  const R = radius;
  const startAngle = 90;
  const angleStep = 90 / (total - 1);
  const angleDeg = startAngle - index * angleStep;
  const angleRad = (angleDeg * Math.PI) / 180;

  return {
    x: Math.round(R * Math.cos(angleRad)),
    y: Math.round(-R * Math.sin(angleRad)),
  };
};

export default function FloatingSidebarNavigation({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const totalLinks = navLinks.length;
  const buttonSize = 44;
  const originOffset = 28;
  const R_icon = 90;
  const R_text = 135;

  return (
    <>
      {/* Floating Button Container */}
      <div className="fixed bottom-6 left-6 z-50">
        {navLinks.map((link, index) => {
          const Icon = link.icon;
          const { x: x_icon, y: y_icon } = getRadialPosition(index, totalLinks, R_icon);
          const { x: x_text, y: y_text } = getRadialPosition(index, totalLinks, R_text);

          return (
            <React.Fragment key={link.href}>
              {/* ICON LINK */}
              <Link
                href={link.href}
                onClick={() => {
                  setCurrentPage?.(link.href);
                  closeMenu();
                }}
                className={`absolute transition-all duration-300 ease-out 
                  w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg
                  ${currentPage === link.href ? "bg-indigo-700" : "bg-gray-800 hover:bg-indigo-600"}
                  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                style={{
                  transform: `translate(
                    ${isOpen ? x_icon + originOffset - buttonSize / 2 : originOffset - buttonSize / 2}px, 
                    ${isOpen ? y_icon + originOffset - buttonSize / 2 : originOffset - buttonSize / 2}px
                  )`,
                  zIndex: 49,
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
                title={link.label}
              >
                <Icon size={20} />
              </Link>

              {/* LABEL */}
              <span
                className={`absolute text-sm font-medium text-white px-2 py-1 rounded-full whitespace-nowrap 
                  bg-gray-900/70 shadow-lg transition-all duration-300 ease-out
                  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                style={{
                  transform: `translate(
                    ${isOpen ? x_text + originOffset - buttonSize / 2 : originOffset - buttonSize / 2}px, 
                    ${isOpen ? y_text + originOffset - buttonSize / 2 : originOffset - buttonSize / 2}px
                  )`,
                  zIndex: 49,
                  transitionDelay: isOpen ? `${index * 50 + 100}ms` : "0ms",
                }}
              >
                {link.label}
              </span>
            </React.Fragment>
          );
        })}

        {/* MAIN TOGGLE BUTTON */}
        <button
          onClick={toggleMenu}
          className="relative z-50 flex items-center justify-center 
                     w-14 h-14 rounded-full bg-indigo-600 text-white shadow-xl 
                     transition-all duration-300 hover:bg-indigo-700 transform 
                     hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={28} /> : <Compass size={28} />}
        </button>
      </div>

      {/* BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}
