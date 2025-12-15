import  { useState } from "react";
import Logo from "@logos/egoronweb-logo.png";
import CustomButton from "./CustomButton";
import { links } from "@constants/constants";
import type { LinkProps } from "@/types/types";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-section backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <nav className="mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#">
              <img src={Logo} alt="Logo" className="w-12" />
            </a>
          </div>

          {/* Desktop view */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((l: LinkProps) => (
              <a
                key={l.name}
                href={l.href}
                className="nav-link transition-colors duration-150"
              >
                {l.name}
              </a>
            ))}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <CustomButton variant="contained">Contact Me</CustomButton>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Burger icon */}
              <svg
                className={`${open ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${open ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${open ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((l: LinkProps) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:bg-white/5"
            >
              {l.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
