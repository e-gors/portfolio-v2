import React from "react";

import FacebookRoundedIcon from "../assets/icons/FacebookRoundedIcon";
import GithubIcon from "../assets/icons/stacks/GithubIcon";
import LinkedInRoundedIcon from "../assets/icons/LinkedInRoundedIcon";
import DiscordRoundedIcon from "../assets/icons/DiscordRoundedIcon";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  name: string;
}

const socialMediaLinks: SocialLink[] = [
  { icon: GithubIcon, href: "https://github.com/e-gors", name: "GitHub" },
  { icon: LinkedInRoundedIcon, href: "https://www.linkedin.com/in/efren-goron-8b3ab4200/", name: "LinkedIn" },
  { icon: FacebookRoundedIcon, href: "https://www.facebook.com/efrentorrente.soritagoron", name: "Facebook" },
  { icon: DiscordRoundedIcon, href: "https://discord.com/users/1449034762374086826", name: "Discord" },
];

const ACCENT_COLOR = "text-indigo-400";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const developerName = "Efren Goron";

  return (
    <footer className="bg-gray-950/70 backdrop-blur-sm border-t border-gray-800 mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10">

          <div className="flex flex-col text-center md:text-left order-2 md:order-1">
            <span className={`text-xl font-bold tracking-tight text-accent ${ACCENT_COLOR}`}>
              {developerName}
            </span>
            <span className="text-sm text-gray-500 mt-1">
              © {currentYear} — All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-5 order-1 md:order-3">
            {socialMediaLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${link.name}`}
                  className="group"
                >
                  <IconComponent
                    width={28}
                    height={28}
                    className={`text-gray-500 hover:${ACCENT_COLOR} transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg`}
                  />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="py-4 border-t border-gray-800/50 text-center">
            <p className="text-xs text-gray-600">
                Designed & Built by {developerName} using React and Tailwind CSS.
            </p>
        </div>
      </div>
    </footer>
  );
}