import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/hosain-taufiq",
    icon: <FaGithub className="h-5 w-5" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/hossain-taufiq/",
    icon: <FaLinkedin className="h-5 w-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/",
    icon: <FaTwitter className="h-5 w-5" />,
    label: "Twitter",
  },
  {
    href: "mailto:hossain.taufiq@northsouth.edu",
    icon: <FaEnvelope className="h-5 w-5" />,
    label: "Email",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0B0C10] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 md:flex-row">
          {/* Logo / Branding */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-base sm:text-lg font-semibold tracking-tight text-white hover:text-emerald-400 transition"
            >
              Hosain.dev
            </Link>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/60">
              Building intelligent systems for the future.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/70 md:justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white px-1 py-0.5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-6 sm:my-8 border-t border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 md:gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-full bg-white/5 p-2 sm:p-2.5 md:p-3 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="text-sm sm:text-base md:text-lg">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-xs sm:text-sm text-white/50 md:text-right">
            © {currentYear} Hossain Taufiq Ahmmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
